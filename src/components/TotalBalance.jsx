import {View, Image, StyleSheet} from "react-native"
import StyledText from "./StyledText"
import { useSelector } from "react-redux";
import { fetchData } from "../api/authentication/fetchData";
import { useEffect } from "react";

const TotalBalance = () => {

    const user = useSelector((state) => state.user);

    return(
    <View style = {styles.container}>
        <Image source={require('../../assets/images/fondo.jpg')} style = {styles.img}></Image>
        <View style = {styles.balance_bx}>
            <StyledText fontSize="small" fontWeight="bold">Total Balance</StyledText>
            {user  ?
                <StyledText fontSize="h1" fontWeight="bold">{user.zona_point} OSP</StyledText>
            
            :
            <StyledText fontSize="h1" fontWeight="bold">0.00 OSP</StyledText>   
            }
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: '100%',
        height: 220,
        borderRadius: 20
    },
    balance_bx: {
        position: 'absolute',
        alignItems: 'center'
    }

})

export default TotalBalance