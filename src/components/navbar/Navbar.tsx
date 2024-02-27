'use client';
import Image from 'next/image';
import { MdShoppingCart } from 'react-icons/md';
import NavItem from '../NavItem/NavItem';
import { usePathname } from 'next/navigation';

const shopNavItems = [
  { name: 'Deski', pathname: '/' },
  { name: 'Decki', pathname: '' },
  { name: 'Akcesoria', pathname: '' },
];

const academyNavItems = [
  { name: 'Akademia', pathname: '' },
  { name: 'Blog', pathname: '' },
];

const Navbar = () => {
  const currentPath = usePathname();

  return (
    <div className="m-0 p-0">
      <div className="m-0 flex items-center justify-between bg-black py-5">
        <div className="flex items-center gap-[3.125rem] px-[2.375rem]">
          <Image
            alt="Akademia Skate shop"
            height={80}
            src="/logo/skateshop-logo.svg"
            width={80}
          />
          <h1 className="text-[1.563rem] text-white">
            Akademia Skate <i>shop</i>
          </h1>
        </div>
        <div className="pr-9">
          <MdShoppingCart
            color="white"
            size={40}
            className="mx-[1.625rem] my-5"
          />
        </div>
      </div>
      <div className="flex items-center justify-between bg-white py-6 pl-6 pr-5">
        <div className="flex gap-10">
          {shopNavItems.map(({name, pathname}) => (
            <NavItem
              name={name}
              pathname={pathname}
              isCurrentPath={pathname === currentPath}
              key={name}
            />
          ))}
        </div>
        <div className="flex gap-10">
          {academyNavItems.map(({name, pathname}) => (
            <NavItem
              name={name}
              pathname={pathname}
              isCurrentPath={pathname === currentPath}
              key={name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
