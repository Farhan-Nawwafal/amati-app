import joblib
import numpy as np
import tensorflow as tf
import os
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class StudentDataInput(BaseModel):
    current_level: int
    status_chapter: int
    total_attempts: int
    total_subchapters_done: int
    total_subchapter: int

model = tf.keras.models.load_model(os.path.join(BASE_DIR, "amati_model.keras"))
scaler_X = joblib.load(os.path.join(BASE_DIR, "scaler_X.pkl"))
scaler_y = joblib.load(os.path.join(BASE_DIR, "scaler_y.pkl"))

@app.post("/api/predict-score")
def predict_score(data: StudentDataInput):
    try:
        # Susun input ke dalam array 2D
        input_data = np.array([[
            data.current_level,
            data.status_chapter,
            data.total_attempts,
            data.total_subchapters_done,
            data.total_subchapter
        ]])
        
        # Scaling input
        input_scaled = scaler_X.transform(input_data)
        
        # Prediksi
        prediksi_scaled = model.predict(input_scaled)
        
        # Inverse scaling
        hasil_skor = scaler_y.inverse_transform(prediksi_scaled)
        
        # Clamping
        skor_final = float(hasil_skor[0][0])
        skor_final = max(0.0, min(100.0, skor_final))
        
        return {
            "status": "success",
            "prediksi_avg_score": round(skor_final, 2)
        }
    except Exception as e:
        return {
            "status": "error",
            "pesan": f"Terjadi kesalahan: {str(e)}"
        }