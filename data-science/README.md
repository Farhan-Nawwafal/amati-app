# 📊 Data Science Module - AMATI (Learning GPS)

Selamat datang di direktori **Data Science** untuk proyek Capstone CC26 (Aplikasi AMATI). Modul ini bertanggung jawab atas seluruh alur siklus hidup data: mulai dari rekayasa data sintetik, pembersihan data (*Data Wrangling*), *Exploratory Data Analysis* (EDA), hingga penyiapan fitur (*Feature Engineering*) untuk disuplai ke model Deep Learning (TensorFlow) milik tim AI.

## 📂 Struktur Direktori

```text
data-science/
├── dashboard/                              # Skrip dan aset untuk Dashboard Interaktif
│    └── dashboard.py                       # Skrip untuk membuat dashboard streamlit secara interaktif
├── data/                                   # Penyimpanan dataset lokal 
│   ├── assessments.csv                     # Data raw yang berisi list ujian yang akan ada
│   ├── chapters_taken.csv                  # Data raw yang berisi bab (chapter) yang diambil siswa
│   ├── chapters.csv                        # Data raw yang berisi list bab (chapter) yang tersedia
│   ├── subchapter.csv                      # Data raw yang berisi list sub-bab (subchapter) yang tersedia
│   ├── user_attempts.csv                   # Data raw yang berisi histori siswa mengerjakan ujian
│   ├── user_progress.csv                   # Data raw yang berisi histori siswa belajar untuk bab atau subbab
│   └── users.csv                           # Data raw yang berisi siswa yang menggunakan aplikasi
├── data_dictionary/                        # Folder penjelasan data untuk tim AI
│   └── Data Dictionary Tim CC26-PSU362.pdf # Pdf yang berisi penjelasan data yang akan digunakan tim AI    
├── eda_data/                               # Folder yang berisi file-file csv yang menjawab pertanyaan bisnis
│    ├── answer_q1.csv
│    ├── progress_chapters_join.csv
│    └── progress_chapters_join.csv  
├── master_data/                            # Folder yang berisi data yang final untuk tim AI
│    └── master_data_for_ai.csv             # File yang digunakan untuk tim AI
├── notebooks/                              # Jupyter Notebooks untuk eksperimen & analisis
│   ├── synthetic_data.ipynb                # Skrip pembuatan data dummy
│   ├── exploratory_data_analysis.ipynb     # Skrip melakukan eksplorasi data lebih mendalam
│   ├── data_wrangling.ipynb                # Skrip untuk mengumpulkan, menilai dan membersihkan data
│   └── data_visualization.ipynb            # Skrip untuk membuat visualisasi dari hasil analisis mendalam
├── requirements.txt                        # Daftar dependensi library Python
└── README.md                               # Dokumentasi modul Data Science (File ini)
```

## 🛠️ Tech Stack & Library
Proyek data science ini dibangun menggunakan ekosistem Python dengan pustaka dan modul utama berikut:

- Pandas & NumPy: Digunakan secara ekstensif untuk manipulasi DataFrames, agregasi, dan perhitungan numerik.

- Python Built-in (Random, Datetime, Timedelta): Modul krusial untuk Synthetic Data Generation, memanipulasi time-series, dan memastikan rentang waktu kuis masuk akal (Februari - April 2026).

- Matplotlib & Seaborn: Digunakan untuk visualisasi data pada tahap EDA.

- Scikit-Learn: Melakukan Scaling dan transformasi fitur numerik sebelum disalurkan ke model AI.

- Streamlit / Looker Studio: (Opsional) Visualisasi interaktif dashboard bisnis.

- Cara Install Setup:
Pastikan berada di direktori data-science, lalu jalankan perintah berikut di terminal:

```bash
pip install -r requirements.txt
```

- Cara jalankan streamlit:
```bash
cd data-science
cd dashboard
streamlit run dashboard.py
```

## 🚀 Alur Kerja (Workflow) Tim DS
1. Data Generation: Mensimulasikan historis pengguna dengan relasi database kompleks menggunakan skrip synthetic_data.ipynb.

2. Data Wrangling: Membersihkan format created_at/updated_at, mengekstrak email dari first/last name, dan menangani missing values.

3. Exploratory Data Analysis (EDA): Menjawab 5 metrik bisnis (SMART) untuk mengevaluasi fitur Adaptive Learning dan kurikulum.

4. Data Preparation for AI: Melakukan Encoding variabel kategorikal (seperti current_level -> 0, 1, 2) dan standarisasi nilai (scaling) agar siap dilahap oleh arsitektur model AI.

## 📈 Pertanyaan Bisnis (SMART Business Questions)
Analisis EDA kami berfokus pada 5 pertanyaan bisnis berikut untuk memvalidasi efektivitas kurikulum AMATI:

1. Pertanyaan 1: Bab (chapter) Matematika kelas 7 mana yang mencatatkan rata-rata skor (score) assessment terendah dari seluruh siswa selama tahun 2026?

2. Pertanyaan 2: Bagaimana persentase distribusi tingkat kompetensi siswa (beginner, intermediate, advanced) pada seluruh sub-bab secara kumulatif selama tahun 2026?

3. Pertanyaan 3: Bab (chapter) mana yang memiliki tingkat penyelesaian dengan status 'done' tertinggi dibandingkan dengan total bab yang diambil oleh siswa pada tahun 2026?

4. Pertanyaan 4: Tampilkan 5 sub-bab yang paling banyak membuat siswa stuck, memiliki status 'in-progress' dalam durasi yang lama selama tahun 2026?

5. Pertanyaan 5: Bagaimana perbandingan rata-rata skor siswa pada assessment bertipe 'placement' (tes diagnostik/awal) dibandingkan dengan rata-rata skor pada tipe 'exam' di setiap bab (chapter) selama tahun 2026?

## 📚 Data Dictionary (Catatan Integrasi untuk Tim AI)
Data akhir yang diproses dan diekspor ke tim AI telah terstandardisasi dengan aturan berikut:

- current_level: Sudah di-encode menjadi Categorical (Beginner=0, Intermediate=1, Advanced=2).

- score: Menggunakan rentang skala normal 0 - 100.

- Rekomendasi Arsitektur: Sangat disarankan bagi tim AI untuk menggunakan layer bawaan tf.keras.layers (seperti Normalization atau StringLookup) di dalam urutan model awal agar pipeline tetap solid dan siap di-deploy.

## Run steamlit app
```
streamlit run ./data-science/dashboard/dashboard.py
```