import json
import joblib
import numpy as np
import tensorflow as tf
import os
import requests
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# 1. Load Environment Variables
load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# 💡 PERBAIKAN 1: Tambahkan weak_topics untuk menerima daftar topik yang salah dari Node.js
class StudentDataInput(BaseModel):
    current_level: int
    status_chapter: int
    total_attempts: int
    total_subchapters_done: int
    total_subchapter: int
    weak_topics: str = "" # Contoh isian dari Node.js: "Aljabar, Perkalian Pecahan"

# 2. Load Model Deep Learning dan Scaler
try:
    model = tf.keras.models.load_model(os.path.join(BASE_DIR, "amati_model.keras"))
    scaler_X = joblib.load(os.path.join(BASE_DIR, "scaler_X.pkl"))
    scaler_y = joblib.load(os.path.join(BASE_DIR, "scaler_y.pkl"))
    print("[INFO] Model Deep Learning dan Scaler berhasil dimuat.")
except Exception as e:
    print(f"[ERROR] Gagal memuat model/scaler: {e}")


# 3. 💡 PERBAIKAN 2: Fungsi AI "All-in-One" Dinamis yang Menghasilkan JSON
def generate_dynamic_analysis(score: float, current_level: int, weak_topics: str):
    # Tentukan kategori dasar secara matematis
    if score < 50.0:
        kategori = "Pemahaman Dasar"
    elif 50.0 <= score < 80.0:
        kategori = "Pemahaman Menengah"
    else:
        kategori = "Pemahaman Lanjutan"

    try:
        # Prompt cerdas untuk memaksa Gemini meracik saran spesifik + JSON output
        prompt = f"""
        Kamu adalah tutor matematika AMATI yang asyik, suportif, dan pintar untuk anak SMP kelas 7.
        Siswa baru saja menyelesaikan evaluasi dengan prediksi skor akhir {score} dari 100 (Level saat ini: {current_level}).
        Kategori pemahaman: "{kategori}".
        
        Materi yang masih lemah atau dijawab salah oleh siswa: {weak_topics if weak_topics else "Tidak ada, pemahaman sudah sangat baik."}.

        Tugasmu:
        Berikan HANYA format JSON valid dengan struktur persis seperti di bawah ini, tanpa menggunakan blockquote ```json.
        {{
            "kategori": "{kategori}",
            "rekomendasi_materi": "Berikan 1-2 kalimat saran belajar spesifik yang MENYEBUTKAN topik lemah di atas agar siswa tahu apa yang harus diulas.",
            "pesan_tutor_ai": "Berikan 1-2 kalimat motivasi natural, kasual, ramah, dan menyemangati seolah sedang chat. Gunakan sapaan beragam seperti 'Wah!', 'Keren!', atau 'Tetap semangat!'"
        }}
        """
        
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"
        payload = {
            "contents": [{"parts": [{"text": prompt}]}]
        }
        headers = {'Content-Type': 'application/json'}
        
        # Tambahkan batas waktu 15 detik
        response = requests.post(url, json=payload, headers=headers, timeout=15)
        
        if response.status_code == 200:
            data = response.json()
            ai_text = data['candidates'][0]['content']['parts'][0]['text'].strip()
            
            # Pengaman ekstra: Bersihkan backticks markdown jika AI membandel
            if ai_text.startswith("```json"):
                ai_text = ai_text.replace("```json", "").replace("```", "").strip()
                
            # Ubah teks balasan AI menjadi objek Dictionary Python
            return json.loads(ai_text)
        else:
            print(f"\n[DEBUG GEMINI] Gagal Konek! Status Code: {response.status_code}")
            
    except Exception as e:
        print(f"Error Request API: {e}")

    # Fallback (Rencana Cadangan) jika API Gemini sedang down / timeout
    return {
        "kategori": kategori,
        "rekomendasi_materi": f"Fokus ulangi materi yang masih salah ya! Tetap semangat belajar di Level {current_level}.",
        "pesan_tutor_ai": "Jangan menyerah! Terus berlatih, kamu pasti bisa menguasai materi ini."
    }

# 4. API UTAMA PREDIKSI
@app.post("/api/predict-score")
def predict_score(data: StudentDataInput):
    try:
        # Jika siswa benar-benar belum memulai sama sekali
        if data.total_attempts == 0 and data.status_chapter == 0:
            saran_awal = {
                "kategori": "Belum Memulai",
                "rekomendasi_materi": f"Kamu belum memulai materi Level {data.current_level}. Yuk baca materi dari awal!",
                "pesan_tutor_ai": "Halo! Yuk mulai petualangan belajarmu. Jangan takut salah, kita belajar sama-sama ya!"
            }
            return {
                "status": "success",
                "prediksi_avg_score": 0.0,
                "analisis_siswa": saran_awal
            }
            
        # Susun input untuk Deep Learning
        input_data = np.array([[
            data.current_level,
            data.status_chapter,
            data.total_attempts,
            data.total_subchapters_done,
            data.total_subchapter
        ]])
        
        # Prediksi Deep Learning
        input_scaled = scaler_X.transform(input_data)
        prediksi_scaled = model.predict(input_scaled, verbose=0)
        hasil_skor = scaler_y.inverse_transform(prediksi_scaled)
        
        skor_mentah_ai = float(hasil_skor[0][0])
        
        skor_final = skor_mentah_ai
        
        print("\n=== DEBUG AI ===")
        print(f"1. Input Asli     : {input_data}")
        print(f"2. Input Scaled   : {input_scaled}")
        print(f"3. Skor Mentah AI : {skor_mentah_ai}")
        print("================\n")
        
        # Hitung persentase progres penyelesaian materi
        if data.total_subchapter > 0:
            rasio_progres = data.total_subchapters_done / data.total_subchapter
        else:
            rasio_progres = 0.0
        
        # Pastikan nilai di rentang batas wajar (0 - 100)
        skor_final = max(0.0, min(100.0, skor_final))
        skor_final_bulat = round(skor_final, 2)
        
        # 💡 PERBAIKAN 3: Panggil fungsi Gemini yang sudah cerdas!
        analisis_ai_dinamis = generate_dynamic_analysis(skor_final_bulat, data.current_level, data.weak_topics)
        
        return {
            "status": "success",
            "prediksi_avg_score": skor_final_bulat,
            "analisis_siswa": analisis_ai_dinamis
        }
    except Exception as e:
        return {
            "status": "error",
            "pesan": f"Terjadi kesalahan internal: {str(e)}"
        }
    
# 5. API UNTUK MENGAMBIL MATERI BELAJAR (DINAMIS dengan Gemini Fallback)
def generate_materi_with_gemini(chapter_name: str):
    try:
        url_search = chapter_name.replace(" ", "+")
        prompt = f"""
        Kamu adalah tutor matematika AMATI untuk siswa SMP kelas 7 kurikulum Merdeka Indonesia.
        Cari informasi dari web, lalu buatkan materi belajar untuk topik: "{chapter_name}".
        
        PENTING: Batasi materi_terstruktur maksimal 800 kata. Jangan melebihi batas ini.
        
        Berikan HANYA format JSON valid seperti di bawah ini, tanpa blockquote ```json.
        {{
            "judul": "{chapter_name}",
            "url": "https://www.google.com/search?q=materi+{url_search}+matematika+SMP+kelas+7",
            "materi_terstruktur": "Isi materi dalam format Markdown, Maksimal 400 kata. Sertakan: definisi singkat, konsep utama, dan 1-2 contoh soal dengan pembahasan."
        }}
        """

        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"
        payload = {
            "contents": [{"parts": [{"text": prompt}]}],
            "tools": [{"google_search": {}}],
            "generationConfig": {
                "temperature": 0.7,
                "maxOutputTokens": 2048,  # Turunkan dari 8192
            }
        }
        headers = {"Content-Type": "application/json"}

        response = requests.post(url, json=payload, headers=headers, timeout=60)
        print(f"[DEBUG] Gemini status code: {response.status_code}")

        if response.status_code == 200:
            data = response.json()
            ai_text = data["candidates"][0]["content"]["parts"][0]["text"].strip()
            print(f"[DEBUG] Raw Gemini response:\n{ai_text[:500]}")

            if "```json" in ai_text:
                ai_text = ai_text.split("```json")[1].split("```")[0].strip()
            elif "```" in ai_text:
                ai_text = ai_text.split("```")[1].split("```")[0].strip()

            # ✅ Validasi JSON tidak terpotong sebelum di-parse
            if not ai_text.endswith("}"):
                print(f"[WARN] JSON kemungkinan terpotong, mencoba perbaikan...")
                ai_text = ai_text[:ai_text.rfind('"materi_terstruktur"')]
                # Tutup JSON secara paksa
                last_complete = ai_text.rfind('",')
                if last_complete != -1:
                    ai_text = ai_text[:last_complete+1] + "\n}}"

            result = json.loads(ai_text)
            print(f"[INFO] Materi '{chapter_name}' berhasil di-generate dari Gemini Search.")
            return result

        else:
            print(f"[DEBUG GEMINI] Gagal! Status: {response.status_code}, Body: {response.text[:300]}")
            return None

    except json.JSONDecodeError as e:
        print(f"[ERROR] JSON parse gagal: {e}")
        print(f"[ERROR] Teks yang gagal di-parse: {ai_text[:300]}")
        return None
    except Exception as e:
        print(f"[ERROR generate_materi_with_gemini]: {e}")
        return None

@app.get("/api/materi/{chapter_id}")
def get_materi(chapter_id: str, chapter_name: str = ""):
    try:
        file_path = os.path.join(BASE_DIR, "corpus_materi_rapi.json")

        # Coba ambil dari JSON statis dulu (lebih cepat & hemat token)
        if os.path.exists(file_path):
            with open(file_path, "r", encoding="utf-8") as f:
                corpus = json.load(f)

            if chapter_id in corpus:
                print(f"[INFO] Materi '{chapter_id}' ditemukan di corpus statis.")
                return {"status": "success", "source": "static", "data": corpus[chapter_id]}

        # Kalau tidak ada, generate pakai Gemini menggunakan chapter_name
        judul = chapter_name if chapter_name else chapter_id
        print(f"[INFO] Materi '{chapter_id}' tidak ada di corpus. Generate dengan Gemini untuk topik: '{judul}'")

        materi_dinamis = generate_materi_with_gemini(judul)

        if materi_dinamis:
            # Cache hasil ke JSON supaya request berikutnya langsung ambil dari file
            if os.path.exists(file_path):
                with open(file_path, "r", encoding="utf-8") as f:
                    corpus = json.load(f)
            else:
                corpus = {}

            corpus[chapter_id] = materi_dinamis

            with open(file_path, "w", encoding="utf-8") as f:
                json.dump(corpus, f, ensure_ascii=False, indent=4)

            print(f"[INFO] Materi '{judul}' di-cache ke corpus dengan key '{chapter_id}'.")
            return {"status": "success", "source": "ai_generated", "data": materi_dinamis}

        return {
            "status": "error",
            "pesan": f"Materi untuk topik '{judul}' tidak dapat dibuat saat ini.",
        }

    except Exception as e:
        return {"status": "error", "pesan": f"Terjadi kesalahan server: {str(e)}"}