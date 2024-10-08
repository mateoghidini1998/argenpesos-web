import { ObjectSchema } from 'yup';

interface FormData {
  [key: string]: any; 
}

const handleSubmit = async (
  data: FormData, 
  schema: ObjectSchema<any>, 
  formType: string 
): Promise<void> => {
  try {
    
    await schema.validate(data, { abortEarly: false });

    const response = await fetch('/api/resend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ formData: data, formType }),
    });

    if (!response.ok) {
      throw new Error('Error enviando el formulario');
    }

    const result = await response.json();
    console.log('Formulario enviado con éxito:', result);
  } catch (error) {
    console.error('Error en el formulario:', error);
  }
};

export default handleSubmit;
