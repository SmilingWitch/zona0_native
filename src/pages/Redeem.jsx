import { View,StyleSheet} from "react-native"
import theme from "../theme"
import OperationCont from "../components/common/OperationCont"
import BackHeader from "../components/common/BackHeader"
import { redeemValidationSchema } from "../validationSchemas/redeem"
import { useSelector } from "react-redux"
import darkTheme from "../darkTheme"

const Redeem = ({navigation}) => {

    const initialValues = {
        code: ''
    }

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )

    return(
        <View style = {styles.container}>
            <BackHeader name = "Redeem code" navigation = {navigation}/>
            <OperationCont 
                header = "Enter the code" 
                content="Here you can redeem codes that are available for free OSP"
                btn_text="Check"
                placeholder="Code"
                initialValues= {initialValues}
                name= "code"
                validationScheme= {redeemValidationSchema}
                url= "/redeem-code/code/redeem/"
                operation="redeem"
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


export default Redeem