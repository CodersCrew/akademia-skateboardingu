type ExclamationMarkProps = { className?: string; big?: boolean };

export function ExclamationMark({
  className,
  big = false
}: ExclamationMarkProps) {
  return (
    <span
      className={`font-poetsen-one text-transparent ${className}`}
      style={{ WebkitTextStroke: big ? '3px #FFFFFF' : '2px #FFFFFF' }}
    >
      !
    </span>
  );
}
