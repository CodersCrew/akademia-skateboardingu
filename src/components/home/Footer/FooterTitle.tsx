type FooterTitleProps = {
  children: React.ReactNode;
};

export function FooterTitle({ children }: FooterTitleProps) {
  return (
    <h3 className="mb-2 max-w-fit border-b border-amber-300 pb-2 font-poetsen-one text-base lg:text-xl">
      {children}
    </h3>
  );
}
