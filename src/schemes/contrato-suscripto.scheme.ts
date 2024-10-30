import * as yup from "yup";

const ContratoSuscriptoScheme = yup.object().shape({
  nombre: yup.string().required('El nombre es obligatorio').matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, 'El nombre solo puede contener letras y espacios'),
  apellido: yup.string().required('El apellido es obligatorio').matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, 'El apellido solo puede contener letras y espacios'),
  localidad: yup.string().required("La localidad es obligatoria"),
  provincia: yup.string().required("La provincia es obligatoria"),
  dni: yup
    .string()
    .matches(
      /^\d{7,8}$/,
      "El DNI debe ser un número de 7 u 8 dígitos sin puntos"
    )
    .required("El DNI es obligatorio"),
  phone: yup
    .string()
    .matches(/^\d+$/, "El celular debe contener solo números")
    .required("El celular es obligatorio"),
  mail: yup
    .string()
    .email("El mail debe ser válido")
    .required("El mail es obligatorio"),
  comentarios: yup.string().nullable(),
});

export default ContratoSuscriptoScheme;
