'use client'
import AdherirComercioSchema from '@/schemes/adherite.scheme';
import GenericForm from './GenericForm';
import handleSubmit from '@/utils/submitForm';
import { useState } from 'react';

const AdheriTuComercioForm = () => {
  const fields = [
    { label: "Nombre", inputType: "input", name: "nombre" },
    { label: "Apellido", inputType: "input", name: "apellido" },
    { label: "Antigüedad", inputType: "input", name: "antigüedad" },
    { label: "Celular", inputType: "input", name: "celular" },
    { label: "Mail", inputType: "input", name: "mail" },
    { label: "Nombre del comercio", inputType: "input", name: "nombre_comercio" },
    { label: "Rubro", inputType: "input", name: "rubro" },
    { label: "Telefono", inputType: "input", name: "telefono" },
    { label: "Horario de contacto", inputType: "input", name: "horario_contacto" },
    { label: "Comentarios", inputType: "textarea", name: "comentarios" },
  ];

  const [errors, setErrors] = useState({});

  const onSubmit = async (data) => {
    try {
      await handleSubmit(data, AdherirComercioSchema, 'adherente');
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

  return <GenericForm title="Adherí tu comercio" fields={fields} onSubmit={onSubmit} errors={errors}/>;
};

export default AdheriTuComercioForm;
