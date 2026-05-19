// src/pages/Settings.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Settings = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. MEMBUAT REFS UNTUK JANGKAR SCROLL
  const profileRef = useRef(null);
  const notificationsRef = useRef(null);

  // State untuk kontrol dropdown profil di top bar
  const [showDropdown, setShowDropdown] = useState(false);

  // State untuk toggle switches notifikasi
  const [emailNotif, setEmailNotif] = useState(true);
  const [examReminder, setExamReminder] = useState(true);
  const [courseUpdate, setCourseUpdate] = useState(true);

  // 2. FUNGSI UNTUK MERESPONS PERGESERAN LAYAR (SMOOTH SCROLL)
  const scrollToSection = (targetRef) => {
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Mendeteksi perubahan query parameter URL (?view=...)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const view = params.get('view');
    
    const timer = setTimeout(() => {
      if (view === 'settings') {
        scrollToSection(notificationsRef);
      } else if (view === 'profile') {
        scrollToSection(profileRef);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div style={{ display: 'flex', backgroundColor: '#f4f6f9', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      
      {/* SIDEBAR TUNGGAL */}
      <Sidebar activeMenu="Settings" />

 {/* WADAH UTAMA KANAN */}
      <main style={{ flex: '1', display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        
        {/* TOP BAR SUDAH DIHAPUS TOTAL DI SINI */}

        {/* ================= AREA KONTEN SCROLLABLE SINGLE-CONTAINER ================= */}
        {/* KUNCI: Menambahkan paddingTop: '40px' agar konten tidak tersembunyi saat di-scroll otomatis */}
        <div style={{ 
          flex: '1', 
          padding: '40px 40px 60px 40px', // Memberi ruang ekstra di bawah dan atas
          overflowY: 'auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '50px', 
          scrollBehavior: 'smooth' 
        }}>
          
          {/* CONTAINER 1: BLOK PROFIL */}
          <div ref={profileRef} style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '10px' }}>
            <div>
              <h1 style={{ margin: 0, color: '#002d72', fontSize: '1.8rem', fontWeight: '700' }}>Profil</h1>
              <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '0.95rem' }}>Manage your account and preferences</p>
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '40px', border: '1px solid #f0f0f0', boxShadow: '0 4px 20px rgba(0,0,0,0.01)' }}>
              <h3 style={{ margin: '0 0 25px 0', fontSize: '1.2rem', color: '#002d72', display: 'flex', alignItems: 'center', gap: '10px' }}>
                👤 Profile Information
              </h3>
              
              {/* Bagian Edit Foto */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#ffcc00', overflow: 'hidden' }}>
                  <img src="https://via.placeholder.com/80" alt="Avatar" />
                </div>
                <div>
                  <button style={{ padding: '8px 15px', backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem', marginBottom: '8px', display: 'block' }}>Edit Photo</button>
                  <span style={{ fontSize: '0.75rem', color: '#aaa' }}>We suggest you to upload your photo with ratio 1:1. Please make sure the size is under 1 MB.</span>
                </div>
              </div>

              {/* Form Input Baris */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '35px', rowGap: '35px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', fontWeight: 'bold', color: '#333' }}>Name</label>
                  <input type="text" defaultValue="Anna Carescco" style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', border: '1px solid #ccc', outline: 'none', color: '#555' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', fontWeight: 'bold', color: '#333' }}>Birth Date</label>
                  <input type="text" defaultValue="21 august 1999" style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', border: '1px solid #ccc', outline: 'none', color: '#555' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', fontWeight: 'bold', color: '#333' }}>Email Address</label>
                  <input type="email" defaultValue="annacarescco@gmail.com" style={{ width: '100%', padding: '12px 15px', borderRadius: '10px', border: '1px solid #ccc', outline: 'none', color: '#555' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.9rem', fontWeight: 'bold', color: '#333' }}>Password</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <input type="password" defaultValue="layerssecret" style={{ width: '100%', padding: '12px 40px 12px 15px', borderRadius: '10px', border: '1px solid #ccc', outline: 'none', color: '#555' }} />
                    <span style={{ position: 'absolute', right: '15px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* GRUP TOMBOL DENGAN LOGOUT INDEPENDEN */}
              <div style={{ display: 'flex', gap: '15px', marginTop: '35px', alignItems: 'center' }}>
                <button style={{ padding: '12px 30px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>Save Changes</button>
                <button style={{ padding: '12px 30px', backgroundColor: '#fff', border: '1px solid #ccc', color: '#666', borderRadius: '10px', cursor: 'pointer' }}>Cancel</button>
                
                <button 
                  onClick={() => navigate('/')} 
                  style={{ 
                    padding: '12px 30px', backgroundColor: '#fff', border: '1px solid #ff3366', color: '#ff3366', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer',
                    marginLeft: 'auto', transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ff3366'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#ff3366'; }}
                >
                  Logout
                </button>
              </div>

            </div>
          </div>

          {/* CONTAINER 2: BLOK SETTINGS NOTIFIKASI */}
          <div ref={notificationsRef} style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '40px' }}>
            <div>
              <h1 style={{ margin: 0, color: '#002d72', fontSize: '1.8rem', fontWeight: '700' }}>Settings</h1>
              <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '0.95rem' }}>Manage your account and preferences</p>
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '40px', border: '1px solid #f0f0f0', boxShadow: '0 4px 20px rgba(0,0,0,0.01)' }}>
              <h3 style={{ margin: '0 0 30px 0', fontSize: '1.2rem', color: '#002d72', display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Ikon Lonceng Minimalis (Matching dengan tema AMATI) */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#002d72" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            Notifications
            </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                
                {/* Toggle 1 */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f5f5f5', paddingBottom: '20px' }}>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1rem', color: '#333' }}>Email Notifications</h4>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: '#aaa' }}>Receive email updates about your courses</p>
                  </div>
                  <div onClick={() => setEmailNotif(!emailNotif)} style={{ width: '50px', height: '26px', backgroundColor: emailNotif ? '#007bff' : '#ccc', borderRadius: '20px', padding: '3px', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', justifyContent: emailNotif ? 'flex-end' : 'flex-start' }}>
                    <div style={{ width: '20px', height: '20px', backgroundColor: '#fff', borderRadius: '50%', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}></div>
                  </div>
                </div>

                {/* Toggle 2 */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f5f5f5', paddingBottom: '20px' }}>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1rem', color: '#333' }}>Examination Reminders</h4>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: '#aaa' }}>Get reminded about upcoming exam</p>
                  </div>
                  <div onClick={() => setExamReminder(!examReminder)} style={{ width: '50px', height: '26px', backgroundColor: examReminder ? '#007bff' : '#ccc', borderRadius: '20px', padding: '3px', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', justifyContent: examReminder ? 'flex-end' : 'flex-start' }}>
                    <div style={{ width: '20px', height: '20px', backgroundColor: '#fff', borderRadius: '50%', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}></div>
                  </div>
                </div>

                {/* Toggle 3 */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '10px' }}>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1rem', color: '#333' }}>Courses Updates</h4>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: '#aaa' }}>Notifications about courses changes</p>
                  </div>
                  <div onClick={() => setCourseUpdate(!courseUpdate)} style={{ width: '50px', height: '26px', backgroundColor: courseUpdate ? '#007bff' : '#ccc', borderRadius: '20px', padding: '3px', cursor: 'pointer', transition: 'all 0.2s', display: 'flex', justifyContent: courseUpdate ? 'flex-end' : 'flex-start' }}>
                    <div style={{ width: '20px', height: '20px', backgroundColor: '#fff', borderRadius: '50%', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}></div>
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

export default Settings;