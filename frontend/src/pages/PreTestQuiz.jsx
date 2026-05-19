// src/pages/PreTestQuiz.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PreTestQuiz = () => {
  const navigate = useNavigate();

  // MOCK DATA: Daftar Soal Pre-Test
  const preTestQuestions = [
    {
      id: 1,
      topic: "Bilangan Bulat",
      question: "Bilangan adalah suatu konsep matematika yang digunakan untuk merepresentasikan jumlah, ukuran, atau urutan suatu objek. Berdasarkan grafik di bawah ini, tentukan pernyataan pembagian posisi matematika yang paling valid:",
      image: "https://via.placeholder.com/600x150?text=Grafik+Garis+Bilangan",
      options: ["A. -5 > 2", "B. 0 adalah bilangan negatif", "C. 3 < 5", "D. -2 < -4"],
      correctAnswer: 2
    },
    // Soal 2-20 bisa Anda tambahkan polanya di sini nanti
    {
      id: 2,
      topic: "Aljabar Dasar",
      question: "Jika nilai x = 5, berapakah hasil dari persamaan 2x + 10?",
      image: null,
      options: ["15", "20", "25", "30"],
      correctAnswer: 1
    }
  ];

  // State Manajemen Kuis
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(20).fill(null)); // Menyimpan jawaban siswa
  const [timeLeft, setTimeLeft] = useState(900); // 15 Menit = 900 detik

  // Format Timer Waktu (MM:SS)
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmitPreTest(); // Waktu habis otomatis submit
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m} : ${s}`;
  };

  // Navigasi Soal
  const handleNext = () => {
    if (currentQuestionIndex < preTestQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Memilih Jawaban
  const handleSelectOption = (optionIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(updatedAnswers);
  };

  // Submit Kuis
  const handleSubmitPreTest = () => {
    // Logika perhitungan skor sederhana
    let score = 0;
    preTestQuestions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) score += 1;
    });

    // Pindah ke halaman result sambil membawa data skor
    navigate('/pre-test/result', { state: { finalScore: score, totalQuestions: preTestQuestions.length } });
  };

  const currentQ = preTestQuestions[currentQuestionIndex];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f8f9fa', fontFamily: "'Inter', sans-serif" }}>
      
      {/* ================= HEADER TOP BAR ================= */}
      <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #eee', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button onClick={() => navigate('/register')} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#002d72' }}>←</button>
          <h2 style={{ margin: 0, fontSize: '1.1rem', color: '#002d72' }}>Diagnostic Pre-Test</h2>
        </div>
        <div style={{ fontSize: '0.95rem', fontWeight: 'bold', color: timeLeft < 60 ? '#dc3545' : '#002d72' }}>
          Time : <span style={{ color: '#dc3545' }}>{formatTime(timeLeft)}</span>
        </div>
      </header>

      <div style={{ display: 'flex', flex: '1', overflow: 'hidden' }}>
        
        {/* ================= SIDEBAR NAVIGASI SOAL KIRI ================= */}
        <aside style={{ width: '280px', backgroundColor: '#fff', borderRight: '1px solid #eee', padding: '30px 20px', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
          <h3 style={{ fontSize: '0.9rem', color: '#002d72', marginBottom: '20px' }}>Daftar Soal</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            {Array.from({ length: 20 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (idx < preTestQuestions.length) setCurrentQuestionIndex(idx);
                }}
                style={{
                  width: '45px', height: '45px', borderRadius: '8px', border: 'none',
                  fontWeight: 'bold', fontSize: '0.9rem', cursor: idx < preTestQuestions.length ? 'pointer' : 'not-allowed',
                  backgroundColor: currentQuestionIndex === idx ? '#007bff' : (selectedAnswers[idx] !== null ? '#28a745' : '#e9ecef'),
                  color: (currentQuestionIndex === idx || selectedAnswers[idx] !== null) ? '#fff' : '#666',
                  opacity: idx < preTestQuestions.length ? 1 : 0.5
                }}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          
          <div style={{ marginTop: 'auto', paddingTop: '30px' }}>
             <button 
                onClick={handleSubmitPreTest}
                style={{ width: '100%', padding: '12px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
             >
                Submit Pre-Test
             </button>
          </div>
        </aside>

        {/* ================= AREA KERJA SOAL KANAN ================= */}
        <main style={{ flex: '1', padding: '40px 60px', overflowY: 'auto', backgroundColor: '#f4f6f9' }}>
          
          {currentQ ? (
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h4 style={{ color: '#007bff', fontSize: '0.9rem', marginBottom: '8px' }}>Pre-Test Fundamental</h4>
              <h1 style={{ color: '#002d72', fontSize: '1.5rem', marginBottom: '30px' }}>{currentQ.id}. {currentQ.topic}</h1>

              <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                <p style={{ fontSize: '1rem', color: '#444', lineHeight: '1.6', marginBottom: '25px' }}>
                  {currentQ.question}
                </p>

                {currentQ.image && (
                  <div style={{ width: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden', marginBottom: '30px', border: '1px solid #eee' }}>
                    <img src={currentQ.image} alt="Ilustrasi Soal" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}

                {/* GRID OPSI JAWABAN (2 Kolom) */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {currentQ.options.map((opt, idx) => (
                    <div 
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      style={{ 
                        padding: '15px 20px', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '15px',
                        border: selectedAnswers[currentQuestionIndex] === idx ? '2px solid #007bff' : '1px solid #ddd',
                        backgroundColor: selectedAnswers[currentQuestionIndex] === idx ? 'rgba(0, 123, 255, 0.05)' : '#fff',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div style={{ 
                        width: '24px', height: '24px', borderRadius: '50%', border: '2px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        backgroundColor: selectedAnswers[currentQuestionIndex] === idx ? '#007bff' : 'transparent',
                        borderColor: selectedAnswers[currentQuestionIndex] === idx ? '#007bff' : '#ccc'
                      }}>
                        {selectedAnswers[currentQuestionIndex] === idx && <div style={{ width: '10px', height: '10px', backgroundColor: '#fff', borderRadius: '50%' }}></div>}
                      </div>
                      <span style={{ fontSize: '0.95rem', color: '#333' }}>{opt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TOMBOL PREVIOUS & NEXT */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '40px' }}>
                <button 
                  onClick={handlePrev} 
                  disabled={currentQuestionIndex === 0}
                  style={{ padding: '12px 30px', backgroundColor: currentQuestionIndex === 0 ? '#ccc' : '#8faadc', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: currentQuestionIndex === 0 ? 'not-allowed' : 'pointer' }}
                >
                  Previous
                </button>
                
                {currentQuestionIndex < preTestQuestions.length - 1 ? (
                  <button 
                    onClick={handleNext}
                    style={{ padding: '12px 40px', backgroundColor: '#002d72', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}
                  >
                    Next
                  </button>
                ) : (
                  <button 
                    onClick={handleSubmitPreTest}
                    style={{ padding: '12px 40px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', marginTop: '50px', color: '#666' }}>Soal sedang disiapkan...</div>
          )}

        </main>
      </div>

    </div>
  );
};

export default PreTestQuiz;