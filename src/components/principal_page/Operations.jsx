import { View, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import theme from "../../theme"
import Operation from "./Operation"
import darkTheme from "../../darkTheme"


const Operations = ({navigation}) => {
    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme );
    const details = [
        {
            icon_name : "download",
            operation_name :  "Receive SOP",
            url_name : "Receibe"
        },
        {
            icon_name : "upload",
            operation_name :  "Send SOP",
            url_name : "Send"
        },
        {
            icon_name : "bank",
            operation_name :  "Banking",
            url_name : "Banking"
        },
        {
            icon_name : "codepen",
            operation_name :  "Redeem",
            url_name : "Redeem"
        },
        {
            icon_name : "hearto",
            operation_name :  "Donate",
            url_name : "Donate"
        },
    ]

    return(
        <View style = {styles.container}>
            {details.map((item) => {
                return <Operation
                            key = {item.icon_name}
                            navigation = {navigation}
                            icon_name = {item.icon_name}
                            operation_name = {item.operation_name}
                            url_name = {item.url_name}
                />
            })}

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
