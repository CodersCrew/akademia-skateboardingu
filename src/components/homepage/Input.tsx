type InputProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
};

export default function Input({
  label,
  name,
  placeholder,
  required = false
}: InputProps) {
  return (
    <div className="flex w-full flex-col gap-2 font-roboto text-white">
      <label htmlFor={name} className="text-xs">
        {label} {required && '*'}
      </label>
      <input
        className="rounded-full border border-white bg-transparent px-3 py-2.5 text-sm placeholder:text-[#A2A2A2] focus:border-[#C084FC]"
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
