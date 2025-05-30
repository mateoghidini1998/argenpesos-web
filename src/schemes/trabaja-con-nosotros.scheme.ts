import * as yup from 'yup';

const TrabajaConNosotrosSchema = yup.object().shape({
  nombre: yup.string().required('El nombre es obligatorio').matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, 'El nombre solo puede contener letras y espacios'),
  apellido: yup.string().required('El apellido es obligatorio').matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, 'El apellido solo puede contener letras y espacios'),
  dni: yup
    .string()
    .matches(/^\d{7,8}$/, 'El DNI debe ser un número de 7 u 8 dígitos sin puntos')
    .required('El DNI es obligatorio'),
  celular: yup
    .string()
    .matches(/^\d+$/, 'El celular debe contener solo números')
    .required('El celular es obligatorio'),
  mail: yup
    .string()
    .email('El mail debe ser válido')
    .required('El mail es obligatorio'),
  comentarios: yup.string().nullable(),
  cv: yup
  .mixed()
  .required('Adjuntar el CV es obligatorio')
  .test(
    'fileFormat',
    'El formato del CV debe ser PDF o DOC',
    (value) =>
      value &&
      ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(
        value.type
      )
  ),
});

export default TrabajaConNosotrosSchema;
