import { View, StyleSheet, TouchableOpacity } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"


const TransferLastOperationItemList = ({data, navigation}) => {
    return(
        <View style = {styles.container}>
           {data.slice(-10).map((item) => {
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

const styles = StyleSheet.create({
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

export default TransferLastOperationItemList