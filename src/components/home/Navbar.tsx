import Image from 'next/image';
import { IoMenu } from 'react-icons/io5';

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b border-[#3C3C3C] bg-[#171717] px-5 py-2">
      <div className="flex items-center">
        <Image src="/images/homepage/logo.png" alt="" width={32} height={32} />
        <p className="p-2 font-poetsen-one text-base text-white">
          Akademia Skateboardingu
        </p>
      </div>
      <IoMenu size={32} color="#FFFFFF" />
    </div>
  );
}
