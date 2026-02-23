import * as yup from 'yup';

const AdherirComercioSchema = yup.object().shape({
  nombre: yup.string().required('El nombre es obligatorio').matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, 'El nombre solo puede contener letras y espacios'),
  apellido: yup.string().required('El apellido es obligatorio').matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, 'El apellido solo puede contener letras y espacios'),
  antiguedad: yup
    .string()
    .matches(
      /^[\d.]+$/,
      "La antigüedad solo debe contener números y puntos"
    )
    .required("La antigüedad es obligatoria"),
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
