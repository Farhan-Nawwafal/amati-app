import { 
    findChaptersTakenByUserId,
} from '../repositories/dashboardRepository.js';

export const countChaptersTakenByUserId = async (userId) => {
  const result = await findChaptersTakenByUserId(userId);
  if (!result.length)
    return 0;
return result.length;
};
