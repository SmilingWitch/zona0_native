import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native"
import StyledText from "./StyledText"
import theme from "../../theme"
import { View } from "react-native"
import { useSelector } from "react-redux"
import darkTheme from "../../darkTheme"


const Button = ({text, fnc,loading, ...props}) => {

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )

    return(
        loading ? 
        <View style = {styles.container}>
            <ActivityIndicator size="small" color="#ffff" /> 
        </View>
        :
        <TouchableOpacity style = {styles.container} onPress={fnc}>
            <StyledText color = "secundary" fontSize='small'>{text.toUpperCase()}</StyledText>
        </TouchableOpacity> 
        
    )
}

const getStyles = (theme) => StyleSheet.create({
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