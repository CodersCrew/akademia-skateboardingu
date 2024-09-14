import { User } from '../models/user';

export const getUserData = async (userId: string) => {
  const userData = await User.findById(userId);

  if (!userData) {
    throw { message: 'Failed to get user data', status: 500 };
  }

  return { userData };
};
