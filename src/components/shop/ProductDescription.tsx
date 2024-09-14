type ProductDescriptionProps = { description: string };

export function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <div>
      <h3 className="mb-6 text-[2rem] font-semibold">Opis</h3>
      <div className="text-xl">{description}</div>
    </div>
  );
}
