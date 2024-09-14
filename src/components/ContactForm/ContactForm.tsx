'use client';
import { SubmitHandler, useForm } from 'react-hook-form';

export type FormFields = {
  name: string;
  surname: string;
  mail: string;
  message: string;
  privacy_policy: boolean;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = async data => {
    const req = await fetch(`/api/email`, {
      method: 'POST',
      body: JSON.stringify({
        //TODO add correct mail
        to: '',
        type: 'contact',
        data: {
          name: data.name,
          surname: data.surname,
          mail: data.mail,
          message: data.message
        }
      })
    });
  };

  return (
    <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
      <label>IMIĘ *</label>
      <input
        {...register('name', {
          required: 'To pole jest wymagane',
          validate: value => {
            if (value.length > 32) {
              return 'Pole może mieć maksymalnie 32 znaki';
            }
            return true;
          }
        })}
        type="text"
        className="mb-[28px] mt-[8px] w-[592px]"
      />
      {errors.name && (
        <span className="mt-[-28px] text-[red]">{errors.name.message}</span>
      )}
      <label>NAZWISKO *</label>
      <input
        type="text"
        {...register('surname', {
          required: 'To pole jest wymagane',
          validate: value => {
            if (value.length > 32) {
              return 'Pole może mieć maksymalnie 32 znaki';
            }
            return true;
          }
        })}
        className="mb-[28px] mt-[8px] w-[592px]"
      />
      {errors.surname && (
        <span className="mt-[-28px] text-[red]">{errors.surname.message}</span>
      )}
      <label>ADRES E-MAIL *</label>
      <input
        type="email"
        {...register('mail', {
          required: 'To pole jest wymagane',
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          validate: value => {
            if (value.length > 64) {
              return 'Pole może mieć maksymalnie 64 znaki';
            }
            return true;
          }
        })}
        className="mb-[28px] mt-[8px] w-[592px]"
      />
      {errors.mail && (
        <span className="mt-[-28px] text-[red]">{errors.mail.message}</span>
      )}
      <label>TREŚĆ WIADOMOŚCI *</label>
      <textarea
        {...register('message', {
          required: 'To pole jest wymagane',
          validate: value => {
            if (value.length > 1024) {
              return 'Pole może mieć maksymalnie 1024 znaki';
            }
            return true;
          }
        })}
        className="mb-[28px] mt-[8px] h-[260px] w-[592px]"
      />
      {errors.message && (
        <span className="mt-[-28px] text-[red]">{errors.message.message}</span>
      )}
      <div className="w-[592px]">
        <input
          type="checkbox"
          {...register('privacy_policy', { required: 'To pole jest wymagane' })}
        />
        <label>
          * Wyrażam zgodę na przetwarzanie moich danych osobowych przez XYZ w
          celu odpowiedzi na zapytanie za pomocą poczty elektronicznej i/lub
          telefonu. Więcej informacji na temat przetwarzania danych osobowych
          znajduje się na stronie polityki prywatności.
        </label>
        {errors.privacy_policy && (
          <>
            <br />
            <span className="mt-[-28px] text-[red]">
              {errors.privacy_policy.message}
            </span>
          </>
        )}
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
