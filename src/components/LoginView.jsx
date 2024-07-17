import { ScrollView, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native"
import BackHeader from "./BackHeader"
import StyledText from "./StyledText"
import LoginForm from "./LoginForm"
import theme from "../theme"



const LoginView = ({navigation}) => {


    return(
        <ScrollView style = {styles.inner_scroll}  keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }} >
            <View style = {styles.form_cont}>
                <View style = {styles.header}>
                    <StyledText fontSize="h1" fontWeight="bold">Login</StyledText>
                </View>
                <LoginForm navigation = {navigation}/>
                <View style = {styles.register}>
                    <StyledText fontSize="small" fontWeight="bold">Don't you have an account? </StyledText>
                    <TouchableOpacity>
                        <StyledText fontSize="small" fontWeight="bold" color="resalt">REGISTER</StyledText>
                    </TouchableOpacity>
                </View>
            </View>
         </ScrollView>
    )
}


const styles = StyleSheet.create({
    inner_scroll: {
        flex: 1,
    },
    header: {
        alignSelf: 'center',
    },
    register: {
        flexDirection:'row',
        alignSelf: 'center', 
        paddingBottom: 20
    },
    form_cont:{
        flex: 1,
        justifyContent: 'space-around',
        height: Dimensions.get("screen").height - 250
    }
   });

export default LoginView