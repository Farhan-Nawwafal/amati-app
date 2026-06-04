import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { getSubChaptersByChapterApi } from "../services/coursesChapterService";
const CoursesSubChapters = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Tangkap ID Chapter dari URL browser (misal: 'CT00001' atau 'CT00002')
  const { chapterId } = useParams();
  const chapterName = location.state?.chapterName || chapterId;

  // State Manajemen Data Kurikulum Adaptif Realtime
  const [subChaptersList, setSubChaptersList] = useState([]);
  const [chapterInfo, setChapterInfo] = useState({
    title: "Chapter",
    name: "Loading...",
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [isPageLoading, setIsPageLoading] = useState(true);

  // 🔥 FETCH DATA SUB-CHAPTER ASLI DARI MY-SQL SEJAK HALAMAN DIBUKA
  useEffect(() => {
    const fetchSubChaptersData = async () => {
      try {
        setIsPageLoading(true);
        const response = await getSubChaptersByChapterApi(chapterId);

        // Ambil array list sub-chapter hasil query database backend
        const dbSubs = response.data?.data || [];
        setSubChaptersList(dbSubs);

        // Set informasi label Bab pembungkusnya secara otomatis
        if (dbSubs.length > 0) {
          setChapterInfo({
            title: `Chapter`,
            name: `Materi Terpilih`,
          });
        }
      } catch (error) {
        console.error("Gagal menjemput data sub-chapter database:", error);
        alert(
          "Gagal memuat sub-bab. Pastikan rute API server BE kamu menyala!",
        );
      } finally {
        setIsPageLoading(false);
      }
    };

    if (chapterId) {
      fetchSubChaptersData();
    }
  }, [chapterId]);

  // LOGIKA URBAN SEARCH INTERNAL: Filter sub-bab berdasarkan input ketikan siswa
  const filteredSubChapters = subChaptersList.filter((sub) =>
    sub.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (isPageLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          fontFamily: "'Inter', sans-serif",
          fontWeight: "bold",
          color: "#002d72",
        }}
      >
        🔄 Sedang memuat daftar sub-bab kurikulum matematika dari database...
      </div>
    );
  }

  if (!isPageLoading && subChaptersList.length === 0) {
    return (
      <div
        style={{
          padding: "40px",
          textAlign: "center",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <h3 style={{ color: "#dc3545" }}>
          ⚠️ Bab / Sub-Chapter Tidak Ditemukan!
        </h3>
        <button
          onClick={() => navigate("/courses")}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {" "}
          kembali ke katalog{" "}
        </button>
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
      <Sidebar activeMenu="Courses" />

      <main
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Topbar />

        <div
          style={{
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
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
              All Sub Chapter
            </h1>
            <p
              style={{
                margin: "5px 0 0 0",
                color: "#666",
                fontSize: "0.95rem",
              }}
            >
              Browse and manage your enrolled sub chapter
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "5px",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "350px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "15px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#aaa"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>

              {/* HUBUNGKAN SEARCH BOX DENGAN STATE QUERY */}
              <input
                type="text"
                placeholder="Search sub-chapter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 15px 12px 45px",
                  borderRadius: "12px",
                  border: "1px solid #e5e5e5",
                  backgroundColor: "#fff",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <button
                onClick={() => navigate("/courses")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#fff",
                  border: "1px solid #e5e5e5",
                  borderRadius: "10px",
                  cursor: "pointer",
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

              {/* LABEL BANNER BAB DINAMIS */}
              <div
                style={{
                  backgroundColor: "#e5e5e5",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  color: "#555",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                {chapterInfo.title}: {chapterName}
              </div>
            </div>
          </div>

          {/* 6. LOOPING MENGGUNAKAN DATA FILTERED SUB-CHAPTER HASIL API DB */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "10px",
            }}
          >
            {filteredSubChapters.map((sub, index) => {
              let currentProgress = sub.progress ?? 0;

              if (sub.status === "done") {
                currentProgress = 100;
              }

              return (
                <div
                  key={sub.id}
                  onClick={() => navigate(`/material/${chapterId}/${sub.id}`)}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.02)",
                    border: "1px solid #f0f0f0",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                >
                  {/* 💡 Warna Indikator Atas: Hijau jika 100%, Biru jika belum */}
                  <div
                    style={{
                      height: "6px",
                      backgroundColor: "#5c86ff",
                    }}
                  ></div>
                  <div
                    style={{
                      padding: "25px 30px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
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
                        Sub-Chapter {index + 1}
                      </span>
                      <h3
                        style={{
                          margin: "4px 0 0 0",
                          color: "#002d72",
                          fontSize: "1.2rem",
                          fontWeight: "700",
                        }}
                      >
                        {sub.name}
                      </h3>
                    </div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "0.8rem",
                          color: "#888",
                          marginBottom: "6px",
                        }}
                      >
                        <span>My Progress</span>
                        <span style={{ fontWeight: "bold", color: "#333" }}>
                          {currentProgress}%
                        </span>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: "8px",
                          backgroundColor: "#f0f0f0",
                          borderRadius: "10px",
                          overflow: "hidden",
                        }}
                      >
                        {/* Bar Progress*/}
                        <div
                          style={{
                            width: `${currentProgress}%`,
                            height: "100%",
                            backgroundColor: "#00b4d8",
                            borderRadius: "10px",
                            transition: "width 0.5s ease-in-out",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CoursesSubChapters;
