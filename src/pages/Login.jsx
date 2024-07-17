import { StyleSheet, KeyboardAvoidingView, Platform } from "react-native"
import theme from "../theme"

import LoginView from "../components/authentication/LoginView";


const Login = ({route,navigation}) => {
    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
            <LoginView navigation = {navigation}/>
        </KeyboardAvoidingView>
        

        
    )
}


const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: theme.colors.primary,
    }
   });

export default Login