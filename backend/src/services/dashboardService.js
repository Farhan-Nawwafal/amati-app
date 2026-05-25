import { 
    findChaptersTakenByUserId,
    countChaptersInProgressByUserId,
    countChaptersDoneByUserId,
    countSubChaptersTakenByUserId,
    countSubChaptersInProgressByUserId,
    countSubChaptersDoneByUserId,
} from '../repositories/dashboardRepository.js';

export const countChaptersTakenByUserId = async (userId) => {
  const result = await findChaptersTakenByUserId(userId);
  if (!result.length)
    return 0;
return result.length;
};

export const countChaptersInProgress = async (userId) => {
  const result = await countChaptersInProgressByUserId(userId);
  if (!result.length) return 0;
  return result.length;
};

export const countChaptersDone = async (userId) => {
  const result = await countChaptersDoneByUserId(userId);
  if (!result.length) return 0;
  return result.length;
};

export const countSubChaptersTaken = async (userId) => {
  const result = await countSubChaptersTakenByUserId(userId);
  return result; // Langsung mengembalikan angka jumlah count dari database
};

export const countSubChaptersInProgress = async (userId) => {
  const result = await countSubChaptersInProgressByUserId(userId);
  return result;
};

export const countSubChaptersDone = async (userId) => {
  const result = await countSubChaptersDoneByUserId(userId);
  return result;
};
