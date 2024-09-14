const isVideo = (file: File) => {
  const videoExtensions = ['.mp4', '.avi', '.mov', '.mkv', '.webm'];

  const fileExtension = file.name.split('.').pop()?.toLowerCase();

  return fileExtension && videoExtensions.includes(`.${fileExtension}`);
};

export default isVideo;
