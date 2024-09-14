import Link from 'next/link';

const colors = {
  green: 'border-[#2DD3BE] bg-[#5EE9D3]',
  orange: 'border-[#FABE24] bg-[#FBD24D]',
  pink: 'border-[#BF83FB] bg-[#D7B3FD]',
  blue: 'border-[#4A90E2] bg-[#6FADE2]'
};

type ButtonLinkProps = {
  children: string;
  className?: string;
  color: keyof typeof colors;
  href: string;
};

export function ButtonLink({
  children,
  className,
  color,
  href
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`rounded-[50px] border px-4 py-1 text-sm text-[#404040] md:text-lg ${colors[color]} ${className}`}
    >
      {children}
    </Link>
  );
}
