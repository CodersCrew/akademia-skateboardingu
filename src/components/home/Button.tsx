const colors = {
  green: 'border-[#2DD3BE] bg-[#5EE9D3]',
  orange: 'border-[#FABE24] bg-[#FBD24D]',
  pink: 'border-[#BF83FB] bg-[#D7B3FD]',
  blue: 'border-[#4A90E2] bg-[#6FADE2]'
};

type ButtonProps = {
  children: string;
  className?: string;
  color: keyof typeof colors;
};

export function Button({ children, className, color }: ButtonProps) {
  return (
    <button
      className={`rounded-[50px] border px-4 py-1 text-sm text-[#404040] md:text-lg xl:px-7 xl:py-2 xl:text-2xl ${colors[color]} ${className}`}
    >
      {children}
    </button>
  );
}
