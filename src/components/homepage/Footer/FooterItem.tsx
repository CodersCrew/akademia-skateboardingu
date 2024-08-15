import Link from 'next/link';

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
    <li className={`max-w-fit font-roboto text-xs ${footerItemClassName}`}>
      <Link href={href}>{children}</Link>
    </li>
  );
}
