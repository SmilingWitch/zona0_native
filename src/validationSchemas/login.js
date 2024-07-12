import * as Yup from 'yup';



export  const loginValidationSchema = Yup.object({
    email: Yup
        .string()
        .email('Invalid email address')
        .matches(/.+@.+\..+/, 'Invalid email address')
        .required('Is required'),
    password: Yup
        .string()
        .required('Is required')
        .min(6, 'Too short')
        .max(1000, "Too long")
});