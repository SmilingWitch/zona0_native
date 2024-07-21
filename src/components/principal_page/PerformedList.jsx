import { useSelector } from "react-redux"
import StyledText from "../common/StyledText"
import { View, StyleSheet } from "react-native"
import theme from "../../theme"
import ReceiptsLastOperationItemList from "./ReceiptsLastOperationItemList"


const PerformedList = ({navigation}) => {
    const performedList = useSelector(state => state.performedList)


    return(
        <>
        {performedList.message || !performedList ? 
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