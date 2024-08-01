import * as Yup from 'yup';



export  const donateValidationSchema = Yup.object({
    amount: Yup
        .number()
        .required('Is required')
});