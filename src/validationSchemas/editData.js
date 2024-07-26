import * as Yup from 'yup';



export  const editDataValidationSchema = Yup.object({
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