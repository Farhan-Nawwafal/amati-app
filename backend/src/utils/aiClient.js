export const generateAiRecommendation = async (score, level) => {
  // Mensimulasikan jeda jaringan (asynchronous network call) seolah menembak model AI asli
  await new Promise((resolve) => setTimeout(resolve, 1500));

  let evaluationText = "";
  let recomendationList = [];

  if (level === "beginner") {
    evaluationText = `Berdasarkan hasil kuis dengan skor ${score}%, siswa berada di tingkat Pemula. Siswa menunjukkan pemahaman dasar yang masih membutuhkan bimbingan intensif pada konsep-konsep fundamental aljabar dan logika matematika dasar.`;
    recomendationList = [
      "Membaca ulang modul Pengenalan Logika Matematika Bab 1",
      "Menonton video simulasi visual grafik fungsi linear dasar",
      "Mengerjakan latihan soal interaktif tingkat mudah sebanyak 5 butir"
    ];
  } else if (level === "intermediate") {
    evaluationText = `Siswa meraih skor ${score}% dan dikategorikan dalam tingkat Menengah. Kemampuan analisis soal cerita matematika sudah cukup baik, namun perlu penguatan pada ketelitian pengerjaan rumus turunan dan matriks.`;
    recomendationList = [
      "Mempelajari materi pengayaan Matriks Pertengahan",
      "Mengikuti mini-quiz tantangan logika analitis di sub-bab 2",
      "Menganalisis studi kasus matematika terapan di kehidupan sehari-hari"
    ];
  } else {
    evaluationText = `Luar biasa! Dengan skor ${score}%, siswa menguasai tingkat Mahir. Pemahaman konseptual dan abstrak siswa sangat kuat, siap untuk menerima tantangan materi kalkulus komprehensif.`;
    recomendationList = [
      "Mengambil materi opsional: Teorema Kompleks Aljabar Modern",
      "Menjadi mentor sebaya di forum diskusi aplikasi Amati",
      "Mengerjakan proyek akhir bab dengan studi kasus data sains tingkat lanjut"
    ];
  }

  return {
    evaluationText,
    recomendationList
  };
};