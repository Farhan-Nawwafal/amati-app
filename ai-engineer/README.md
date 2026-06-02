# AI Service - AMATI Project

Repositori ini memuat layanan Kecerdasan Buatan (AI) dan Backend API untuk proyek **AMATI (Adaptive Learning Recommender System)**. Layanan ini dibangun menggunakan arsitektur *microservice* dengan **FastAPI** dan mengintegrasikan model *Deep Learning* (TensorFlow) serta Generative AI (Google Gemini 2.5 Flash).

## Fitur Utama
1. **Predictive Scoring (Deep Learning):** Model Neural Network (Multi-Layer Perceptron) untuk memprediksi nilai siswa berdasarkan histori pemahaman, progres belajar, dan jumlah percobaan (*attempts*).
2. **Heuristic Bounding & Scaling Logic:** Sistem verifikasi nilai yang menjamin prediksi skor AI selalu logis dan matematis sesuai dengan rasio penyelesaian sub-bab.
3. **AI Personalized Motivation:** Integrasi dengan Google Gemini API untuk menghasilkan pesan motivasi dan tutor dinamis yang disesuaikan dengan skor serta level pemahaman siswa secara *real-time*.
4. **Automated Data Pipeline:** Skrip cerdas berbasis LLM (`generate_materi.py`) untuk merapikan transkrip materi belajar mentah menjadi format *Markdown* terstruktur yang siap disajikan ke *Frontend*.

## Tech Stack
* **Framework:** FastAPI, Uvicorn
* **Machine Learning:** TensorFlow / Keras, Scikit-Learn, Numpy, Joblib
* **Generative AI:** Google Gemini API
* **Environment:** Python 3.9+

---

## Persyaratan Sistem & Instalasi

### 1. Setup Environment Variables
Buat sebuah file bernama `.env` di dalam root folder `ai-engineer` dan masukkan API Key Gemini Anda:
```env
GEMINI_API_KEY=masukkan_api_key_anda_disini
```

### 2. Install Dependensi
Pastikan Anda sudah menginstal Python, kemudian jalankan perintah berikut di terminal:
```bash
pip install -r requirements.txt
```

### 3. Jalankan Server Secara Lokal
```bash
uvicorn main:app --reload
```
* Server akan berjalan di: `http://127.0.0.1:8000`
* Dokumentasi API interaktif (Swagger UI) dapat diakses di: `http://127.0.0.1:8000/docs`

---

## Spesifikasi API (Endpoints)

### 1. Evaluasi & Prediksi Skor (Tutor AI)
Endpoint ini menerima data histori belajar siswa, memprediksi skor akhir, menentukan kategori pemahaman, dan memberikan motivasi belajar yang di-generate oleh AI.

* **URL:** `/api/predict-score`
* **Method:** `POST`
* **Content-Type:** `application/json`

**Contoh Payload Request:**
```json
{
  "current_level": 1,
  "status_chapter": 1,
  "total_attempts": 2,
  "total_subchapters_done": 1,
  "total_subchapter": 3
}
```

**Contoh Response Sukses:**
```json
{
  "status": "success",
  "prediksi_avg_score": 57.63,
  "analisis_siswa": {
    "kategori": "Pemahaman Menengah",
    "rekomendasi_materi": "Pelajari Variasi Soal Menengah Level 1 pada Slide 4-5.",
    "pesan_tutor_ai": "Keren banget progresmu! Tinggal sedikit lagi paham seutuhnya. Yuk, gas pelajari variasi soalnya!"
  }
}
```

### 2. Fetch Materi Belajar Terstruktur
Endpoint ini mengambil materi belajar spesifik dari corpus yang telah dirapikan ke dalam format Markdown, siap dirender oleh komponen UI Frontend.

* **URL:** `/api/materi/{chapter_id}`
* **Method:** `GET`

**Contoh Response Sukses (Untuk ID CT00002):**
```json
{
  "status": "success",
  "data": {
    "judul": "Bilangan Rasional",
    "url": "https://www.youtube.com/watch?v=NE2LrOhYgXs",
    "materi_terstruktur": "Selamat datang di ringkasan materi...\n\n## I. Pengertian Bilangan Rasional\nBilangan rasional adalah..."
  }
}
```