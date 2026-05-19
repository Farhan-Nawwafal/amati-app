// src/pages/Dashboard.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar'; // 1. Berhasil kita panggil di sini

const Dashboard = () => {
  // State dropdown profil sudah dihapus dari sini karena dipindahkan ke Topbar.jsx
  
  return (
    <div style={{ display: 'flex', backgroundColor: '#f4f6f9', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      
      {/* SIDEBAR COMPONENT */}
      <Sidebar activeMenu="Dashboard" />

      {/* ================= MAIN CONTENT (KANAN) ================= */}
      <main style={{ flex: '1', display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        
        {/* 2. REUSABLE TOP BAR (Menggantikan 50 baris kode header + dropdown lama) */}
        <Topbar />

        {/* KONTEN UTAMA DASHBOARD */}
        <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px', overflowY: 'auto', flex: '1' }}>
          
          {/* Welcome Text */}
          <div>
            <h1 style={{ margin: 0, color: '#002d72', fontSize: '2rem' }}>Welcome Back, Anna</h1>
            <p style={{ margin: '5px 0 0 0', color: '#666' }}>Take a look your learning progress for today</p>
          </div>

          {/* GRID TATA LETAK UTAMA */}
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
            
            {/* KOLOM KIRI (Metrik & Progress Bar) */}
            <div style={{ flex: '2', minWidth: '500px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
              
              {/* Box Chapters */}
              <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', color: '#333', fontWeight: '600' }}>Chapters</h3>
                <div style={{ display: 'flex', gap: '15px' }}>
                    
                  {/* Card Chapters Taken */}
                  <div style={{ flex: '1', padding: '20px 15px', borderRadius: '15px', border: '1px solid #f0f0f0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '8px' }}>
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <p style={{ margin: '5px 0', fontSize: '0.8rem', color: '#888' }}>Chapters Taken</p>
                    <h2 style={{ margin: 0, color: '#002d72', fontSize: '1.8rem', fontWeight: '700' }}>5</h2>
                    <p style={{ margin: '5px 0 0 0', fontSize: '0.7rem', color: '#bbb' }}>tuesday, may 14</p>
                  </div>

                  {/* Card Chapters In Progress */}
                  <div style={{ flex: '1', padding: '20px 15px', borderRadius: '15px', border: '1px solid #f0f0f0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '8px' }}>
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <p style={{ margin: '5px 0', fontSize: '0.8rem', color: '#888' }}>Chapters In Progress</p>
                    <h2 style={{ margin: 0, color: '#002d72', fontSize: '1.8rem', fontWeight: '700' }}>2</h2>
                    <p style={{ margin: '5px 0 0 0', fontSize: '0.7rem', color: '#bbb' }}>tuesday, may 14</p>
                  </div>

                  {/* Card Chapters Done */}
                  <div style={{ flex: '1', padding: '20px 15px', borderRadius: '15px', border: '1px solid #f0f0f0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '8px' }}>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <p style={{ margin: '5px 0', fontSize: '0.8rem', color: '#888' }}>Chapters Done</p>
                    <h2 style={{ margin: 0, color: '#002d72', fontSize: '1.8rem', fontWeight: '700' }}>1</h2>
                    <p style={{ margin: '5px 0 0 0', fontSize: '0.7rem', color: '#bbb' }}>tuesday, may 14</p>
                  </div>

                </div>
              </div>

              {/* Box Sub Chapters */}
              <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', color: '#333', fontWeight: '600' }}>Sub Chapters</h3>
                <div style={{ display: 'flex', gap: '15px' }}>
                    
                  {/* Sub Chapters Taken */}
                  <div style={{ flex: '1', padding: '20px 15px', borderRadius: '15px', border: '1px solid #f0f0f0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '8px' }}>
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <p style={{ margin: '5px 0', fontSize: '0.8rem', color: '#888' }}>Sub Chapters Taken</p>
                    <h2 style={{ margin: 0, color: '#002d72', fontSize: '1.8rem', fontWeight: '700' }}>10</h2>
                    <p style={{ margin: '5px 0 0 0', fontSize: '0.7rem', color: '#bbb' }}>tuesday, may 14</p>
                  </div>

                  {/* Sub Chapters In Progress */}
                  <div style={{ flex: '1', padding: '20px 15px', borderRadius: '15px', border: '1px solid #f0f0f0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '8px' }}>
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <p style={{ margin: '5px 0', fontSize: '0.8rem', color: '#888' }}>Sub Chapters In Progress</p>
                    <h2 style={{ margin: 0, color: '#002d72', fontSize: '1.8rem', fontWeight: '700' }}>5</h2>
                    <p style={{ margin: '5px 0 0 0', fontSize: '0.7rem', color: '#bbb' }}>tuesday, may 14</p>
                  </div>

                  {/* Sub Chapters Done */}
                  <div style={{ flex: '1', padding: '20px 15px', borderRadius: '15px', border: '1px solid #f0f0f0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '8px' }}>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <p style={{ margin: '5px 0', fontSize: '0.8rem', color: '#888' }}>Sub Chapters Done</p>
                    <h2 style={{ margin: 0, color: '#002d72', fontSize: '1.8rem', fontWeight: '700' }}>4</h2>
                    <p style={{ margin: '5px 0 0 0', fontSize: '0.7rem', color: '#bbb' }}>tuesday, may 14</p>
                  </div>

                </div>
              </div>

            {/* Box Completed Chapter (Progress Bar Oranye) - SUDAH FORMAT PERSEN */}
            <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
              <h3 style={{ margin: '0 0 20px 0', fontSize: '1.1rem', color: '#333' }}>Completed Chapter</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.9rem', color: '#555' }}>
                <span>Chapter 1 - Bilangan Bulat</span>
                {/* Mengubah format dari 75/100 menjadi 75% */}
                <span style={{ fontWeight: 'bold', color: '#333' }}>75%</span> 
              </div>
              {/* Progress Bar Container */}
              <div style={{ width: '100%', height: '12px', backgroundColor: '#f0f0f0', borderRadius: '10px', overflow: 'hidden' }}>
                {/* Isi Progress Bar Warna Oranye */}
                <div style={{ width: '75%', height: '100%', backgroundColor: '#ff7a00', borderRadius: '10px' }}></div>
              </div>
            </div>

            </div>

            {/* KOLOM KANAN (Aktivitas Terbaru / Recent Activities) */}
            <div style={{ flex: '1', minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
              
              {/* Recent Activity - Chapter */}
              <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#333' }}>Recent Activity - Chapter</h3>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', padding: '10px', borderRadius: '12px', border: '1px solid #f8f9fa' }}>
                  <div style={{ width: '50px', height: '40px', backgroundColor: '#007bff', borderRadius: '8px' }}></div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.9rem', color: '#002d72' }}>chapter 1 - Bilangan Bulat</h4>
                    <p style={{ margin: '3px 0 0 0', fontSize: '0.75rem', color: '#aaa' }}>December 14, 08:30 PM</p>
                  </div>
                </div>
              </div>

              {/* Recent Activity - Sub Chapter */}
              <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#333' }}>Recent Activity - Sub Chapter</h3>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', padding: '10px', borderRadius: '12px', border: '1px solid #f8f9fa' }}>
                  <div style={{ width: '50px', height: '40px', backgroundColor: '#007bff', borderRadius: '8px' }}></div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.85rem', color: '#333' }}>Chapter 1 - A. Memahami Bilangan Bulat</h4>
                    <p style={{ margin: '3px 0 0 0', fontSize: '0.75rem', color: '#aaa' }}>December 14, 08:30 PM</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', padding: '10px', borderRadius: '12px', border: '1px solid #f8f9fa' }}>
                  <div style={{ width: '50px', height: '40px', backgroundColor: '#007bff', borderRadius: '8px' }}></div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.85rem', color: '#333' }}>Chapter 1 - A. Memahami Bilangan Bulat</h4>
                    <p style={{ margin: '3px 0 0 0', fontSize: '0.75rem', color: '#aaa' }}>December 16, 10:30 PM</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center', padding: '10px', borderRadius: '12px', border: '1px solid #f8f9fa' }}>
                  <div style={{ width: '50px', height: '40px', backgroundColor: '#007bff', borderRadius: '8px' }}></div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.85rem', color: '#333' }}>Chapter 1 - A. Memahami Bilangan Bulat</h4>
                    <p style={{ margin: '3px 0 0 0', fontSize: '0.75rem', color: '#aaa' }}>December 18, 10:30 PM</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

    </div>
  );
};

export default Dashboard;