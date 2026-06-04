import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { getStudentExamListApi, } from "../services/examService";

const ExamList = () => {
  const navigate = useNavigate();

  const [exams, setExams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        setIsLoading(true);
        const response = await getStudentExamListApi();
        setExams(response.data?.data || []);
      } catch (error) {
        console.error("Gagal memuat daftar ujian akhir:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExams();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f4f6f9",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* SIDEBAR TUNGGAL (KIRI) */}
      <Sidebar activeMenu="Exam" />

      {/* MAIN CONTENT (KANAN) */}
      <main style={{ flex: "1", display: "flex", flexDirection: "column" }}>
        {/* HEADER TOP BAR */}
        <Topbar />

        {/* AREA UTAMA DAFTAR EXAM */}
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
              Examination
            </h1>
            <p
              style={{
                margin: "5px 0 0 0",
                color: "#666",
                fontSize: "0.95rem",
              }}
            >
              View and start your exam
            </p>
          </div>

          {/* STATE LOADING */}
          {isLoading ? (
            <div
              style={{ textAlign: "center", padding: "40px", color: "#666" }}
            >
              🔄 Memuat daftar ujian...
            </div>
          ) : exams.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "40px",
                color: "#666",
                backgroundColor: "#fff",
                borderRadius: "20px",
              }}
            >
              Belum ada ujian akhir bab yang tersedia untukmu.
            </div>
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "25px" }}
            >
              {exams.map((exam) => (
                <div
                  key={exam.id}
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
                  {/* Detail Informasi Ujian */}
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        color: "#002d72",
                        fontSize: "1.15rem",
                        fontWeight: "700",
                      }}
                    >
                      {exam.chapterTitle}
                    </h3>
                    <p
                      style={{
                        margin: "4px 0 0 0",
                        color: "#888",
                        fontSize: "0.95rem",
                        fontWeight: "500",
                      }}
                    >
                      {exam.examTitle}
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

                  {/* Metadata & Tombol Aksi */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "15px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "30px",
                        alignItems: "center",
                      }}
                    >
                      {/* Batas Waktu */}
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
                        <span>Due : {exam.dueDate}</span>
                      </div>

                      {/* Poin Maksimal */}
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
                        <span>{exam.points} points</span>
                      </div>
                    </div>

                    {/* Tombol Aksi (Dinamis berdasarkan status penyelesaian) */}
                    <div>
                      {exam.isCompleted ? (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "700",
                              color: "#28a745",
                              fontSize: "1.05rem",
                            }}
                          >
                            Skor: {exam.score}
                          </span>
                          <button
                            disabled
                            style={{
                              padding: "12px 25px",
                              backgroundColor: "#e9ecef",
                              color: "#6c757d",
                              border: "1px solid #ced4da",
                              borderRadius: "10px",
                              fontSize: "0.9rem",
                              fontWeight: "bold",
                              cursor: "not-allowed",
                            }}
                          >
                            Completed
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => navigate(`/exam/workspace/${exam.id}`)}
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
                            transition: "background-color 0.2s",
                          }}
                          onMouseOver={(e) =>
                            (e.target.style.backgroundColor = "#0056b3")
                          }
                          onMouseOut={(e) =>
                            (e.target.style.backgroundColor = "#007bff")
                          }
                        >
                          Start Exam
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ExamList;
