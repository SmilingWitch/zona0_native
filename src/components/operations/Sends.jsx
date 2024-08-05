import { View, StyleSheet } from "react-native"
import StyledText from "../StyledText"
import theme from "../../theme"
import { useSelector } from "react-redux"
import darkTheme from "../../darkTheme"


const Sends = () => {

    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )

    return(
        <View style = {styles.container}>
            <StyledText fontSize="small">No existen solicitudes de envio</StyledText>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        minHeight: 200,
        backgroundColor: theme.colors.container,
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Sends