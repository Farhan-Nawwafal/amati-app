import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoAmati from "/src/assets/logo2.png";
import { createChapter, getChapters } from "../services/chapterService";

const AdminCourses = () => {
  const navigate = useNavigate();

  const [chapters, setChapters] = useState([]);
  const [subChapters, setSubChapters] = useState([]);

  const [selectedChapterId, setSelectedChapterId] = useState(null);
  const [newChapterName, setNewChapterName] = useState("");
  const [newSubName, setNewSubName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const loadAllChapters = async () => {
      try {
        setIsPageLoading(true);
        const response = await getChapters();

        // Ambil data array hasil query DB backend: response.data.data
        const dbChapters = response.data?.data || [];

        setChapters(dbChapters);
      } catch (error) {
        console.error("Gagal memuat daftar bab dari server:", error);
        alert(
          "Gagal mengambil data kurikulum. Pastikan BE server kamu menyala!",
        );
      } finally {
        setIsPageLoading(false);
      }
    };

    loadAllChapters();
  }, []);

  // Mencari data objek Bab yang sedang aktif diklik
  const currentActiveChapter = chapters.find(
    (ch) => ch.id === selectedChapterId,
  );
  // 2. LOGIKA TAMBAH CHAPTER DENGAN INTEGRASI API EXPRESS BE
  const handleAddChapter = async (e) => {
    e.preventDefault();
    if (!newChapterName.trim()) return;

    try {
      setIsSubmitting(true);

      const payloadData = {
        name: newChapterName.trim(),
      };

      const response = await createChapter(payloadData);
      const savedChapter = response.data?.data;

      // 💡 KUNCI FIX: Samakan seluruh nama properti menjadi total_sub_chapter sesuai skema prisma
      setChapters([
        ...chapters,
        {
          id: savedChapter.id,
          name: savedChapter.name,
          total_sub_chapter: savedChapter.total_sub_chapter || 0,
        },
      ]);

      setNewChapterName("");
      alert("Sukses: Chapter baru berhasil disimpan ke database!");
    } catch (error) {
      console.error("Gagal menambahkan chapter:", error);
      const errMsg =
        error.response?.data?.message ||
        "Terjadi kegagalan koneksi saat menyimpan chapter.";
      alert(errMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  // LOGIKA TAMBAH SUB-CHAPTER + VALIDASI KETAT
  const handleAddSubChapter = (e) => {
    e.preventDefault();

    if (!selectedChapterId) {
      alert(
        "Error: Silakan pilih salah satu Bab di sebelah kiri terlebih dahulu!",
      );
      return;
    }

    if (!newSubName.trim()) {
      alert("Error: Nama Sub-Chapter tidak boleh kosong!");
      return;
    }

    const newSub = {
      id: `sub${Date.now()}`,
      chapter_id: selectedChapterId,
      name: newSubName,
    };

    setSubChapters([...subChapters, newSub]);

    // Update counter total_sub_chapter di data Bab terkait
    setChapters(
      chapters.map((ch) =>
        ch.id === selectedChapterId
          ? { ...ch, total_sub_chapter: (ch.total_sub_chapter || 0) + 1 }
          : ch,
      ),
    );
    setNewSubName("");
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f4f6f9",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* SIDEBAR */}
      <aside
        style={{
          width: "260px",
          backgroundColor: "#fff",
          padding: "30px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src={logoAmati}
            alt="Logo"
            style={{ height: "35px", width: "auto" }}
          />
          <span
            style={{ fontWeight: "bold", fontSize: "20px", color: "#ff7a00" }}
          >
            AMATI ADMIN
          </span>
        </div>
        <div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <li
              style={{
                backgroundColor: "#ff7a00",
                color: "#fff",
                padding: "12px 15px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                fontWeight: "bold",
              }}
            >
              Manage Courses
            </li>
            <li
              onClick={() => navigate("/dashboard")}
              style={{ color: "#333", marginTop: "20px", cursor: "pointer" }}
            >
              🚪 View Student App
            </li>
          </ul>
        </div>
      </aside>

      {/* MAIN PANEL */}
      <main
        style={{
          flex: "1",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
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
            Course Content Management (CMS)
          </h1>
          <p style={{ margin: "5px 0 0 0", color: "#666" }}>
            Kelola kurikulum berjenjang dengan sistem validasi otomatis.
          </p>
        </div>

        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
          {/* ================= TINGKAT 1: CHAPTERS ================= */}
          <div
            style={{
              flex: "1",
              minWidth: "400px",
              backgroundColor: "#fff",
              padding: "25px",
              borderRadius: "20px",
              border: "1px solid #e0e0e0",
            }}
          >
            <h3
              style={{
                margin: "0 0 20px 0",
                color: "#002d72",
                fontSize: "1.2rem",
              }}
            >
              1. Tingkat Bab (Chapters)
            </h3>

            <form
              onSubmit={handleAddChapter}
              style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
            >
              <input
                type="text"
                placeholder="Nama Chapter Baru..."
                value={newChapterName}
                onChange={(e) => setNewChapterName(e.target.value)}
                disabled={isSubmitting}
                style={{
                  flex: 1,
                  padding: "10px 15px",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  padding: "10px 20px",
                  backgroundColor: isSubmitting ? "#888" : "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? "Saving..." : "+ Add"}
              </button>
            </form>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {chapters.map((ch) => (
                <div
                  key={ch.id}
                  onClick={() => setSelectedChapterId(ch.id)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "15px",
                    borderRadius: "12px",
                    border: "1px solid",
                    borderColor:
                      selectedChapterId === ch.id ? "#007bff" : "#f0f0f0",
                    backgroundColor:
                      selectedChapterId === ch.id ? "#e3f2fd" : "#fff",
                    cursor: "pointer",
                  }}
                >
                  <div>
                    <h4
                      style={{
                        margin: 0,
                        color: "#333",
                        fontSize: "0.95rem",
                        fontWeight: selectedChapterId === ch.id ? "700" : "500",
                      }}
                    >
                      {ch.name}
                    </h4>
                    <span style={{ fontSize: "0.75rem", color: "#888" }}>
                      {ch.total_sub_chapter || 0} Sub Bab terikat
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= TINGKAT 2: SUB-CHAPTERS ================= */}
          <div
            style={{
              flex: "1.2",
              minWidth: "450px",
              backgroundColor: "#fff",
              padding: "25px",
              borderRadius: "20px",
              border: "1px solid #e0e0e0",
            }}
          >
            <h3
              style={{
                margin: "0 0 5px 0",
                color: "#002d72",
                fontSize: "1.2rem",
              }}
            >
              2. Tingkat Sub-Bab{" "}
              {currentActiveChapter
                ? `(Milik: ${currentActiveChapter.name})`
                : ""}
            </h3>
            <p
              style={{
                margin: "0 0 20px 0",
                fontSize: "0.85rem",
                color: "#888",
              }}
            >
              {selectedChapterId
                ? "Silakan input untuk menambah sub-bab pada bab ini."
                : "⚠️ Blokir: Anda belum memilih Bab di sebelah kiri."}
            </p>

            <form
              onSubmit={handleAddSubChapter}
              style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
            >
              <input
                type="text"
                placeholder={
                  currentActiveChapter
                    ? `Input Sub-Bab untuk ${currentActiveChapter.name}...`
                    : "Pilih Bab di kiri untuk mengaktifkan..."
                }
                value={newSubName}
                onChange={(e) => setNewSubName(e.target.value)}
                disabled={!selectedChapterId}
                style={{
                  flex: 1,
                  padding: "10px 15px",
                  borderRadius: "10px",
                  border: "1px solid",
                  borderColor: selectedChapterId ? "#ccc" : "#ffa7a7",
                  backgroundColor: selectedChapterId ? "#fff" : "#ffebee",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                disabled={!selectedChapterId}
                style={{
                  padding: "10px 20px",
                  backgroundColor: selectedChapterId ? "#ff7a00" : "#888",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  cursor: selectedChapterId ? "pointer" : "not-allowed",
                }}
              >
                {currentActiveChapter
                  ? `+ Add to ${currentActiveChapter.id}`
                  : "+ Add Sub"}
              </button>
            </form>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {!selectedChapterId ? (
                <div
                  style={{
                    textAlign: "center",
                    color: "#ff3366",
                    backgroundColor: "#ffebee",
                    padding: "30px",
                    borderRadius: "15px",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                  }}
                >
                  Silakan klik/pilih salah satu kartu Bab di sebelah kiri untuk
                  melihat, mengedit, atau menambah data Sub-Bab.
                </div>
              ) : subChapters.filter(
                  (sub) => sub.chapter_id === selectedChapterId,
                ).length === 0 ? (
                <p
                  style={{
                    textAlign: "center",
                    color: "#aaa",
                    fontSize: "0.9rem",
                    padding: "20px",
                  }}
                >
                  Belum ada Sub-Bab. Silakan tambah baru di atas!
                </p>
              ) : (
                subChapters
                  .filter((sub) => sub.chapter_id === selectedChapterId)
                  .map((sub) => (
                    <div
                      key={sub.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "15px",
                        borderRadius: "12px",
                        border: "1px solid #f0f0f0",
                        backgroundColor: "#fdfdfd",
                      }}
                    >
                      <h4
                        style={{
                          margin: 0,
                          color: "#333",
                          fontSize: "0.9rem",
                          fontWeight: "500",
                        }}
                      >
                        {sub.name}
                      </h4>
                      <button
                        onClick={() =>
                          alert(`Edit isi materi untuk: ${sub.name}`)
                        }
                        style={{
                          padding: "6px 12px",
                          backgroundColor: "#fff",
                          border: "1px solid #007bff",
                          color: "#007bff",
                          borderRadius: "8px",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                      >
                        📝 Edit Materi
                      </button>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminCourses;
