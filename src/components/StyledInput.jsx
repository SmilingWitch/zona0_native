import { TextInput, StyleSheet } from "react-native"
import theme from "../theme"


const StyledInput = ({style = {}, error, ...props}) => {
    const inputStyles = [
        styles.textInput,
        style,
        error && styles.error
    ]
    return(
        <TextInput style = {inputStyles} {...props}></TextInput>
    )
}


const styles = StyleSheet.create({
    textInput: {
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginBottom: 2,
        borderColor: theme.colors.primary,
        bottom: 10,
        fontSize: theme.fontSize.regular
     },
     error: {
        borderColor: 'red'
     }
})


export default StyledInput