import { View, StyleSheet, ScrollView, TouchableOpacity} from "react-native"
import StyledText from "../common/StyledText"
import theme from "../../theme"
import BackHeader from "../common/BackHeader"
import Button from "../common/Button"
import { useSelector } from "react-redux"
import darkTheme from "../../darkTheme"
import { useState } from "react"
import Icon from '@expo/vector-icons/FontAwesome'
import * as Clipboard from 'expo-clipboard';

 const ReceiveDetails = ({navigation, route}) => {

    const {amount} = route.params
    const {code} = route.params
    const {date} = route.params
    const {operation} = route.params
    const {state} = route.params
    const {id} = route.params
    const {user} = route.params
    const [loading, setLoading] = useState(true);
    const [copiedText, setCopiedText] = useState('');

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )
        

    const copyToClipboard = async () => {
      await Clipboard.setStringAsync(code);
    };



    return(
        <View style = {styles.container}>
            <BackHeader name="Receive Details" navigation ={navigation}/>
            <ScrollView style = {styles.scroll}>
            <View style = {styles.bx_cont}>

            <View style = {styles.qr_bx}>
            
                </View>
                <View style = {styles.bx}>

                    <View style = {styles.details_container }>
                        <StyledText fontSize='small' fontWeight="bold">Details</StyledText>
                        <View style = {styles.detail_bx1}>
                            <View>
                                <StyledText fontSize='small' fontWeight="bold" >Payment code</StyledText>
                                <StyledText fontSize='small' >{code}</StyledText>
                            </View>
                            <TouchableOpacity onPress={copyToClipboard}>
                                <Icon name = "copy" style = {styles.icon}/>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.detail_bx}>
                            <StyledText fontSize='small' fontWeight="bold" >Amount payable</StyledText>
                            <StyledText fontSize='small'>{amount} OSP</StyledText>
                        </View>
                        <View style = {styles.detail_bx}>
                            <StyledText fontSize='small' fontWeight="bold" >State</StyledText>
                            <StyledText fontSize='small'>{state} </StyledText>
                        </View>
                        <View style = {styles.detail_bx}>
                            <StyledText fontSize='small' fontWeight="bold" >Date</StyledText>
                            <StyledText fontSize='small'>{date} OSP</StyledText>
                        </View>
                        {operation === 'pending' && <Button text = "cancel payment receipt"/>}
                    </View>
                   
                </View>
                

            </View>
                
            </ScrollView>
            
            
        </View>
        
    )
 }

 const getStyles = (theme) => StyleSheet.create({
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
        gap: 25,
        alignItems: 'center'
    },
    detail_bx: {
        gap: 5,
        width: '100%'
    },
    detail_bx1: {
        gap: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bx_cont: {
        flex: 1,
        gap: 30
    },
    icon: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.regular,        
      },
 })

 export default ReceiveDetails