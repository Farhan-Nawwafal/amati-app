// src/pages/ExamResult.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExamResult = () => {
  const navigate = useNavigate();

  // Data simulasi sesuai skor yang Anda inginkan (misal: 29 dari 30)
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
          onClick={() => navigate('/exam')} 
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <span style={{ fontWeight: '700', fontSize: '1.1rem', color: '#002d72' }}>
          Exam Chapter 1 - Result
        </span>
      </header>

      {/* ================= AREA SELEBRASI SKOR ================= */}
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', backgroundColor: '#fff' }}>
        
        {/* Lingkaran Skor Biru AMATI */}
        <div style={{ 
          width: '220px', height: '220px', borderRadius: '50%', 
          backgroundColor: '#007bff', border: '12px solid #e3f2fd',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          color: '#fff', boxShadow: '0 15px 35px rgba(0, 123, 255, 0.25)',
          marginBottom: '35px'
        }}>
          <span style={{ fontSize: '1.1rem', opacity: 0.9, fontWeight: '500' }}>Exam Score</span>
          <span style={{ fontSize: '3.2rem', fontWeight: '800', marginTop: '4px' }}>
            {scoreData.correct}/{scoreData.total}
          </span>
        </div>

        {/* Teks Congratulation */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <h1 style={{ margin: 0, color: '#007bff', fontSize: '2.4rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
            Congratulation
          </h1>
          <p style={{ margin: '12px 0 0 0', color: '#4b5563', fontSize: '1.2rem', fontWeight: '600' }}>
            Great job, {scoreData.studentName}! You have successfully completed the Exam.
          </p>
        </div>

        {/* Tombol Navigasi */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '400px' }}>
          <button 
            onClick={() => alert('Fitur Share Sertifikat akan segera hadir!')}
            style={{ width: '100%', padding: '15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '1.05rem', fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s' }}
          >
            Share My Success
          </button>
          <button 
            onClick={() => navigate('/dashboard')}
            style={{ width: '100%', padding: '15px', backgroundColor: '#002d72', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '1.05rem', fontWeight: '700', cursor: 'pointer', transition: 'all 0.2s' }}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamResult;