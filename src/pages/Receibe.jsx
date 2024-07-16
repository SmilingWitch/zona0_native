import { View,StyleSheet} from "react-native"
import theme from "../theme"
import OperationCont from "../components/OperationCont"
import BackHeader from "../components/BackHeader"
import { receiveValidationSchema } from "../validationSchemas/receive"


const initialValues = {
    amount: ""
}

const Receibe = ({navigation}) => {

    return(
        <View style = {styles.container}>
            <BackHeader name = "Recibir SOP" navigation = {navigation}/>
            <OperationCont 
                header = "Entre el monto" 
                content="Introduzca la cantidad de OSP que desea recibir para generar un codigo de pago"
                btn_text="Generar codigo"
                placeholder="Monto a recibir"
                name = "amount"
                url = "/transfer/create-receive/"
                validationScheme = {receiveValidationSchema}
                initialValues={initialValues}
                navigation = {navigation}
                operation="receive"
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


export default Receibe