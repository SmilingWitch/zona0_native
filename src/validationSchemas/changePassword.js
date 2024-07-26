import * as Yup from 'yup';



export  const changePassValidationSchema = Yup.object({
    new_password1: Yup
        .string()
        .required('Is required')
        .min(6, 'Too short')
        .max(1000, "Too long"),
    new_password2: Yup
        .string()
        .required('Is required')
        .min(6, 'Too short')
        .max(1000, "Too long")
});