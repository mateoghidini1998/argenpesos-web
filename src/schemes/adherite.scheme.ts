import * as yup from 'yup';

const AdherirComercioSchema = yup.object().shape({
  nombre: yup.string().required('El nombre es obligatorio'),
  apellido: yup.string().required('El apellido es obligatorio'),
  nombreComercio: yup.string().required('El nombre del comercio es obligatorio'),
  rubro: yup.string().required('El rubro es obligatorio'),
  telefono: yup
    .string()
    .matches(/^\d+$/, 'El teléfono debe contener solo números')
    .required('El teléfono es obligatorio'),
  horarioContacto: yup.string().required('El horario de contacto es obligatorio'),
  comentarios: yup.string().nullable(),
});

export default AdherirComercioSchema;
