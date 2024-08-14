import { useState } from 'react';
import { IoCaretDown } from 'react-icons/io5';

import { MenuItem } from './MenuItem';
import { MenuItemType } from './Navbar';

export interface MenuListProps {
  children: string;
  pathname: string;
  sublist: MenuItemType[];
  menuListClassName?: string;
}

export function MenuList({
  children,
  pathname,
  sublist,
  menuListClassName
}: MenuListProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className={`font-roboto text-xs font-bold uppercase leading-5 tracking-widest text-white ${menuListClassName}`}
    >
      <button
        className="flex w-full items-center gap-2 px-5 py-3 text-start uppercase hover:bg-purple-400 hover:text-neutral-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
        <IoCaretDown size={12} color="#FFFFFF" />
      </button>
      {isOpen && (
        <ul>
          {sublist.map(subitem => (
            <MenuItem
              key={subitem.id}
              href={subitem.href}
              pathname={pathname}
              menuItemClassName="pl-12 pr-5"
            >
              {subitem.name}
            </MenuItem>
          ))}
        </ul>
      )}
    </li>
  );
}
