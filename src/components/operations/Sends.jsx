import { View, StyleSheet } from "react-native"
import StyledText from "../StyledText"
import theme from "../../theme"


const Sends = () => {
    return(
        <View style = {styles.container}>
            <StyledText fontSize="small">No existen solicitudes de envio</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
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