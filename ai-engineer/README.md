# Dokumentasi Integrasi Model AI - Proyek AMATI

Dokumen ini disusun untuk memberikan panduan teknis mengenai integrasi model kecerdasan buatan (Artificial Intelligence) pada sistem AMATI.

## 1. Deskripsi Layanan
Modul ini berfungsi sebagai service untuk melakukan prediksi performa siswa berdasarkan data aktivitas pembelajaran yang diolah oleh model Machine Learning.

## 2. Spesifikasi API
* Endpoint: /api/predict-score
* Metode: POST
* Format Data: application/json

### Payload Request
Data yang dikirimkan harus memenuhi struktur berikut:

| Parameter | Tipe Data | Keterangan |
| :--- | :--- | :--- |
| current_level | integer | Level siswa saat ini |
| status_chapter | integer | Status bab yang sedang dipelajari |
| total_attempts | integer | Jumlah percobaan kuis |
| total_subchapters_done | integer | Jumlah sub-bab yang diselesaikan |
| total_subchapter | integer | Total keseluruhan sub-bab |

**Contoh Payload:**
{
  "current_level": 1,
  "status_chapter": 1,
  "total_attempts": 5,
  "total_subchapters_done": 3,
  "total_subchapter": 10
}

### Response API
Sistem akan mengembalikan nilai prediksi dalam format berikut:

* Respons Sukses:
{
  "status": "success",
  "prediksi_avg_score": 85.5
}

## 3. Persyaratan Teknis
Untuk menjalankan service AI ini secara lokal, diperlukan pustaka (libraries) sebagai berikut:

pip install fastapi uvicorn tensorflow scikit-learn joblib numpy

## 4. Menjalankan Layanan
Gunakan perintah berikut di dalam direktori ai-engineer untuk mengaktifkan server API:

uvicorn main:app --reload