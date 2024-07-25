import * as Yup from 'yup';



export  const bankingrValidationSchema = Yup.object({
    amount: Yup
        .number()
        .required('Is required'),
});