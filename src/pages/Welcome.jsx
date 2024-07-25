import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../api/authentication/fetchData";
import StyledText from "../components/common/StyledText"
import { setDonatedList, setpendingList, setPerformedList, setTransferedList,setBankedList } from "../store/reducer";
import { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, BackHandler } from "react-native";
import theme from "../theme";
import { operations } from "../api/authentication/operations";
import { useFocusEffect } from "@react-navigation/native";



const Welcome = ({navigation}) => {

    const dispatch = useDispatch();
    const accessToken = useSelector(state => state.accessToken)


    useFocusEffect(
        useCallback(() => {
          const onBackPress = () => {
            // Si retorna true, previene el comportamiento predeterminado de retroceso
            return true;
          };
    
          // Agregar el listener para el evento de retroceso del hardware
          BackHandler.addEventListener('hardwareBackPress', onBackPress);
    
          return () => {
            // Remover el listener cuando el componente se desenfoca
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
          };
        }, [])
      );


    useEffect(() => {
        const fetchData = async () => {
          try {
            await Promise.all([
                operations(accessToken, dispatch, "/transfer/list-unpaid-receive/", setpendingList), 
                operations(accessToken, dispatch, "/transfer/list-paid-receive/", setPerformedList), 
                operations(accessToken, dispatch, "/institutions/donations/", setDonatedList), 
                operations(accessToken, dispatch, "/transfer/list-sendTransfer/", setTransferedList),
                operations(accessToken, dispatch, "/banking/account/", setBankedList)  ]);
                
                
            navigation.navigate('Dashboard'); // Redirigir a otra página después de completar las peticiones
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
    }, [dispatch, accessToken]);
    
    
    return(
        <View style = {styles.container}>
            <StyledText color='secundary' fontSize='h1' fontWeight='bold'>Zona 0</StyledText>
        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.secundary,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Welcome