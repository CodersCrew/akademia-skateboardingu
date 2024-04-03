import imageService from '@/server/services/imageService';

const uploadImage = async (file: File) => {
  const response = await imageService(file);

  return { data: { response }, options: { status: 201 } };
};

export default uploadImage;
