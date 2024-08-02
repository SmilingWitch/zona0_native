import { View, StyleSheet, Image, ScrollView } from "react-native"
import StyledText from "../common/StyledText"
import { useDispatch, useSelector } from "react-redux"
import theme from "../../theme"
import darkTheme from "../../darkTheme"
import BackHeader from "../common/BackHeader"
import Button from "../common/Button"
import {useState } from "react"
import DialogDonate from "../operations/DialogDonate"
import { fetchData } from "../../api/authentication/fetchData"
import { showToast } from "../../api/showToast"
import {setDonationEffected, setInstitutionsList } from "../../store/reducer"
import { operations } from "../../api/authentication/operations"


const InstitutionView = ({navigation, route}) => {

    const {item} = route.params
    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )
    const [visible, setVisible] = useState(false)
    const [donatedAmount, setDonatedAmount] = useState(item.institution_osp)
    const [loading, setLoading] = useState(false)
    const accessToken = useSelector(state => state.accessToken)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    
    const initialValues = {
        amount:'',
        user: user.pk,
        institution: item.id
   }
   
  
   
   const fetchDataOpp = async () => {
        try {
           const result =  await operations(accessToken, dispatch, "/institutions/list-institution/", setInstitutionsList);
           const foundItem = result.find(i=> i.id === item.id);
           setDonatedAmount(foundItem.institution_osp)
        } catch (error) {
            console.error(error);
        }
    };
    
   const operationFetch = async (value) => {
        setLoading(true)

        fetchData("/institutions/donations/", 
            {amount:value.amount,
            user: user.pk,
            institution: item.id}, accessToken )

        .then(data => {
            setLoading(false)
            if (data.error) {
                showToast('error', 'Failed', data.error.error);
              } else {
                showToast('success', 'Success', "Donation successfully sent");
                setVisible(false)
                fetchDataOpp()
              }
            })
        .catch(error => {
            showToast('error', 'Failed', "An error has occurred");
            setLoading(false)})
    }




    return(
        <ScrollView style = {styles.container}>
            <BackHeader name = "Information" navigation={navigation}/>
            <Image source = {{uri: item.image}} style = {styles.image}/>
            <View style = {styles.detail}>
                <View style = {styles.description}>
                    <StyledText fontWeight="bold">About us</StyledText>
                    <StyledText fontSize="small">{item.description}</StyledText>
                </View>
                <View style = {styles.description}>
                    <StyledText fontWeight="bold" style = {styles.amount}>Amount donated so far</StyledText>
                    <StyledText fontSize="small" fontWeight="bold" style = {styles.amount}>{donatedAmount} OSP</StyledText>
                    <Button text = "Donate" fnc = {() => setVisible(true)}></Button>

                </View>

            </View>
            <DialogDonate
                title="Donate"
                visible={visible}
                setVisible={setVisible}
                input
                fnc = {value =>operationFetch(value)}
                id = {item.id}
                initialValues = {initialValues}
                loading={loading}
            />
            
        </ScrollView>
        
    )
}


const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    },
    image: {
        width: '100%',
        height: 400,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    detail: {
        padding: theme.padding,
        gap: 20
    },
    description: {
        backgroundColor: theme.colors.container,
        padding: 20,
        borderRadius: 20,
        gap: 10
    },
    amount: {
        alignSelf: 'center'
    }
    
})

export default InstitutionView