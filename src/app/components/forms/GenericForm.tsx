'use client'
import React, { useState } from 'react';
import FormGroup from './FormGroup';
import FormTitle from './FormTitle';

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

function GenericForm<T extends FormData>({ title, fields, onSubmit, errors }: GenericFormProps<T>) {
  const [formData, setFormData] = useState<T>({} as T);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
    <FormTitle title={title} />
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 form-container">
        {fields.map((field, index) => (
          <div
            key={index}
            className={`${fields.length % 2 !== 0 && index === fields.length - 1 ? 'md:col-span-2' : ''}`}
          >
            <FormGroup
              label={field.label}
              inputType={field.inputType}
              inputProps={{
                value: formData[field.name],
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
