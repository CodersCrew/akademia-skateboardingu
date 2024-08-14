import Link from 'next/link';

export interface MenuItemProps {
  children: string;
  href: string;
  pathname: string;
  menuItemClassName?: string;
}

export function MenuItem({
  children,
  href,
  pathname,
  menuItemClassName
}: MenuItemProps) {
  return (
    <li
      className={`font-roboto text-xs font-bold uppercase leading-5 tracking-widest hover:bg-purple-400 hover:text-neutral-700 ${pathname === href ? 'bg-purple-400 text-white' : 'bg-inherit text-white'}`}
    >
      <Link href={href} className={`block px-5 py-3 ${menuItemClassName}`}>
        {children}
      </Link>
    </li>
  );
}
