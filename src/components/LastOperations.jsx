import { View, StyleSheet } from "react-native"
import TabViewComponent from "./TabViewComponent"
import StyledText from "./StyledText"
import theme from "../theme"


const FirstRoute = () => {
    return <View style={styles.tab_style}>
                <StyledText fontSize='small'>
                    No existen solicitudes de recibo efectuados
                </StyledText>
            </View>
 }
 
 const SecondRoute = () => {
    return <View style={styles.tab_style}>
                <StyledText fontSize='small'>
                    No existen solicitudes de recibo pendientes
                </StyledText>
            </View>
 }

 const routesComponent1 = {
    efectuados: FirstRoute ,
    pendientes: SecondRoute
  }


 const ThirdRoute = () => {
    return (
        <View style = {styles.container}>
            <TabViewComponent 
                routesComponent ={routesComponent1}
                />

        </View>)

 }

 const Fourth = () => {

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
        recibidos: ThirdRoute,
        envios: Fourth
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