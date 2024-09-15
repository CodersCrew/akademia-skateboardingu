type QuestionMarkProps = {
  className?: string;
  big?: boolean;
  positionStyle: string;
  rotationDegree: string;
  textSize?: string;
};

export function QuestionMark({
  className = '',
  big = false,
  positionStyle,
  rotationDegree,
  textSize
}: QuestionMarkProps) {
  return (
    <span
      className={`absolute font-poetsen-one text-transparent md:scale-125 xl:scale-150 ${textSize} ${positionStyle} ${rotationDegree} ${className}`}
      style={{
        WebkitTextStroke: big ? '3px #FFFFFF' : '2px #FFFFFF'
      }}
    >
      ?
    </span>
  );
}
