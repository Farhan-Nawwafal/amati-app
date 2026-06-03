// src/pages/PreTestQuiz.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAssessmentQuestions,
  submitAssessmentAnswers,
} from "../services/assessmentService";

const PreTestQuiz = () => {
  const navigate = useNavigate();

  // State Utama Manajemen Kuis
  const [preTestQuestions, setPreTestQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]); // Menyimpan objek [{ questionId, userAnswer }]
  const [timeLeft, setTimeLeft] = useState(900); // 15 Menit timer kuis
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const placementId = "PTG00001";
        const response = await getAssessmentQuestions(placementId);

        const questionsFromDb = response.data?.data?.questions || [];

        if (questionsFromDb.length > 0) {
          setPreTestQuestions(questionsFromDb);
          setSelectedAnswers(
            questionsFromDb.map((q) => ({
              questionId: q.id,
              userAnswer: null,
            })),
          );
        } else {
          alert("Peringatan: Bank soal pre-test di database kamu kosong!");
        }
      } catch (error) {
        console.error("Gagal mengambil soal pre-test:", error);
        alert(
          "Error: Gagal memuat lembar ujian. Pastikan database MySQL dan server BE kamu menyala!",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  // Format Timer Waktu Mundur (MM : SS)
  useEffect(() => {
    if (timeLeft <= 0) {
      handleAutoSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m} : ${s}`;
  };

  // Navigasi Soal Kuis
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

  // Memilih Pilihan Ganda (Menyimpan index pilihan ganda sebagai nilai string "0", "1", dst)
  const handleSelectOption = (optionIndex) => {
    const currentQ = preTestQuestions[currentQuestionIndex];
    const updatedAnswers = selectedAnswers.map((ans) => {
      if (ans.questionId === currentQ.id) {
        return { ...ans, userAnswer: optionIndex.toString() };
      }
      return ans;
    });
    setSelectedAnswers(updatedAnswers);
  };

  // Logic Submit Tombol Manual
  const handleSubmitPreTest = async () => {
    const confirmSubmit = window.confirm(
      "Apakah Anda yakin ingin mengakhiri dan mengirim hasil Pre-Test Anda?",
    );
    if (!confirmSubmit) return;
    await executeSubmission();
  };

  // Logic Auto-Submit saat waktu habis
  const handleAutoSubmit = async () => {
    alert(
      "Waktu ujian Anda telah habis! Lembar jawaban Anda otomatis dikirimkan ke server.",
    );
    await executeSubmission();
  };

  // Eksekusi Pengiriman Paket Jawaban Ke API Backend
  const executeSubmission = async () => {
    try {
      setLoading(true);
      const placementId = "PTG00001";

      const payload = {
        answers: selectedAnswers, // Mengirimkan objek [{ questionId, userAnswer }]
      };

      const response = await submitAssessmentAnswers(placementId, payload);
      console.log("Sukses menyimpan hasil pengerjaan kuis:", response.data);

      const scoreResult = response.data?.data?.score || 0;

      // Navigasi sukses membawa data skor asli hitungan server ke halaman result
      navigate("/pre-test/result", {
        state: {
          finalScore: scoreResult,
          totalQuestions: preTestQuestions.length,
        },
      });
    } catch (error) {
      console.error("Gagal melakukan submission kuis:", error);
      alert(
        "Terjadi kegagalan koneksi ke server saat menyimpan lembar jawaban.",
      );
      setLoading(false);
    }
  };

  // Handler Pengaman: Cegah siswa tidak sengaja klik tombol keluar back rute
  const handleCancelQuiz = () => {
    const confirmExit = window.confirm(
      "Apakah Anda yakin ingin keluar dari Pre-Test? Anda harus menyelesaikan tes ini nanti untuk membuka materi Kurikulum Adaptif.",
    );
    if (confirmExit) navigate("/login");
  };

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
          fontWeight: "bold",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        🔄 Sedang memproses lembar kuis ujian matematika...
      </div>
    );
  }

  const currentQ = preTestQuestions[currentQuestionIndex];
  const currentAnswerObj = selectedAnswers.find(
    (ans) => ans.questionId === currentQ?.id,
  );
  const currentSelectedValue = currentAnswerObj?.userAnswer
    ? parseInt(currentAnswerObj.userAnswer)
    : null;

  // Render opsi jawaban secara dinamis dari tipe data Json database
  const parsedOptions =
    typeof currentQ?.options === "string"
      ? JSON.parse(currentQ.options)
      : currentQ?.options || [];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* HEADER TOP BAR */}
      <header
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #eee",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <button
            onClick={handleCancelQuiz}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.2rem",
              cursor: "pointer",
              color: "#002d72",
              fontWeight: "bold",
            }}
          >
            ←
          </button>
          <h2 style={{ margin: 0, fontSize: "1.1rem", color: "#002d72" }}>
            Diagnostic Pre-Test
          </h2>
        </div>
        <div
          style={{
            fontSize: "0.95rem",
            fontWeight: "bold",
            color: timeLeft < 60 ? "#dc3545" : "#002d72",
          }}
        >
          Time :{" "}
          <span style={{ color: "#dc3545" }}>{formatTime(timeLeft)}</span>
        </div>
      </header>

      <div style={{ display: "flex", flex: "1", overflow: "hidden" }}>
        {/* SIDEBAR NAVIGASI GRID ANGKA */}
        <aside
          style={{
            width: "280px",
            backgroundColor: "#fff",
            borderRight: "1px solid #eee",
            padding: "30px 20px",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          <h3
            style={{
              fontSize: "0.9rem",
              color: "#002d72",
              marginBottom: "20px",
            }}
          >
            Daftar Soal
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "10px",
            }}
          >
            {preTestQuestions.map((q, idx) => {
              const ansObj = selectedAnswers.find(
                (ans) => ans.questionId === q.id,
              );
              const isAnswered = ansObj && ansObj.userAnswer !== null;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestionIndex(idx)}
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "8px",
                    border: "none",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    backgroundColor:
                      currentQuestionIndex === idx
                        ? "#007bff"
                        : isAnswered
                          ? "#28a745"
                          : "#e9ecef",
                    color:
                      currentQuestionIndex === idx || isAnswered
                        ? "#fff"
                        : "#666",
                  }}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
          <div style={{ marginTop: "auto", paddingTop: "30px" }}>
            <button
              onClick={handleSubmitPreTest}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Submit Pre-Test
            </button>
          </div>
        </aside>

        {/* WORKSPACE AREA SOAL */}
        <main
          style={{
            flex: "1",
            padding: "40px 60px",
            overflowY: "auto",
            backgroundColor: "#f4f6f9",
          }}
        >
          {currentQ ? (
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <h4
                style={{
                  color: "#007bff",
                  fontSize: "0.9rem",
                  marginBottom: "8px",
                }}
              >
                Pre-Test Fundamental
              </h4>
              <h1
                style={{
                  color: "#002d72",
                  fontSize: "1.5rem",
                  marginBottom: "30px",
                }}
              >
                {currentQuestionIndex + 1}. {currentQ.topic}
              </h1>

              <div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  padding: "40px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#444",
                    lineHeight: "1.6",
                    marginBottom: "25px",
                  }}
                >
                  {currentQ.question}
                </p>

                {currentQ.image && (
                  <div
                    style={{
                      width: "100%",
                      height: "180px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      marginBottom: "30px",
                      border: "1px solid #eee",
                    }}
                  >
                    <img
                      src={currentQ.image}
                      alt="Ilustrasi Soal"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}

                {/* GRID OPSI JAWABAN */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                  }}
                >
                  {parsedOptions.map((opt, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      style={{
                        padding: "15px 20px",
                        borderRadius: "12px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        border:
                          currentSelectedValue === idx
                            ? "2px solid #007bff"
                            : "1px solid #ddd",
                        backgroundColor:
                          currentSelectedValue === idx
                            ? "rgba(0, 123, 255, 0.05)"
                            : "#fff",
                        transition: "all 0.2s",
                      }}
                    >
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          border: "2px solid #ccc",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor:
                            currentSelectedValue === idx
                              ? "#007bff"
                              : "transparent",
                          borderColor:
                            currentSelectedValue === idx ? "#007bff" : "#ccc",
                        }}
                      >
                        {currentSelectedValue === idx && (
                          <div
                            style={{
                              width: "10px",
                              height: "10px",
                              backgroundColor: "#fff",
                              borderRadius: "50%",
                            }}
                          ></div>
                        )}
                      </div>
                      <span style={{ fontSize: "0.95rem", color: "#333" }}>
                        {opt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* NAVIGASI PREV NEXT FOOTER */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                  marginTop: "40px",
                }}
              >
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  style={{
                    padding: "12px 30px",
                    backgroundColor:
                      currentQuestionIndex === 0 ? "#ccc" : "#8faadc",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    cursor:
                      currentQuestionIndex === 0 ? "not-allowed" : "pointer",
                  }}
                >
                  Previous
                </button>
                {currentQuestionIndex < preTestQuestions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    style={{
                      padding: "12px 40px",
                      backgroundColor: "#002d72",
                      color: "#fff",
                      border: "none",
                      borderRadius: "10px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitPreTest}
                    style={{
                      padding: "12px 40px",
                      backgroundColor: "#28a745",
                      color: "#fff",
                      border: "none",
                      borderRadius: "10px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div
              style={{ textAlign: "center", marginTop: "50px", color: "#666" }}
            >
              Bank Soal tidak ditemukan...
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default PreTestQuiz;
