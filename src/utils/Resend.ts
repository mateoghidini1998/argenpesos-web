import { EmailTemplate } from '@/app/components/EmailTemplate';
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(formData, formType) {
  const recipientEmails = {
    'boton_arrepentimiento': process.env.BOTON_ARREPENTIMIENTO_MAIL,
    'boton_baja': process.env.BOTON_BAJA_MAIL,
    'solicitar_contrato_suscripto': process.env.CONTRATO_SUSCRIPTO_MAIL,
    'trabajar_con_nosotros': process.env.TRABAJA_CON_NOSOTROS_MAIL,
    'adherente': process.env.TRABAJA_CON_NOSOTROS_MAIL,
    'comercio': process.env.CONVERTITE_COMERZIALIZADOR_MAIL,
  };

  const emailSubjects = {
    'boton_arrepentimiento': 'Devolvé tu préstamo',
    'boton_baja': 'Precancelar préstamo',
    'solicitar_contrato_suscripto': 'Solicitar contrato suscripto',
    'trabajar_con_nosotros': 'Trabajá con nosotros',
    'adherente': 'Adherí tu comercio',
    'comercio': 'Convertite en comercializador',
  };

  const subject = emailSubjects[formType] || 'Otro Tipo de Formulario';
  const recipientEmail = recipientEmails[formType.toLowerCase()];
  if (!recipientEmail) {
    console.error(`Invalid formType: ${formType}`);
    throw new Error('Invalid formType');
  }

  const transformedFormData = {
    ...formData,
    venta_al_publico: formData.venta_al_publico ? 'Si' : 'No', 
  };

  try {
    const { data, error } = await resend.emails.send({
      from: recipientEmail,
      to: recipientEmail,
      subject,
      react: EmailTemplate({ title: subject, formData: transformedFormData }), 
    });

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error('Error enviando el correo:', error);
    throw error;
  }
};


export default sendEmail;
