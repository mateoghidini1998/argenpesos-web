// AdheriTuComercioForm.tsx
import AdherirComercioSchema from '@/schemes/adherite.scheme';
import GenericForm from './GenericForm';
import handleSubmit from '@/utils/submitForm';

const AdheriTuComercioForm = () => {
  const fields = [
    { label: "Nombre", inputType: "input", name: "nombre" },
    { label: "Apellido", inputType: "input", name: "apellido" },
    { label: "DNI (sin puntos)", inputType: "input", name: "dni" },
    { label: "Celular", inputType: "input", name: "celular" },
    { label: "Mail", inputType: "input", name: "mail" },
    { label: "Nombre del comercio", inputType: "input", name: "nombre_comercio" },
    { label: "Rubro", inputType: "input", name: "rubro" },
    { label: "Telefono", inputType: "input", name: "telefono" },
    { label: "Horario de contacto", inputType: "input", name: "horario_contacto" },
    { label: "Comentarios", inputType: "textarea", name: "comentarios" },
  ];

  const onSubmit = async (data) => {
    await handleSubmit(data, AdherirComercioSchema, 'adherir_comercio');
  };

  return <GenericForm title="Adherí tu comercio" fields={fields} onSubmit={onSubmit} />;
};

export default AdheriTuComercioForm;
