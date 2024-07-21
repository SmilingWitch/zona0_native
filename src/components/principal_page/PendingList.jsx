import StyledText from "../common/StyledText"
import { View, StyleSheet } from "react-native"
import {useSelector } from "react-redux"
import ReceiptsLastOperationItemList from "./ReceiptsLastOperationItemList"

const PendingList = ({navigation}) => {

    const pendingList = useSelector(state => state.pendingList)


    return(
        pendingList.message || !pendingList  ?
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