# 🚀 AMATI - Platform Adaptif Matematika

AMATI adalah sebuah platform pembelajaran matematika adaptif yang dirancang khusus untuk memetakan potensi dan mengakselerasi pemahaman konsep dasar siswa. Proyek ini dikembangkan sebagai bagian dari Capstone Project / Tugas Akhir.

## ✨ Fitur Utama (Frontend)

* **Autentikasi Pengguna**: Halaman *Sign In* dan *Sign Up* interaktif dengan desain *split-screen* modern dan responsif.
* **Manajemen Kata Sandi**: Alur pemulihan kata sandi (*Forgot Password*) 2 tahap menggunakan *modal pop-up* yang mulus tanpa memicu *reload* halaman.
* **Diagnostic Pre-Test**: Modul kuis awal berbatas waktu (15 menit) untuk mengukur tingkat pemahaman dasar siswa sebelum masuk ke materi utama.
* **Sistem Penilaian Otomatis**: Halaman hasil (*Result*) yang menampilkan skor akhir secara instan dan menentukan pesan kelulusan siswa.
* **Dashboard Pembelajaran Adaptif**: Ruang kerja (*Workspace*) yang dinamis, terstruktur berdasarkan bab dan sub-bab materi, lengkap dengan elemen pelacakan progres.

## 🛠️ Teknologi yang Digunakan

* **Core Library**: [React.js](https://react.dev/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Routing**: [React Router DOM](https://reactrouter.com/)
* **Styling**: Inline CSS & Flexbox/Grid (Efisien dan mudah disesuaikan)

## 📂 Struktur Direktori Utama

```text
src/
├── assets/                   # Gambar, ikon, dan logo platform
├── pages/
│   ├── Login.jsx             # Gerbang Sign In & Modal Forgot Password
│   ├── Register.jsx          # Gerbang Sign Up / Registrasi
│   ├── PreTestQuiz.jsx       # Modul Workspace Diagnostik Pre-Test
│   ├── PreTestQuizResult.jsx # Visualisasi Hasil Skor Pre-Test
│   ├── Dashboard.jsx         # Menu Utama Pembelajaran Siswa
│   ├── QuizWorkspace.jsx     # Ruang Kerja Kuis Latihan Materi
│   └── QuizResult.jsx        # Visualisasi Hasil Kuis Latihan
└── App.jsx                   # Konfigurasi Rute Aplikasi (Router)