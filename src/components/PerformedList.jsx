import { useDispatch, useSelector } from "react-redux"
import StyledText from "./StyledText"
import { useEffect, useState } from "react"
import { fetchData } from "../api/authentication/fetchData"
import { View, StyleSheet } from "react-native"
import theme from "../theme"
import { setPerformedList } from "../store/reducer"
import ReceiptsLastOperationItemList from "./ReceiptsLastOperationItemList"


const PerformedList = ({navigation}) => {

    const accessToken = useSelector(state => state.accessToken) 
    const [error, setError] = useState(null)
    const performedList = useSelector(state => state.performedList)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchData("/transfer/list-paid-receive/", 
                    null, 
                    {"access_token": accessToken})
        .then(data => {
            console.log(data)
            setError(null)
            if(data !== performedList){
                dispatch(setPerformedList(data))
            }
        })
        .catch(error => setError(error))
    }, [])


    return(
        <>
        {performedList.message ?
        <View style = {styles.empty_container}>
            <StyledText fontSize='small'>No existen recibos pagados</StyledText>
        </View>
         :
         <ReceiptsLastOperationItemList data = {performedList} navigation = {navigation} operation='performed'/>
        }
       
        </>  
    )
}

const styles = StyleSheet.create({
    empty_container: {  
        alignSelf: 'center',
        marginTop: 20

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


export default PerformedList