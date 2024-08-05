import { View, StyleSheet } from "react-native"
import BackHeader from "../components/common/BackHeader"
import { useSelector } from "react-redux"
import theme from "../theme"
import darkTheme from "../darkTheme"
import ChangePasswordForm from "../components/settings/ChangePasswordForm"


const ChangePassword = ({navigation}) => {

    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )

    return(
        <View style = {styles.container}>
            <BackHeader name = "Change Password" navigation={navigation}/>
            <ChangePasswordForm/>
        </View>
        
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: theme.colors.primary,
    }
   });

export default ChangePassword