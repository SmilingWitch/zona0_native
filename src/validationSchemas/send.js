import * as Yup from 'yup';



export  const sendValidationSchema = Yup.object({
    code: Yup
        .string()
        .required('Is required')
});