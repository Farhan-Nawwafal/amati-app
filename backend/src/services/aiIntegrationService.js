import axios from "axios";

// Sesuaikan dengan URL server Python kamu
const AI_ENGINE_URL = "http://127.0.0.1:8000"; 

export const getAIPredictionAndMotivation = async (studentDataPayload) => {
  try {
    // Menembak endpoint FastAPI Python
    const response = await axios.post(`${AI_ENGINE_URL}/api/predict-score`, studentDataPayload);
    
    // Mengembalikan data JSON dari Python
    return response.data; 
  } catch (error) {
    console.error("Gagal terhubung ke AI Engine Python:", error.message);
    throw new Error("AI Engine sedang tidak bisa diakses.");
  }
};