"use client";
import TrabajaConNosotrosSchema from "@/schemes/trabaja-con-nosotros.scheme";
import handleSubmit from "@/utils/submitForm";
import FormGroup from "./FormGroup";
import { useState } from "react";
import FormTitle from "./FormTitle";

const TrabajaConNosotros = ({ title }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fields = [
    { label: "Nombre", inputType: "input", name: "nombre" },
    { label: "Apellido", inputType: "input", name: "apellido" },
    { label: "DNI (sin puntos)", inputType: "input", name: "dni" },
    { label: "Celular", inputType: "input", name: "celular" },
    { label: "Mail", inputType: "input", name: "mail" },
    { label: "Comentarios", inputType: "textarea", name: "comentarios" },
    { label: "Adjuntar CV", inputType: "file", name: "cv" },
  ];

  const [formValues, setFormValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = async (name: string, value: any) => {
    if (name === "cv" && value instanceof File) {
      const file = value;
      const base64 = await convertFileToBase64(file);
      setFormValues((prev) => ({
        ...prev,
        [name]: {
          name: file.name,
          type: file.type,
          base64,
        },
      }));
    } else {
      setFormValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; 
    setIsSubmitting(true);
    try {
      await handleSubmit(
        formValues,
        TrabajaConNosotrosSchema,
        "trabajar_con_nosotros"
      );
      setFormValues({});
      setErrors({});
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <FormTitle title="Trabajá con Nosotros" />
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
                key={field.name}
                label={field.label}
                inputType={field.inputType as any}
                inputProps={{
                  name: field.name,
                  onChange: (e) => {
                    const value =
                      field.inputType === "file"
                        ? e.target.files?.[0]
                        : e.target.value;
                    handleChange(field.name, value);
                  },
                  id: field.name,
                }}
                error={errors[field.name]}
              />
            </div>
          ))}
        </div>
          <div className="flex justify-center mt-4 w-full">
            <button
              type="submit"
              onClick={onSubmit}
              className="bg-[#00ADEE] w-full text-white py-2 px-8 rounded-[8px] focus:outline-none"
            >
              Enviar
            </button>
          </div>
      </div>
    </>
  );
};

const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

export default TrabajaConNosotros;
