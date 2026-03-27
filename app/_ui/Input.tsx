type InputProps = {
  className?: string;
  handleOnChange: (value: string) => void;
  id: string;
  label: string;
  placeholder: string;
  type: string;
  value: string | number;
};

export default function Input({
  className,
  handleOnChange,
  id,
  label,
  placeholder,
  type,
  value,
}: InputProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1 block font-medium">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full rounded-xl border border-stone-300 px-5 py-4"
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  );
}
