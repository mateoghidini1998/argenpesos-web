'use client'
import handleSubmit from "@/utils/submitForm";
import GenericForm from "./GenericForm";
import PrestamoSchema from "@/schemes/prestamos-scheme";
import { useState } from "react";

interface Props {
  title: string;
}

const BotonArrepentimientoForm = ({ title }: Props) => {
  const fields = [
    { label: "Nombre", inputType: "input" as const, name: "nombre" },
    { label: "Apellido", inputType: "input" as const, name: "apellido" },
    { label: "DNI (sin puntos)", inputType: "input" as const, name: "DNI" },
    { label: "Celular", inputType: "input" as const, name: "celular" },
    { label: "Mail", inputType: "input" as const, name: "mail" },
  ];

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const onSubmit = async (data: any) => {
    try {
      await handleSubmit(data, PrestamoSchema, 'boton_arrepentimiento');
      setErrors({}); 
      setSuccessMessage('¡Tu solicitud fue enviada correctamente! No es necesario reenviarla.');
    } catch (err: any) {
      setSuccessMessage(null);
      if (err.inner) {
        const formErrors = err.inner.reduce((acc: any, currentError: any) => {
          acc[currentError.path] = currentError.message;
          return acc;
        }, {});
        setErrors(formErrors);
      } else {
        setErrors({ general: err.message || 'Ha ocurrido un error desconocido' });
      }
    }
  };

  return <GenericForm title={title} fields={fields} onSubmit={onSubmit} errors={errors} successMessage={successMessage || undefined}/>;
};

export default BotonArrepentimientoForm;
