import { useDispatch, useSelector } from "react-redux"
import StyledText from "../common/StyledText"
import { View, StyleSheet } from "react-native"
import theme from "../../theme"
import darkTheme from "../../darkTheme"


const DonatedList = ({navigation}) => {

    const donatedList = useSelector(state => state.donatedList)
    const isValidArray = Array.isArray(donatedList) && donatedList.length > 0
    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme );

    return(
        !isValidArray ? 
        <View style = {styles.empty_container}>
            <StyledText fontSize='small'>No hay donaciones</StyledText>
        </View>
         :
         <View style = {styles.container}>
         {donatedList.slice(-10).map((item) => {
          return <View key = {item.id} style = {styles.item}>
          <View style = {styles.details_bx}>
              <StyledText fontSize='small' fontWeight='bold'>Institution: {item.institution}</StyledText>
          </View>
          <View style = {styles.amount_bx}>
              <StyledText fontSize='small'>{item.amount} OSP</StyledText>
          </View>

          </View>
         })} 

      </View>
    )
}


const getStyles = (theme) => StyleSheet.create({
    empty_container: {
        alignItems: 'center',
        marginTop: 20
    },
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

export default DonatedList