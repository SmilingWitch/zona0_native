import { View, StyleSheet } from "react-native"
import theme from "../theme"
import BackHeader from "../components/common/BackHeader"
import OperationCont from "../components/common/OperationCont"
import { sendValidationSchema } from "../validationSchemas/send"
import { useSelector } from "react-redux"
import darkTheme from "../darkTheme"

const initialValues = {
    code: ""
}

const Send = ({navigation}) => {

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )

    return(
        <View style = {styles.container}>
            <BackHeader navigation = {navigation} name = "Enviar OSP"/>
            <OperationCont 
                header = "Entre el codigo"
                content="Introduzca el codigo para proceder a pagar el monto establecido"
                btn_text="Verificar"
                placeholder="Codigo"
                name = "code"
                url = "/transfer/create-receive/"
                validationScheme={sendValidationSchema}
                initialValues={initialValues}
                navigation = {navigation}
                operation="send"
                />
        </View>
        
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    
})

export default Send