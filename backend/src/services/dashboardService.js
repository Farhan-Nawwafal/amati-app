import { 
    findChaptersTakenByUserId,
    countChaptersInProgressByUserId,
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
