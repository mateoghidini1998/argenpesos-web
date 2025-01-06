"use client";
import { useEffect, useState } from "react";
type FormGroupProps = {
  label?: string;
  inputType?: "input" | "textarea" | "select" | "file";
  inputProps?:
    | React.InputHTMLAttributes<HTMLInputElement>
    | React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  selectOptions?: Array<{ value: string; label: string }>;
  error?: string;
};

export default function FormGroup({
  label,
  inputType = "input",
  inputProps,
  selectOptions = [],
  error,
}: FormGroupProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(error !== undefined);
  }, [error]);

  return (
    <div
      className={`form-group flex flex-col h-full gap-2.5 ${
        inputProps?.className || ""
      }`}
    >
      {label && (
        <label
          className="text-xs md:text-sm text-[#393E4F]"
          htmlFor={inputProps?.id}
        >
          {label}
        </label>
      )}
      {inputType === "input" && (
        <input
          type="text"
          className={`border ${
            hasError ? "border-red-500" : "border-gray-300"
          } rounded w-full px-2 py-2 md:px-4 focus:outline-none focus:border-lightblue-primary`}
          {...(inputProps as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && <div className="text-red-500 text-[10px] mt-1">{error}</div>}

      {inputType === "textarea" && (
        <textarea
          className="border border-gray-300 rounded w-full px-2 py-2 md:px-4 h-24 focus:outline-none focus:border-lightblue-primary"
          {...(inputProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      )}
      {inputType === "file" && (
        <input
          type="file"
          className="border border-gray-300 rounded w-full px-2 py-2 md:px-4 focus:outline-none focus:border-lightblue-primary"
          {...(inputProps as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      {inputType === "select" && (
        <div className="flex flex-wrap gap-2">
          {selectOptions?.map((option) => (
            <label key={option.value} className="flex items-center gap-2">
              <input
                type="radio"
                value={option.value}
                name={inputProps?.name}
                onChange={inputProps?.onChange}
                className="form-radio"
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
