import { Text, View, StyleSheet, Dimensions, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, ScrollView, TouchableOpacity, KeyboardAvoidingViewComponent } from "react-native"
import theme from "../theme"
import LoginForm from "../components/LoginForm";
import StyledText from "../components/StyledText";
import NotesFolderHeader from "../components/BackHeader";
import LoginView from "../components/LoginView";


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