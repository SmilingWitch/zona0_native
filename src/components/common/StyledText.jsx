import {Text, StyleSheet} from "react-native"
import theme from "../../theme"
import { useSelector } from "react-redux";
import darkTheme from "../../darkTheme";




const StyledText = ({children, color, fontSize, fontWeight,style,error,...props}) => {

    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme );

    const textStyles = [
        styles.regular,
        color === 'primary' && styles.colorPrimary,
        color === 'secundary' && styles.colorSecundary,
        color === 'resalt' && styles.colorResalt,
        fontSize === 'h1' && styles.h1,
        fontSize === 'h2' && styles.h2,
        fontSize === 'h3' && styles.h3,
        fontSize === 'small' && styles.small,
        fontWeight === 'bold' && styles.bold,
        error && styles.error,
        style
    ]

   return (
            <Text style = {textStyles} {...props}>
                {children}
            </Text>)
}


const getStyles = (theme) => StyleSheet.create({
    colorPrimary: {
        color: theme.colors.textPrimary,

    },
    colorSecundary: {
        color: theme.colors.primary
    },
    colorResalt: {
        color: theme.colors.secundary
    },
    h1: {
        fontSize: theme.fontSize.h1
    },
    h2: {
        fontSize: theme.fontSize.h2
    },
    h3: {
        fontSize: theme.fontSize.h3
    },
    regular: {
        fontSize: theme.fontSize.regular,
        fontWeight: theme.fontWeight.normal,
        color: theme.colors.textPrimary
    },
    small: {
        fontSize: theme.fontSize.small
    },
    bold: {
        fontWeight: theme.fontWeight.bold
    },
    error:{
        color: 'red'
    }
})

export default StyledText
