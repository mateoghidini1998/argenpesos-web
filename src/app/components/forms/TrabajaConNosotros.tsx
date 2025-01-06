'use client'
import GenericForm from './GenericForm';
import TrabajaConNosotrosSchema from '@/schemes/trabaja-con-nosotros.scheme';
import handleSubmit from '@/utils/submitForm';
import { useState } from 'react';

const TrabajaConNosotros = () => {
  const fields = [
    { label: "Nombre", inputType: "input", name: "nombre" },
    { label: "Apellido", inputType: "input", name: "apellido" },
    { label: "DNI (sin puntos)", inputType: "input", name: "dni" },
    { label: "Celular", inputType: "input", name: "celular" },
    { label: "Mail", inputType: "input", name: "mail" },
    { label: "Comentarios", inputType: "textarea", name: "comentarios" },
    { label: "Adjuntar CV", inputType: "file", name: "cv" },
  ];

  const [errors, setErrors] = useState({});

  const onSubmit = async (data) => {
    if (data.cv) {
      const file = data.cv;
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64 = reader.result.split(',')[1];
        const formDataWithCV = {
          ...data,
          cv: {
            base64,
            name: file.name,
            type: file.type,
          },
        };
  
        try {
          await handleSubmit(formDataWithCV, TrabajaConNosotrosSchema, 'trabajar_con_nosotros');
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
      reader.readAsDataURL(file);
    } else {
      try {
        await handleSubmit(data, TrabajaConNosotrosSchema, 'trabajar_con_nosotros');
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
    }
  };
  
  return <GenericForm title="Trabajá con nosotros" fields={fields} onSubmit={onSubmit} errors={errors}/>;
};

export default TrabajaConNosotros;
