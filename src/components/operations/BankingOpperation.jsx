import { View, StyleSheet} from "react-native"
import { useSelector } from "react-redux"
import StyledText from "../common/StyledText"
import theme from "../../theme"
import darkTheme from "../../darkTheme"
import OperationCont from "../common/OperationCont"
import { bankingrValidationSchema } from "../../validationSchemas/banking"


const BankingOpperation = ({navigation}) => {

    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )
    const user = useSelector(state => state.user)

    const initialValues = {
        amount:'',
        user: user.username ? user.username : '',
        state: ''
      }

    return(
        <View style = {styles.container}>
            <OperationCont
                header = "Enter the amount"
                content="Deposit your funds and get a fixed interest rate of 3% every 30 days to grow your savings."
                btn_text="deposit"
                placeholder="Amount"
                name = "amount"
                url = "/banking/account/"
                validationScheme = {bankingrValidationSchema}
                initialValues={initialValues}
                navigation = {navigation}
                operation="banking"
                />
                <StyledText fontSize='small' color='resalt' style = {styles.text}>
                    The deposited OSP will be frozen for a total of 60 days. After that you will be able to withdraw them
                </StyledText>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    text: {
        padding: theme.padding
    },

})

export default BankingOpperation
