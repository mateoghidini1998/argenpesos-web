'use client'
import GenericForm from './GenericForm';
import TrabajaConNosotrosSchema from '@/schemes/trabaja-con-nosotros.scheme';
import handleSubmit from '@/utils/submitForm';

const TrabajaConNosotros = () => {
  const fields = [
    { label: "Nombre", inputType: "input", name: "nombre" },
    { label: "Apellido", inputType: "input", name: "apellido" },
    { label: "DNI (sin puntos)", inputType: "input", name: "dni" },
    { label: "Celular", inputType: "input", name: "celular" },
    { label: "Mail", inputType: "input", name: "mail" },
    { label: "Provincia", inputType: "input", name: "provincia" },
    { label: "Localidad", inputType: "input", name: "localidad" },
    { label: "Comentarios", inputType: "textarea", name: "comentarios" },
    { label: "Adjuntar CV", inputType: "file", name: "cv" },
  ];

  const onSubmit = async (data) => {
    await handleSubmit(data, TrabajaConNosotrosSchema, 'trabajar_con_nosotros');
  };

  return <GenericForm title="Trabajá con nosotros" fields={fields} onSubmit={onSubmit} />;
};

export default TrabajaConNosotros;
