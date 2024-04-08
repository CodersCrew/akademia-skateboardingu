const isImage = (file: File) => {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];

  const fileExtension = file.name.split('.').pop()?.toLowerCase();

  if (fileExtension && imageExtensions.includes(`.${fileExtension}`)) {
    return true;
  }

  return false;
};

export default isImage;
