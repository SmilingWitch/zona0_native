import { View, StyleSheet } from "react-native"
import TabViewComponent from "./TabViewComponent"
import StyledText from "./StyledText"
import theme from "../theme"
import PendingList from "./PendingList"
import OutstandingList from "./OutstandingList"
import Receives from "./Receives"
import PerformedList from "./PerformedList"


 const ReceivesComponent = () => {

    const routesComponent1 = {
        performed: PerformedList ,
        pending: PendingList
      }

    return (
        <Receives routesComponent = {routesComponent1}/>
    )

 }

 const Fourth = () => {
    const routesComponent1 = {
        transferred: OutstandingList ,
        donated: PerformedList
      }

    return (
        <View style = {styles.container}>
            <TabViewComponent 
                routesComponent ={routesComponent1}
                />
        </View>
            
            )

 }

const LastOperations = () => {

    const routesComponent = {
        receipts: ReceivesComponent,
        shipping: Fourth
      }

    return(
        <View style = {styles.container}>
            <TabViewComponent routesComponent ={routesComponent} styled/>
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