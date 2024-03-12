type FormTitleProps = {
  type: string;
};

const FormTitle = ({ type }: FormTitleProps) => {
  return (
    <p className="mt-20 text-tremor-title">
      {type === 'add' ? 'Dodaj Produkt' : 'Edytuj Produkt'}
    </p>
  );
};
export default FormTitle;
