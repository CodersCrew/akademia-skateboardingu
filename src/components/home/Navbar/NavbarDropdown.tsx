import { Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { Fragment } from 'react';
import { IoCaretDown } from 'react-icons/io5';

import { NavbarItemType } from './Navbar';
import NavbarItem from './NavbarItem';

type NavbarDropdownProps = {
  children: string;
  currentPathname: string;
  sublist: NavbarItemType[];
};

export default function NavbarDropdown({
  children,
  currentPathname,
  sublist
}: NavbarDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isAnyNavbarItemActive = sublist.some(
      subitem => subitem.href === currentPathname
    );
    if (isAnyNavbarItemActive) {
      setIsOpen(true);
    }
  }, [currentPathname, sublist]);

  return (
    <li className="font-roboto text-xs font-bold uppercase leading-5 tracking-widest text-white">
      <button
        className="flex w-full items-center gap-2 px-5 py-3 text-start uppercase hover:bg-purple-400 hover:text-neutral-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
        <IoCaretDown size={12} color="#FFFFFF" />
      </button>
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition-transform ease-in duration-150"
        enterFrom="transform translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition-transform ease-out duration-150"
        leaveFrom="transform translate-x-0"
        leaveTo="transform translate-x-full"
      >
        <ul>
          {sublist.map(subitem => (
            <NavbarItem
              key={subitem.id}
              href={subitem.href}
              className="pl-12 pr-5"
              isActive={currentPathname === subitem.href}
            >
              {subitem.name}
            </NavbarItem>
          ))}
        </ul>
      </Transition>
    </li>
  );
}
