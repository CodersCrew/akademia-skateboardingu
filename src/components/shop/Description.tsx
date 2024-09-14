export function Description({ text }: { text: string }) {
  return (
    <div className="relative top-[-70px] pr-5 text-right text-white">
      <p className="text-lg font-extrabold">{text}</p>
      <p className="mt-2 font-lato text-sm font-semibold">OBCZAJ&gt;&gt;&gt;</p>
    </div>
  );
}
