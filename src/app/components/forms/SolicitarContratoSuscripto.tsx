'use client'
import GenericForm from './GenericForm';
import  ContratoSuscriptoScheme  from '@/schemes/contrato-suscripto.scheme';
import handleSubmit from '@/utils/submitForm';
import { useState } from 'react';

const SolicitarContratoSuscripto = () => {
  const fields = [
    { label: "Nombre", inputType: "input", name: "nombre" },
    { label: "Apellido", inputType: "input", name: "apellido" },
    { label: "DNI (sin puntos)", inputType: "input", name: "dni" },
    { label: "Celular", inputType: "input", name: "celular" },
    { label: "Mail", inputType: "input", name: "mail" },
    { label: "Provincia", inputType: "input", name: "provincia" },
    { label: "Localidad", inputType: "input", name: "localidad" },
    { label: "Comentarios", inputType: "textarea", name: "comentarios" },
  ];


  const [errors, setErrors] = useState({});

  const onSubmit = async (data) => {
    try {
      await handleSubmit(data, ContratoSuscriptoScheme, 'solicitar_contrato_suscripto');
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



  return <GenericForm title="Solicitar contrato suscripto" fields={fields} onSubmit={onSubmit} errors={errors} />;
};

export default SolicitarContratoSuscripto;
