import { IMGBB_API_KEY, IMGBB_UPLOAD_URL } from '@/environment';
import isImage from '@/server/utils/isImage';
import isVideo from '@/server/utils/isVideo';

const imageService = async (file: File) => {
  if (!isVideo(file) || !isImage(file)) {
    throw { message: 'Data format is not correct', status: 500 };
  }

  const imagesCollection = new FormData();
  imagesCollection.append('image', file);

  const response = await fetch(`${IMGBB_UPLOAD_URL}?key=${IMGBB_API_KEY}`, {
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
