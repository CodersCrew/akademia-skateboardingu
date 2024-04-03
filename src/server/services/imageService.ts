import isImage from '@/components/functions/isImage';
import isVideo from '@/components/functions/isVideo';
import { IMGBB_API_KEY } from '@/environment';

const uploadUrl = 'https://api.imgbb.com/1/upload';

const imageService = async (file: File) => {
  const imagesCollection = new FormData();

  if (isVideo(file) || isImage(file)) {
    imagesCollection.append('image', file);
  }

  try {
    const response = await fetch(`${uploadUrl}?key=${IMGBB_API_KEY}`, {
      method: 'POST',
      body: imagesCollection
    });

    if (!response.ok) {
      throw new Error(`Failed to upload image: ${response.statusText}`);
    }

    const data = await response.json();
    return data.data.url;
  } catch (error) {
    throw new Error('Image upload failed');
  }
};

export default imageService;
