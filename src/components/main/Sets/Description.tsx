const Description = ({ text }: { text: string }) => {
  return (
    <div className="relative top-[-70px] pr-5 text-right text-white">
      <p className="text-lg font-extrabold">{text}</p>
      <p className="font-lato mt-2 text-sm font-semibold">OBCZAJ&gt;&gt;&gt;</p>
    </div>
  );
};

export default Description;
