import { StyleSheet, Text, View } from 'react-native';
import theme from './src/theme';
import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store/store';
import StatusBarComponent from './src/components/common/StatusBar';

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style = {styles.container}>
          <Main/>
          <StatusBarComponent/>
          
        </View>
      </PersistGate>
    </Provider>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
