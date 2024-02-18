import Image from 'next/image';
import Link from 'next/link';
import { MdShoppingCart } from 'react-icons/md';

type NavItemProps = {
  name: string;
  pathname: string;
  isCurrentPath: boolean;
};

const navItems = [
  { name: 'DESKI', pathname: '/' },
  { name: 'DECKI', pathname: '' },
  { name: 'AKCESORIA', pathname: '' },
  { name: 'AKADEMIA', pathname: '' },
  { name: 'BLOG', pathname: '' }
];

const NavItem = ({ name, pathname, isCurrentPath }: NavItemProps) => (
  <Link
    href={pathname}
    className={`px-8 py-4 text-xl
        ${isCurrentPath ? 'text-highlight' : 'text-black'}`}
  >
    {name}
  </Link>
);

const Navbar = () => {
  // placeholder
  const currentPath = '/';

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
          {navItems.slice(0, 3).map(i => (
            <NavItem
              name={i.name}
              pathname={i.pathname}
              isCurrentPath={i.pathname === currentPath}
              key={i.name}
            />
          ))}
        </div>
        <div className="flex gap-10">
          {navItems.slice(3).map(i => (
            <NavItem
              name={i.name}
              pathname={i.pathname}
              isCurrentPath={i.pathname === currentPath}
              key={i.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
