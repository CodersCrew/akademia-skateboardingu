import { UseFormRegister } from 'react-hook-form';

type InputProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<any>;
  errorMessage?: string;
  isDisabled?: boolean;
};

export default function Input({
  label,
  name,
  placeholder,
  required = false,
  register,
  errorMessage,
  isDisabled = false
}: InputProps) {
  return (
    <div className="flex w-full flex-col gap-2 font-roboto text-white">
      <label htmlFor={name} className="text-xs lg:text-sm">
        {label} {required && '*'}
      </label>
      <input
        id={name}
        placeholder={placeholder}
        disabled={isDisabled}
        className={`rounded-full border border-white bg-transparent px-3 py-2.5 text-sm placeholder:text-neutral-400 focus:border-transparent focus:ring-2 focus:ring-amber-300 lg:text-base ${errorMessage ? 'border-0 ring-2 ring-red-500' : ''} ${isDisabled ? 'cursor-not-allowed border-neutral-400' : ''}`}
        {...register(name, { required })}
      />
      {errorMessage && (
        <span className="text-xs text-red-400 lg:text-sm">{errorMessage}</span>
      )}
    </div>
  );
}
