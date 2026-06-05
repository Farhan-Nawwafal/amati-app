import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getChapterMaterialApi } from "../services/courseService";

const AiMaterialView = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const [materi, setMateri] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let isMounted = true;
    const MAX_RETRIES = 3;
    const fetchMateri = async (retryCount = 0) => {
      try {
        if (retryCount === 0) {
          setLoading(true);
        }

        setError(null);

        const res = await getChapterMaterialApi(chapterId);

        if (!isMounted) return;

        if (res.status === "success" || res.success) {
          setMateri(res.data);
          setLoading(false);
        } else {
          setError(res.pesan || res.message || "Gagal menyusun materi.");
          setLoading(false);
        }
      } catch (err) {
        if (!isMounted) return;

        if (retryCount < MAX_RETRIES) {
          console.warn(
            `[AI Tutor] Upaya ke-${retryCount + 1} gagal/timeout. Mencoba lagi dalam 5 detik...`,
          );

          setTimeout(() => {
            if (isMounted) fetchMateri(retryCount + 1);
          }, 5000);
        } else {
          // Jika sudah dicoba 3 kali dan tetap gagal total
          setError(
            "AI Tutor sedang sibuk atau koneksi melambat. Silakan klik tombol coba lagi.",
          );
          setLoading(false);
        }
      }
    };
    if (chapterId) fetchMateri();
  }, [chapterId]);

  if (loading) {
    return (
      <div
        style={{
          padding: "50px",
          textAlign: "center",
          fontFamily: "Inter",
          fontWeight: "bold",
        }}
      >
        🤖 AI sedang menyusun materi belajarmu...
      </div>
    );
  }

  if (error || !materi) {
    return (
      <div
        style={{ padding: "50px", textAlign: "center", fontFamily: "Inter" }}
      >
        <h3 style={{ color: "#ff3366" }}>
          {error || "Materi tidak ditemukan"}
        </h3>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#f4f6f9",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* HEADER */}
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
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "pointer",
            width: "35px",
            height: "35px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
          Tutor AI AMATI - Materi Remedial
        </span>
      </header>

      {/* KONTEN MATERI */}
      <div
        style={{
          maxWidth: "800px",
          margin: "40px auto",
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <h1 style={{ color: "#007bff", marginTop: 0 }}>{materi.judul}</h1>

        {/* ReactMarkdown akan menyulap teks mentah menjadi HTML (bold, list, dll) */}
        <div style={{ color: "#444", lineHeight: "1.8", fontSize: "1rem" }}>
          <ReactMarkdown>{materi.materi_terstruktur}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default AiMaterialView;
