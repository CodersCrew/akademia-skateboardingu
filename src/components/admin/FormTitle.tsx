type FormTitleProps = {
  type: string;
};

export function FormTitle({ type }: FormTitleProps) {
  return (
    <p className="mt-20 text-tremor-title">
      {type === 'add' ? 'Dodaj Produkt' : 'Edytuj Produkt'}
    </p>
  );
}
