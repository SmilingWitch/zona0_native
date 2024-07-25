
import { View, StyleSheet} from "react-native"
import Constants from 'expo-constants'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../pages/Login"
import PrincipalPage from "../pages/PrincipalPage";
import Send from "../pages/Send";
import Redeem from "../pages/Redeem";
import Banking from "../pages/Banking";
import { useSelector } from 'react-redux';
import ReceiveDetails from "./operations/ReceiveDetails.jsx";
import Menu from "./settings/Menu";
import Register from "../pages/Register";
import VerifyCode from "../pages/VerifyCode";
import Receive from "../pages/Receive.jsx";
import Welcome from "../pages/Welcome.jsx";
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

const Main = () => {

    const accessToken = useSelector(state => state.accessToken)
    const initialRoute = accessToken !== null ? "Dashboard" : "Login";

    console.log("accessToken", accessToken)



    return(

        <View style={styles.container}>

            <NavigationContainer>
                {accessToken === null ? 
                    <Stack.Navigator>
                    <Stack.Screen 
                        name="Login" 
                        component={Login} 
                        options={{ headerShown: false }} // Mostrar el AppBar
                    />

                    </Stack.Navigator> :
                    <Stack.Navigator initialRouteName={initialRoute}>
                <Stack.Screen 
                        name="Login" 
                        component={Login} 
                        options={{ headerShown: false }} // Mostrar el AppBar
                    />
                    <Stack.Screen 
                        name="Dashboard"
                        component={PrincipalPage} 
                        options={{ headerShown: false }} // Mostrar el AppBar
                    />
                    <Stack.Screen 
                        name="Receibe"
                        component={Receive} 
                        options={{ headerShown: false }} // Mostrar el AppBar
                    />
                    <Stack.Screen 
                        name="ReceiveDetails"
                        component={ReceiveDetails} 
                        initialParams={{}}
                        options={{ headerShown: false }} // Mostrar el AppBar
                    />
                    <Stack.Screen 
                        name="Send" 
                        component={Send} 
                        options={{ headerShown: false }} // Mostrar el AppBar
                    />
                    <Stack.Screen
                        name = "Redeem"
                        component={Redeem}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name = "Banking"
                        component={Banking}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name = "Settings"
                        component={Menu}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name = "Register"
                        component={Register}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name = "VerifyCode"
                        component={VerifyCode}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name = "Welcome"
                        component={Welcome}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
                }
                
            </NavigationContainer>
            <Toast />

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
      },


})

export default Main


        