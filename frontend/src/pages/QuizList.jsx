// src/pages/QuizList.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoAmati from "/src/assets/logo2.png";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { getStudentQuizListApi } from "../services/quizService";

const QuizList = () => {
  const navigate = useNavigate();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const [dbQuizList, setDbQuizList] = useState([]);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const loadQuizCatalog = async () => {
      try {
        setIsPageLoading(true);
        const response = await getStudentQuizListApi();
        setDbQuizList(response.data?.data || []);
      } catch (error) {
        console.error("Gagal memuat daftar kuis adaptif:", error);
        alert("Terjadi kendala saat mengambil daftar kuis.");
      } finally {
        setIsPageLoading(false);
      }
    };
    loadQuizCatalog();
  }, []);

  if (isPageLoading) {
    return (
      <div
        style={{
          padding: "40px",
          fontFamily: "'Inter', sans-serif",
          fontWeight: "bold",
          textAlignment: "center",
        }}
      >
        🔄 Menyinkronkan daftar kuis evaluasi dengan database...
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f4f6f9",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Sidebar activeMenu="Quiz" />

      {/* MAIN CONTENT (KANAN) */}
      <main style={{ flex: "1", display: "flex", flexDirection: "column" }}>
        {/* HEADER TOP BAR */}
        <Topbar />

        {/* AREA UTAMA DAFTAR QUIZ */}
        <div
          style={{
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            overflowY: "auto",
            flex: "1",
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                color: "#002d72",
                fontSize: "1.8rem",
                fontWeight: "700",
              }}
            >
              Quiz
            </h1>
            <p
              style={{
                margin: "5px 0 0 0",
                color: "#666",
                fontSize: "0.95rem",
              }}
            >
              View and start your quiz
            </p>
          </div>

          {/* LIST DARI KARTU KUIS (VERTICAL CONTAINER) */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "25px" }}
          >
            {dbQuizList.map((quiz) => (
              <div
                key={quiz.id}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  padding: "30px 40px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.02)",
                  border: "1px solid #f0f0f0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                {/* Baris Judul & Deskripsi Sub-Bab */}
                <div>
                  <h3
                    style={{
                      margin: 0,
                      color: "#002d72",
                      fontSize: "1.15rem",
                      fontWeight: "700",
                    }}
                  >
                    {quiz.chapterTitle}
                  </h3>
                  <p
                    style={{
                      margin: "4px 0 0 0",
                      color: "#aaa",
                      fontSize: "0.9rem",
                    }}
                  >
                    {quiz.subChapterTitle}
                  </p>
                </div>

                <hr
                  style={{
                    border: "none",
                    height: "1px",
                    backgroundColor: "#f5f5f5",
                    margin: 0,
                  }}
                />

                {/* Baris Informasi Metadata Potongan Bawah */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "15px",
                  }}
                >
                  {/* Kumpulan Ikon Informasi */}
                  <div
                    style={{
                      display: "flex",
                      gap: "30px",
                      alignItems: "center",
                    }}
                  >
                    {/* Metadata Batas Waktu */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#666",
                        fontSize: "0.9rem",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#888"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <span>Due : {quiz.dueDate}</span>
                    </div>

                    {/* Metadata Nilai Poin Maksimal */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#666",
                        fontSize: "0.9rem",
                      }}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#888"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                      </svg>
                      <span>{quiz.points} points</span>
                    </div>

                    {/* Tanda Skor Khusus untuk Kuis yang Sudah Dikerjakan */}
                    {quiz.isCompleted && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "#2ec4b6",
                          fontSize: "0.9rem",
                          fontWeight: "600",
                        }}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#2ec4b6"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>Score : {quiz.score}</span>
                      </div>
                    )}
                  </div>

                  {/* Kondisional Tombol Sesuai Status Penyelesaian Kuis */}
                  <div>
                    {!quiz.isCompleted ? (
                      <button
                        onClick={() => navigate(`/quiz/workspace/${quiz.id}`)}
                        style={{
                          padding: "12px 35px",
                          backgroundColor: "#007bff",
                          color: "#fff",
                          border: "none",
                          borderRadius: "10px",
                          fontSize: "0.9rem",
                          fontWeight: "bold",
                          cursor: "pointer",
                          boxShadow: "0 4px 12px rgba(0,123,255,0.15)",
                        }}
                      >
                        Submit Quiz
                      </button>
                    ) : (
                      <button
                        onClick={() =>
                          alert(
                            "Melihat riwayat lembar jawaban kuis yang lalu...",
                          )
                        } // Nanti ini bisa diarahkan ke halaman review kuis jika ada
                        style={{
                          padding: "12px 35px",
                          backgroundColor: "#fff",
                          color: "#555",
                          border: "1px solid #dcdcdc",
                          borderRadius: "10px",
                          fontSize: "0.9rem",
                          fontWeight: "500",
                          cursor: "pointer",
                        }}
                      >
                        View Quiz
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Kalo kuis masih kosong */}
            {dbQuizList.length === 0 && (
              <div
                style={{
                  textAlign: "center",
                  padding: "60px 20px",
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  border: "1px dashed #e5e5e5",
                  color: "#888",
                }}
              >
                <h3 style={{ margin: "0 0 10px 0", color: "#555" }}>
                  Belum Ada Kuis Tersedia
                </h3>
                <p style={{ margin: 0, fontSize: "0.95rem" }}>
                  Kamu belum mendaftar ke kelas mana pun. Silakan ambil materi
                  kelas di menu Courses terlebih dahulu.
                </p>
                <button
                  onClick={() => navigate("/courses")}
                  style={{
                    marginTop: "20px",
                    padding: "10px 25px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Lihat Katalog Kelas
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizList;
