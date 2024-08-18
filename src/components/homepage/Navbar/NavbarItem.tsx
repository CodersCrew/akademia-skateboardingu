import Link from 'next/link';

export interface NavbarItemProps {
  href: string;
  children: string;
  isActive: boolean;
  navbarItemClassName?: string;
}

export default function NavbarItem({
  children,
  href,
  isActive,
  navbarItemClassName
}: NavbarItemProps) {
  return (
    <li
      className={`font-roboto text-xs font-bold uppercase leading-5 tracking-widest hover:bg-purple-400 hover:text-neutral-700 ${isActive ? 'bg-purple-600 text-white' : 'bg-inherit text-white'}`}
    >
      <Link href={href} className={`block px-5 py-3 ${navbarItemClassName}`}>
        {children}
      </Link>
    </li>
  );
}
