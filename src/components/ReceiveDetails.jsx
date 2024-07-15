import { View, StyleSheet, Image, ScrollView } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"
import BackHeader from "./BackHeader"
import Button from "./Button"


 const ReceiveDetails = ({navigation, route}) => {

    const {amount} = route.params
    const {code} = route.params
    const {date} = route.params
    const {image} = route.params
    const {id} = route.params
    const {user} = route.params


    return(
        <View style = {styles.container}>
            <BackHeader name="Receive Details"/>
            <ScrollView style = {styles.scroll}>
                <View>
                    <Image source={{uri: image}}  style = {styles.image}></Image>
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
                            <StyledText>Date</StyledText>
                            <StyledText fontSize='small'>{date} OSP</StyledText>
                        </View>
                    </View>
                </View>
                <Button text = "cancel payment receipt"/>
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
    image: {
        width: 300,
        height: 300,
        alignSelf: 'center'
    }
 })

 export default ReceiveDetails