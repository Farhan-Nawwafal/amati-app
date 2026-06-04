// src/pages/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HighlightFeature from '../components/HighlightFeature';
import gambarTentangKami from '../assets/tentang_kami.jpg';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div id="home">
      {/* Section 1: Hero */}
      <div style={{ backgroundColor: '#e3f2fd', paddingBottom: '100px', borderRadius: '0 0 50% 50% / 0 0 10% 10%' }}>
        <Navbar />
        <header style={{ textAlign: 'center', marginTop: '60px', padding: '0 20px' }}>
          <h1 style={{ fontSize: '3rem', color: '#002d72', marginBottom: '10px' }}>Adaptive Mathematics</h1>
          <h2 style={{ fontSize: '2.5rem', color: '#007bff', marginTop: '0' }}>Analysis & Teaching Interactive</h2>
          <p style={{ color: '#555', maxWidth: '600px', margin: '20px auto', lineHeight: '1.6' }}>
            AMATI adalah platform interaktif untuk analisis dan pembelajaran matematika Sekolah Menengah Pertama kelas 7.
          </p>
          <button 
            style={{ padding: '15px 40px', backgroundColor: '#ffcc00', border: 'none', borderRadius: '30px', fontWeight: 'bold', marginTop: '20px', cursor: 'pointer' }}
            onClick={() => navigate('/register')}
          >
            Get Started →
          </button>
        </header>
      </div>

      {/* Section 2: Kenapa AMATI (Ikon Minimalis Garis Halus Mewakili Dasbor) */}
      <section id="features" style={{ padding: '80px 50px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '50px' }}>Kenapa <span style={{ color: '#007bff' }}>#TenangAjaAdaAMATI</span></h2>
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
          
        {/* Kartu 1: Materi Pembelajaran Eksklusif (Ikon Buku Terbuka Minimalis) */}
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
            <div style={{ backgroundColor: '#f0f7ff', width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.2rem', color: '#002d72', margin: 0 }}>Paham materi belajar lebih seru</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
              Materi pembelajaran yang dirancang khusus oleh tim AMATI.
            </p>
          </div>

          {/* Kartu 2: Taklukkan Ujian (Ikon Medali/Piagam Garis Halus) */}
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
            <div style={{ backgroundColor: '#f0f7ff', width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.2rem', color: '#002d72', margin: 0 }}>Lebih siap taklukkan ujian</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>Latihan soal bantu persiapanmu hadapi ujian semester.</p>
          </div>

          {/* Kartu 3: Kurikulum Update (Ikon Centang Proteksi Garis Halus) */}
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
            <div style={{ backgroundColor: '#f0f7ff', width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 11 11 13 15 9"></polyline>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.2rem', color: '#002d72', margin: 0 }}>Informasi pendidikan paling update</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>Selaras dengan kurikulum nasional terbaru.</p>
          </div>

        </div>
      </section>

      {/* Section 3: Tentang Kami */}
      <section id="about" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 10%', gap: '50px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <div style={{ backgroundColor: '#e3f2fd', borderRadius: '30px', padding: '20px' }}>
            <img 
        src={gambarTentangKami} 
        alt="Tentang AMATI" 
        style={{ width: '100%', height: 'auto', borderRadius: '20px', display: 'block' }} 
      />
          </div>
        </div>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h2 style={{ color: '#007bff', marginBottom: '20px' }}>Tentang Kami</h2>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            AMATI adalah platform pembelajaran adaptif berbasis web khusus untuk matematika siswa kelas VII SMP dengan Kurikulum Merdeka.
          </p>
          <p style={{ lineHeight: '1.8', color: '#555' }}>
            <strong>Tujuan Kami:</strong> Memperkuat konsep dasar matematika siswa secara menyeluruh.
          </p>
        </div>
      </section>

      {/* Section 4: Fitur Utama & Keunggulan */}
      <section style={{ backgroundColor: '#007bff', padding: '80px 10%', textAlign: 'center', borderRadius: '50px 50px 0 0' }}>
        <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '60px' }}>Fitur Utama & Keunggulan</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
          <HighlightFeature title="Analisis Data-Driven" description="Menggunakan hasil pre-test dan data historis pengerjaan siswa untuk menentukan jalur belajar." />
          <HighlightFeature title="Integrated Video Content" description="Menyediakan materi pembelajaran dalam bentuk video berkualitas dari YouTube." />
          <HighlightFeature title="Sistem Rekomendasi Adaptif" description="Secara otomatis menyusun roadmap belajar prasyarat jika terdeteksi belum menguasai konsep dasar." />
          <HighlightFeature title="Evaluasi Performa Longitudinal" description="Memberikan evaluasi yang jujur dan personal berdasarkan perkembangan siswa." />
        </div>
      </section>

      {/* Section 5: Transformasi Alur Belajar Pintar (Menggantikan Testimoni Palsu) */}
      <section style={{ padding: '80px 10%', textAlign: 'center', backgroundColor: '#f8fbff' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: '#002d72' }}>Bagaimana AMATI Memetakan Kemampuanmu?</h2>
        <p style={{ color: '#666', marginBottom: '50px', maxWidth: '600px', margin: '0 auto 50px auto', fontSize: '0.95rem' }}>
          Melalui sistem pemetaan kecerdasan yang terintegrasi, AMATI memastikan tidak ada celah konsep matematika yang tertinggal.
        </p>
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          {/* Alur 1 (Ikon Target Bidik) */}
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', flex: '1', minWidth: '280px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px', borderTop: '4px solid #007bff' }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#002d72' }}>1. Pemetaan Diagnostik</h4>
            <p style={{ margin: 0, color: '#555', fontSize: '0.88rem', lineHeight: '1.6' }}>
              Melalui Pre-Test Global di awal pendaftaran, sistem pintar kami mendeteksi tingkat pemahaman matematika kurikulum merdeka dasar kamu secara otomatis.
            </p>
          </div>

          {/* Alur 2 (Ikon Percabangan Rute) */}
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', flex: '1', minWidth: '280px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px', borderTop: '4px solid #ffcc00' }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#ffcc00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="18" r="3"></circle>
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M18 15V9a4 4 0 0 0-4-4H9"></path>
            </svg>
            <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#002d72' }}>2. Alur Belajar Fleksibel</h4>
            <p style={{ margin: 0, color: '#555', fontSize: '0.88rem', lineHeight: '1.6' }}>
              Jika di tengah bab kamu mengalami kesulitan materi, sistem adaptif AMATI akan otomatis menyusun rute pengayaan sub-bab untuk memperkuat fondasimu.
            </p>
          </div>

          {/* Alur 3 (Ikon Jaringan Otak/Kecerdasan AI) */}
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', flex: '1', minWidth: '280px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px', borderTop: '4px solid #00c853' }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00c853" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9.59 4.59A2 2 0 1 1 11 8H8a2 2 0 0 1-2-2V4a2 2 0 1 1 4 0v.59z"></path>
              <path d="M14 16a2 2 0 1 1-1.41-3.41L13 12h3a2 2 0 0 1 2 2v2a2 2 0 1 1-4 0v-.59z"></path>
              <path d="M6 14a2 2 0 1 1 2 2H6v-2z"></path>
              <path d="M18 6a2 2 0 1 1-2 2V6a2 2 0 1 1 2 0z"></path>
            </svg>
            <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#002d72' }}>3. Personal Laporan AI</h4>
            <p style={{ margin: 0, color: '#555', fontSize: '0.88rem', lineHeight: '1.6' }}>
              Dapatkan rekomendasi transkrip teks evaluasi personal yang didukung oleh AI Amati langsung di halaman dasbor setiap kali kamu menuntaskan bab pelajaran.
            </p>
          </div>

        </div>
      </section>

      {/* Section 6: Call to Action */}
      <section style={{ display: 'flex', alignItems: 'center', padding: '80px 10%', gap: '50px', flexWrap: 'wrap', backgroundColor: '#e3f2fd' }}>
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
          <h2 style={{ color: '#002d72', fontSize: '2rem' }}>Pahami Prosesnya, Kuasai Hasilnya</h2>
          <p style={{ color: '#555', margin: '20px 0' }}>
            Platform AMATI membantu kamu menutup setiap celah kompetensi agar siap lanjut ke materi berikutnya.
          </p>
          <button 
            style={{ padding: '15px 30px', backgroundColor: '#ffcc00', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => navigate('/register')}
          >
            Register Now !!
          </button>
        </div>
        <div style={{ flex: '1', minWidth: '300px', textAlign: 'right' }}>
           <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '15px', display: 'inline-block', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <h4 style={{ margin: 0, color: '#007bff' }}>99% Satisfaction Score</h4>
              <p style={{ margin: 0, fontSize: '0.8rem' }}>Based on student feedback</p>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ backgroundColor: '#001a33', color: '#fff', padding: '60px 10% 20px 10%', textAlign: 'left' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>
          <div style={{ maxWidth: '300px' }}>
            <h3 style={{ color: '#007bff' }}>AMATI</h3>
            <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Adaptive Mathematics Analysis & Teaching Interactive.</p>
          </div>
          <div>
            <h4>Useful Info</h4>
            <p style={{ fontSize: '0.9rem', color: '#ccc', margin: '5px 0' }}>Insights</p>
            <p style={{ fontSize: '0.9rem', color: '#ccc', margin: '5px 0' }}>Support</p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p style={{ fontSize: '0.9rem', color: '#ccc', margin: '5px 0' }}>Email: support@amati.id</p>
          </div>
        </div>
        <hr style={{ borderColor: '#222' }} />
        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#555', marginTop: '20px' }}>
          © 2026 AMATI - All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;