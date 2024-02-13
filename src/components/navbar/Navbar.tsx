import Image from 'next/image';

type NavbarProps = {
    variant?: 'dark' | 'light';
};

const Navbar = ({ variant = 'light' }: NavbarProps) => {
    return (
        <div className="m-0 p-0">
            <div className="py-5 m-0 bg-black flex items-center justify-between">
                <div className="px-[2.375rem] flex items-center gap-[3.125rem]">
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
                    <Image
                        alt="Koszyk"
                        height={37}
                        src="/icons/shopping-cart.svg"
                        width={37}
                        className="mx-[1.625rem] my-5"
                    />
                </div>
            </div>
            <div>part2</div>
        </div>
    );
};

export default Navbar;
