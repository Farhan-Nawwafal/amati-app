import pandas as pd
import numpy as np

# KONFIGURASI SIMULASI
NUM_STUDENTS = 5000

# Mapping Chapter ID ke Nama Bab dan Total Subchapter sesuai kurikulum
CHAPTER_MAP = {
    "CT00001": {"name": "Bilangan Bulat", "total_subchapter": 3},
    "CT00002": {"name": "Bilangan Rasional", "total_subchapter": 3},
    "CT00003": {"name": "Rasio", "total_subchapter": 3},
    "CT00004": {"name": "Bentuk Aljabar", "total_subchapter": 3},
    "CT00005": {"name": "Kesebangunan", "total_subchapter": 3},
    "CT00006": {"name": "Data dan Diagram", "total_subchapter": 6}
}

LEVELS = ["beginner", "intermediate", "advanced"]
STATUSES = ["not started", "in-progress", "done"]

def generate_monte_carlo_dataset():
    print("=== GENERATOR DATASET AMATI (MONTE CARLO ENGINE) ===")
    print(f"[*] Memulai simulasi untuk {NUM_STUDENTS} baris data aktivitas belajar...")
    
    # Set seed agar distribusi tetap konsisten setiap kali di-run
    np.random.seed(42) 

    # 1. Generate user_id unik secara acak
    user_ids = [f"S{str(np.random.randint(1, 9999)).zfill(4)}" for _ in range(NUM_STUDENTS)]
    
    # 2. Pemilihan Chapter secara acak
    chapter_ids = np.random.choice(list(CHAPTER_MAP.keys()), NUM_STUDENTS)
    names = [CHAPTER_MAP[cid]["name"] for cid in chapter_ids]
    total_subchapters = [CHAPTER_MAP[cid]["total_subchapter"] for cid in chapter_ids]

    # 3. Penentuan Level Siswa
    current_levels = np.random.choice(LEVELS, NUM_STUDENTS, p=[0.3, 0.5, 0.2])

    # 4. Penentuan Status Pembelajaran (Mayoritas in-progress atau done)
    status_chapters = np.random.choice(STATUSES, NUM_STUDENTS, p=[0.2, 0.4, 0.4])

    # 5. Simulasi Monte Carlo: avg_score, total_attempts, dan total_subchapters_done
    avg_scores = []
    total_attempts_list = []
    total_subchapters_done_list = []

    for i in range(NUM_STUDENTS):
        status = status_chapters[i]
        t_sub = total_subchapters[i]
        
        if status == "not started":
            avg_scores.append(0.0)
            total_attempts_list.append(0.0)
            total_subchapters_done_list.append(0.0)
            
        elif status == "in-progress":
            # Semakin banyak attempt di in-progress, nilainya cenderung rendah
            attempts = float(np.random.randint(1, 5))
            total_attempts_list.append(attempts)
            
            # Base score 65, dikurangi 5 poin setiap nambah attempt
            base_score = np.random.normal(loc=65, scale=5)
            score = base_score - (attempts * 5) 
            avg_scores.append(round(np.clip(score, 10, 85), 2))
            
            done = np.random.randint(0, t_sub)
            total_subchapters_done_list.append(float(done))
            
        else: # status == 'done'
            attempts = float(np.random.randint(1, 6))
            total_attempts_list.append(attempts)
            
            # Logika Benar: 1 Attempt = Nilai Sempurna, >3 Attempt = Nilai Pas-pasan
            if attempts == 1:
                score = np.random.normal(loc=95, scale=3)
            elif attempts == 2:
                score = np.random.normal(loc=88, scale=4)
            elif attempts == 3:
                score = np.random.normal(loc=80, scale=4)
            else:
                score = np.random.normal(loc=72, scale=3)
                
            avg_scores.append(round(np.clip(score, 60, 100), 2))
            total_subchapters_done_list.append(float(t_sub))

    # 6. Menyusun hasil simulasi ke dalam format DataFrame persis seperti master data
    df = pd.DataFrame({
        "user_id": user_ids,
        "chapter_id": chapter_ids,
        "name": names,
        "current_level": current_levels,
        "status_chapter": status_chapters,
        "avg_score": avg_scores,
        "total_attempts": total_attempts_list,
        "total_subchapters_done": total_subchapters_done_list,
        "total_subchapter": total_subchapters
    })

    # 7. Menyimpan ke CSV
    file_name = "dataset_amati.csv"
    df.to_csv(file_name, index=False)
    
    print("[+] SUKSES: Data sintesis dengan skema kolom yang selaras telah dibuat.")
    print(f"[+] File tersimpan sebagai: {file_name}")
    print("\n--- PREVIEW 5 DATA PERTAMA ---")
    print(df.head())

if __name__ == "__main__":
    generate_monte_carlo_dataset()