import * as Yup from 'yup';



export  const redeemValidationSchema = Yup.object({
    code: Yup
        .string()
        .matches(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, 'Invalid code')
        .required('Is required')
});