import Link from 'next/link';

type NavbarItemProps = {
  href: string;
  children: string;
  isActive: boolean;
  className?: string;
};

export default function NavbarItem({
  children,
  href,
  isActive,
  className
}: NavbarItemProps) {
  return (
    <li
      className={`font-roboto text-xs font-bold uppercase leading-5 tracking-widest hover:bg-purple-400 hover:text-neutral-700 ${isActive ? 'bg-purple-600 text-white' : 'bg-inherit text-white'}`}
    >
      <Link href={href} className={`block px-5 py-3 ${className}`}>
        {children}
      </Link>
    </li>
  );
}
