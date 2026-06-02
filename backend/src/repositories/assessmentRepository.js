import prisma from "../config/prisma.js";

// Fungsi untuk mengambil assessment sekaligus men-join tabel questions
export const findAssessmentWithQuestions = async (assessmentId) => {
  return await prisma.assessment.findUnique({
    where: {
      id: assessmentId,
    },
    include: {
      questions: true,
    },
  });
};

export const countUserPlacementAttempts = async (userId) => {
  return await prisma.userAttempt.count({
    where: {
      user_id: userId,
      assessment: {
        type: "placement",
      },
    },
  });
};
