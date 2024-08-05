import { View, StyleSheet, ScrollView, TouchableOpacity} from "react-native"
import StyledText from "../common/StyledText"
import theme from "../../theme"
import BackHeader from "../common/BackHeader"
import Button from "../common/Button"
import { useDispatch, useSelector } from "react-redux"
import darkTheme from "../../darkTheme"
import { useState } from "react"
import Icon from '@expo/vector-icons/FontAwesome'
import * as Clipboard from 'expo-clipboard';
import { fetchData } from "../../api/authentication/fetchData"
import { showToast } from "../../api/functions/showToast"
import { setpendingList } from "../../store/reducer"
import DialogComponent from "../common/Dialog"

 const ReceiveDetails = ({navigation, route}) => {

    const {amount} = route.params
    const {code} = route.params
    const {date} = route.params
    const {operation} = route.params
    const {state} = route.params
    const {id} = route.params
    const {user} = route.params
    const [loading, setLoading] = useState(false);
    const accessToken = useSelector(state => state.accessToken)
    const [visible, setVisible] = useState(false)
    const deleteReceive = "delete"
    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )
    const dispatch = useDispatch()


    const copyToClipboard = async () => {
      await Clipboard.setStringAsync(code);
    };

    const updateData = async () => {
         await fetchData("/transfer/list-unpaid-receive/", null, { "access_token": accessToken })
         .then(data => {
            dispatch(setpendingList(data))
            setLoading(false)
            navigation.navigate("Dashboard")
            showToast('success', 'Deleted Payment Receive', "The payment receipt has been deleted correctly.")
         })

    }

    const cancelReceipt = async () => {
        setLoading(true)
        fetchData(`/transfer/list-delete-unpaid-receive/${id}`, null ,{"access_token" : accessToken}, "delete")
        .then(data => {

            console.log(data);
            if(data.error){
                showToast('error', 'Failed', "An error has occurred.")

                setLoading(false)
            }else{
                updateData()
            }

        })
        .catch(error => {
            console.log(error)
            showToast('error', 'Failed', "An error has occurred.")
            setLoading(false)});

    }

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
                        {operation === 'pending' &&
                            <Button
                            text = "cancel payment receipt"
                            fnc={() => setVisible(true)}
                            />}

                    </View>

                </View>
                <DialogComponent
                    title = "Delete Receipt"
                    description="Are you sure you want to delete the receipt?"
                    fnc = {cancelReceipt}
                    loading={loading}
                    visible={visible}
                    setVisible={setVisible}
                    />


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
