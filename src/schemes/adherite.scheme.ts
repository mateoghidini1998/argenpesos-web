import * as yup from 'yup';

const AdherirComercioSchema = yup.object().shape({
  nombre: yup.string().required('El nombre es obligatorio'),
  apellido: yup.string().required('El apellido es obligatorio'),
  dni: yup
    .string()
    .matches(
      /^\d{7,8}$/,
      "El DNI debe ser un número de 7 u 8 dígitos sin puntos"
    )
    .required("El DNI es obligatorio"),
  nombre_comercio: yup.string().required('El nombre del comercio es obligatorio'),
  rubro: yup.string().required('El rubro es obligatorio'),
  telefono: yup
    .string()
    .matches(/^\d+$/, 'El teléfono debe contener solo números')
    .required('El teléfono es obligatorio'),
  celular: yup
    .string()
    .matches(/^\d+$/, 'El celular debe contener solo números')
    .required('El teléfono es obligatorio'),
  mail: yup
    .string()
    .email("El mail debe ser válido")
    .required("El mail es obligatorio"),
  horario_contacto: yup.string().required('El horario de contacto es obligatorio'),
  comentarios: yup.string().nullable(),
});

export default AdherirComercioSchema;
