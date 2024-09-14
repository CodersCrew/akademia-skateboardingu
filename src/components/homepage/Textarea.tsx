type TextareaProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
};

export default function Textarea({
  label,
  name,
  placeholder,
  required = false,
  rows = 1
}: TextareaProps) {
  return (
    <div className="flex w-full flex-col gap-2 font-roboto text-white">
      <label htmlFor={name} className="text-xs">
        {label} {required && '*'}
      </label>
      <textarea
        className="rounded-2xl border border-white bg-transparent px-3 py-2.5 text-sm placeholder:text-[#A2A2A2] focus:border-[#C084FC]"
        id={name}
        name={name}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
}
