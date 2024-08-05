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


    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme)

    return( 
    <View style = {styles.container}>
        <OperationCont
                header = "Enter the code"
                content= "We send a temporary verification code to your email. Copy the code here to verify your registration."
                btn_text="check"
                placeholder="Code"
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