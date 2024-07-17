import * as Yup from 'yup';



export  const registerValidationSchema = Yup.object({
    email: Yup
        .string()
        .email('Invalid email address')
        .matches(/.+@.+\..+/, 'Invalid email address')
        .required('Is required'),
    password: Yup
        .string()
        .required('Is required')
        .min(6, 'Too short')
        .max(1000, "Too long"),
    name: Yup
        .string()
        .required('Is required'),
    last_name: Yup
        .string()
        .required('Is required'),
    ci: Yup
        .number()
        .required('Is required'),
    username: Yup
        .string()
        .required('Is required'),
    movil: Yup
        .number()
        .required('Is required')
    

});