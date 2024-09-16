import Link from 'next/link';

export type FooterItemType = {
  id: number;
  name: string;
  href: string;
};

export interface FooterItemProps {
  children: React.ReactNode;
  href: string;
  footerItemClassName?: string;
}

export function FooterItem({
  children,
  href,
  footerItemClassName
}: FooterItemProps) {
  return (
    <li
      className={`max-w-fit font-roboto text-xs hover:text-purple-400 lg:text-base ${footerItemClassName}`}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}
