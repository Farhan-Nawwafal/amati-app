// src/components/Topbar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header style={{ 
      backgroundColor: '#fff', 
      padding: '15px 40px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      borderBottom: '1px solid #e0e0e0', 
      position: 'relative', 
      zIndex: 100 
    }}>
      
      {/* 1. KOTAK PENCARIAN (SEARCH BAR) */}
      <div style={{ position: 'relative', width: '300px', display: 'flex', alignItems: 'center' }}>
        <span style={{ position: 'absolute', left: '12px', display: 'flex', alignItems: 'center' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </span>
        <input 
          type="text" 
          placeholder="Search or type" 
          style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: '10px', border: '1px solid #e0e0e0', backgroundColor: '#f8f9fa', outline: 'none', fontSize: '0.9rem' }} 
        />
      </div>

      {/* 2. AREA AVATAR DAN DROPDOWN PROFILE */}
      <div style={{ position: 'relative' }}>
        <div 
          onClick={() => setShowDropdown(!showDropdown)} 
          style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#ffcc00', cursor: 'pointer', overflow: 'hidden', border: '2px solid #007bff' }}
        >
          <img src="https://via.placeholder.com/40" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* KOTAK MENU DROPDOWN INTERAKTIF */}
        {showDropdown && (
          <div style={{ 
            position: 'absolute', right: 0, top: '50px', 
            backgroundColor: '#fff', width: '260px', borderRadius: '15px', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid #eee', 
            padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#ffcc00', overflow: 'hidden' }}>
                <img src="https://via.placeholder.com/45" alt="Avatar" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ margin: 0, fontSize: '0.95rem', color: '#333' }}>Anna Carescco</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#888' }}>annacarescco@gmail.com</p>
                <span style={{ display: 'inline-block', marginTop: '4px', padding: '3px 10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 'bold' }}>Intermediate</span>
              </div>
            </div>
            
            <hr style={{ border: 'none', height: '1px', backgroundColor: '#eee', margin: 0 }} />
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <li 
                onClick={() => { navigate('/settings?view=profile'); setShowDropdown(false); }} 
                style={{ padding: '10px', borderRadius: '8px', cursor: 'pointer', color: '#333', fontSize: '0.9rem', textAlign: 'left' }}
              >
                Profile
              </li>
              <li 
                onClick={() => { navigate('/settings?view=settings'); setShowDropdown(false); }} 
                style={{ padding: '10px', borderRadius: '8px', cursor: 'pointer', color: '#333', fontSize: '0.9rem', textAlign: 'left' }}
              >
                Settings
              </li>
              <hr style={{ border: 'none', height: '1px', backgroundColor: '#f5f5f5' }} />
              <li 
                onClick={() => navigate('/')} 
                style={{ padding: '10px', borderRadius: '8px', cursor: 'pointer', color: '#ff3366', fontSize: '0.9rem', fontWeight: '600', textAlign: 'left' }}
              >
                Sign Out
              </li>
            </ul>
          </div>
        )}
      </div>

    </header>
  );
};

export default Topbar;