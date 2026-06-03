import React, { useState, useEffect } from "react";
import axios from "axios";

const AiReportCard = ({ userId }) => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAiReport = async () => {
      try {
        const token = localStorage.getItem("token");
        // Menembak endpoint API backend asli
        const response = await axios.get(`http://localhost:3000/api/assessments/ai-reports/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (response.data.success && response.data.data.length > 0) {
          setReport(response.data.data[0]); // Ambil laporan AI yang paling baru
        }
      } catch (error) {
        console.error("Gagal memuat rekomendasi AI:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchAiReport();
    } else {
      setLoading(false);
    }
  }, [userId]);

  if (loading) return <div style={{ color: "#666", fontSize: "0.9rem", padding: "20px" }}>Menganalisis hasil belajar dengan AI Amati...</div>;
  if (!report) return null; // Kotak otomatis sembunyi jika database kosong

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "25px",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        borderLeft: "6px solid #ff7a00"
      }}
    >
      <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#002d72", fontWeight: "600" }}>
        🧠 Rekomendasi Cerdas AI "Amati"
      </h3>
      
      <p style={{ margin: 0, fontSize: "0.9rem", color: "#444", lineHeight: "1.6", textAlign: "justify", wordBreak: "break-word" }}>
        {report.evaluation_text}
      </p>

      <div style={{ backgroundColor: "#f8f9fa", padding: "15px", borderRadius: "12px", border: "1px solid #f0f0f0" }}>
        <h4 style={{ margin: "0 0 10px 0", fontSize: "0.85rem", color: "#333", fontWeight: "600" }}>
          Target Pengayaan Materi Kamu:
        </h4>
        <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {report.recomendation_list.map((item, index) => (
            <li key={index} style={{ fontSize: "0.85rem", color: "#555", lineHeight: "1.4" }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AiReportCard;