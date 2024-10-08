'use client'
import sendEmail from '@/utils/Resend';
import GenericForm from './GenericForm';
import  ContratoSuscriptoScheme  from '@/schemes/contrato-suscripto.scheme';
import handleSubmit from '@/utils/submitForm';

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

  const onSubmit = async (data) => {
    await handleSubmit(data, ContratoSuscriptoScheme, 'solicitar_contrato_suscripto');
  };

  return <GenericForm title="Solicitar contrato suscripto" fields={fields} onSubmit={onSubmit} />;
};

export default SolicitarContratoSuscripto;
