type QuestionMarkProps = {
  className?: string;
  big?: boolean;
};

export function QuestionMark({
  className = '',
  big = false
}: QuestionMarkProps) {
  return (
    <span
      className={`absolute font-poetsen-one text-transparent md:scale-125 xl:scale-150 ${className}`}
      style={{
        WebkitTextStroke: big ? '3px #FFFFFF' : '2px #FFFFFF'
      }}
    >
      ?
    </span>
  );
}
