import { View, StyleSheet } from "react-native"
import TabViewComponent from "./TabViewComponent"
import theme from "../../theme"


const Receives = ({routesComponent}) => {
    return (
        <View style = {styles.container}>
            <TabViewComponent 
                routesComponent ={routesComponent}
                />

        </View>)
}

const styles = StyleSheet.create({
    container: {
        minHeight: 700,
        padding:15,
        borderRadius: 15,
        backgroundColor: theme.colors.container,
    },
})
export default Receives