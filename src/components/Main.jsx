
import { View, StyleSheet} from "react-native"
import Constants from 'expo-constants'
import Note from "../pages/Send"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Receibe from "../pages/Receibe"
import Login from "../pages/Login"
import PrincipalPage from "../pages/PrincipalPage";
import Send from "../pages/Send";
import Redeem from "../pages/Redeem";
import Banking from "../pages/Banking";
import { useSelector } from 'react-redux';
import ReceiveDetails from "./ReceiveDetails";
import Menu from "./settings/Menu";
import Register from "../pages/Register";
import VerifyCode from "../pages/VerifyCode";

const Stack = createNativeStackNavigator();

const Main = () => {

    const accessToken = useSelector(state => state.accessToken)
    const initialRoute = accessToken ? "Dashboard" : "Login";

    console.log(accessToken)

    return(

        <View style={styles.container}>

            <NavigationContainer>
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
                        component={Receibe} 
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
                </Stack.Navigator>
            </NavigationContainer>

            
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


        