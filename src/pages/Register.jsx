import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native"
import RegisterView from "../components/authentication/RegisterView"
import theme from "../theme";


const Register = ({navigation}) => {
    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
            <RegisterView navigation = {navigation}></RegisterView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: theme.colors.primary,
    }
   });

export default Register