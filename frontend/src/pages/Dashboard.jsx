// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
// import AiReportCard from "../components/AiReportCard";
import { getDashboardSummaryApi } from "../services/dashboardService";

const Dashboard = () => {
  const storedUser = localStorage.getItem("user");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const currentUserName = userData?.name || "Siswa AMATI";
  const currentUserId = userData?.id || null;

  // State menampung data statistik dari database backend
  const [summaryData, setSummaryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardSummary = async () => {
      try {
        const response = await getDashboardSummaryApi();
        setSummaryData(response.data?.data);
      } catch (error) {
        console.error("Gagal memuat ringkasan statistik dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardSummary();
  }, []);

  const totalSubChaptersRequired = summaryData?.sub_chapters?.taken || 0;
  const doneSubChapters = summaryData?.sub_chapters?.done || 0;

  // Hitung persentase pengerjaan (amankan dengan batas minimum 0% dan maksimum 100%)
  const progressPercentage =
    totalSubChaptersRequired > 0
      ? Math.min(
          Math.round((doneSubChapters / totalSubChaptersRequired) * 100),
          100,
        )
      : 0;

  // Dapatkan tanggal hari ini untuk memperbarui informasi kartu visual
  const currentDateString = new Date()
    .toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })
    .toLowerCase();

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f4f6f9",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* SIDEBAR COMPONENT */}
      <Sidebar activeMenu="Dashboard" />

      {/* MAIN CONTENT (KANAN) */}
      <main
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* REUSABLE TOP BAR */}
        <Topbar />

        {/* KONTEN UTAMA DASHBOARD */}
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
          {/* Welcome Text */}
          <div>
            <h1 style={{ margin: 0, color: "#002d72", fontSize: "2rem" }}>
              Welcome Back, {currentUserName}
            </h1>
            <p style={{ margin: "5px 0 0 0", color: "#666" }}>
              Take a look your learning progress for today
            </p>
          </div>

          {/* GRID TATA LETAK UTAMA */}
          <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
            {/* KOLOM KIRI (Metrik & Progress Bar) */}
            <div
              style={{
                flex: "2",
                minWidth: "500px",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              {/* Box Chapters */}
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "25px",
                  borderRadius: "20px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 20px 0",
                    fontSize: "1.1rem",
                    color: "#333",
                    fontWeight: "600",
                  }}
                >
                  Chapters
                </h3>
                <div style={{ display: "flex", gap: "15px" }}>
                  {/* Card Chapters Taken */}
                  <div
                    style={{
                      flex: "1",
                      padding: "20px 15px",
                      borderRadius: "15px",
                      border: "1px solid #f0f0f0",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#007bff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginBottom: "8px" }}
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <p
                      style={{
                        margin: "5px 0",
                        fontSize: "0.8rem",
                        color: "#888",
                      }}
                    >
                      Chapters Taken
                    </p>
                    <h2
                      style={{
                        margin: 0,
                        color: "#002d72",
                        fontSize: "1.8rem",
                        fontWeight: "700",
                      }}
                    >
                      {loading ? "..." : (summaryData?.chapters?.taken ?? 0)}
                    </h2>
                    <p
                      style={{
                        margin: "5px 0 0 0",
                        fontSize: "0.7rem",
                        color: "#bbb",
                      }}
                    >
                      {currentDateString}
                    </p>
                  </div>

                  {/* Card Chapters In Progress */}
                  <div
                    style={{
                      flex: "1",
                      padding: "20px 15px",
                      borderRadius: "15px",
                      border: "1px solid #f0f0f0",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#007bff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginBottom: "8px" }}
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <p
                      style={{
                        margin: "5px 0",
                        fontSize: "0.8rem",
                        color: "#888",
                      }}
                    >
                      Chapters In Progress
                    </p>
                    <h2
                      style={{
                        margin: 0,
                        color: "#002d72",
                        fontSize: "1.8rem",
                        fontWeight: "700",
                      }}
                    >
                      {loading
                        ? "..."
                        : (summaryData?.chapters?.in_progress ?? 0)}
                    </h2>
                    <p
                      style={{
                        margin: "5px 0 0 0",
                        fontSize: "0.7rem",
                        color: "#bbb",
                      }}
                    >
                      {currentDateString}
                    </p>
                  </div>

                  {/* Card Chapters Done */}
                  <div
                    style={{
                      flex: "1",
                      padding: "20px 15px",
                      borderRadius: "15px",
                      border: "1px solid #f0f0f0",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#007bff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginBottom: "8px" }}
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <p
                      style={{
                        margin: "5px 0",
                        fontSize: "0.8rem",
                        color: "#888",
                      }}
                    >
                      Chapters Done
                    </p>
                    <h2
                      style={{
                        margin: 0,
                        color: "#002d72",
                        fontSize: "1.8rem",
                        fontWeight: "700",
                      }}
                    >
                      {loading ? "..." : (summaryData?.chapters?.done ?? 0)}
                    </h2>
                    <p
                      style={{
                        margin: "5px 0 0 0",
                        fontSize: "0.7rem",
                        color: "#bbb",
                      }}
                    >
                      {currentDateString}
                    </p>
                  </div>
                </div>
              </div>

              {/* Box Sub Chapters */}
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "25px",
                  borderRadius: "20px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 20px 0",
                    fontSize: "1.1rem",
                    color: "#333",
                    fontWeight: "600",
                  }}
                >
                  Sub Chapters
                </h3>
                <div style={{ display: "flex", gap: "15px" }}>
                  {/* Sub Chapters Taken */}
                  <div
                    style={{
                      flex: "1",
                      padding: "20px 15px",
                      borderRadius: "15px",
                      border: "1px solid #f0f0f0",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#007bff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginBottom: "8px" }}
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <p
                      style={{
                        margin: "5px 0",
                        fontSize: "0.8rem",
                        color: "#888",
                      }}
                    >
                      Sub Chapters Taken
                    </p>
                    <h2
                      style={{
                        margin: 0,
                        color: "#002d72",
                        fontSize: "1.8rem",
                        fontWeight: "700",
                      }}
                    >
                      {loading
                        ? "..."
                        : (summaryData?.sub_chapters?.taken ?? 0)}
                    </h2>
                    <p
                      style={{
                        margin: "5px 0 0 0",
                        fontSize: "0.7rem",
                        color: "#bbb",
                      }}
                    >
                      {currentDateString}
                    </p>
                  </div>

                  {/* Sub Chapters In Progress */}
                  <div
                    style={{
                      flex: "1",
                      padding: "20px 15px",
                      borderRadius: "15px",
                      border: "1px solid #f0f0f0",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#007bff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginBottom: "8px" }}
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <p
                      style={{
                        margin: "5px 0",
                        fontSize: "0.8rem",
                        color: "#888",
                      }}
                    >
                      Sub Chapters In Progress
                    </p>
                    <h2
                      style={{
                        margin: 0,
                        color: "#002d72",
                        fontSize: "1.8rem",
                        fontWeight: "700",
                      }}
                    >
                      {loading
                        ? "..."
                        : (summaryData?.sub_chapters?.in_progress ?? 0)}
                    </h2>
                    <p
                      style={{
                        margin: "5px 0 0 0",
                        fontSize: "0.7rem",
                        color: "#bbb",
                      }}
                    >
                      {currentDateString}
                    </p>
                  </div>

                  {/* Sub Chapters Done */}
                  <div
                    style={{
                      flex: "1",
                      padding: "20px 15px",
                      borderRadius: "15px",
                      border: "1px solid #f0f0f0",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#007bff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ marginBottom: "8px" }}
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <p
                      style={{
                        margin: "5px 0",
                        fontSize: "0.8rem",
                        color: "#888",
                      }}
                    >
                      Sub Chapters Done
                    </p>
                    <h2
                      style={{
                        margin: 0,
                        color: "#002d72",
                        fontSize: "1.8rem",
                        fontWeight: "700",
                      }}
                    >
                      {loading ? "..." : (summaryData?.sub_chapters?.done ?? 0)}
                    </h2>
                    <p
                      style={{
                        margin: "5px 0 0 0",
                        fontSize: "0.7rem",
                        color: "#bbb",
                      }}
                    >
                      {currentDateString}
                    </p>
                  </div>
                </div>
              </div>

              {/* Box Chapter Progress */}
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "25px",
                  borderRadius: "20px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.1rem",
                    color: "#333",
                  }}
                >
                  Chapter Progress
                </h3>

                {/* Looping Progress Bar Dinamis dari Backend */}
                {loading ? (
                  <p style={{ fontSize: "0.9rem", color: "#888", margin: 0 }}>
                    Memuat progress...
                  </p>
                ) : summaryData?.chapter_progress &&
                  summaryData.chapter_progress.length > 0 ? (
                  summaryData.chapter_progress.map((chapter, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "0.9rem",
                          color: "#555",
                        }}
                      >
                        <span style={{ fontWeight: "500" }}>
                          {chapter.title}
                        </span>
                        <span style={{ fontWeight: "bold", color: "#333" }}>
                          {chapter.progress}%
                        </span>
                      </div>
                      {/* Progress Bar Container */}
                      <div
                        style={{
                          width: "100%",
                          height: "10px",
                          backgroundColor: "#f0f0f0",
                          borderRadius: "10px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${chapter.progress}%`,
                            height: "100%",
                            backgroundColor:
                              chapter.progress === 100 ? "#00b4d8" : "#ff7a00",
                            borderRadius: "10px",
                            transition: "width 0.5s ease-out",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p style={{ fontSize: "0.9rem", color: "#888", margin: 0 }}>
                    Belum ada kelas yang dipelajari.
                  </p>
                )}
              </div>
            </div>

            {/* KOLOM KANAN (Aktivitas Terbaru & Laporan AI) */}
            <div
              style={{
                flex: "1",
                minWidth: "300px",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              {/* KARTU REKOMENDASI AI AMATI */}
              {/* <AiReportCard userId={currentUserId} /> */}

              {/* 💡 RECENT ACTIVITY - CHAPTER DINAMIS */}
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "25px",
                  borderRadius: "20px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#333" }}>
                  Recent Activity - Chapter
                </h3>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "12px",
                    border: "1px solid #f8f9fa",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "40px",
                      backgroundColor: "#007bff",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    CH
                  </div>
                  <div>
                    <h4
                      style={{
                        margin: 0,
                        fontSize: "0.9rem",
                        color: "#002d72",
                      }}
                    >
                      {loading
                        ? "Memuat..."
                        : summaryData?.recent_chapter?.title ||
                          "Belum ada aktivitas bab"}
                    </h4>
                    <p
                      style={{
                        margin: "3px 0 0 0",
                        fontSize: "0.75rem",
                        color: "#aaa",
                      }}
                    >
                      {summaryData?.recent_chapter?.status || "-"}
                    </p>
                  </div>
                </div>
              </div>

              {/* 💡 RECENT ACTIVITY - SUB CHAPTER DINAMIS */}
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "25px",
                  borderRadius: "20px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#333" }}>
                  Recent Activity - Sub Chapter
                </h3>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    padding: "10px",
                    borderRadius: "12px",
                    border: "1px solid #f8f9fa",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "40px",
                      backgroundColor: "#007bff",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    SUB
                  </div>
                  <div>
                    <h4
                      style={{ margin: 0, fontSize: "0.85rem", color: "#333" }}
                    >
                      {loading
                        ? "Memuat..."
                        : summaryData?.recent_sub_chapter?.title ||
                          "Belum ada aktivitas sub-bab"}
                    </h4>
                    <p
                      style={{
                        margin: "3px 0 0 0",
                        fontSize: "0.75rem",
                        color: "#aaa",
                      }}
                    >
                      {summaryData?.recent_sub_chapter?.status || "-"}
                    </p>
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

export default Dashboard;
