import { View, StyleSheet, TouchableOpacity } from "react-native"
import StyledText from "../common/StyledText"
import theme from "../../theme"
import { useSelector } from "react-redux"
import darkTheme from "../../darkTheme"


const ReceiptsLastOperationItemList = ({data, navigation, operation}) => {


    const isValidArray = Array.isArray(data) && data.length > 0
    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )


    return(
        <View style = {styles.container}>
        {!isValidArray ?
            <View style = {styles.empty_container}>
                <StyledText fontSize="small">There are no outstanding receipts yet</StyledText>
            </View>
        :
        data.slice(-10).map((item) => {
         return <TouchableOpacity    key = {item.id}
                                     style = {styles.item}
                                     onPress={ () => navigation.navigate("ReceiveDetails",
                                     {amount: item.amount,
                                     state: item.state,
                                     code: item.code,
                                     date: item.date,
                                     image: item.image,
                                     id: item.id,
                                     user: item.user ,
                                     operation: operation
                                     })}>
         <View style = {styles.details_bx}>
             <StyledText fontSize='small' fontWeight='bold'>{item.code}</StyledText>
             <View style = {styles.date_details}>
                 <StyledText fontSize='small'>{item.date}</StyledText>
                 <StyledText fontSize='small'>{item.time}</StyledText>
             </View>

         </View>
         <View style = {styles.amount_bx}>
             <StyledText fontSize='small'>{item.amount} OSP</StyledText>
         </View>
         </TouchableOpacity>
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

export default ReceiptsLastOperationItemList
