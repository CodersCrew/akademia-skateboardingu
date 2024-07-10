'use client';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormFields = {
  name: string;
  surname: string;
  mail: string;
  message: string;
  privacy_policy: boolean;
};

const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = data => {
    console.log(data);
  };

  return (
    <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
      <label>IMIĘ *</label>
      <input
        {...register('name', { required: true })}
        type="text"
        className="mb-[28px] mt-[8px] w-[592px]"
      />
      <label>NAZWISKO *</label>
      <input
        type="text"
        {...register('surname', { required: true })}
        className="mb-[28px] mt-[8px] w-[592px]"
      />
      <label>ADRES E-MAIL *</label>
      <input
        type="email"
        {...register('mail', {
          required: true,
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        })}
        className="mb-[28px] mt-[8px] w-[592px]"
      />
      <label>TREŚĆ WIADOMOŚCI *</label>
      <textarea
        {...register('message', { required: true })}
        className="mb-[28px] mt-[8px] h-[260px] w-[592px]"
      />
      <div className="w-[592px]">
        <input
          type="checkbox"
          {...register('privacy_policy', { required: true })}
        />
        <label>
          * Wyrażam zgodę na przetwarzanie moich danych osobowych przez XYZ w
          celu odpowiedzi na zapytanie za pomocą poczty elektronicznej i/lub
          telefonu. Więcej informacji na temat przetwarzania danych osobowych
          znajduje się na stronie polityki prywatności.
        </label>
      </div>
      <button
        type="submit"
        className="ml-auto w-fit rounded-xl bg-purple-800 px-[24px] py-[8px] text-white"
      >
        Wyślij
      </button>
    </form>
  );
};

export default ContactForm;
