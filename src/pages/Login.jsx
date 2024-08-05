import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native"
import theme from "../theme"

import LoginView from "../components/authentication/LoginView";
import { useSelector } from "react-redux";
import darkTheme from "../darkTheme";


const Login = ({route,navigation}) => {

    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
            <LoginView navigation = {navigation}/>
        </KeyboardAvoidingView>   
    )
}


const getStyles = (theme) => StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: theme.colors.primary,
    }
   });

export default Login