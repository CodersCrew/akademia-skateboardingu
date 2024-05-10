import Link from 'next/link';

type NavItemProps = {
  name: string;
  pathname: string;
  isCurrentPath: boolean;
};

const NavItem = ({ name, pathname, isCurrentPath }: NavItemProps) => (
  <Link
    href={pathname}
    className={`px-8 py-4 text-xl
          ${isCurrentPath ? 'text-highlight' : 'text-black'}`}
  >
    {name}
  </Link>
);

export default NavItem;
