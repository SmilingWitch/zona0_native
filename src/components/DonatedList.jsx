import { useDispatch, useSelector } from "react-redux"
import StyledText from "./StyledText"
import { useEffect } from "react"
import { fetchData } from "../api/authentication/fetchData"
import { setDonatedList } from "../store/reducer"
import TransferLastOperationItemList from "./TransferLastOperationItemList"
import { View, StyleSheet } from "react-native"
import theme from "../theme"


const DonatedList = () => {

    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.accessToken)
    const donatedList = useSelector(state => state.donatedList)


    useEffect(() => {
        fetchData("/institutions/donations/",
                    null,
                    {"access_token": accessToken})
                    .then(data => dispatch(setDonatedList(data)))
                    .catch(error => console.log(error))
    },[])

    console.log(donatedList)

    return(
        donatedList.message ? 
        <View style = {styles.empty_container}>
            <StyledText fontSize='small'>{donatedList.message}</StyledText>
        </View>
         :
         <View style = {styles.container}>
         {donatedList.slice(-10).map((item) => {
          return <View key = {item.id} style = {styles.item}>
          <View style = {styles.details_bx}>
              <StyledText fontSize='small' fontWeight='bold'>Institution: {item.institution}</StyledText>
          </View>
          <View style = {styles.amount_bx}>
              <StyledText fontSize='small'>{item.amount} OSP</StyledText>
          </View>

          </View>
         })} 

      </View>
    )
}


const styles = StyleSheet.create({
    empty_container: {
        alignItems: 'center',
        marginTop: 20
    },
    container: {
        gap: 10,
        marginTop: 10
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    date_details:{
        flexDirection: 'row',
        gap: 5
    },
    details_bx: {
        width: '60%',
        gap: 2
    },
    amount_bx: {
        backgroundColor: theme.colors.buttonColor,
        padding: 5,
        width: 100,
        alignItems: 'center',
        borderRadius: 20
    }
    
})

export default DonatedList