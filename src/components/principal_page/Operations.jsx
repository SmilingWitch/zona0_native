import { View, StyleSheet } from "react-native"
import theme from "../../theme"
import Operation from "./Operation"
import { useSelector } from "react-redux"
import darkTheme from "../../darkTheme"


const Operations = ({navigation}) => {
    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme );

    return(
        <View style = {styles.container}>
            <Operation 
                navigation = {navigation} 
                icon_name = "download" 
                operation_name="Recibir SOP"
                url_name="Receibe"
                />
            <Operation 
                navigation = {navigation} 
                icon_name = "upload"  
                operation_name="Eviar SOP"
                url_name="Send"
                />
            <Operation 
                navigation = {navigation} 
                icon_name = "bank"  
                operation_name="Bancarizar"
                url_name="Banking"
                />
            <Operation 
                navigation = {navigation} 
                icon_name = "hearto"  
                operation_name="Canjear Codigo"
                url_name="Redeem"
                />
            <Operation 
                navigation = {navigation} 
                icon_name = "codepen"  
                operation_name="Donar"
                url_name="Dashboard"
                />
            <Operation 
                navigation = {navigation} 
                icon_name = "playcircleo"  
                operation_name="Jugar"
                url_name="Dashboard"
                />
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        width: '100%',
        height: 250,
        backgroundColor: theme.colors.container,
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 40,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 20
    }
})

export default Operations