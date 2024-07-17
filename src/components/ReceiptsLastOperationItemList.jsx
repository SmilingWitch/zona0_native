import { View, StyleSheet, TouchableOpacity } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"


const ReceiptsLastOperationItemList = ({data, navigation, operation}) => {
    return(
        <View style = {styles.container}>
        {data.length === 0 || !data ?
        <StyledText>IS empty</StyledText> :
       
           data.slice(-10).map((item) => {
            return <TouchableOpacity    key = {item.id} 
                                        style = {styles.item} 
                                        onPress={ () => navigation.navigate("ReceiveDetails", 
                                        {amount: item.amount,
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

export default ReceiptsLastOperationItemList