import { UserDataModel } from '../models/user';

export const getUserData = async (userId: string) => {
  const userData = await UserDataModel.findById(userId);

  if (!userData) {
    throw { message: 'Failed to get user data', status: 500 };
  }

  return { userData };
};
