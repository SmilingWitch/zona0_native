
import * as Yup from 'yup';



export  const verifyTokenValidationSchema = Yup.object({
    token: Yup
        .string()
        .required('Is required')
});