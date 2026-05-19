// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  // State Utama Login Form
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  // ================= STATE FORGOT PASSWORD ALUR LANGSUNG =================
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1); // Step 1: Input Email, Step 2: Create New Password
  const [forgotEmail, setForgotEmail] = useState('');
  const [newPasswords, setNewPasswords] = useState({ password: '', confirm: '' });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State efek hover tombol teks
  const [isForgotHovered, setIsForgotHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewPasswordChange = (e) => {
    const { name, value } = e.target;
    setNewPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      alert("Mohon isi Email dan Password Anda!");
      return;
    }
    navigate('/dashboard'); 
  };

  // Handler Kirim Email (Tahap 1)
  const handleEmailVerifySubmit = (e) => {
    e.preventDefault();
    if (!forgotEmail) {
      alert("Mohon masukkan email Anda!");
      return;
    }
    // Di backend nanti: Cek apakah email terdaftar. Jika aman, lanjut Step 2
    setModalStep(2);
  };

  // Handler Simpan Password Baru (Tahap 2)
  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
    if (!newPasswords.password || !newPasswords.confirm) {
      alert("Mohon lengkapi kedua kolom password!");
      return;
    }
    if (newPasswords.password !== newPasswords.confirm) {
      alert("Konfirmasi password tidak cocok!");
      return;
    }

    // Di backend nanti: UPDATE users SET password = hash WHERE email = forgotEmail
    alert("Password Anda berhasil diperbarui! Silakan login kembali.");
    setIsModalOpen(false); // Tutup modal
    setNewPasswords({ password: '', confirm: '' }); // Reset data input
  };

  return (
    <div style={{ display: 'flex', backgroundColor: '#f4f6f9', minHeight: '100vh', fontFamily: "'Inter', sans-serif", overflow: 'hidden', position: 'relative' }}>
      
      {/* ================= SISI KIRI: BRANDING AREA ================= */}
      <div style={{ 
        flex: '1.1', 
        backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '50px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        position: 'relative'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.15)', zIndex: 1 }}></div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', zIndex: 2 }} onClick={() => navigate('/')}>
          <img 
           src="/src/assets/logo2.png"
            alt="AMATI Icon" 
            style={{ width: '38px', height: '38px', objectFit: 'contain', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }} 
          />
          <span style={{ fontWeight: '800', fontSize: '1.6rem', color: '#ffffff', letterSpacing: '0.8px', textShadow: '0 2px 5px rgba(0,0,0,0.25)' }}>AMATI</span>
        </div>

        <div style={{ zIndex: 2, color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', textAlign: 'left' }}>
          Platform Adaptif Matematika VII
        </div>
      </div>

      {/* ================= SISI KANAN: FORM CARD CONTAINER ================= */}
      <div style={{ flex: '1', backgroundColor: '#f4f6f9', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <div style={{ 
          backgroundColor: '#fff', width: '94%', height: '96vh', borderRadius: '35px 0 0 35px', 
          padding: '50px 70px', display: 'flex', flexDirection: 'column', justifyContent: 'center',
          boxShadow: '-10px 0 30px rgba(0,0,0,0.02)', overflowY: 'auto'
        }}>
          
          <div style={{ marginBottom: '30px', textAlign: 'left' }}>
            <h1 style={{ margin: 0, color: '#002d72', fontSize: '2.2rem', fontWeight: '800', letterSpacing: '-0.5px' }}>Sign In</h1>
            <p style={{ margin: '8px 0 0 0', color: '#666', fontSize: '0.9rem' }}>
              Belum punya akun? <span onClick={() => navigate('/register')} style={{ color: '#007bff', fontWeight: '700', cursor: 'pointer' }}>Daftar di sini.</span>
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', fontWeight: '700', color: '#333' }}>Email Address</label>
              <input type="email" name="email" value={loginData.email} onChange={handleChange} placeholder="Enter your Email Address" style={{ width: '100%', padding: '14px 18px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '0.9rem' }} />
            </div>

            <div style={{ textAlign: 'left' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.85rem', fontWeight: '700', color: '#333' }}>Password</label>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <input type={showPassword ? 'text' : 'password'} name="password" value={loginData.password} onChange={handleChange} placeholder="Enter your Password" style={{ width: '100%', padding: '14px 50px 14px 18px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '0.9rem' }} />
                <span onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '18px', cursor: 'pointer', display: 'flex' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#666', cursor: 'pointer' }}>
                <input type="checkbox" style={{ cursor: 'pointer' }} /> Remember me
              </label>
              
              <span 
                onClick={() => { setIsModalOpen(true); setModalStep(1); }} 
                onMouseEnter={() => setIsForgotHovered(true)}
                onMouseLeave={() => setIsForgotHovered(false)}
                style={{ 
                  fontSize: '0.8rem', 
                  color: isForgotHovered ? '#0056b3' : '#007bff', 
                  cursor: 'pointer', 
                  fontWeight: '700',
                  transition: 'color 0.2s',
                  textDecoration: isForgotHovered ? 'underline' : 'none'
                }}
              >
                Forgot Password ?
              </span>
            </div>

            <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#3b71ca', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '0.95rem', cursor: 'pointer', marginTop: '10px', boxShadow: '0 4px 15px rgba(59, 113, 202, 0.2)' }}>
              Sign In
            </button>
          </form>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', margin: '25px 0' }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#eee' }}></div>
            <span style={{ fontSize: '0.75rem', color: '#aaa', fontWeight: 'bold' }}>or</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#eee' }}></div>
          </div>

          <div style={{ display: 'flex', gap: '15px' }}>
            <button type="button" style={{ flex: 1, padding: '12px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '700', color: '#333', cursor: 'pointer' }}>
              <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.58 14.96 1 12 1 7.35 1 3.4 3.65 1.5 7.5l3.86 3C6.27 7.77 8.93 5.04 12 5.04z"/><path fill="#4285F4" d="M23.49 12.27c0-.82-.07-1.6-.2-2.36H12v4.51h6.46c-.28 1.48-1.12 2.74-2.38 3.58l3.7 2.87c2.16-1.99 3.41-4.92 3.41-8.6z"/><path fill="#FBBC05" d="M5.36 14.5c-.24-.72-.38-1.49-.38-2.3s.14-1.58.38-2.3L1.5 6.9C.54 8.82 0 10.95 0 13s.54 4.18 1.5 6.1l3.86-3.1z"/><path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.92l-3.7-2.87c-1.03.69-2.35 1.11-4.26 1.11-3.07 0-5.73-2.73-6.64-5.46L1.5 16.03C3.4 19.85 7.35 23 12 23z"/></svg>
              Sign With Google
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          POPUP MODAL COMPONENT (FORGOT PASSWORD ALUR LANGSUNG 2 TAHAP)
          ========================================================================= */}
      {isModalOpen && (
        <div style={{ 
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
          backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 
        }}>
          
          <div style={{ 
            backgroundColor: '#fff', width: '480px', borderRadius: '24px', 
            padding: '40px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            position: 'relative', textAlign: 'center'
          }}>
            
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#999' }}
            >
              ✕
            </button>

            {/* ---------------- TAHAP 1: INPUT EMAIL ADDRESS ---------------- */}
            {modalStep === 1 && (
              <form onSubmit={handleEmailVerifySubmit}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(59, 113, 202, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <svg width="28" height="28" fill="#3b71ca" viewBox="0 0 24 24"><path d="M18.005 19H6.005c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2zm-6-6l-6-4v8h12V9l-6 4z"/></svg>
                </div>
                <h3 style={{ margin: '0 0 10px 0', color: '#002d72', fontSize: '1.4rem', fontWeight: '800' }}>Forgot Password</h3>
                <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '25px' }}>Masukkan alamat email Anda untuk melakukan konfirmasi verifikasi akun pengaturan sandi.</p>
                
                <div style={{ textAlign: 'left', marginBottom: '25px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.8rem', fontWeight: '700', color: '#333' }}>Email Address</label>
                  <input type="email" required value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} placeholder="Enter your Email" style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '0.9rem' }} />
                </div>

                <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#3b71ca', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
                  Send Code
                </button>
              </form>
            )}

            {/* ---------------- TAHAP 2: CREATE NEW PASSWORD ---------------- */}
            {modalStep === 2 && (
              <form onSubmit={handleResetPasswordSubmit}>
                {/* LOGO AMATI KECIL DI ATAS MODAL KEDUA */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '15px' }}>
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=50&q=80" alt="Icon" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                  <span style={{ fontWeight: '800', fontSize: '1.1rem', color: '#007bff' }}>AMATI</span>
                </div>

                <h3 style={{ margin: '0 0 10px 0', color: '#002d72', fontSize: '1.5rem', fontWeight: '800' }}>Create new password</h3>
                <p style={{ color: '#666', fontSize: '0.85rem', lineHeight: '1.5', marginBottom: '25px' }}>Please create new password, don't use your old password.</p>
                
                {/* INPUT KATA SANDI BARU */}
                <div style={{ textAlign: 'left', marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.8rem', fontWeight: '700', color: '#333' }}>New Password</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <input type={showNewPassword ? 'text' : 'password'} name="password" required value={newPasswords.password} onChange={handleNewPasswordChange} placeholder="Enter your New Password" style={{ width: '100%', padding: '14px 50px 14px 18px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '0.9rem' }} />
                    <span onClick={() => setShowNewPassword(!showNewPassword)} style={{ position: 'absolute', right: '18px', cursor: 'pointer', display: 'flex' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    </span>
                  </div>
                </div>

                {/* KONFIRMASI KATA SANDI BARU */}
                <div style={{ textAlign: 'left', marginBottom: '30px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.8rem', fontWeight: '700', color: '#333' }}>Confirm New Password</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <input type={showConfirmPassword ? 'text' : 'password'} name="confirm" required value={newPasswords.confirm} onChange={handleNewPasswordChange} placeholder="Enter your Password" style={{ width: '100%', padding: '14px 50px 14px 18px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '0.9rem' }} />
                    <span onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ position: 'absolute', right: '18px', cursor: 'pointer', display: 'flex' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    </span>
                  </div>
                </div>

                <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#3b71ca', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.95rem' }}>
                  Reset and save my new password
                </button>

                <div onClick={() => setIsModalOpen(false)} style={{ color: '#007bff', fontSize: '0.85rem', fontWeight: 'bold', marginTop: '20px', cursor: 'pointer' }}>
                  Back to Sign In
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default Login;