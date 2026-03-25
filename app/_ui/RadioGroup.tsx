type RadioGroupProps = {
  choices: { value: string; label: string }[];
  handleOnChange: (value: string) => void;
  name: string;
  selectedValue: string;
  variant?: "default" | "red" | "blue" | "green" | "yellow";
};

const variantClasses = {
  default: "has-checked:bg-blue has-checked:text-white",
  red: "has-checked:bg-red has-checked:text-white",
  blue: "has-checked:bg-blue has-checked:text-white",
  green: "has-checked:bg-green has-checked:text-white",
  yellow: "has-checked:bg-yellow has-checked:text-black",
};

export default function RadioGroup({
  choices,
  handleOnChange,
  name,
  selectedValue,
  variant = "default",
}: RadioGroupProps) {
  const variantClass = variantClasses[variant] || "";

  return (
    <div className="grid grid-cols-1 gap-1 rounded-xl bg-stone-100 p-2 sm:grid-cols-3">
      {choices.map((choice) => (
        <div
          key={choice.value}
          className={`flex items-center justify-center rounded-xl text-center transition-colors duration-200 ${variantClass}`}
        >
          <input
            type="radio"
            id={choice.value}
            name={name}
            value={choice.value}
            checked={selectedValue === choice.value}
            onChange={() => handleOnChange(choice.value)}
            className="appearance-none"
          />
          <label
            htmlFor={choice.value}
            className="w-full px-4 py-2.5 wrap-break-word"
          >
            {choice.label}
          </label>
        </div>
      ))}
    </div>
  );
}
