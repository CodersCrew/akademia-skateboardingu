import Link from 'next/link';
import { MenuItem } from './Navbar';

import { IoCaretDown } from 'react-icons/io5';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export interface MenuButtonProps {
  text: string;
  hrefTo?: string;
  menuButtonClassName?: string;
  sublist?: MenuItem[] | null;
}

export function MenuButton({
  text,
  hrefTo,
  menuButtonClassName,
  sublist = null
}: MenuButtonProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return sublist !== null ? (
    <li
      className={`font-roboto text-xs font-bold uppercase leading-5 tracking-widest text-white ${menuButtonClassName}`}
    >
      <button
        className="flex w-full items-center gap-2 px-5 py-3 text-start uppercase hover:bg-purple-400 hover:text-neutral-700"
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}
      >
        {text}
        <IoCaretDown size={12} color="#FFFFFF" />
      </button>
      {isOpen && (
        <ul>
          {sublist.map(subitem => (
            <li
              key={subitem.id}
              className={`font-roboto text-xs font-bold uppercase leading-5 tracking-widest hover:bg-purple-400 hover:text-neutral-700  ${menuButtonClassName} ${pathname === subitem.href ? 'bg-purple-400 ' : 'bg-inherit text-white'}`}
            >
              <Link href={subitem.href || ''} className="block py-3 pl-10 pr-5">
                {subitem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  ) : (
    <li
      className={`font-roboto text-xs font-bold uppercase leading-5 tracking-widest hover:bg-purple-400 hover:text-neutral-700 ${menuButtonClassName} ${pathname === hrefTo ? 'bg-purple-400 text-white' : 'bg-inherit text-white'}`}
    >
      <Link href={hrefTo || ''} className="block px-5 py-3">
        {text}
      </Link>
    </li>
  );
}
