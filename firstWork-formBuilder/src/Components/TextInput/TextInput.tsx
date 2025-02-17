import { useState, ChangeEvent } from "react";
import "./TextInput.css";

interface TextInputProps {
  title?: string;
  error?: string;
  className?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const TextInput = ({
  title,
  error,
  className,
  placeholder,
  onChange,
}: TextInputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="text-input-container">
      {title && <label className="text-input-label">{title}</label>}
      <input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`text-input ${error ? "text-input-error" : ""} ${
          className || ""
        }`}
      />
      {error && <span className="text-input-error-message">{error}</span>}
    </div>
  );
};

export default TextInput;
