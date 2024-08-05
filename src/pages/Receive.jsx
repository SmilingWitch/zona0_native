import { View,StyleSheet} from "react-native"
import theme from "../theme"
import OperationCont from "../components/common/OperationCont"
import BackHeader from "../components/common/BackHeader"
import { receiveValidationSchema } from "../validationSchemas/receive"
import { useSelector } from "react-redux"
import darkTheme from "../darkTheme"


const initialValues = {
    amount: ""
}

const Receive = ({navigation}) => {

    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )

    return(
        <View style = {styles.container}>
            <BackHeader name = "Receive SOP" navigation = {navigation}/>
            <OperationCont 
                header = "Enter the amount" 
                content="Enter the amount of OSP you wish to receive to generate a payment code."
                btn_text="Generate code"
                placeholder="Amount"
                name = "amount"
                url = "/transfer/create-receive/"
                validationScheme = {receiveValidationSchema}
                initialValues={initialValues}
                navigation = {navigation}
                operation="receive"
                />
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },

    
})


export default Receive