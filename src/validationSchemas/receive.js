import * as Yup from 'yup';



export  const receiveValidationSchema = Yup.object({
    amount: Yup
        .number('EL monto debe ser un numero')
        .required('Is required')
});