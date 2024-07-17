import StyledText from "./StyledText"
import { View, StyleSheet } from "react-native"
import { useEffect, useState } from "react"
import { fetchData } from "../api/authentication/fetchData"
import { useDispatch, useSelector } from "react-redux"
import theme from "../theme"
import { setpendingList } from '../store/reducer';
import LastOperationItemList from "./LastOperationItemList"

const PendingList = () => {
   
const accessToken = useSelector(state => state.accessToken)
const [data, setData] = useState([])
const [loading, setLoading] = useState(false)
const dispatch = useDispatch();
const pendingList = useSelector(state => state.pendingList)


useEffect( () => {
    setLoading(true)
    fetchData(
        "/transfer/list-unpaid-receive/", 
        null,
        {"access_token": accessToken} )
        .then(data => {
            setData(data)
            setLoading(false)
            if(data !== pendingList){
            dispatch(setpendingList(data))
            }
            
        })
        .catch(error => {
            console.log(error)
            setLoading(false)
        })
},[])

    return(
        pendingList.length !== 0 ?
        <LastOperationItemList data = {pendingList}/>
         :
        <View style = {styles.empty_container}>
            <StyledText fontSize='small'>No hay recibos pendientes</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
    empty_container: {
        alignItems: 'center',
        marginTop: 20
    },
    
})

export default PendingList