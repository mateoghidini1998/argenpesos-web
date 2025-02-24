"use client";
import React, { useState } from "react";
import FormGroup from "./FormGroup";
import FormTitle from "./FormTitle";

interface GenericFormProps<T extends FormData> {
  title: string;
  fields: Array<{ label: string; inputType: string; name: keyof T }>;
  onSubmit: (data: T) => void;
  errors: { [key in keyof T]?: string };
}

interface FormData {
  nombre: string;
  apellido: string;
  // ... otros campos
}

function GenericForm<T extends FormData>({
  title,
  fields,
  onSubmit,
  errors,
}: GenericFormProps<T>) {
  const initialFormData = {} as T;
  const [formData, setFormData] = useState<T>(initialFormData);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = event.target as HTMLInputElement;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);

    if (!Object.values(errors).some((error) => error !== undefined)) {
      setFormData(initialFormData);
    }
  };

  return (
    <>
      <FormTitle title={title} />
      {errors.general && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {errors.general}
        </div>
      )}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 form-container">
          {fields.map((field, index) => (
            <div
              key={index}
              className={`${
                fields.length % 2 !== 0 && index === fields.length - 1
                  ? "md:col-span-2"
                  : ""
              }`}
            >
              <FormGroup
                label={field.label}
                inputType={field.inputType}
                inputProps={{
                  value: formData[field.name] || "",
                  onChange: handleChange,
                  name: field.name,
                }}
                selectOptions={field.selectOptions}
                error={errors[field.name]}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#00ADEE] w-full text-white py-2 px-8 rounded-[8px] focus:outline-none"
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}

export default GenericForm;
