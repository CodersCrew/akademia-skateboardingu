import Image from 'next/image';
import Link from 'next/link';

type NavbarProps = {
    variant?: 'dark' | 'light';
};

type NavItemProps = {
    name: string;
    pathname: string;
    isCurrentPath: boolean;
    variant: 'dark' | 'light';
};

type NavItemType = { name: string; pathname: string };

const shopNavItems: NavItemType[] = [
    { name: 'Deski', pathname: '/' },
    { name: 'Decki', pathname: '' },
    { name: 'Akcesoria', pathname: '' },
];

const academyNavItems: NavItemType[] = [
    { name: 'Akademia', pathname: '' },
    { name: 'Blog', pathname: '' },
];

const NavItem = ({ name, pathname, isCurrentPath, variant }: NavItemProps) => (
    <Link
        href={pathname}
        className={`font-inter px-8 py-4 text-xl 
        ${isCurrentPath ? 'text-[#8E00FF]' : variant === 'light' ? 'text-black' : 'text-white'}`}
    >
        {name.toUpperCase()}
    </Link>
);

const Navbar = ({ variant = 'light' }: NavbarProps) => {
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
                    <h1 className="font-inter text-[1.563rem] text-white">
                        Akademia Skate <i>shop</i>
                    </h1>
                </div>
                <div className="pr-9">
                    <Image
                        alt="Koszyk"
                        height={37}
                        src="/icons/shopping-cart.svg"
                        width={37}
                        className="mx-[1.625rem] my-5"
                    />
                </div>
            </div>
            <div
                className={`flex items-center justify-between py-6 pl-6 pr-5 ${variant === 'dark' ? 'bg-black' : 'bg-white'}`}
            >
                <div className="flex gap-10">
                    {shopNavItems.map((i) => (
                        <NavItem
                            name={i.name}
                            pathname={i.pathname}
                            isCurrentPath={i.pathname === currentPath}
                            variant={variant}
                        />
                    ))}
                </div>
                <div className="flex gap-10">
                    {academyNavItems.map((i) => (
                        <NavItem
                            name={i.name}
                            pathname={i.pathname}
                            isCurrentPath={i.pathname === currentPath}
                            variant={variant}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
