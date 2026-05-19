// src/pages/QuizWorkspace.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizWorkspace = () => {
  const navigate = useNavigate();
  
  // State untuk melacak nomor soal yang sedang aktif dikerjakan siswa
  const [activeQuestion, setActiveQuestion] = useState(1);
  // State untuk melacak opsi jawaban yang dipilih siswa (A, B, C, D)
  const [selectedOption, setSelectedOption] = useState(null);

  // Simulasi total nomor soal (20 Soal, grid 5x4 sesuai screenshot Anda)
  const totalQuestions = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f4f6f9', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      
      {/* ================= HEADER KUIS TOP BAR ================= */}
      <header style={{ backgroundColor: '#fff', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button onClick={() => navigate('/quiz')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <span style={{ fontWeight: '700', fontSize: '1.1rem', color: '#002d72' }}>Quiz</span>
        </div>
        
        {/* Fitur Hitung Mundur Waktu (Timer) */}
        <div style={{ color: '#002d72', fontWeight: 'bold', fontSize: '1rem' }}>
          Time : <span style={{ color: '#ff3366' }}>15 : 00</span>
        </div>
      </header>

      {/* WADAH UTAMA KONTEN KUIS */}
      <div style={{ display: 'flex', flex: '1', overflow: 'hidden' }}>
        
        {/* ================= PANEL KIRI: GRID NAVIGASI NOMOR SOAL ================= */}
        <aside style={{ width: '250px', backgroundColor: '#fff', borderRight: '1px solid #e0e0e0', padding: '30px 20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ margin: 0, color: '#002d72', fontSize: '1rem', fontWeight: '700', borderBottom: '2px solid #f0f0f0', paddingBottom: '15px' }}>
            Chapter 1 - Bilangan Bulat
          </h3>

          {/* Grid Angka Nomor Soal */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', marginTop: '10px' }}>
            {totalQuestions.map((num) => (
              <button
                key={num}
                onClick={() => setActiveQuestion(num)}
                style={{
                  height: '40px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: activeQuestion === num ? '#007bff' : '#dcdcdc',
                  color: activeQuestion === num ? '#fff' : '#777',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {num}
              </button>
            ))}
            {/* Tombol N (Next/Ragu) di ujung kanan bawah grid */}
            <button style={{ height: '40px', borderRadius: '8px', border: 'none', backgroundColor: '#dcdcdc', color: '#777', fontWeight: '600', fontSize: '0.9rem', cursor: 'pointer' }}>
              N
            </button>
          </div>
        </aside>

        {/* ================= PANEL KANAN: AREA LEMBAR SOAL MATEMATIKA ================= */}
        <div style={{ flex: '1', padding: '40px 5%', display: 'flex', flexDirection: 'column', gap: '25px', overflowY: 'auto' }}>
          
          {/* Indikator Sub-Bab Aktivitas */}
          <div>
            <span style={{ color: '#007bff', fontSize: '0.85rem', fontWeight: 'bold' }}>Sub Chapter 1</span>
            <h2 style={{ margin: '4px 0 0 0', color: '#002d72', fontSize: '1.25rem', fontWeight: '700' }}>A. Memahami Bilangan Bulat</h2>
          </div>

          {/* LEMBAR KERTAS SOAL PUTIH UTAMA */}
          <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '45px', boxShadow: '0 8px 25px rgba(0,0,0,0.01)', border: '1px solid #f0f0f0', flex: '1', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <h2 style={{ margin: 0, color: '#002d72', fontSize: '1.5rem', fontWeight: '700' }}>
              {activeQuestion}. Pengertian Bilangan Bulat
            </h2>

            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '0.95rem' }}>
              Bilangan adalah suatu konsep matematika yang digunakan untuk merepresentasikan jumlah, ukuran, atau urutan suatu objek. Berdasarkan grafik di bawah ini, tentukan pernyataan pembagian posisi matematika yang paling valid:
            </p>

            {/* GRAFIK GARIS BILANGAN MATEMATIKA */}
            <div style={{ margin: '20px 0', textAlign: 'center', padding: '25px 20px', border: '1px solid #e0e0e0', borderRadius: '15px', backgroundColor: '#fafafa' }}>
              <div style={{ position: 'relative', width: '85%', height: '2px', backgroundColor: '#333', margin: '30px auto', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ position: 'absolute', left: '-5px', top: '-6px', transform: 'rotate(135deg)', width: '8px', height: '8px', borderTop: '2px solid #333', borderRight: '2px solid #333' }}></span>
                {[-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '100%', height: '8px', width: '2px', backgroundColor: '#333', marginTop: '-3px' }}></div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', marginTop: '6px', color: num === 0 ? '#ff3366' : '#333' }}>{num}</span>
                  </div>
                ))}
                <span style={{ position: 'absolute', right: '-5px', top: '-6px', transform: 'rotate(45deg)', width: '8px', height: '8px', borderTop: '2px solid #333', borderRight: '2px solid #333' }}></span>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#2ec4b6', margin: '15px 0 0 0', fontWeight: 'bold' }}>Gambar 1.7 Pembagian Bilangan Bulat</p>
            </div>

            {/* SELEKSI OPSI PILIHAN GANDA HORIZONTAL (Sesuai Desain Screenshot) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px', marginTop: 'auto', flexWrap: 'wrap' }}>
              {['A', 'B', 'C', 'D'].map((option, idx) => (
                <div 
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  style={{ 
                    display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer',
                    padding: '12px 20px', borderRadius: '12px', border: '1px solid #eee',
                    backgroundColor: selectedOption === option ? '#e3f2fd' : 'transparent',
                    transition: 'all 0.2s', flex: '1', minWidth: '150px'
                  }}
                >
                  <div style={{
                    width: '24px', height: '24px', borderRadius: '50%', 
                    backgroundColor: selectedOption === option ? '#007bff' : '#dcdcdc',
                    transition: 'all 0.2s'
                  }}></div>
                  <span style={{ color: '#555', fontSize: '0.95rem', fontWeight: '500' }}>5 + 5 = 10</span>
                </div>
              ))}
            </div>

          </div>

          {/* NAVIGASI BAWAH: PREVIOUS & NEXT SOAL */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '5px' }}>
            <button 
              disabled={activeQuestion === 1}
              onClick={() => { setActiveQuestion(activeQuestion - 1); setSelectedOption(null); }}
              style={{ padding: '12px 40px', backgroundColor: '#002d72', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: activeQuestion === 1 ? 'not-allowed' : 'pointer', opacity: activeQuestion === 1 ? 0.5 : 1 }}
            >
              Previous
            </button>
            <button 
              onClick={() => {
                if (activeQuestion === 20) {
                  // Jika sudah di nomor terakhir, arahkan ke Tampilan Ringkasan Nilai
                  navigate('/quiz/result');
                } else {
                  setActiveQuestion(activeQuestion + 1);
                  setSelectedOption(null);
                }
              }}
              style={{ padding: '12px 45px', backgroundColor: '#002d72', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              {activeQuestion === 20 ? 'Finish' : 'Next'}
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default QuizWorkspace;