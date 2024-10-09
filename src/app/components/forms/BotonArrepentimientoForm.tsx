'use client'
import handleSubmit from "@/utils/submitForm";
import GenericForm from "./GenericForm";
import PrestamoSchema from "@/schemes/prestamos-scheme";
import { useState } from "react";

const BotonArrepentimientoForm = ({ title }) => {
  const fields = [
    { label: "Nombre", inputType: "input", name: "nombre" },
    { label: "Apellido", inputType: "input", name: "apellido" },
    { label: "DNI (sin puntos)", inputType: "input", name: "DNI" },
    { label: "Celular", inputType: "input", name: "celular" },
    { label: "Mail", inputType: "input", name: "mail" },
  ];

  const [errors, setErrors] = useState({});

  const onSubmit = async (data) => {
    try {
      await handleSubmit(data, PrestamoSchema, 'boton_arrepentimiento');
      setErrors({}); 
    } catch (err) {
      if (err.inner) {
        const formErrors = err.inner.reduce((acc, currentError) => {
          acc[currentError.path] = currentError.message;
          return acc;
        }, {});
        setErrors(formErrors);
      } else {
        setErrors({ general: 'Ha ocurrido un error desconocido' });
      }
    }
  };

  return <GenericForm title={title} fields={fields} onSubmit={onSubmit} errors={errors}/>;
};

export default BotonArrepentimientoForm;
