'use client'
import GenericForm from './GenericForm';
import ConvertiteEnComercializadorScheme from '@/schemes/convertite-en-comercializador.scheme';
import handleSubmit from '@/utils/submitForm';
import { useState } from 'react';

const ConvertiteEnComercializadorForm = () => {
  const fields = [
    { label: "Nombre", inputType: "input", name: "nombre" },
    { label: "Apellido", inputType: "input", name: "apellido" },
    { label: "DNI (sin puntos)", inputType: "input", name: "dni" },
    { label: "Celular", inputType: "input", name: "celular" },
    { label: "Mail", inputType: "input", name: "mail" },
    { label: "Provincia", inputType: "input", name: "provincia" },
    { label: "Localidad", inputType: "input", name: "localidad" },
    { label: "¿Cuenta con local de venta al público?", inputType: "select", name: "venta_al_publico", selectOptions: [
      { value: 'Si', label: 'Si' },
      { value: 'No', label: 'No' }
    ] },
    { label: "Comentarios", inputType: "textarea", name: "comentarios" },
  ];

  const [errors, setErrors] = useState({});

  const onSubmit = async (data) => {
    try {
      const dataForValidation = {
        ...data,
        venta_al_publico: data.venta_al_publico === 'Si',
      };
      await handleSubmit(dataForValidation, ConvertiteEnComercializadorScheme, 'comercio');
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
  

  return <GenericForm title="Convertite en comercializador" fields={fields} onSubmit={onSubmit} errors={errors}/>;
};

export default ConvertiteEnComercializadorForm;
