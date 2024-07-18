import { ScrollView, TouchableOpacity, View, StyleSheet, Dimensions } from "react-native"
import StyledText from "../common/StyledText"
import RegisterFormClient from "./RegisterFormClient"


const RegisterView = ({navigation}) => {
        return(
            <ScrollView style = {styles.inner_scroll}  keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1 }} >
                <View style = {styles.form_cont}>
                    <View style = {styles.header}>
                        <StyledText fontSize="h1" fontWeight="bold">Register</StyledText>
                    </View>
                    <RegisterFormClient navigation = {navigation}/>
                    <View style = {styles.register}>
                        <StyledText fontSize="small" fontWeight="bold">Do you have an account? </StyledText>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <StyledText fontSize="small" 
                                        fontWeight="bold"
                                        color="resalt"
                                        >LOGIN</StyledText>
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
            height: Dimensions.get("screen").height*1.5 - 250,
        }
       });

export default RegisterView