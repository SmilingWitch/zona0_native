import { View, StyleSheet } from "react-native"
import OperationCont from "../components/OperationCont"
import { redeemValidationSchema } from "../validationSchemas/redeem"
import theme from "../theme"
import { verifyTokenValidationSchema } from "../validationSchemas/verifyToken"

const VerifyCode = ({navigation}) => {

    const initialValues = {
        token: ''
    }




    return( 
    <View style = {styles.container}>
        <OperationCont
                header = "Enytre el codigo"
                content= "Enviamos un codigo de verificacion temporal a su correo. Copie el codigo aqui para verificar su registro"
                btn_text="verificar"
                placeholder="Codigo"
                initialValues={initialValues}
                name = "token"
                validationScheme={verifyTokenValidationSchema}
                url = {null}
                operation = "verify_token"
                navigation = {navigation}
    />

    </View>
    
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: theme.padding,
        backgroundColor: theme.colors.white
    }
})
export default VerifyCode