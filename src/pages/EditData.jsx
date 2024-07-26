import { View,StyleSheet } from "react-native"
import BackHeader from "../components/common/BackHeader"
import EditDataContent from "../components/settings/EditDataContent"
import { useSelector } from "react-redux"
import theme from "../theme"
import darkTheme from "../darkTheme"

const EditData = ({navigation}) => {

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )

    return(
        <View style = {styles.container}>
            <BackHeader name = "Edita Data" navigation = {navigation}/>
            <EditDataContent/>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: theme.colors.primary,
    }
   });

export default EditData