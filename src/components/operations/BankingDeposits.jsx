import { TouchableOpacity, View, StyleSheet } from "react-native"
import StyledText from "../common/StyledText"
import Icon from '@expo/vector-icons/EvilIcons'
import theme from "../../theme"
import { useSelector } from "react-redux"
import darkTheme from "../../darkTheme"

const BankingDeposits = () => {

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )

    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <StyledText fontSize="h3">Last Operations</StyledText>
                <TouchableOpacity>
                    <Icon name = "undo" style = {styles.icon}></Icon>
                </TouchableOpacity>
            </View>
            <View style = {styles.deposits}>
                <StyledText fontSize='small'>No hay depositos aun</StyledText>
            </View>

        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        padding: theme.padding,
        gap: 15
    },
    header:{
        borderStartWidth: 4,
        borderColor: theme.colors.secundary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingVertical: 5,
        alignItems: 'center'
    },
    icon: {
        fontSize: theme.fontSize.h1
    },
    deposits: {
        width: '100%',
        minHeight: 300,
        backgroundColor: theme.colors.container,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default BankingDeposits