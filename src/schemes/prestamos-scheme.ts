import * as yup from 'yup';

const PrestamoSchema = yup.object().shape({
  nombre: yup.string().required('El nombre es obligatorio'),
  apellido: yup.string().required('El apellido es obligatorio'),
  DNI: yup
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
});

export default PrestamoSchema;
