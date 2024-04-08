const isVideo = (file: File) => {
  const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv', '.webm'];

  const fileExtension = file.name.split('.').pop()?.toLowerCase();

  if (fileExtension && videoExtensions.includes(`.${fileExtension}`)) {
    return true;
  }

  return false;
};

export default isVideo;
