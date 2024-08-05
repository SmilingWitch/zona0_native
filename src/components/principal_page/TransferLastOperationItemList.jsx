import { View, StyleSheet, TouchableOpacity } from "react-native"
import StyledText from "../common/StyledText"
import theme from "../../theme"
import { useSelector } from "react-redux"
import darkTheme from "../../darkTheme"


const TransferLastOperationItemList = ({data, navigation}) => {

    const isValidArray = Array.isArray(data) && data.length > 0
    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )

    return(
        <View style = {styles.container}>
        {!isValidArray ? 
            <View style = {styles.empty_container}>
                <StyledText fontSize="small">No existen recibos de pago efectuados</StyledText>
            </View> :
            data.slice(-10).map((item) => {
            return <View key = {item.id} style = {styles.item}>
            <View style = {styles.details_bx}>
                <StyledText fontSize='small' fontWeight='bold'>User: {item['receive user']}</StyledText>
                <View style = {styles.date_details}>
                    <StyledText fontSize='small'>{item.date}</StyledText>
                    <StyledText fontSize='small'>{item.time}</StyledText>
                </View>
                
            </View>
            <View style = {styles.amount_bx}>
                <StyledText fontSize='small'>{item['receive amount']} OSP</StyledText>
            </View>

            </View>
           })}
        
            

        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
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
    },
    empty_container: {
        alignItems: 'center',
        marginTop: 20
    },
})

export default TransferLastOperationItemList