import * as yup from 'yup';

const valueFormSchema = yup.object().shape({
  Product: yup.string().required('Nazwa produktu jest wymagana'),
  Description: yup.string().required('Opis produktu jest wymagany'),
  Price: yup
    .number()
    .typeError('Cena musi być liczbą')
    .required('Cena jest wymagana')
    .positive('Cena musi być liczbą dodatnią'),
  Quantity: yup
    .number()
    .typeError('Ilość musi być liczbą')
    .required('Ilość jest wymagana')
    .integer('Ilość musi być liczbą całkowitą')
    .min(0, 'Ilość musi być większa lub równa 0'),
  Visible: yup.boolean().required('Dostępność jest wymagana'),
  Category: yup.string().required('Kategoria jest wymagana'),
  Photos: yup.array().min(1, 'Conajmniej jedno zdjęcie jest wymagane')
});

export default valueFormSchema;
