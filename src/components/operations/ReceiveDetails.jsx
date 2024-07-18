import { View, StyleSheet, ScrollView } from "react-native"
import StyledText from "../common/StyledText"
import theme from "../../theme"
import BackHeader from "../common/BackHeader"
import Button from "../common/Button"
import QRCode, { QRCodeRef } from 'react-fancy-qrcode';

 const ReceiveDetails = ({navigation, route}) => {

    const {amount} = route.params
    const {code} = route.params
    const {date} = route.params
    const {operation} = route.params
    const {id} = route.params
    const {user} = route.params


    return(
        <View style = {styles.container}>
            <BackHeader name="Receive Details" navigation ={navigation}/>
            <ScrollView style = {styles.scroll}>
            <View style = {styles.bx_cont}>

            <View style = {styles.qr_bx}>
                    <QRCode
                        value={"https://github.com/jgillick/react-fancy-qrcode"}
                        size={250}
                        color = {theme.colors.secundary}
                        dotScale={0.8}
                        dotRadius="50%"
                        positionRadius={["5%", "1%"]}
                        errorCorrection="H"
                        logo={require("../../../assets/images/logo.jpg")}
                 />
                </View>
                <View style = {styles.bx}>

                    <View style = {styles.details_container}>
                        <StyledText fontSize='small'>Details</StyledText>
                        <View style = {styles.detail_bx}>
                            <StyledText fontSize='small' fontWeight="bold" >Payment code</StyledText>
                            <StyledText fontSize='small' >{code}</StyledText>
                        </View>
                        <View style = {styles.detail_bx}>
                            <StyledText fontSize='small' fontWeight="bold" >Amount payable</StyledText>
                            <StyledText fontSize='small'>{amount} OSP</StyledText>
                        </View>
                        <View style = {styles.detail_bx}>
                            <StyledText fontSize='small' fontWeight="bold" >State</StyledText>
                            <StyledText fontSize='small'>{amount} OSP</StyledText>
                        </View>
                        <View style = {styles.detail_bx}>
                            <StyledText fontSize='small' fontWeight="bold" >Date</StyledText>
                            <StyledText fontSize='small'>{date} OSP</StyledText>
                        </View>
                    </View>
                </View>
                {operation === 'pending' && <Button text = "cancel payment receipt"/>}

            </View>
                
            </ScrollView>
            
            
        </View>
        
    )
 }

 const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.white,

    },
    scroll: {
        flex: 1,
        padding: theme.padding,
    },
    qr_bx: {
        alignItems: 'center'
    },
    bx: {
        
    },
    details_container: {
        width: '100%',
        minHeight: 200,
        backgroundColor: theme.colors.container,
        borderRadius: 20,
        padding: 20,
        gap: 25
    },
    detail_bx: {
        gap: 5
    },
    bx_cont: {
        flex: 1,
        gap: 30
    },
 })

 export default ReceiveDetails