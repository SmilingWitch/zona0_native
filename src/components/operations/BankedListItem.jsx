import { View, StyleSheet } from "react-native"
import StyledText from "../common/StyledText"
import { useSelector } from "react-redux"
import theme from "../../theme"
import darkTheme from "../../darkTheme"
import { useEffect, useState } from "react"
import Button from "../common/Button"


const BankedListItem = ({data}) => {

    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )
    const [calc, SetCalc] = useState()

    useEffect(() => { 
        if (data.date_banked >= 30 && data.date_banked %  30 ===  0){
            SetCalc(((data.amount * (data.date_banked/30) * (3/100)) + res.amount))
        } else{
            SetCalc(data.amount)
        }
        
      }, []);

    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
                <StyledText fontSize='small' fontWeight='bold'>{data.date}</StyledText>
            </View>
            <View style = {styles.details_bx}>
                <View style = {styles.details}>
                    <StyledText fontSize='small' fontWeight='bold'>Monthly income</StyledText>
                    <StyledText fontSize='small'>3%</StyledText>
                </View>
                <View style = {styles.details}>
                    <StyledText fontSize='small' fontWeight='bold'>Initial amount</StyledText>
                    <StyledText fontSize='small'>{data.amount}</StyledText>
                </View>
                <View style = {styles.details}>
                    <StyledText fontSize='small' fontWeight='bold'>Actual amount</StyledText>
                    <StyledText fontSize='small'>{calc}</StyledText>
                </View>
                <View style = {styles.details}>
                    <StyledText fontSize='small' fontWeight='bold'>Blocking time</StyledText>
                    <StyledText fontSize='small'>{data.date_banked} dia(s)</StyledText>
                </View>
                
            </View>
            <View>
            {data.date_banked > 60 ? <Button text = "Withdraw"/> : ""}
                
                
            </View>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        backgroundColor: theme.colors.buttonColor,
        width: '100%',
        minHeight: 100,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        gap: 20
    },
    details_bx: {
        width: '100%',
        gap: 10
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default BankedListItem