import { View, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import TabViewComponent from "./TabViewComponent"
import theme from "../../theme"
import darkTheme from "../../darkTheme"
import ReceivesComponents from "./ReceivesComponents"
import TransferedComponents from "./TransferedComponents"




const LastOperations = ({navigation}) => {

    const routesComponent = {
        receipts: () => <ReceivesComponents navigation = {navigation}/>,
        transfer: TransferedComponents
      }

    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme );

    return(
        <View style = {styles.container}>
            <TabViewComponent routesComponent ={routesComponent} styled navigation = {navigation}/>
        </View>

    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        height: 630,
        padding:15,
        borderRadius: 15,
        backgroundColor: theme.colors.container,
    },
    tab_style: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    }
})

export default LastOperations
