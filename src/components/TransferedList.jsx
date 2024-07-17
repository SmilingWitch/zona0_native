import { View, StyleSheet } from "react-native"
import StyledText from "./StyledText"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchData } from "../api/authentication/fetchData"
import { setTransferedList } from "../store/reducer"
import LastOperationItemList from "./ReceiptsLastOperationItemList"
import theme from "../theme"
import TransferLastOperationItemList from "./TransferLastOperationItemList"


const TransferedList = () => {

    const dispatch = useDispatch()
    const transferedList = useSelector(state => state.transferedList)
    const accessToken = useSelector(state => state.accessToken)
    const [error, setError] = useState(null)

    useEffect(() => {

        fetchData("/transfer/list-sendTransfer/",
             null, 
             {"access_token": accessToken} )
             .then(data => {
                console.log(data)
                setError(null)
                if(data !== transferedList){
                    dispatch(setTransferedList(data))
                }
            })
             .catch(error => {
                console.log("ERROR",error)
                setError(error)
            })


    },[])
    console.log(transferedList)

    return(
        transferedList.message ?
        <View style = {styles.empty_container}>
            <StyledText fontSize='small'>{transferedList.message }</StyledText>
        </View> :
        <View>
            <TransferLastOperationItemList data = {transferedList} />
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
export default TransferedList