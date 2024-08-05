import { View, StyleSheet } from "react-native"
import BankingCont from "../components/operations/BankingCont"
import BackHeader from "../components/common/BackHeader"
import theme from "../theme"
import { useSelector } from "react-redux"
import darkTheme from "../darkTheme"


const Banking = ({navigation}) => {

    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )

    return(
        <View style = {styles.container}>
            <BackHeader name = "Banking" navigation = {navigation}/>
            <BankingCont/>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    }
})

export default Banking