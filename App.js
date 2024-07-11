import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import theme from './src/theme';
import Main from './src/components/Main';


export default function App() {
  return (

        <View style = {styles.container}>
         <Main/>
          <StatusBar style = 'dark' />
        </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:  10,
  },
});
