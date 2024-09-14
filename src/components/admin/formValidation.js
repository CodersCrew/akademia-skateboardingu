import * as yup from 'yup';

const valueFormSchema = object().shape({
  Product: string().required('Nazwa produktu jest wymagana'),
  Description: string().required('Opis produktu jest wymagany'),
  Price: number()
    .typeError('Cena musi być liczbą')
    .required('Cena jest wymagana')
    .positive('Cena musi być liczbą dodatnią'),
  Quantity: number()
    .typeError('Wartość musi być liczbą')
    .required('Liczba jest wymagana"')
    .integer('Liczba musi być liczbą całkowitą')
    .min(0, 'Liczba musi być większa lub równa 0'),
  Visible: boolean().required('Dostępność jest wymagana'),
  Category: string().required('Kategoria jest wymagana'),
  Photos: array().min(1, 'Co najmniej jedno zdjęcie jest wymagane')
});

export default valueFormSchema;
