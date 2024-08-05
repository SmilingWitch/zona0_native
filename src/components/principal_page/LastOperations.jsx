import { View, StyleSheet } from "react-native"
import TabViewComponent from "./TabViewComponent"
import theme from "../../theme"
import PendingList from "./PendingList"
import Receives from "./Receives"
import PerformedList from "./PerformedList"
import TransferedList from "./TransferedList"
import DonatedList from "./DonatedList"
import { useSelector } from "react-redux"
import darkTheme from "../../darkTheme"


 const ReceivesComponent = ({navigation}) => {
    

    const routesComponent1 = {
        performed: () => <PerformedList navigation = {navigation}/> ,
        pending: () => <PendingList navigation = {navigation} />
      }
    return <Receives routesComponent = {routesComponent1} navigation = {navigation}/>
 }

 const TransferedComponents = () => {
    const routesComponent2 = {
        transfers: TransferedList ,
        donations: DonatedList
      }
      const isDarkTheme = useSelector(state => state.darkTheme)
        const styles = getStyles(isDarkTheme ? theme : darkTheme );
    return (
        <View style = {styles.container}>
            <TabViewComponent routesComponent ={routesComponent2}/>
        </View>
            )
        }

const LastOperations = ({navigation}) => {

    const routesComponent = {
        receipts: () => <ReceivesComponent navigation = {navigation}/>,
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