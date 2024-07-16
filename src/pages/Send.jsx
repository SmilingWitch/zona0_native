import { View, StyleSheet } from "react-native"
import theme from "../theme"
import BackHeader from "../components/BackHeader"
import OperationCont from "../components/OperationCont"
import { sendValidationSchema } from "../validationSchemas/send"

const initialValues = {
    code: ""
}

const Send = ({navigation}) => {

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
    },
    
})

export default Send