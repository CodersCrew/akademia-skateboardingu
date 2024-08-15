export interface FooterTitleProps {
  children: React.ReactNode;
  footerTitleClassName?: string;
}

export function FooterTitle({
  children,
  footerTitleClassName
}: FooterTitleProps) {
  return (
    <h3
      className={`mb-2 max-w-fit border-b border-amber-300 pb-2 font-poetsen-one text-base ${footerTitleClassName}`}
    >
      {children}
    </h3>
  );
}
