import { View, StyleSheet, TouchableOpacity } from "react-native"
import theme from "../theme"
import StyledText from "./StyledText"
import StyledTextInput from "./StyleTextInput"
import Button from "./Button"



const OperationCont = ({header, content, fnc, btn_text,placeholder}) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.bx}>
                <StyledText  fontWeight="bold">{header}</StyledText>
                <StyledText fontSize="small">{content}</StyledText>
                <StyledTextInput placeholder = {placeholder}></StyledTextInput>
            </View>
            <View style = {styles.btn_bx}>
                <Button text = {btn_text} fnc={fnc}/>
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
        minHeight: 200,
        backgroundColor: theme.colors.container,
        padding: theme.padding,
        flex: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})

export default OperationCont