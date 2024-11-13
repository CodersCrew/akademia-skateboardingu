import Link from 'next/link';

type FooterItemProps = {
  children: React.ReactNode;
  href: string;
};

export function FooterItem({ children, href }: FooterItemProps) {
  return (
    <li className="max-w-fit font-roboto text-xs hover:text-purple-400 lg:text-base">
      <Link href={href}>{children}</Link>
    </li>
  );
}
