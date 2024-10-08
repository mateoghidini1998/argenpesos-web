'use client'
import handleSubmit from "@/utils/submitForm";
import GenericForm from "./GenericForm";
import PrecancelarScheme from "@/schemes/prestamos-scheme";
import { useState } from "react";

const BotonBajaForm = ({ title }) => {
  const fields = [
    { label: "Nombre", inputType: "input", name: "nombre" },
    { label: "Apellido", inputType: "input", name: "apellido" },
    { label: "DNI (sin puntos)", inputType: "input", name: "DNI" },
    { label: "Celular", inputType: "input", name: "celular" },
    { label: "Mail", inputType: "input", name: "mail" },
  ];

  const [errors, setErrors] = useState([]);

  const onSubmit = async (data) => {
    try {
      await handleSubmit(data, PrecancelarScheme, 'boton_baja');
    } catch (errors) {
      if (Array.isArray(errors)) {
        setErrors(errors);
      } else if (errors instanceof Error) {
        setErrors([errors.message]);
      } else {
        setErrors(['Ha ocurrido un error desconocido']);
      }
    }
  };
  

  return (
    <>
      <GenericForm title={title} fields={fields} onSubmit={onSubmit} />
      {errors.length > 0 && (
        <div className="mt-4">
          <h3>Errores:</h3>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default BotonBajaForm;
