import * as Yup from 'yup';



export  const redeemValidationSchema = Yup.object({
    code: Yup
        .string()
        .required('Is required')
});