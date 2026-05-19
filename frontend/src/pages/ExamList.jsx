// src/pages/ExamList.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

const ExamList = () => {
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Mock data ujian sesuai dengan gambar desain Anda
  const examData = [
    {
      id: 'ex1',
      chapterTitle: 'Exam Chapter 1',
      subChapterTitle: 'Sub chap 1 - Memahami Bilangan Bulat',
      dueDate: 'jan 15, 2026',
      points: 100,
    }
  ];

  return (
    <div style={{ display: 'flex', backgroundColor: '#f4f6f9', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      
      {/* ================= SIDEBAR TUNGGAL (KIRI) ================= */}
      {/* Kita panggil menu Exam sebagai menu yang aktif menyala biru */}
      <Sidebar activeMenu="Exam" />

      {/* ================= MAIN CONTENT (KANAN) ================= */}
      <main style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
        
        {/* HEADER TOP BAR */}
        <Topbar />

        {/* AREA UTAMA DAFTAR EXAM */}
        <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px', overflowY: 'auto', flex: '1' }}>
          <div>
            <h1 style={{ margin: 0, color: '#002d72', fontSize: '1.8rem', fontWeight: '700' }}>Examination</h1>
            <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '0.95rem' }}>View and start your exam</p>
          </div>

          {/* LIST KARTU UJIAN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {examData.map((exam) => (
              <div 
                key={exam.id}
                style={{ 
                  backgroundColor: '#fff', borderRadius: '20px', padding: '30px 40px', 
                  boxShadow: '0 8px 25px rgba(0,0,0,0.02)', border: '1px solid #f0f0f0',
                  display: 'flex', flexDirection: 'column', gap: '20px'
                }}
              >
                {/* Detail Informasi Ujian */}
                <div>
                  <h3 style={{ margin: 0, color: '#002d72', fontSize: '1.15rem', fontWeight: '700' }}>{exam.chapterTitle}</h3>
                  <p style={{ margin: '4px 0 0 0', color: '#aaa', fontSize: '0.9rem' }}>{exam.subChapterTitle}</p>
                </div>

                <hr style={{ border: 'none', height: '1px', backgroundColor: '#f5f5f5', margin: 0 }} />

                {/* Metadata & Tombol Aksi */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                  
                  <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    {/* Batas Waktu */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', fontSize: '0.9rem' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>Due : {exam.dueDate}</span>
                    </div>

                    {/* Poin Maksimal */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', fontSize: '0.9rem' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                      </svg>
                      <span>{exam.points} points</span>
                    </div>
                  </div>

                  {/* Tombol Submit Exam */}
                <div>
                <button 
                    onClick={() => navigate('/exam/workspace')} // ✔️ UBAH DI SINI (Ganti alert menjadi fungsi navigate)
                    style={{ padding: '12px 35px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '0.9rem', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,123,255,0.15)' }}
                >
                    Submit Exam
                </button>
                </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

    </div>
  );
};

export default ExamList;