// src/pages/PreTestQuizResult.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PreTestQuizResult = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Ambil data user
  const storedUser = localStorage.getItem("user");
  const userData = storedUser ? JSON.parse(storedUser) : null;

  // Jika nama user terdaftar di database gunakan itu, jika kosong ganti ke nama generik
  const currentUserName = userData?.name || "Siswa AMATI";

  // Menerima data operan state dari halaman PreTestQuiz (opsional fallback jika diakses langsung)
  const { finalScore, totalQuestions } = location.state || {
    finalScore: 0,
    totalQuestions: 2,
  };

  // Logika sederhana untuk pesan kelulusan
  const isPassed = finalScore >= totalQuestions * 0.6; // Standar lulus 60%

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
      {/* HEADER TOP BAR  */}
      <header
        style={{
          backgroundColor: "#fff",
          borderBottom: "1px solid #eee",
          padding: "15px 30px",
          display: "flex",
          alignItems: "center",
          gap: "15px",
          zIndex: 10,
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.2rem",
            cursor: "pointer",
            color: "#002d72",
          }}
        >
          &larr;
        </button>
        <h2
          style={{
            margin: 0,
            fontSize: "1rem",
            color: "#002d72",
            fontWeight: "700",
          }}
        >
          Diagnostic Pre-Test Result
        </h2>
      </header>

      {/* AREA KONTEN TENGAH */}
      <main
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            animation: "fadeIn 0.5s ease",
          }}
        >
          {/* LINGKARAN SKOR BIRU */}
          <div
            style={{
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              backgroundColor: "#1b4bf4", // Warna biru khas AMATI
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 30px rgba(27, 75, 244, 0.3)",
              border: "8px solid rgba(27, 75, 244, 0.15)",
              marginBottom: "30px",
            }}
          >
            <span
              style={{
                color: "#fff",
                fontSize: "0.9rem",
                fontWeight: "600",
                opacity: 0.9,
                marginBottom: "5px",
              }}
            >
              Your Score
            </span>
            <span
              style={{
                color: "#fff",
                fontSize: "2.8rem",
                fontWeight: "800",
                lineHeight: "1",
              }}
            >
              {finalScore}/100
            </span>
          </div>

          {/* TEKS UCAPAN */}
          <h1
            style={{
              margin: "0 0 10px 0",
              color: "#1b4bf4",
              fontSize: "2rem",
              fontWeight: "800",
            }}
          >
            {isPassed ? "Congratulation!" : "Keep Trying!"}
          </h1>

          {/* 💡 2. SINKRONISASI VISUAL: Nama Anna diganti dengan variabel currentUserName */}
          <p style={{ margin: "0 0 40px 0", color: "#555", fontSize: "1rem" }}>
            {isPassed
              ? `Great job, ${currentUserName}! You Did It.`
              : `Jangan menyerah ${currentUserName}, mari pelajari kembali konsep dasarnya.`}
          </p>

          {/* GRUP TOMBOL */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: "100%",
              maxWidth: "300px",
            }}
          >
            <button
              onClick={() =>
                alert("Fitur bagikan skor media sosial dalam pengembangan.")
              }
              style={{
                padding: "14px",
                backgroundColor: "#1b4bf4",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "transform 0.2s",
                boxShadow: "0 4px 15px rgba(27, 75, 244, 0.2)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              Share Result
            </button>

            <button
              onClick={() => navigate("/dashboard")} // Mengarahkan langsung ke Dashboard!
              style={{
                padding: "14px",
                backgroundColor: "#fff",
                color: "#1b4bf4",
                border: "2px solid #1b4bf4",
                borderRadius: "10px",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "transform 0.2s",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.02)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PreTestQuizResult;
