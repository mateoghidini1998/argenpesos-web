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
    // Validación del esquema con Yup
    await schema.validate(data, { abortEarly: false });

    // Envío del formulario
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
  } catch (error) {

    if (error.name === 'ValidationError') {
      throw error; 
    }

    throw new Error('Error enviando el formulario');
  }
};

export default handleSubmit;
