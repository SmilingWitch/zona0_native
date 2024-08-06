import { useSelector } from "react-redux";
import DonatedList from "./DonatedList";
import TransferedList from "./TransferedList";
import { View, StyleSheet } from "react-native";
import TabViewComponent from "./TabViewComponent";
import theme from "../../theme";
import darkTheme from "../../darkTheme";

const TransferedComponents = () => {
    const transferRoutesComponent = {
        transfers: TransferedList ,
        donations: DonatedList
      }
    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme );

    return (
        <View style = {styles.container}>
            <TabViewComponent routesComponent ={transferRoutesComponent}/>
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
})

export default TransferedComponents
