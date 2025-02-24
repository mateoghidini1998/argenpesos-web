const handleSubmit = async (
  data: FormData, 
  schema: ObjectSchema<any>, 
  formType: string 
): Promise<void> => {
  try {
    // Validación del esquema con Yup
    await schema.validate(data, { abortEarly: false });

    // Si es el formulario de botón de arrepentimiento, agregamos Ticket y ResponsableAlta
    let verificationNumber = null;
    if (formType === "boton_arrepentimiento") {
      const payload = {
        ...data,
        Ticket: "1DF3343F-B1A4-46DE-B831-D39A30C742AC",
        ResponsableAlta: ""
      };

      const verificationResponse = await fetch("/api/boton_arrepentimiento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      
      if (!verificationResponse.ok) {
        const errorData = await verificationResponse.json();
        throw new Error(errorData.error || "Error obteniendo el código de verificación");
      }

      const verificationData = await verificationResponse.json();
      verificationNumber = verificationData.numero;
    }

    const response = await fetch('/api/resend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData: { ...data, verificationNumber }, 
        formType
      }),
    });

    if (!response.ok) {
      throw new Error("Error enviando el formulario");
    }

    await response.json();
  } catch (error) {
    if (error.name === "ValidationError") {
      throw error;
    }
    throw error;
  }
};

export default handleSubmit;
