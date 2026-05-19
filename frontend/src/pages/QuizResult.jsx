// src/pages/QuizResult.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizResult = () => {
  const navigate = useNavigate();

  // Simulasi data skor sesuai dengan yang ada di gambar screenshot Anda (29 dari 30 Soal Benar)
  const scoreData = {
    correct: 29,
    total: 30,
    studentName: 'Anna'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#f4f6f9', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      
      {/* ================= HEADER TOP BAR ================= */}
      <header style={{ backgroundColor: '#fff', padding: '15px 40px', display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '1px solid #e0e0e0' }}>
        <button 
          onClick={() => navigate('/quiz')} 
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <span style={{ fontWeight: '700', fontSize: '1.1rem', color: '#002d72' }}>
          Chapter 1 - Bilangan Bulat
        </span>
      </header>

      {/* ================= AREA UTAMA SELEBRASI SKOR ================= */}
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', backgroundColor: '#fff' }}>
        
        {/* LINGKARAN SKOR UTAMA (BIRU BERLAPIS SESUAI DESAIN) */}
        <div style={{ 
          width: '200px', height: '200px', borderRadius: '50%', 
          backgroundColor: '#1d4ed8', border: '12px solid #93c5fd',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          color: '#fff', boxShadow: '0 10px 25px rgba(29, 78, 216, 0.2)',
          marginBottom: '30px'
        }}>
          <span style={{ fontSize: '1.1rem', opacity: 0.9, fontWeight: '500' }}>Your Score</span>
          <span style={{ fontSize: '2.8rem', fontWeight: '800', marginTop: '4px' }}>
            {scoreData.correct}/{scoreData.total}
          </span>
        </div>

        {/* PESAN APRESIASI / CONGRATULATIONS */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ margin: 0, color: '#1d4ed8', fontSize: '2.2rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
            Congratulation
          </h1>
          <p style={{ margin: '10px 0 0 0', color: '#4b5563', fontSize: '1.1rem', fontWeight: '600' }}>
            Great job, {scoreData.studentName} You Did It
          </p>
        </div>

        {/* WADAH TOMBOL AKSI BAWAH */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '380px' }}>
          
          {/* Tombol Share */}
          <button 
            onClick={() => alert('Fitur berbagi sertifikat/skor ke media sosial sedang disiapkan!')}
            style={{ 
              width: '100%', padding: '14px', backgroundColor: '#1d4ed8', color: '#fff', 
              border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: '700', 
              cursor: 'pointer', transition: 'background-color 0.2s' 
            }}
          >
            Share
          </button>

          {/* Tombol Pulang Kembali ke Dashboard */}
          <button 
            onClick={() => navigate('/dashboard')}
            style={{ 
              width: '100%', padding: '14px', backgroundColor: '#1d4ed8', color: '#fff', 
              border: 'none', borderRadius: '10px', fontSize: '1rem', fontWeight: '700', 
              cursor: 'pointer', transition: 'background-color 0.2s' 
            }}
          >
            Back to Home
          </button>

        </div>

      </div>

    </div>
  );
};

export default QuizResult;