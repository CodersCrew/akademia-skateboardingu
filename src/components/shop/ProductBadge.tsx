export const colorVariants = {
  promotion: 'bg-[#FF4949]',
  new: 'bg-[#0500FF]',
  bestseller: 'bg-[#5DDC5A]'
};

type ProductBadgeProps = {
  text: string;
  variant: keyof typeof colorVariants;
};

export function ProductBadge({ text, variant }: ProductBadgeProps) {
  return (
    <div
      className={`rounded-[10px] ${colorVariants[variant]} px-2.5 py-3.5 font-bold text-white`}
    >
      {text}
    </div>
  );
}
