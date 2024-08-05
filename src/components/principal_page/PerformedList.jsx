import { useSelector } from "react-redux"
import StyledText from "../common/StyledText"
import { View, StyleSheet } from "react-native"
import theme from "../../theme"
import ReceiptsLastOperationItemList from "./ReceiptsLastOperationItemList"
import darkTheme from "../../darkTheme"


const PerformedList = ({navigation}) => {
    const performedList = useSelector(state => state.performedList)
    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )

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

const getStyles = (theme) => StyleSheet.create({
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