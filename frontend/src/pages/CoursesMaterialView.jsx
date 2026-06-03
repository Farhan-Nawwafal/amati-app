import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSubChaptersByChapterApi, completeSubChapterApi } from "../services/coursesChapterService";

const CoursesMaterialView = () => {
  const navigate = useNavigate();

  // 1. Tangkap 3 koordinat parameter dinamis dari URL bar browser
  const { chapterId, subChapterId, topicId } = useParams();

  // 💡 STATE MANAJEMEN DATA DINAMIS DATABASE
  const [dynamicChaptersData, setDynamicChaptersData] = useState([]);
  const [isPageLoading, setIsPageLoading] = useState(true);

  // 🔥 EFFECT FETCH DATA DINAMIS REALTIME DARI MYSQL
  useEffect(() => {
    const loadRealtimeMaterial = async () => {
      try {
        setIsPageLoading(true);
        const response = await getSubChaptersByChapterApi(chapterId);
        const dbSubChapters = response.data?.data || [];

        // 💡 STRATEGI ADAPTER: Bungkus data DB agar bentuknya serasi dengan UI statis (.subChapters & .topics)
        const formattedChapter = {
          id: chapterId,
          title: `Chapter Detail`,
          name: `Materi Kelas VII`,
          subChapters: dbSubChapters.map((sub) => ({
            id: sub.id,
            title: `Sub Chapter`,
            name: sub.name,
            progress: sub.progress || 0,
            // Membuat virtual topics agar logic .map milik temanmu tetap bekerja lancar
            topics: [
              {
                id: sub.id, // topicId disamakan dengan subChapterId agar otomatis aktif saat sub-bab diklik
                name: sub.name,
                content: sub.content,
              },
            ],
          })),
        };

        setDynamicChaptersData([formattedChapter]);
      } catch (error) {
        console.error("Gagal menjemput data materi workspace:", error);
      } finally {
        setIsPageLoading(false);
      }
    };

    if (chapterId) {
      loadRealtimeMaterial();
    }
  }, [chapterId]);

  // 2. Cari data kurikulum secara presisi berdasarkan parameter URL tersebut (Membaca State Dinamis)
  const currentChapter = dynamicChaptersData.find((ch) => ch.id === chapterId);
  const currentSubChapter = currentChapter?.subChapters.find(
    (sub) => sub.id === subChapterId,
  );
  const currentTopic = currentSubChapter?.topics.find(
    (top) => top.id === topicId || top.id === subChapterId,
  );
  const isCurrentSubDone = currentSubChapter?.progress === 100;

  // State kontrol buka-tutup Sidebar Kanan (Hamburger Menu Toggle)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // State Accordion untuk panel kanan
  const [openAccordion, setOpenAccordion] = useState(subChapterId);

  const handleMarkAsDone = async () => {
    try {
      await completeSubChapterApi(subChapterId);
      alert("Mantap! Materi selesai dipelajari.");
      // Refresh data agar checklist sidebar otomatis jadi hijau (100%)
      window.location.reload(); // Atau panggil ulang fungsi fetch API-mu
    } catch (error) {
      alert("Gagal menyelesaikan materi.");
    }
  };

  // 3. KUNCI SINKRONISASI: Jika URL subChapterId berubah, otomatis buka folder accordion yang sesuai!
  useEffect(() => {
    if (subChapterId) {
      setOpenAccordion(subChapterId);
    }
  }, [subChapterId]);

  // Penahan Loading Screen agar tidak crash properti undefined saat fetching database
  if (isPageLoading) {
    return (
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          fontFamily: "'Inter', sans-serif",
          fontWeight: "bold",
        }}
      >
        🔄 Sedang menyinkronkan lembar materi bacaan dengan database AMATI...
      </div>
    );
  }

  // Antisipasi jika data belum diisi di database agar tidak crash
  if (!currentChapter || !currentSubChapter || !currentTopic) {
    return (
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <h3 style={{ color: "#ff3366" }}>
          Materi atau Parameter ID Tidak Ditemukan!
        </h3>
        <p style={{ color: "#666" }}>
          Pastikan Anda telah mengisi materi content di database untuk ID:{" "}
          {subChapterId}
        </p>
        <button
          onClick={() => navigate("/courses")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Kembali ke Kursus
        </button>
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
      {/* ================= HEADER TOP BAR ================= */}
      <header
        style={{
          backgroundColor: "#fff",
          padding: "15px 40px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <button
          onClick={() => navigate(`/courses/${chapterId}`)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "none",
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "pointer",
            width: "35px",
            height: "35px",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#333"
            strokeWidth="2.5"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        <span
          style={{ fontWeight: "700", fontSize: "1.1rem", color: "#002d72" }}
        >
          {currentChapter.title} - {currentChapter.name}
        </span>
      </header>

      {/* AREA UTAMA WORKSPACE */}
      <div style={{ display: "flex", flex: "1", overflow: "hidden" }}>
        {/* ================= PANEL KIRI: AREA BACA MATERI (DINAMIS 100%) ================= */}
        <div
          style={{
            flex: "1",
            padding: "40px",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
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
                {currentSubChapter.title}
              </span>
              <h2
                style={{
                  margin: "4px 0 0 0",
                  color: "#002d72",
                  fontSize: "1.25rem",
                  fontWeight: "700",
                }}
              >
                {currentSubChapter.name}
              </h2>
            </div>

            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #e5e5e5",
                borderRadius: "8px",
                padding: "10px",
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
                stroke="#007bff"
                strokeWidth="2.5"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* KERTAS PUTIH ISI KONTEN */}
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              padding: "40px",
              border: "1px solid #f0f0f0",
              boxShadow: "0 4px 20px rgba(0,0,0,0.01)",
            }}
          >
            <p
              style={{
                color: "#555",
                lineHeight: "1.8",
                fontSize: "0.95rem",
                margin: 0,
                whiteSpace: "pre-line",
              }}
            >
              {currentTopic.content}
            </p>
            <div
              style={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                onClick={handleMarkAsDone}
                disabled={currentSubChapter.progress === 100} // Tombol mati jika sudah 100%
                style={{
                  padding: "12px 25px",
                  backgroundColor:
                    currentSubChapter.progress === 100 ? "#28a745" : "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor:
                    currentSubChapter.progress === 100 ? "not-allowed" : "pointer",
                }}
              >
                {currentSubChapter.progress === 100
                  ? "✔️ Materi Selesai"
                  : "Tandai Selesai"}
              </button>
            </div>
          </div>
        </div>

        {/* ================= PANEL KANAN: NAVIGATION SIDEBAR (ACCORDION DINAMIS) ================= */}
        <aside
          style={{
            width: isSidebarOpen ? "320px" : "0px",
            backgroundColor: "#fff",
            borderLeft: isSidebarOpen ? "1px solid #e0e0e0" : "none",
            display: "flex",
            flexDirection: "column",
            transition: "width 0.3s ease",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "25px", width: "320px" }}>
            <h3
              style={{
                margin: "0 0 20px 0",
                color: "#002d72",
                fontSize: "1.1rem",
                fontWeight: "700",
              }}
            >
              {currentChapter.title} - {currentChapter.name}
            </h3>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {/* Loop Accordion Sub Chapters Otomatis */}
              {currentChapter.subChapters.map((sub) => {
                const isCurrentOpen = openAccordion === sub.id;
                return (
                  <div
                    toggle-target="row"
                    key={sub.id}
                    style={{
                      borderBottom: "1px solid #f0f0f0",
                      paddingBottom: "10px",
                    }}
                  >
                    {/* Header Klik Sub-Bab */}
                    <div
                      onClick={() =>
                        setOpenAccordion(isCurrentOpen ? null : sub.id)
                      }
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        cursor: "pointer",
                        padding: "10px 0",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: "700",
                          color: isCurrentOpen ? "#007bff" : "#555",
                          textAlign: "left",
                        }}
                      >
                        {sub.name}
                      </span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={isCurrentOpen ? "#007bff" : "#ccc"}
                        strokeWidth="2.5"
                        style={{
                          transform: isCurrentOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.2s",
                        }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>

                    {/* Daftar Judul Topik Checklist Kecil */}
                    {isCurrentOpen && sub.topics && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                          padding: "10px 0 5px 15px",
                        }}
                      >
                        {sub.topics.map((topic) => {
                          const isTopicActive =
                            topicId === topic.id || subChapterId === sub.id;
                          return (
                            <div
                              key={topic.id}
                              // Klik topik baru otomatis memperbarui URL bar dinamis murni database
                              onClick={() =>
                                navigate(`/material/${chapterId}/${sub.id}`)
                              }
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                cursor: "pointer",
                              }}
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke={
                                  sub.progress === 100
                                    ? "#28a745"
                                    : isTopicActive
                                      ? "#007bff"
                                      : "#ccc"
                                }
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                              </svg>
                              <span
                                style={{
                                  fontSize: "0.85rem",
                                  fontWeight: isTopicActive ? "700" : "500",
                                  color: isTopicActive ? "#007bff" : "#666",
                                  textAlign: "left",
                                }}
                              >
                                {topic.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CoursesMaterialView;
