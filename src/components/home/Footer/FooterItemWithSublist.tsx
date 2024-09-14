import { FooterItem, FooterItemType } from './FooterItem';

export interface FooterItemWithSublistProps {
  children: React.ReactNode;
  sublist: FooterItemType[];
  footerSublistClassName?: string;
}

export function FooterItemWithSublist({
  children,
  sublist,
  footerSublistClassName
}: FooterItemWithSublistProps) {
  return (
    <li className={`max-w-fit font-roboto text-xs ${footerSublistClassName}`}>
      {children}
      <ul className="flex flex-col gap-1 pl-4">
        {sublist.map(subitem => (
          <FooterItem href={subitem.href} key={subitem.id}>
            {subitem.name}
          </FooterItem>
        ))}
      </ul>
    </li>
  );
}
