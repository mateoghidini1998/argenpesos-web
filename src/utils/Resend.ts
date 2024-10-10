import { EmailTemplate } from '@/app/components/EmailTemplate';
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(formData, formType) {
  const recipientEmails = {
    'boton_arrepentimiento': 'procesos@argenpesos.com.ar',
    'boton_baja': 'ghidinimateo1@gmail.com',
    'solicitar_contrato_suscripto': 'atencionalcliente@argenpesos.com.ar',
    'trabajar_con_nosotros': 'rrhh@argenpesos.com.ar',
    'adherente': 'atencionalcliente@argenpesos.com.ar',
    'comercio': 'casosa@argenpesos.com.ar',
    
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
  try {
    console.log('Full Recipient Email asd:', recipientEmails[formType]);
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: recipientEmail,
      subject,
      react: EmailTemplate({ title: subject, formData }),
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
