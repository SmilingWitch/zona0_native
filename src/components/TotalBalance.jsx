import {View, Image, StyleSheet} from "react-native"
import StyledText from "./StyledText"

const TotalBalance = () => {
    return(
        <View style = {styles.container}>
            <Image source={require('../../assets/images/fondo.jpg')} style = {styles.img}></Image>
            <View style = {styles.balance_bx}>
                <StyledText fontSize="small" fontWeight="bold">Total Balance</StyledText>
                <StyledText fontSize="h1" fontWeight="bold">0.00 OSP</StyledText>
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