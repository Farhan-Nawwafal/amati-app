// src/pages/ExamWorkspace.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExamWorkspace = () => {
  const navigate = useNavigate();
  
  // State untuk melacak nomor soal yang sedang aktif dikerjakan siswa
  const [activeQuestion, setActiveQuestion] = useState(1);
  // State untuk melacak opsi jawaban yang dipilih siswa (A, B, C, D)
  const [selectedOption, setSelectedOption] = useState(null);

  // Simulasi total nomor soal (30 Soal, disesuaikan dengan halaman hasil skor 29/30)
  const totalQuestions = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f4f6f9', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      
      {/* ================= HEADER EXAM TOP BAR ================= */}
      <header style={{ backgroundColor: '#fff', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button onClick={() => navigate('/exam')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <span style={{ fontWeight: '700', fontSize: '1.1rem', color: '#002d72' }}>Examination Sheet</span>
        </div>
        
        {/* Timer Ujian (Dibuat menjadi 60 Menit) */}
        <div style={{ color: '#002d72', fontWeight: 'bold', fontSize: '1rem' }}>
          Time Remaining : <span style={{ color: '#ff3366' }}>60 : 00</span>
        </div>
      </header>

      {/* WADAH UTAMA KONTEN UJIAN */}
      <div style={{ display: 'flex', flex: '1', overflow: 'hidden' }}>
        
        {/* ================= PANEL KIRI: GRID NAVIGASI NOMOR SOAL ================= */}
        <aside style={{ width: '280px', backgroundColor: '#fff', borderRight: '1px solid #e0e0e0', padding: '30px 20px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto' }}>
          <h3 style={{ margin: 0, color: '#002d72', fontSize: '1rem', fontWeight: '700', borderBottom: '2px solid #f0f0f0', paddingBottom: '15px' }}>
            Exam Chapter 1
          </h3>

          {/* Grid Angka Nomor Soal */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', marginTop: '10px' }}>
            {totalQuestions.map((num) => (
              <button
                key={num}
                onClick={() => { setActiveQuestion(num); setSelectedOption(null); }}
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
          </div>
        </aside>

        {/* ================= PANEL KANAN: AREA LEMBAR SOAL UJIAN ================= */}
        <div style={{ flex: '1', padding: '40px 5%', display: 'flex', flexDirection: 'column', gap: '25px', overflowY: 'auto' }}>
          
          <div>
            <span style={{ color: '#007bff', fontSize: '0.85rem', fontWeight: 'bold' }}>Evaluation Block 1</span>
            <h2 style={{ margin: '4px 0 0 0', color: '#002d72', fontSize: '1.25rem', fontWeight: '700' }}>A. Uji Kompetensi Bilangan Bulat</h2>
          </div>

          {/* LEMBAR KERTAS SOAL */}
          <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '45px', boxShadow: '0 8px 25px rgba(0,0,0,0.01)', border: '1px solid #f0f0f0', flex: '1', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <h2 style={{ margin: 0, color: '#002d72', fontSize: '1.5rem', fontWeight: '700' }}>
              Soal Nomor {activeQuestion}
            </h2>

            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '0.95rem' }}>
              Bilangan bulat terdiri dari bilangan bulat positif, bilangan nol, dan bilangan bulat negatif. Perhatikan susunan pada garis bilangan matematika. Jika posisi awal berada di titik 2 kemudian bergerak ke arah kiri sebanyak 5 langkah, di manakah posisi titik akhir berada?
            </p>

            {/* GRAFIK GARIS BILANGAN */}
            <div style={{ margin: '20px 0', textAlign: 'center', padding: '25px 20px', border: '1px solid #e0e0e0', borderRadius: '15px', backgroundColor: '#fafafa' }}>
              <div style={{ position: 'relative', width: '85%', height: '2px', backgroundColor: '#333', margin: '30px auto', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ position: 'absolute', left: '-5px', top: '-6px', transform: 'rotate(135deg)', width: '8px', height: '8px', borderTop: '2px solid #333', borderRight: '2px solid #333' }}></span>
                {[-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={num} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '2px', height: '8px', backgroundColor: '#333', marginTop: '-3px' }}></div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 'bold', marginTop: '6px', color: num === 0 ? '#ff3366' : '#333' }}>{num}</span>
                  </div>
                ))}
                <span style={{ position: 'absolute', right: '-5px', top: '-6px', transform: 'rotate(45deg)', width: '8px', height: '8px', borderTop: '2px solid #333', borderRight: '2px solid #333' }}></span>
              </div>
              <p style={{ fontSize: '0.75rem', color: '#2ec4b6', margin: '15px 0 0 0', fontWeight: 'bold' }}>Gambar 1.7 Ilustrasi Koordinat Garis Bilangan</p>
            </div>

            {/* OPSI PILIHAN GANDA HORIZONTAL */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px', marginTop: 'auto', flexWrap: 'wrap' }}>
              {['A', 'B', 'C', 'D'].map((option) => (
                <div 
                  key={option}
                  onClick={() => setSelectedOption(option)}
                  style={{ 
                    display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer',
                    padding: '12px 20px', borderRadius: '12px', border: '1px solid #eee',
                    backgroundColor: selectedOption === option ? '#e3f2fd' : 'transparent',
                    borderColor: selectedOption === option ? '#007bff' : '#eee',
                    transition: 'all 0.2s', flex: '1', minWidth: '150px'
                  }}
                >
                  <div style={{
                    width: '20px', height: '20px', borderRadius: '50%', border: '2px solid',
                    borderColor: selectedOption === option ? '#007bff' : '#ccc',
                    backgroundColor: selectedOption === option ? '#007bff' : 'transparent',
                    transition: 'all 0.2s'
                  }}></div>
                  <span style={{ color: '#333', fontSize: '0.95rem', fontWeight: '500' }}>Jawaban Pilihan {option}</span>
                </div>
              ))}
            </div>

          </div>

          {/* NAVIGASI TOMBOL BAWAH */}
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
                if (activeQuestion === 30) {
                  navigate('/exam/result');
                } else {
                  setActiveQuestion(activeQuestion + 1);
                  setSelectedOption(null);
                }
              }}
              style={{ padding: '12px 45px', backgroundColor: '#002d72', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              {activeQuestion === 30 ? 'Finish Exam' : 'Next'}
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ExamWorkspace;