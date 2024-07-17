import OperationCont from "../components/OperationCont"
import StyledText from "../components/StyledText"
import { redeemValidationSchema } from "../validationSchemas/redeem"

const VerifyCode = () => {

    const initialValues = {
        code: ''
    }


    return( 
    <OperationCont
                header = "Enytre el codigo"
                content= "Enviamos un codigo de verificacion temporal a su correo. Copie el codigo aqui para verificar su registro"
                btn_text="verificar"
                placeholder="Codigo"
                initialValues={ initialValues}
                name = "code"
                validationScheme={redeemValidationSchema}
                url = ""
    />
)
}
export default VerifyCode