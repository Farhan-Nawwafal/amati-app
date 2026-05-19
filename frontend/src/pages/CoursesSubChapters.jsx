// src/pages/SubChapters.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // 1. Ambil useParams
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { coursesData } from '../data/coursesData'; // 2. Ambil data store luar

const CoursesSubChapters = () => {
  const navigate = useNavigate();
  
  // 3. Tangkap ID Chapter dari URL browser (misal: 'ch1' atau 'ch2')
  const { chapterId } = useParams();

  // 4. Cari data spesifik chapter tersebut di dalam data store
  const currentChapter = coursesData.find((ch) => ch.id === chapterId);

  // Jika ID chapter tidak valid atau tidak ditemukan
  if (!currentChapter) {
    return <div style={{ padding: '40px', color: 'red' }}>Chapter Tidak Ditemukan!</div>;
  }

  return (
    <div style={{ display: 'flex', backgroundColor: '#f4f6f9', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      <Sidebar activeMenu="Courses" />

      <main style={{ flex: '1', display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        <Topbar />

        <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '25px', overflowY: 'auto', flex: '1' }}>
          
          <div>
            <h1 style={{ margin: 0, color: '#002d72', fontSize: '1.8rem', fontWeight: '700' }}>All Sub Chapter</h1>
            <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '0.95rem' }}>Browse and manage your enrolled sub chapter</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '5px' }}>
            <div style={{ position: 'relative', width: '350px', display: 'flex', alignItems: 'center' }}>
              <span style={{ position: 'absolute', left: '15px', display: 'flex', alignItems: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </span>
              <input type="text" placeholder="Search or type" style={{ width: '100%', padding: '12px 15px 12px 45px', borderRadius: '12px', border: '1px solid #e5e5e5', backgroundColor: '#fff', outline: 'none' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <button onClick={() => navigate('/courses')} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#fff', border: '1px solid #e5e5e5', borderRadius: '10px', cursor: 'pointer' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              </button>

              {/* 5. NAMA CHAPTER SEKARANG BERUBAH DINAMIS SESUAI URL */}
              <div style={{ backgroundColor: '#e5e5e5', padding: '10px 20px', borderRadius: '10px', color: '#555', fontSize: '0.9rem', fontWeight: '600' }}>
                {currentChapter.title}: {currentChapter.name}
              </div>
            </div>
          </div>

          {/* 6. MEMAKAI DATA SUB-CHAPTER SECARA DINAMIS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}>
            {currentChapter.subChapters.map((sub) => (
              <div 
                key={sub.id}
                onClick={() => {
                if (sub.topics && sub.topics.length > 0) {
                  // Mengarahkan otomatis ke topik pertama dari sub-bab yang diklik
                  navigate(`/material/${chapterId}/${sub.id}/${sub.topics[0].id}`);
                } else {
                  alert("Topik materi untuk sub-bab ini belum diisi di coursesData.js!");
                }
              }}
              style={{ 
                backgroundColor: '#fff', 
                borderRadius: '20px', 
                overflow: 'hidden', 
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)', 
                border: '1px solid #f0f0f0', 
                display: 'flex', 
                flexDirection: 'column', 
                cursor: 'pointer' 
              }}
            >
                <div style={{ height: '6px', backgroundColor: '#5c86ff' }}></div>
                <div style={{ padding: '25px 30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div>
                    <span style={{ color: '#007bff', fontSize: '0.85rem', fontWeight: 'bold' }}>{sub.title}</span>
                    <h3 style={{ margin: '4px 0 0 0', color: '#002d72', fontSize: '1.2rem', fontWeight: '700' }}>{sub.name}</h3>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#888', marginBottom: '6px' }}>
                      <span>My Progress</span>
                      <span style={{ fontWeight: 'bold', color: '#333' }}>{sub.progress}%</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', backgroundColor: '#f0f0f0', borderRadius: '10px', overflow: 'hidden' }}>
                      <div style={{ width: `${sub.progress}%`, height: '100%', backgroundColor: '#ff3366', borderRadius: '10px' }}></div>
                    </div>
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

export default CoursesSubChapters;