import { ExclamationMark } from './ExclamationMark';

type TripleExclamationMarkProps = { className?: string };

export function TripleExclamationMark({
  className
}: TripleExclamationMarkProps) {
  return (
    <div className={`absolute ${className}`}>
      <ExclamationMark className="absolute -left-3.5 -top-2 rotate-3 text-2xl" />
      <ExclamationMark className="absolute -top-[15px] rotate-[17deg] text-4xl" />
      <ExclamationMark className="absolute -top-0 left-[13px] rotate-[30deg] text-2xl" />
    </div>
  );
}
