import { View, StyleSheet, TouchableOpacity } from "react-native"
import StyledText from "../common/StyledText"
import StyledTextInput from "../common/StyleTextInput"
import Button from "../common/Button"
import theme from "../../theme"
import Icon from '@expo/vector-icons/EvilIcons'

const BankingOpperation = () => {
    return(
        <View style = {styles.container}>
            <View style = {styles.bx}>
                <StyledText  fontWeight="bold">Entra el monto</StyledText>
                <StyledText fontSize="small">
                        Deposita tus fondos y obten un interes fijo del 3% cada 30 dias para hacer crecer tus ahorros. 
                        Puedes hacer uso de la calculadora para tener una idea mas precisa de la ganancia que puede llegar a obtener.</StyledText>
                
                <View>
                    <Button text = "Calculadora"></Button>
                </View>
                <StyledText fontSize='small' color='resalt'>
                    Los OSP depositados quedaran congelados un total de 60 dias. Luego de eso podra retirarlos
                </StyledText>
                
                <StyledTextInput placeholder = "monto"></StyledTextInput>
            </View>
            <View style = {styles.btn_bx}>
                <Button text = "Depositar" /*fnc={fnc}*//>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: theme.padding,
        gap: 30,
        alignItems: 'center'
    },
    btn_bx:{
        width: 200,
    },
    bx: {
        width: '100%',
        minHeight: 250,
        backgroundColor: theme.colors.container,
        padding: theme.padding,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 15
    },
    header:{
        borderStartWidth: 4,
        borderColor: theme.colors.secundary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    },
    icon: {
        fontSize: theme.fontSize.h1
    }
})

export default BankingOpperation