import { View, StyleSheet, TouchableOpacity } from "react-native"
import StyledText from "../common/StyledText"
import StyledTextInput from "../common/StyleTextInput"
import Button from "../common/Button"
import theme from "../../theme"
import Icon from '@expo/vector-icons/EvilIcons'
import { useSelector } from "react-redux"
import darkTheme from "../../darkTheme"
import OperationCont from "../common/OperationCont"
import { bankingrValidationSchema } from "../../validationSchemas/banking"




const BankingOpperation = ({navigation}) => {

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )
    const user = useSelector(state => state.user)

    const initialValues = {
        amount:'',
        user: user.username ? user.username : '',
        state: ''
      }

    return(
        <View style = {styles.container}>
            <OperationCont 
                header = "Entre el monto" 
                content=" Deposita tus fondos y obten un interes fijo del 3% cada 30 dias para hacer crecer tus ahorros."
                btn_text="Depositar"
                placeholder="Monto a recibir"
                name = "amount"
                url = "/banking/account/"
                validationScheme = {bankingrValidationSchema}
                initialValues={initialValues}
                navigation = {navigation}
                operation="banking"
                />
                <StyledText fontSize='small' color='resalt' style = {styles.text}>
                    Los OSP depositados quedaran congelados un total de 60 dias. Luego de eso podra retirarlos
                </StyledText>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    text: {
        padding: theme.padding
    },
    
})

export default BankingOpperation