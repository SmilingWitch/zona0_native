import { View, StyleSheet } from "react-native"
import TabViewComponent from "./TabViewComponent"
import StyledText from "./StyledText"
import theme from "../theme"
import PendingList from "./PendingList"
import OutstandingList from "./OutstandingList"
import Receives from "./Receives"
import PerformedList from "./PerformedList"
import TransferedList from "./TransferedList"
import DonatedList from "./DonatedList"


 const ReceivesComponent = ({navigation}) => {

    const routesComponent1 = {
        performed: () => <PerformedList navigation = {navigation}/> ,
        pending: () => <PendingList navigation = {navigation} />
      }

    return (
        <Receives routesComponent = {routesComponent1} navigation = {navigation}/>
    )

 }

 const Fourth = () => {
    const routesComponent1 = {
        transferred: TransferedList ,
        donated: DonatedList
      }

    return (
        <View style = {styles.container}>
            <TabViewComponent 
                routesComponent ={routesComponent1}
                />
        </View>
            
            )

 }

const LastOperations = ({navigation}) => {

    const routesComponent = {
        receipts: () => <ReceivesComponent navigation = {navigation}/>,
        transfers: Fourth
      }

    return(
        <View style = {styles.container}>
            <TabViewComponent routesComponent ={routesComponent} styled navigation = {navigation}/>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 300,
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