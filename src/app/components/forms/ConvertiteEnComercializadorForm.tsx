'use client'
import GenericForm from './GenericForm';
import ConvertiteEnComercializadorScheme from '@/schemes/convertite-en-comercializador.scheme';
import handleSubmit from '@/utils/submitForm';

const ConvertiteEnComercializadorForm = () => {
  const fields = [
    { label: "Nombre", inputType: "input", name: "nombre" },
    { label: "Apellido", inputType: "input", name: "apellido" },
    { label: "DNI (sin puntos)", inputType: "input", name: "dni" },
    { label: "Celular", inputType: "input", name: "celular" },
    { label: "Mail", inputType: "input", name: "mail" },
    { label: "Provincia", inputType: "input", name: "provincia" },
    { label: "Localidad", inputType: "input", name: "localidad" },
    { label: "¿Cuenta con local de venta al público?", inputType: "select", name: "venta_al_publico", options: [
      { value: 'Si', label: 'Si' },
      { value: 'No', label: 'No' }
    ] },
    { label: "Comentarios", inputType: "textarea", name: "comentarios" },
  ];

  const onSubmit = async (data) => {
    await handleSubmit(data, ConvertiteEnComercializadorScheme, 'convertir_comercializador');
  };

  return <GenericForm title="Convertite en comercializador" fields={fields} onSubmit={onSubmit} />;
};

export default ConvertiteEnComercializadorForm;
