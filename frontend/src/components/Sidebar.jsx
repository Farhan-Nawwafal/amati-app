// src/components/Sidebar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoAmati from '/src/assets/logo2.png';

// Kita menggunakan properti (props) 'activeMenu' untuk menentukan menu mana yang menyala biru
const Sidebar = ({ activeMenu }) => {
  const navigate = useNavigate();

  // Fungsi pembantu untuk mengatur gaya visual menu secara dinamis
  const getMenuStyles = (menuName) => {
    const isActive = activeMenu === menuName;
    return {
      backgroundColor: isActive ? '#007bff' : 'transparent',
      color: isActive ? '#fff' : '#a0a0a0',
      padding: '12px 15px',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      fontWeight: isActive ? 'bold' : 'normal',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    };
  };

  return (
    <aside style={{ width: '260px', backgroundColor: '#fff', padding: '30px 20px', display: 'flex', flexDirection: 'column', gap: '40px', borderRight: '1px solid #e0e0e0', minHeight: '100vh' }}>
      {/* Logo AMATI */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img src={logoAmati} alt="Logo" style={{ height: '35px', width: 'auto' }} />
        <span style={{ fontWeight: 'bold', fontSize: '22px', color: '#007bff' }}>AMATI</span>
      </div>

      {/* Menu Navigasi */}
      <div>
        <p style={{ color: '#aaa', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '15px', paddingLeft: '10px' }}>Menu</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          
          {/* Menu Dashboard */}
          <li onClick={() => navigate('/dashboard')} style={getMenuStyles('Dashboard')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Dashboard
          </li>

          {/* Menu Courses */}
          <li onClick={() => navigate('/courses')} style={getMenuStyles('Courses')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            Courses
          </li>

          {/* Menu Quiz */}
          <li onClick={() => navigate('/quiz')} style={getMenuStyles('Quiz')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="6" x2="15" y2="6"/>
            </svg>
            Quiz
          </li>

          {/* Menu Exam - SEKARANG AKTIF SEPENUHNYA */}
          <li onClick={() => navigate('/exam')} style={getMenuStyles('Exam')}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            Exam
          </li>

          {/* menu Settings di dalam file Sidebar.jsx Anda */}
          <li 
            onClick={() => navigate('/settings?view=settings')} // ✔️ BERIKAN QUERY PARAMETER '?view=settings'
            style={getMenuStyles('Settings')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            Settings
          </li>

        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;