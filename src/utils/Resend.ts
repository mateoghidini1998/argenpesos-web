import { EmailTemplate } from '@/app/components/EmailTemplate';
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(formData, formType) {
  const recipientEmails = {
    'boton_arrepentimiento': 'ghidinimateo1@gmail.com',
    'boton_baja': 'ghidinimateo1@gmail.com',
    'solicitar_contrato_suscripto': 'ghidinimateo1@gmail.com',
    'trabajar_con_nosotros': 'ghidinimateo1@gmail.com',
    'adherente': 'ghidinimateo1@gmail.com',
    'comercio': 'ghidinimateo1@gmail.com',
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

  // Convertir el valor de `venta_al_publico` para el correo
  const transformedFormData = {
    ...formData,
    venta_al_publico: formData.venta_al_publico ? 'Si' : 'No', 
  };

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: recipientEmail,
      subject,
      react: EmailTemplate({ title: subject, formData: transformedFormData }), 
    });

    if (error) {
      throw new Error(error.message);
    }
    console.log(transformedFormData);
    return data;
  } catch (error) {
    console.error('Error enviando el correo:', error);
    throw error;
  }
};


export default sendEmail;
