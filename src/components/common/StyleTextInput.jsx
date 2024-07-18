import { TextInput, StyleSheet, View } from "react-native"
import theme from "../../theme"



const StyledTextInput = ({style = {}, error,color, fontSize, fontWeight, ...props}) => {




    const inputStyles = [
        styles.textInput,
        color === 'primary' && styles.colorPrimary,
        color === 'secundary' && styles.colorSecundary,
        fontSize === 'h1' && styles.h1,
        fontSize === 'h2' && styles.h2,
        fontSize === 'h3' && styles.h3,
        fontSize === 'small' && styles.small,
        fontWeight === 'bold' && styles.bold,
        style,
    ]
    return(
        <View style = {styles.input_bx}>
            <TextInput 
                  style = {inputStyles } 
                  {...props} 
                  editable 
                  multiline 
                  inputMode="text"
                  textAlignVertical="top"></TextInput>

        </View>
            
        
    )
}


const styles = StyleSheet.create({
    input_bx: {
        position: 'relative',
        borderColor: theme.colors.primary,
        fontSize: theme.fontSize.regular,
        color: theme.colors.textPrimary,
        width: `${100}%`,
        backgroundColor: theme.colors.primary,
   
        borderColor: theme.colors.secundary,
        borderWidth: 1,
        borderRadius: 20,
        padding: 12
    },
    textInput: {
        borderColor: theme.colors.primary,
        fontSize: theme.fontSize.regular,
        color: theme.colors.textPrimary,
        paddingTop: 5


     },
     notHeader: {
        borderColor: theme.colors.primary,
        fontSize: theme.fontSize.regular,
        color: theme.colors.textPrimary,
        flex: 1
     },
     error: {
        borderColor: 'red'
     },
     colorPrimary: {
        color: theme.colors.textPrimary,
        
    },
    colorSecundary: {
        color: theme.colors.primary
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
    }
})


export default StyledTextInput