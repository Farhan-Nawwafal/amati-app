import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import {
  getCoursesChapters,
  enrollChapterApi,
} from "../services/coursesChapterService";

const Courses = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const [dbChaptersList, setDbChaptersList] = useState([]);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [enrollLoadingId, setEnrollLoadingId] = useState(null); // Efek loading tombol individual

  // Fungsi fetch data katalog pembelajar dari database
  const loadStudentCatalog = async () => {
    try {
      setIsPageLoading(true);
      const response = await getCoursesChapters();
      const fetchedCatalog = response.data?.data || [];
      setDbChaptersList(fetchedCatalog);
    } catch (error) {
      console.error("Gagal memuat katalog kurikulum adaptif:", error);
      alert("Terjadi gangguan koneksi saat mengambil katalog materi.");
    } finally {
      setIsPageLoading(false);
    }
  };

  useEffect(() => {
    loadStudentCatalog();
  }, []);

  // LOGIKA KLIK TOMBOL AMBIL KELAS
  const handleEnrollChapter = async (e, chapterId) => {
    e.preventDefault();
    e.stopPropagation(); // Mencegah efek klik kartu (navigate) terpicu otomatis

    const confirmEnroll = window.confirm(
      "Apakah kamu yakin ingin mengambil kelas bab materi ini?",
    );
    if (!confirmEnroll) return;

    try {
      setEnrollLoadingId(chapterId); // Nyalakan loading khusus di tombol ini

      const payload = { chapterId };
      await enrollChapterApi(payload);

      alert(
        "Sukses: Kelas berhasil diambil! Jalur progres belajarmu sudah aktif.",
      );

      // Muat ulang data katalog dari BE agar status "Not Started" berubah menjadi "In-Progress" asli database
      await loadStudentCatalog();
    } catch (error) {
      console.error("Gagal melakukan enrollment kelas:", error);
      alert(
        error.response?.data?.message || "Gagal mengambil kelas. Coba lagi.",
      );
    } finally {
      setEnrollLoadingId(null);
    }
  };

  // Logika Filter Pencarian
  const filteredChapters = dbChaptersList.filter((chapter) => {
    const matchesFilter =
      activeFilter === "All" || chapter.status === activeFilter;
    const matchesSearch =
      chapter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chapter.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
        🔄 Menyinkronkan katalog silabus Matematika AMATI...
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
      {/* SIDEBAR TUNGGAL */}
      <Sidebar activeMenu="Courses" />

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
        {/* TOP BAR / HEADER MODULAR */}
        <Topbar />

        {/* KONTEN ALL COURSES */}
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
              All Courses
            </h1>
            <p
              style={{
                margin: "5px 0 0 0",
                color: "#666",
                fontSize: "0.95rem",
              }}
            >
              Browse and manage your enrolled courses
            </p>
          </div>

          {/* BAR FILTER DAN URBAN SEARCH INTERNAL */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >
            {/* Inner Search Card */}
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>

              {/* 3. HUBUNGKAN VALUE DAN ONCHANGE PADA INPUT PENCARIAN */}
              <input
                type="text"
                placeholder="Search or type"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Mengupdate kata kunci setiap kali siswa mengetik
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

            {/* Tombol-Tombol Kategori Progress */}
            <div style={{ display: "flex", gap: "10px" }}>
              {["All", "Not Started", "In-Progress", "Done"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    padding: "10px 25px",
                    borderRadius: "12px",
                    border: "none",
                    backgroundColor:
                      activeFilter === filter ? "#007bff" : "#e5e5e5",
                    color: activeFilter === filter ? "#fff" : "#555",
                    fontWeight: activeFilter === filter ? "bold" : "normal",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    transition: "all 0.2s ease",
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* GRID CARD CHAPTER */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "30px",
              marginTop: "10px",
            }}
          >
            {filteredChapters.map((chapter) => {
              // Cek status dengan mengubahnya ke huruf kecil semua tanpa tanda spasi/strip
              const cleanStatus = chapter.status
                ?.toLowerCase()
                .replace("-", "")
                .trim();

              // Kelas HANYA dikunci jika teks statusnya murni mendeteksi kata "not started"
              const isClassLocked = cleanStatus === "not started";
              return (
                <div
                  key={chapter.id}
                  onClick={() => {
                    if (isClassLocked) {
                      alert(
                        "⚠️ Akses Ditolak: Silakan klik tombol 'Ambil Kelas' terlebih dahulu untuk mengaktifkan modul belajar bab ini.",
                      );
                    } else {
                      navigate(`/courses/${chapter.id}`, {
                        state: { chapterName: chapter.name },
                      });
                    }
                  }}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.03)",
                    border: "1px solid #f0f0f0",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                >
                  {/* Bagian Atas: Wadah Thumbnail Gambar */}
                  <div
                    style={{
                      height: "160px",
                      backgroundColor: "#5b86e5",
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        color: "#fff",
                        textAlign: "center",
                        padding: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.8rem",
                          display: "block",
                          opacity: 0.8,
                        }}
                      >
                        {chapter.title}
                      </span>
                      <span style={{ fontSize: "1.4rem" }}>{chapter.name}</span>
                    </div>
                  </div>

                  {/* Bagian Bawah: Informasi Detail Teks */}
                  <div
                    style={{
                      padding: "20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
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
                        {chapter.title}
                      </span>
                      <h3
                        style={{
                          margin: "4px 0 0 0",
                          color: "#002d72",
                          fontSize: "1.15rem",
                          fontWeight: "700",
                        }}
                      >
                        {chapter.name}
                      </h3>
                    </div>

                    {/* Progress Bar Line (Persen %) */}
                    <div style={{ marginTop: "5px" }}>
                      {isClassLocked ? (
                        /* 💡 SEPAKAT REGISTRASI: Tampilkan tombol enroll jika kelas belum diambil */
                        <button
                          onClick={(e) => handleEnrollChapter(e, chapter.id)}
                          disabled={enrollLoadingId === chapter.id}
                          style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#ff7a00",
                            color: "#fff",
                            border: "none",
                            borderRadius: "10px",
                            fontWeight: "bold",
                            fontSize: "0.9rem",
                            cursor:
                              enrollLoadingId === chapter.id
                                ? "not-allowed"
                                : "pointer",
                            boxShadow: "0 4px 12px rgba(255, 122, 0, 0.2)",
                          }}
                        >
                          {enrollLoadingId === chapter.id
                            ? "Enrolling..."
                            : "📥 Ambil Kelas"}
                        </button>
                      ) : (
                        /* Tampilkan progres bar asli database jika kelas sudah resmi diambil */
                        <>
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
                              {chapter.progress}%
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
                            <div
                              style={{
                                width: `${chapter.progress}%`,
                                height: "100%",
                                backgroundColor: "#00b4d8",
                                borderRadius: "10px",
                              }}
                            ></div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Notifikasi jika hasil pencarian kosong */}
            {filteredChapters.length === 0 && (
              <div
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "40px",
                  color: "#aaa",
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                Kursus atau bab dengan kata kunci "{searchQuery}" tidak
                ditemukan.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Courses;
