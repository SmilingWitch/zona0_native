import { TouchableOpacity, StyleSheet } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"


const Button = ({text, fnc, ...props}) => {
    return(
        <TouchableOpacity style = {styles.container} onPress={() => fnc}>
            <StyledText color = "secundary" fontSize='small'>{text.toUpperCase()}</StyledText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.secundary,
    width: '100%',
    padding: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center'
    }
})

export default Button