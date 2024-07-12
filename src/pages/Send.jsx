import { View, StyleSheet } from "react-native"
import theme from "../theme"
import BackHeader from "../components/BackHeader"
import OperationCont from "../components/OperationCont"


const Send = ({navigation
    
}) => {
    return(
        <View style = {styles.container}>
            <BackHeader navigation = {navigation} name = "Enviar OSP"/>
            <OperationCont 
                header = "Entre el codigo"
                content="Introduzca el codigo para proceder a pagar el monto establecido"
                btn_text="Verificar"
                placeholder="Codigo"
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