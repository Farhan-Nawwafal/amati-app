# AMATI - Platform Adaptif Matematika VII 🚀

**AMATI** adalah aplikasi pembelajaran matematika adaptif yang dirancang khusus untuk siswa kelas VII. Aplikasi ini membantu siswa memahami konsep matematika melalui pendekatan kurikulum yang disesuaikan dengan kemampuan masing-masing pengguna secara *real-time*.

---

## 📌 Fitur Utama

*   **Adaptive Learning Dashboard**: Menyajikan rekomendasi materi berdasarkan kemampuan siswa.
*   **Placement Test (Pre-Test)**: Mengukur kemampuan awal siswa sebelum memulai pembelajaran untuk menentukan jalur kurikulum yang pas.
*   **Dynamic Settings & Profile**: Pengaturan profil mandiri siswa (Nama, Email, Tanggal Lahir) terintegrasi otomatis dengan database menggunakan inisial nama dinamis sebagai avatar.
*   **Quiz & Assessment Submit**: Evaluasi pembelajaran adaptif di setiap akhir sub-bab materi.

---

## 🛠️ Arsitektur & Teknologi

Proyek ini menggunakan struktur **Monorepo** yang memisahkan kode sumber menjadi dua bagian utama:

### 1. Frontend Architecture
*   **Framework**: React.js (Vite)
*   **State Management & Routing**: React Router DOM
*   **Styling**: Clean Inline Styles & Inter Fonts (Modern UI)

### 2. Backend Architecture
*   **Runtime Environment**: Node.js v18+
*   **Framework**: Express.js
*   **ORM**: Prisma Client
*   **Database**: MySQL / PostgreSQL (Terhubung melalui Prisma Schema)
*   **Security**: JSON Web Token (JWT) untuk proteksi rute API (`verifyToken`)

---

## 📂 Struktur Folder Proyek

```text
amati-app/
├── backend/                  # Source code server utama
│   ├── generated/prisma/     # Auto-generated files oleh Prisma ORM
│   ├── src/
│   │   ├── controllers/      # Logika penanganan request & response API
│   │   ├── middleware/       # Sistem keamanan JWT & Validasi data
│   │   ├── repositories/     # Akses langsung query database (Prisma)
│   │   ├── routes/           # Peta rute API Express
│   │   ├── services/         # Hubungan logika bisnis aplikasi
│   │   ├── app.js            # Inisialisasi Express & Middleware global
│   │   └── server.js         # Entry point untuk menjalankan server
│   └── package.json
│
├── frontend/                 # Source code interface aplikasi
│   ├── src/
│   │   ├── assets/           # Media gambar dan icon platform
│   │   ├── components/       # Komponen global (Sidebar, Navbar, dll.)
│   │   ├── pages/            # Halaman utama (Login, Dashboard, Settings)
│   │   └── services/         # Integrasi API fetch ke Backend
│   └── package.json
└── README.md