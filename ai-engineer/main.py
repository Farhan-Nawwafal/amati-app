import joblib
import numpy as np
import tensorflow as tf
import os
import requests
from dotenv import load_dotenv
from fastapi import FastAPI
from pydantic import BaseModel

# 1. Load Environment Variables
load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

app = FastAPI()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class StudentDataInput(BaseModel):
    current_level: int
    status_chapter: int
    total_attempts: int
    total_subchapters_done: int
    total_subchapter: int

# 2. Load Model Deep Learning dan Scaler
model = tf.keras.models.load_model(os.path.join(BASE_DIR, "amati_model.keras"))
scaler_X = joblib.load(os.path.join(BASE_DIR, "scaler_X.pkl"))
scaler_y = joblib.load(os.path.join(BASE_DIR, "scaler_y.pkl"))

# 3. Logika Rekomendasi Utama
def get_recommendation(score: float, current_level: int):
    if score < 50.0:
        return {
            "kategori": "Pemahaman Dasar",
            "rekomendasi_materi": f"Baca Ringkasan Materi Dasar Level {current_level} pada Slide 1-3."
        }
    elif 50.0 <= score < 80.0:
        return {
            "kategori": "Pemahaman Menengah",
            "rekomendasi_materi": f"Pelajari Variasi Soal Menengah Level {current_level} pada Slide 4-5."
        }
    else:
        if current_level >= 2:
            return {
                "kategori": "Pemahaman Lanjutan",
                "rekomendasi_materi": "Kamu sudah menguasai materi ini! Pertahankan prestasimu."
            }
        else:
            return {
                "kategori": "Pemahaman Lanjutan",
                "rekomendasi_materi": f"Bagus sekali! Mari naik level dan pelajari Materi Level {current_level + 1}."
            }

# 4. Fungsi Generative AI
def generate_motivation(score: float, category: str):
    try:
        prompt = f"""
        Kamu adalah tutor matematika yang ramah, asyik, dan memotivasi untuk anak SMP kelas 7. 
        Siswa ini baru saja menyelesaikan evaluasi dan diprediksi mendapat skor {score} dari 100.
        Status pemahamannya masuk dalam kategori: "{category}".
        
        Buatkan 1-2 kalimat motivasi yang singkat, natural, dan menyemangati mereka untuk terus belajar. 
        Jangan menggunakan format poin-poin.
        """
        
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"
        payload = {
            "contents": [{"parts": [{"text": prompt}]}]
        }
        headers = {'Content-Type': 'application/json'}
        
        response = requests.post(url, json=payload, headers=headers, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            return data['candidates'][0]['content']['parts'][0]['text'].strip()
        else:
            print(f"\n[DEBUG GEMINI] Gagal Konek! Status Code: {response.status_code}")
            print(f"[DEBUG GEMINI] Alasan dari Google: {response.text}\n")
            return "Tetap semangat belajarnya ya! Kamu pasti bisa menguasai materi ini."
            
    except Exception as e:
        print(f"Error Request API: {e}")
        return "Tetap semangat belajarnya ya! Kamu pasti bisa menguasai materi ini."

# 5. API UTAMA
@app.post("/api/predict-score")
def predict_score(data: StudentDataInput):
    try:
        # Susun input
        input_data = np.array([[
            data.current_level,
            data.status_chapter,
            data.total_attempts,
            data.total_subchapters_done,
            data.total_subchapter
        ]])
        
        # Prediksi Deep Learning
        input_scaled = scaler_X.transform(input_data)
        prediksi_scaled = model.predict(input_scaled)
        hasil_skor = scaler_y.inverse_transform(prediksi_scaled)
        
        # Clamping
        skor_final = float(hasil_skor[0][0])
        skor_final = max(0.0, min(100.0, skor_final))
        skor_final_bulat = round(skor_final, 2)
        
        # Saran Sistem
        saran = get_recommendation(skor_final_bulat, data.current_level)
        
        # Pesan Motivasi Dinamis
        pesan_motivasi = generate_motivation(skor_final_bulat, saran["kategori"])
        saran["pesan_tutor_ai"] = pesan_motivasi
        
        return {
            "status": "success",
            "prediksi_avg_score": skor_final_bulat,
            "analisis_siswa": saran
        }
    except Exception as e:
        return {
            "status": "error",
            "pesan": f"Terjadi kesalahan internal: {str(e)}"
        }