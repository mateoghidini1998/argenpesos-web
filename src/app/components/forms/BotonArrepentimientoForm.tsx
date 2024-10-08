'use client'
import handleSubmit from "@/utils/submitForm";
import GenericForm from "./GenericForm";
import PrestamoSchema from "@/schemes/prestamos-scheme";

const BotonArrepentimientoForm = ({ title }) => {
  const fields = [
    { label: "Nombre", inputType: "input", name: "nombre" },
    { label: "Apellido", inputType: "input", name: "apellido" },
    { label: "DNI (sin puntos)", inputType: "input", name: "DNI" },
    { label: "Celular", inputType: "input", name: "celular" },
    { label: "Mail", inputType: "input", name: "mail" },
  ];

  const onSubmit = async (data) => {
    await handleSubmit(data, PrestamoSchema, 'boton_arrepentimiento');
  };

  return <GenericForm title={title} fields={fields} onSubmit={onSubmit} />;
};

export default BotonArrepentimientoForm;
