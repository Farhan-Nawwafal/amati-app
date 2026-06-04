import json
import os
import requests
import time
from dotenv import load_dotenv

# 1. Load Environment Variables
load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

def format_materi_dengan_ai(judul, teks_kasar):
    prompt = f"""
    Kamu adalah editor buku pelajaran Matematika SMP kelas 7 yang ahli.
    Tugasmu adalah merapikan transkrip video YouTube berikut ini menjadi ringkasan materi belajar yang terstruktur, mudah dibaca, dan menarik untuk siswa SMP.
    
    Judul Materi: {judul}
    
    Transkrip Kasar (tanpa tanda baca):
    {teks_kasar}
    
    ATURAN FORMATTING (Gunakan Markdown):
    1. Berikan awalan paragraf pengantar singkat.
    2. Gunakan H2 (##) atau H3 (###) untuk membagi sub-topik (misal: "Penjumlahan", "Pengurangan").
    3. Jika ada contoh soal atau rumus matematika, tuliskan dengan jelas dan rapi (gunakan *bullet points* jika perlu).
    4. Perbaiki tata bahasa, tambahkan tanda baca yang sesuai, dan hilangkan kata-kata sapaan khas YouTuber.
    5. Fokus HANYA pada inti materi Matematika-nya saja.
    """
    
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"
    payload = {
        "contents": [{"parts": [{"text": prompt}]}]
    }
    headers = {'Content-Type': 'application/json'}
    
    try:
        response = requests.post(url, json=payload, headers=headers, timeout=60)
        if response.status_code == 200:
            data = response.json()
            return data['candidates'][0]['content']['parts'][0]['text'].strip()
        else:
            print(f"Gagal memproses '{judul}'. Status Code: {response.status_code}")
            return None
    except Exception as e:
        print(f"Error pada materi '{judul}': {e}")
        return None

def main():
    print("Membaca corpus_materi.json asli...")
    if not os.path.exists('corpus_materi.json'):
        print("Error: File corpus_materi.json tidak ditemukan!")
        return
        
    with open('corpus_materi.json', 'r', encoding='utf-8') as f:
        corpus_asli = json.load(f)
        
    # Load data yang sudah rapi jika file-nya sudah ada
    materi_baru = {}
    if os.path.exists('corpus_materi_rapi.json'):
        print("Menemukan corpus_materi_rapi.json, melanjutkan proses yang tertunda...")
        with open('corpus_materi_rapi.json', 'r', encoding='utf-8') as f:
            materi_baru = json.load(f)
    
    for chapter_id, data in corpus_asli.items():
        judul = data['judul']
        
        # Cek apakah materi ini sudah berhasil dirapikan sebelumnya
        if chapter_id in materi_baru and "materi_terstruktur" in materi_baru[chapter_id]:
            print(f"⏩ Melewati '{judul}' (Sudah rapi).")
            continue
            
        print(f"\n⚙️ Memproses Materi: {judul} ({chapter_id})...")
        teks_kasar = data['teks_transkrip']
        teks_rapi = format_materi_dengan_ai(judul, teks_kasar)
        
        if teks_rapi:
            materi_baru[chapter_id] = {
                "judul": judul,
                "url": data['url'],
                "materi_terstruktur": teks_rapi
            }
            print(f"Selesai merapikan materi '{judul}'.")
        else:
            print(f"Gagal merapikan '{judul}'. Menyimpan teks mentah sebagai cadangan.")
            materi_baru[chapter_id] = data
            
        # Simpan langsung setiap kali selesai 1 bab (agar jika error, data tidak hilang)
        with open('corpus_materi_rapi.json', 'w', encoding='utf-8') as f:
            json.dump(materi_baru, f, ensure_ascii=False, indent=4)
            
        # Jeda untuk menghindari Rate Limit
        print("Menunggu 10 detik agar tidak terkena limit API...")
        time.sleep(10)
        
    print("\nSelesai! Seluruh materi di corpus_materi_rapi.json sudah ter-update.")

if __name__ == "__main__":
    main()