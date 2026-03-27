import { type ColorVariant, type RadioChoice } from "@/app/_lib/types";

type RadioGroupProps = {
  choices: RadioChoice[];
  handleOnChange: (value: string) => void;
  name: string;
  selectedValue: string;
  variant?: ColorVariant;
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
    <div className="auto-grid rounded-xl bg-stone-100 p-2 [--gap:0.25rem] [--min-column:110px]">
      {choices.map((choice) => (
        <div
          key={choice.value}
          className={`flex items-center justify-center rounded-xl text-center transition-colors duration-200 ${variantClass}`}
        >
          <input
            type="radio"
            id={`${name}-${choice.value}`}
            name={name}
            value={choice.value}
            checked={selectedValue === choice.value}
            onChange={() => handleOnChange(choice.value)}
            className="appearance-none"
          />
          <label
            htmlFor={`${name}-${choice.value}`}
            className="w-full px-4 py-2.5 wrap-break-word"
          >
            {choice.label}
          </label>
        </div>
      ))}
    </div>
  );
}
