
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
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/store';
import ReceiveDetails from "./ReceiveDetails";

const Stack = createNativeStackNavigator();

const Main = () => {
    return(

        <View style={styles.container}>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
                <Stack.Navigator>
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
                </Stack.Navigator>
            </NavigationContainer>
            </PersistGate>
            </Provider>
            
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


        