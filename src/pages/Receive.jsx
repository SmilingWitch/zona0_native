import { View,StyleSheet} from "react-native"
import theme from "../theme"
import OperationCont from "../components/common/OperationCont"
import BackHeader from "../components/common/BackHeader"
import { receiveValidationSchema } from "../validationSchemas/receive"
import { useSelector } from "react-redux"
import darkTheme from "../darkTheme"


const initialValues = {
    amount: ""
}

const Receive = ({navigation}) => {

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )

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

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },

    
})


export default Receive