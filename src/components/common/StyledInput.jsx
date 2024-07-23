import { TextInput, StyleSheet } from "react-native"
import theme from "../theme"
import { useSelector } from "react-redux"
import darkTheme from "../../darkTheme"


const StyledInput = ({style = {}, error, ...props}) => {
    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )
    const inputStyles = [
        styles.textInput,
        style,
        error && styles.error
    ]
    return(
        <TextInput style = {inputStyles} {...props}></TextInput>
    )
}


const getStyles = (theme) => StyleSheet.create({
    textInput: {
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginBottom: 2,
        borderColor: theme.colors.primary,
        bottom: 10,
        fontSize: theme.fontSize.regular,
     },
     error: {
        borderColor: 'red'
     }
})


export default StyledInput