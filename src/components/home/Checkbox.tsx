import Link from 'next/link';
import { UseFormRegister } from 'react-hook-form';

type CheckboxProps = {
  label: string;
  labelLinkHref: string;
  labelLinkText?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  register: UseFormRegister<any>;
  errorMessage?: string;
  isDisabled?: boolean;
};

export default function Checkbox({
  label,
  labelLinkHref,
  labelLinkText,
  name,
  required = false,
  register,
  errorMessage,
  isDisabled = false
}: CheckboxProps) {
  return (
    <div className="flex w-full flex-col flex-wrap gap-2 font-roboto text-xs text-white sm:text-sm">
      <div className="flex w-full items-center gap-2">
        <input
          id={name}
          type="checkbox"
          disabled={isDisabled}
          className={`rounded-[5px] border border-[#C084FC] bg-white text-[#C084FC] !ring-offset-transparent checked:bg-[#C084FC] checked:ring-0 hover:border-[#A855F7] hover:checked:bg-[#A855F7] focus:ring-1 focus:ring-amber-300 ${errorMessage ? 'border-transparent ring-2 ring-red-400' : ''}`}
          {...register(name, { required })}
        />
        <label htmlFor={name}>
          {label}{' '}
          {labelLinkHref && (
            <Link href={labelLinkHref} className="font-medium text-[#FFC600]">
              {labelLinkText}
            </Link>
          )}{' '}
          {required && '*'}
        </label>
      </div>
      {errorMessage && (
        <span className="text-xs text-red-400 lg:text-sm">{errorMessage}</span>
      )}
    </div>
  );
}
