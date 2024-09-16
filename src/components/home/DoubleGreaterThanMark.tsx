type DoubleGreaterThanMarkProps = {
  className?: string;
  markColor?: string;
  big?: boolean;
};

export function DoubleGreaterThanMark({
  className = '',
  markColor = '#FFF',
  big = false
}: DoubleGreaterThanMarkProps) {
  return (
    <div
      className={`w-fit font-poetsen-one text-transparent ${className}`}
      style={{
        WebkitTextStroke: big ? `3px ${markColor}` : `2px ${markColor}`
      }}
    >
      &gt;&gt;
    </div>
  );
}
