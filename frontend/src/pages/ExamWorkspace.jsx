import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAssessmentQuestionsApi,
  submitAssessmentApi,
} from "../services/examService";

const ExamWorkspace = () => {
  const navigate = useNavigate();

  const { assessmentId } = useParams();

  const [questions, setQuestions] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [assessmentTitle, setAssessmentTitle] = useState("Final Exam");

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setIsLoading(true);
        const res = await getAssessmentQuestionsApi(assessmentId);

        const fetchedQuestions = res.data?.data?.questions || [];
        setQuestions(fetchedQuestions);
        setAssessmentTitle(res.data?.data?.title || "Final Exam");
      } catch (error) {
        console.error("Gagal memuat soal ujian:", error);
        alert("Gagal memuat soal ujian. Pastikan ID valid.");
        navigate("/exam");
      } finally {
        setIsLoading(false);
      }
    };

    if (assessmentId) fetchQuestions();
  }, [assessmentId, navigate]);

  const currentQuestion = questions[activeQuestionIndex];
  const totalQuestionsCount = questions.length;

  const parsedOptions = currentQuestion?.options
    ? typeof currentQuestion.options === "string"
      ? JSON.parse(currentQuestion.options)
      : currentQuestion.options
    : {};

  const handleOptionSelect = (optionLetter) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionLetter,
    }));
  };

  const handleSubmitExam = async () => {
    const confirmSubmit = window.confirm(
      "Yakin ingin mengumpulkan lembar ujian ini? Pastikan semua soal telah terjawab.",
    );
    if (!confirmSubmit) return;

    try {
      setIsSubmitting(true);

      const answersPayload = Object.entries(userAnswers).map(([qId, ans]) => ({
        questionId: qId,
        userAnswer: ans,
      }));

      const res = await submitAssessmentApi(assessmentId, {
        answers: answersPayload,
      });

      const finalResultData = res.data?.data || res.data || res;

      const fetchedChapterId =
        finalResultData.chapterId ||
        finalResultData.chapter_id ||
        finalResultData.aiAnalysis?.chapterId;

      navigate("/exam/result", {
        state: {
          resultData: finalResultData,
          examTitle: assessmentTitle,
          explicitChapterId: fetchedChapterId,
        },
      });
    } catch (error) {
      console.error("Gagal mengirim ujian:", error);
      alert("Terjadi kesalahan saat mengirim jawaban.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div style={{ padding: "40px", textAlign: "center", fontWeight: "bold" }}>
        🔄 Menyiapkan Lembar Ujian Akhir...
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        Soal ujian belum tersedia di database.
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f4f6f9",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* HEADER EXAM TOP BAR */}
      <header
        style={{
          backgroundColor: "#fff",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <button
            onClick={() => {
              if (
                window.confirm(
                  "Yakin ingin keluar? Progres jawabanmu akan hilang.",
                )
              )
                navigate("/exam");
            }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <span
            style={{ fontWeight: "700", fontSize: "1.1rem", color: "#002d72" }}
          >
            {assessmentTitle}
          </span>
        </div>

        {/* Timer Ujian (Dibuat menjadi 60 Menit) */}
        <div style={{ color: "#002d72", fontWeight: "bold", fontSize: "1rem" }}>
          Time Remaining : <span style={{ color: "#ff3366" }}>60 : 00</span>
        </div>
      </header>

      {/* WADAH UTAMA KONTEN UJIAN */}
      <div style={{ display: "flex", flex: "1", overflow: "hidden" }}>
        {/* PANEL KIRI: GRID NAVIGASI NOMOR SOAL */}
        <aside
          style={{
            width: "280px",
            backgroundColor: "#fff",
            borderRight: "1px solid #e0e0e0",
            padding: "30px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            overflowY: "auto",
          }}
        >
          <h3
            style={{
              margin: 0,
              color: "#002d72",
              fontSize: "1rem",
              fontWeight: "700",
              borderBottom: "2px solid #f0f0f0",
              paddingBottom: "15px",
            }}
          >
            Daftar Soal
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            {questions.map((q, idx) => {
              const isAnswered = !!userAnswers[q.id];
              const isActive = activeQuestionIndex === idx;

              return (
                <button
                  key={q.id}
                  onClick={() => setActiveQuestionIndex(idx)}
                  style={{
                    height: "40px",
                    borderRadius: "8px",
                    border: isActive ? "2px solid #002d72" : "none",
                    backgroundColor: isActive
                      ? "#007bff"
                      : isAnswered
                        ? "#28a745"
                        : "#dcdcdc",
                    color: isActive || isAnswered ? "#fff" : "#777",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </aside>

        {/* PANEL KANAN: AREA LEMBAR SOAL UJIAN */}
        <div
          style={{
            flex: "1",
            padding: "40px 5%",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            overflowY: "auto",
          }}
        >
          <div>
            <span
              style={{
                color: "#007bff",
                fontSize: "0.85rem",
                fontWeight: "bold",
              }}
            >
              Topik: {currentQuestion.topic}
            </span>
            <h2
              style={{
                margin: "4px 0 0 0",
                color: "#002d72",
                fontSize: "1.25rem",
                fontWeight: "700",
              }}
            >
              Soal Nomor {activeQuestionIndex + 1}
            </h2>
          </div>

          {/* LEMBAR KERTAS SOAL */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              padding: "45px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.01)",
              border: "1px solid #f0f0f0",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <p
              style={{
                color: "#333",
                lineHeight: "1.8",
                fontSize: "1.05rem",
                fontWeight: "500",
                whiteSpace: "pre-line",
              }}
            >
              {currentQuestion.question}
            </p>

            {/* SELEKSI OPSI PILIHAN GANDA HORIZONTAL */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "15px",
                marginTop: "auto",
                flexWrap: "wrap",
              }}
            >
              {Object.entries(parsedOptions).map(([letter, text]) => {
                const isSelected = userAnswers[currentQuestion.id] === letter;

                return (
                  <div
                    key={letter}
                    onClick={() => handleOptionSelect(letter)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      cursor: "pointer",
                      padding: "12px 20px",
                      borderRadius: "12px",
                      border: isSelected
                        ? "2px solid #007bff"
                        : "1px solid #eee",
                      backgroundColor: isSelected ? "#e3f2fd" : "transparent",
                      transition: "all 0.2s",
                      flex: "1",
                      minWidth: "150px",
                    }}
                  >
                    <div
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: isSelected ? "#007bff" : "#f0f0f0",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: isSelected ? "#fff" : "#555",
                        fontSize: "0.85rem",
                        fontWeight: "bold",
                        transition: "all 0.2s",
                      }}
                    >
                      {letter}
                    </div>
                    <span
                      style={{
                        color: "#444",
                        fontSize: "0.95rem",
                        fontWeight: isSelected ? "600" : "500",
                      }}
                    >
                      {text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* NAVIGASI TOMBOL BAWAH */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              marginTop: "5px",
            }}
          >
            <button
              disabled={activeQuestionIndex === 0}
              onClick={() => {
                setActiveQuestionIndex(activeQuestionIndex - 1);
              }}
              style={{
                padding: "12px 40px",
                backgroundColor: "#002d72",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: activeQuestionIndex === 0 ? "not-allowed" : "pointer",
                opacity: activeQuestionIndex === 0 ? 0.5 : 1,
              }}
            >
              Previous
            </button>
            {activeQuestionIndex === totalQuestionsCount - 1 ? (
              <button
                disabled={isSubmitting}
                onClick={handleSubmitExam}
                style={{
                  padding: "12px 45px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit Exam"}
              </button>
            ) : (
              <button
                onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
                style={{
                  padding: "12px 45px",
                  backgroundColor: "#002d72",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamWorkspace;
