import { View, StyleSheet } from "react-native"
import BankingCont from "../components/BankingCont"
import BackHeader from "../components/BackHeader"
import theme from "../theme"


const Banking = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <BackHeader name = "Banking" navigation = {navigation}/>
            <BankingCont/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    }
})

export default Banking