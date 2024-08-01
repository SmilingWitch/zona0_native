import { View, StyleSheet } from "react-native"
import BackHeader from "../components/common/BackHeader"
import { useSelector } from "react-redux"
import theme from "../theme"
import darkTheme from "../darkTheme"
import Institutions from "../components/operations/InstitutionsList"


const Donate = ({navigation}) => {

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme );

    return(
        <View style = {styles.container}>
            <BackHeader name = "Donate" navigation = {navigation}/>
            <Institutions navigation = {navigation}/>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    }
})

export default Donate