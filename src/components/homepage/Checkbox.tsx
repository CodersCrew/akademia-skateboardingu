type CheckboxProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
};

export default function Checkbox({
  label,
  name,
  required = false
}: CheckboxProps) {
  return (
    <div className="flex w-full items-center gap-2 font-roboto text-sm text-white">
      <input
        className="rounded-[5px] border border-[#C084FC] bg-white text-[#C084FC] ring-transparent checked:bg-[#C084FC]"
        style={{ boxShadow: 'none !important' }}
        type="checkbox"
        name={name}
        id={name}
      />
      <label htmlFor={name}>
        {label} {required && '*'}
      </label>
    </div>
  );
}
