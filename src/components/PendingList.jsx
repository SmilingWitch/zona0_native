import StyledText from "./StyledText"
import { View, StyleSheet } from "react-native"
import { useEffect, useState } from "react"
import { fetchData } from "../api/authentication/fetchData"
import { useDispatch, useSelector } from "react-redux"
import theme from "../theme"
import { setpendingList } from '../store/reducer';
import ReceiptsLastOperationItemList from "./ReceiptsLastOperationItemList"

const PendingList = ({navigation}) => {
   
const accessToken = useSelector(state => state.accessToken)
const [error, setError] = useState(null)
const dispatch = useDispatch();
const pendingList = useSelector(state => state.pendingList)


useEffect( () => {
    fetchData(
        "/transfer/list-unpaid-receive/", 
        null,
        {"access_token": accessToken} )
        .then(data => {
            if(data !== pendingList){
                dispatch(setpendingList(data))
            }
            setError(null)
            
        })
        .catch(error => {
            setError(error)
        })
},[])

    return(
        pendingList.message  ?
            <View style = {styles.empty_container}>
                <StyledText fontSize='small'>{pendingList.message}</StyledText>
            </View>
             :
            <ReceiptsLastOperationItemList data = {pendingList} navigation = {navigation} operation='pending'/> 
    )
}

const styles = StyleSheet.create({
    empty_container: {
        alignItems: 'center',
        marginTop: 20
    },
    
})

export default PendingList