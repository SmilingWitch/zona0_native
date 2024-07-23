import { View, StyleSheet } from "react-native"
import OperationCont from "../components/common/OperationCont"
import theme from "../theme"
import { verifyTokenValidationSchema } from "../validationSchemas/verifyToken"
import { useSelector } from "react-redux"
import darkTheme from "../darkTheme"

const VerifyCode = ({navigation}) => {

    const initialValues = {
        token: ''
    }


    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme)

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

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        padding: theme.padding,
        backgroundColor: theme.colors.white
    }
})
export default VerifyCode