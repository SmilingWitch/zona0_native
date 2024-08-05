import { View, StyleSheet } from "react-native"
import TabViewComponent from "./TabViewComponent"
import theme from "../../theme"
import { useSelector } from "react-redux"
import darkTheme from "../../darkTheme"


const Receives = ({routesComponent}) => {

    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )

    return (
        <View style = {styles.container}>
            <TabViewComponent 
                routesComponent ={routesComponent}
                />

        </View>)
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        minHeight: 700,
        padding:15,
        borderRadius: 15,
        backgroundColor: theme.colors.container,
    },
})
export default Receives