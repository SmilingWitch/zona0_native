import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native"
import RegisterView from "../components/authentication/RegisterView"
import theme from "../theme";
import { useSelector } from "react-redux";
import darkTheme from "../darkTheme";


const Register = ({navigation}) => {

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
            <RegisterView navigation = {navigation}></RegisterView>
        </KeyboardAvoidingView>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: theme.colors.white,
    }
   });

export default Register