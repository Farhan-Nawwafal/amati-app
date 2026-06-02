// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userRegister } from "../services/authService";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 2. LOGIKA KONEKSI HIT API BACKEND EXPRESS
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi Sederhana di Frontend
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.birthDate
    ) {
      alert("Mohon lengkapi seluruh data esensial Anda!");
      return;
    }

    try {
      setIsLoading(true);

      const payloadData = {
        name: formData.name,
        gmail: formData.email,
        birth_date: formData.birthDate,
        password: formData.password,
        role: 'student',
      };

      // Panggil fungsi register axios/fetch kamu
      const response = await userRegister(payloadData);

      // Jika backend kalian langsung mengembalikan JWT Token saat register, simpan di sini:
      localStorage.setItem("token", response.data.token);

      navigate("/login");
    } catch (error) {
      console.error("Error Register:", error);
      // Menangkap pesan error kustom yang dikirim oleh Express controller kamu
      const errorMessage =
        error.response?.data?.message ||
        "Terjadi kesalahan saat registrasi. Coba lagi.";
      alert(errorMessage);
    } finally {
      setIsLoading(false); // Kembalikan status tombol setelah proses selesai
    }
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f4f6f9",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* ================= SISI KIRI: BRANDING AREA (FULL BACKGROUND) ================= */}
      <div
        style={{
          flex: "1.1", // Sedikit lebih lebar untuk menyeimbangkan visual gambar
          backgroundImage:
            "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80')", // Ganti dengan path lokal assets Anda nanti
          backgroundSize: "cover", // KUNCI: Membuat gambar memenuhi seluruh area container
          backgroundPosition: "center", // KUNCI: Gambar tetap berada di tengah saat di-resize
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Lapisan Hitam Transparan (Overlay) agar Logo AMATI tetap kontras dan terbaca jelas */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.15)",
            zIndex: 1,
          }}
        ></div>

        {/* LOGO AMATI */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            cursor: "pointer",
            zIndex: 2,
          }}
          onClick={() => navigate("/")}
        >
          {/* GANTI BLOK DIV TEMPAT HURUF "A" LAMA ANDA DENGAN BLOK DI BAWAH INI */}
          <img
            src="/src/assets/logo2.png" // Nanti tinggal ganti dengan path lokal logo Anda
            alt="AMATI Icon"
            style={{
              width: "38px",
              height: "38px",
              objectFit: "contain",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
            }}
          />

          {/* Bagian Teks AMATI di bawah ini sedikit dinaikkan font-nya agar seimbang dengan ukuran box baru */}
          <span
            style={{
              fontWeight: "800",
              fontSize: "1.6rem",
              color: "#fff",
              letterSpacing: "0.8px",
              textShadow: "0 2px 5px rgba(0,0,0,0.25)",
            }}
          >
            AMATI
          </span>
        </div>

        {/* Teks atau Kredit kecil di bawah jika diperlukan (Tetap biarkan sama di bawahnya) */}
        <div
          style={{
            zIndex: 2,
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.85rem",
            textAlign: "left",
            marginTop: "10px",
          }}
        >
          Platform Adaptif Matematika VII
        </div>
      </div>

      {/* ================= SISI KANAN: FORM CARD CONTAINER ================= */}
      <div
        style={{
          flex: "1",
          backgroundColor: "#f4f6f9",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {/* KERTAS PUTIH MELENGKUNG (Sesuai Mockup) */}
        <div
          style={{
            backgroundColor: "#fff",
            width: "94%",
            height: "96vh",
            borderRadius: "35px 0 0 35px",
            padding: "50px 70px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxShadow: "-10px 0 30px rgba(0,0,0,0.02)",
            overflowY: "auto",
          }}
        >
          {/* KEPALA FORM */}
          <div style={{ marginBottom: "25px", textAlign: "left" }}>
            <h1
              style={{
                margin: 0,
                color: "#002d72",
                fontSize: "2.2rem",
                fontWeight: "800",
                letterSpacing: "-0.5px",
              }}
            >
              Sign up
            </h1>
            <p
              style={{ margin: "8px 0 0 0", color: "#666", fontSize: "0.9rem" }}
            >
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                style={{
                  color: "#007bff",
                  fontWeight: "700",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Sign in here
              </span>
            </p>
          </div>

          {/* INTERNAL FORM ISI */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {/* INPUT 1: NAME */}
            <div style={{ textAlign: "left" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  color: "#333",
                }}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  border: "1px solid #ddd",
                  backgroundColor: "#fff",
                  outline: "none",
                  fontSize: "0.9rem",
                  color: "#333",
                }}
              />
            </div>

            {/* INPUT 2: BIRTH DATE */}
            <div style={{ textAlign: "left" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  color: "#333",
                }}
              >
                Birth Date
              </label>
              <input
                type="date" // 🛠️ KUNCI UBAH DI SINI: browser otomatis memunculkan kalender pop-up
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  border: "1px solid #ddd",
                  backgroundColor: "#fff",
                  outline: "none",
                  fontSize: "0.9rem",
                  color: "#333",
                  fontFamily: "inherit", // Memastikan font kalender bawaan tetap serasi dengan Inter
                }}
              />
            </div>

            {/* INPUT 3: EMAIL ADDRESS */}
            <div style={{ textAlign: "left" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  color: "#333",
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email Address"
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: "12px",
                  border: "1px solid #ddd",
                  backgroundColor: "#fff",
                  outline: "none",
                  fontSize: "0.9rem",
                  color: "#333",
                }}
              />
            </div>

            {/* INPUT 4: PASSWORD */}
            <div style={{ textAlign: "left" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  color: "#333",
                }}
              >
                Password
              </label>
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your Password"
                  style={{
                    width: "100%",
                    padding: "14px 50px 14px 18px",
                    borderRadius: "12px",
                    border: "1px solid #ddd",
                    backgroundColor: "#fff",
                    outline: "none",
                    fontSize: "0.9rem",
                    color: "#333",
                  }}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "18px",
                    cursor: "pointer",
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
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
              </div>
            </div>

            {/* CHECKBOX SYARAT KETENTUAN */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                marginTop: "4px",
                textAlign: "left",
              }}
            >
              <input
                type="checkbox"
                required
                style={{ marginTop: "3px", cursor: "pointer" }}
              />
              <span
                style={{ fontSize: "0.8rem", color: "#666", lineHeight: "1.4" }}
              >
                By Clicking create an account, I agree that I have read and
                accepted the{" "}
                <span
                  style={{
                    color: "#007bff",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  term of use
                </span>{" "}
                and{" "}
                <span
                  style={{
                    color: "#007bff",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  privacy policy
                </span>
                .
              </span>
            </div>

            {/* TOMBOL UTAMA CREATE ACCOUNT */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                backgroundColor: "#3b71ca",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                fontWeight: "bold",
                fontSize: "0.95rem",
                cursor: "pointer",
                marginTop: "10px",
                boxShadow: "0 4px 15px rgba(59, 113, 202, 0.2)",
              }}
            >
              Create an Account
            </button>
          </form>

          {/* PEMBATAS LINE */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              margin: "20px 0",
            }}
          >
            <div
              style={{ flex: 1, height: "1px", backgroundColor: "#eee" }}
            ></div>
            <span
              style={{ fontSize: "0.75rem", color: "#aaa", fontWeight: "bold" }}
            >
              or
            </span>
            <div
              style={{ flex: 1, height: "1px", backgroundColor: "#eee" }}
            ></div>
          </div>

          {/* OAUTH AREA */}
          <div style={{ display: "flex", gap: "15px" }}>
            <button
              type="button"
              style={{
                flex: 1,
                padding: "12px",
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                fontSize: "0.85rem",
                fontWeight: "700",
                color: "#333",
                cursor: "pointer",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5.04c1.64 0 3.12.56 4.28 1.67l3.2-3.2C17.52 1.58 14.96 1 12 1 7.35 1 3.4 3.65 1.5 7.5l3.86 3C6.27 7.77 8.93 5.04 12 5.04z"
                />
                <path
                  fill="#4285F4"
                  d="M23.49 12.27c0-.82-.07-1.6-.2-2.36H12v4.51h6.46c-.28 1.48-1.12 2.74-2.38 3.58l3.7 2.87c2.16-1.99 3.41-4.92 3.41-8.6z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.36 14.5c-.24-.72-.38-1.49-.38-2.3s.14-1.58.38-2.3L1.5 6.9C.54 8.82 0 10.95 0 13s.54 4.18 1.5 6.1l3.86-3.1z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c3.24 0 5.97-1.07 7.96-2.92l-3.7-2.87c-1.03.69-2.35 1.11-4.26 1.11-3.07 0-5.73-2.73-6.64-5.46L1.5 16.03C3.4 19.85 7.35 23 12 23z"
                />
              </svg>
              Sign With Google
            </button>
            <button
              type="button"
              style={{
                flex: 1,
                padding: "12px",
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                fontSize: "0.85rem",
                fontWeight: "700",
                color: "#333",
                cursor: "pointer",
              }}
            >
              <svg width="16" height="16" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Sign With Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
