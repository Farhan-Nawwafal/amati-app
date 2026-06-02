import { useNavigate } from "react-router-dom";
import logoAmati from "../assets/logo2.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 50px",
        alignItems: "center",
        backgroundColor: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)", // Tambahan shadow tipis agar navbar terlihat terpisah dari background
      }}
    >
      {/* 2. UPDATE WADAH LOGO DI SINI */}
      <div
        className="logo"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px", // Mengatur jarak antara gambar logo dan teks
          fontWeight: "bold",
          fontSize: "24px",
          color: "#1a5f7a", // Warna biru disesuaikan agar lebih mirip dengan gambar contoh Anda
        }}
        onClick={() => navigate('/')}
      >
        {/* Tag Img sebagai wadah Logo */}
        <img
          src={logoAmati}
          alt="Logo AMATI"
          style={{
            height: "40px", // Mengatur tinggi logo agar proporsional dengan navbar
            width: "auto", // Lebar otomatis mengikuti tinggi agar tidak gepeng
            display: "block",
          }}
        />
        {/* Teks AMATI di sebelah logo */}
        <span>AMATI</span>
      </div>

      <div
        className="menu"
        style={{ display: "flex", gap: "25px", alignItems: "center" }}
      >
        <a
          href="#home"
          style={{ textDecoration: "none", color: "#333", fontSize: "15px" }}
        >
          Home Page
        </a>
        <a
          href="#about"
          style={{ textDecoration: "none", color: "#333", fontSize: "15px" }}
        >
          About Us
        </a>
        <a
          href="#contact"
          style={{ textDecoration: "none", color: "#333", fontSize: "15px" }}
        >
          Contact
        </a>
        <button
          style={{
            padding: "8px 25px",
            borderRadius: "20px",
            border: "1px solid #002d72",
            color: "#002d72",
            backgroundColor: "transparent",
            cursor: "pointer",
            fontWeight: "50px",
          }}
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button
          style={{
            padding: "10px 25px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "#ffcc00",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
