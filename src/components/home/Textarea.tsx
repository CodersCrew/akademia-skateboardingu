import { UseFormRegister } from 'react-hook-form';

type TextareaProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  register: UseFormRegister<any>;
  errorMessage?: string;
  isDisabled?: boolean;
};

export default function Textarea({
  label,
  name,
  placeholder,
  required = false,
  rows = 1,
  register,
  errorMessage,
  isDisabled = false
}: TextareaProps) {
  return (
    <div className="flex w-full flex-col gap-2 font-roboto text-white">
      <label htmlFor={name} className="text-xs lg:text-sm">
        {label} {required && '*'}
      </label>
      <textarea
        id={name}
        placeholder={placeholder}
        rows={rows}
        disabled={isDisabled}
        className={`rounded-2xl border border-white bg-transparent px-3 py-2.5 text-sm placeholder:text-neutral-400 focus:border-transparent focus:ring-2 focus:ring-amber-300 lg:text-base ${errorMessage ? 'border-0 ring-2 ring-red-500' : ''} ${isDisabled ? 'cursor-not-allowed border-neutral-400' : ''}`}
        {...register(name, { required })}
      />
      {errorMessage && (
        <span className="text-xs text-red-400 lg:text-sm">{errorMessage}</span>
      )}
    </div>
  );
}
