"use client";
import TrabajaConNosotrosSchema from "@/schemes/trabaja-con-nosotros.scheme";
import handleSubmit from "@/utils/submitForm";
import FormGroup from "./FormGroup";
import { useState, useRef } from "react";
import FormTitle from "./FormTitle";

const TrabajaConNosotros = ({ title }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const initialFormValues = {
    nombre: "",
    apellido: "",
    dni: "",
    celular: "",
    mail: "",
    comentarios: "",
    cv: undefined,
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const fields = [
    { label: "Nombre", inputType: "input", name: "nombre" },
    { label: "Apellido", inputType: "input", name: "apellido" },
    { label: "DNI (sin puntos)", inputType: "input", name: "dni" },
    { label: "Celular", inputType: "input", name: "celular" },
    { label: "Mail", inputType: "input", name: "mail" },
    { label: "Comentarios", inputType: "textarea", name: "comentarios" },
    { label: "Adjuntar CV", inputType: "file", name: "cv" },
  ];

  const handleChange = async (name, value) => {
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

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      await handleSubmit(
        formValues,
        TrabajaConNosotrosSchema,
        "trabajar_con_nosotros"
      );
      setErrors({});
      setFormValues(initialFormValues);

      // Limpia el campo de archivo manualmente
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
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
                  value:
                    field.inputType === "file"
                      ? undefined // Los campos de tipo file no usan value
                      : formValues[field.name] || "", // Vincula los demás campos al estado
                  onChange: (e) => {
                    const value =
                      field.inputType === "file"
                        ? e.target.files?.[0]
                        : e.target.value;
                    handleChange(field.name, value);
                  },
                  id: field.name,
                  ...(field.inputType === "file" && { ref: fileInputRef }),
                }}
                error={errors[field.name]}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 w-full relative">
          <button
            type="submit"
            onClick={onSubmit}
            className={`bg-[#00ADEE] w-full text-white py-2 px-8 rounded-[8px] focus:outline-none ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
          {isSubmitting && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="loader border-t-4 border-b-4 border-white rounded-full w-6 h-6 animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

export default TrabajaConNosotros;
