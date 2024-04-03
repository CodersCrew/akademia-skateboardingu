import isImage from '@/components/functions/isImage';
import isVideo from '@/components/functions/isVideo';
import { IMGBB_API_KEY } from '@/environment';

const uploadUrl = 'https://api.imgbb.com/1/upload';

const imageService = async (file: File) => {
  const imagesCollection = new FormData();

  if (isVideo(file) || isImage(file)) {
    imagesCollection.append('image', file);
  }

  const response = await fetch(`${uploadUrl}?key=${IMGBB_API_KEY}`, {
    method: 'POST',
    body: imagesCollection
  });

  if (!response.ok) {
    throw { message: 'Failed to upload image', status: 500 };
  }

  const data = await response.json();
  return data.data.url;
};

export default imageService;
