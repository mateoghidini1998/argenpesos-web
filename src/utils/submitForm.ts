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
    // Si hay errores de Yup, lanzamos el error para que el componente que llama lo maneje
    if (error.name === 'ValidationError') {
      throw error; // Lanzar el error para que el componente superior lo capture
    }
    
    // Si es un error de red o de envío del formulario
    throw new Error('Error enviando el formulario');
  }
};

export default handleSubmit;
