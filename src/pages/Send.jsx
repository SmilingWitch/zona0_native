import { View, StyleSheet } from "react-native"
import theme from "../theme"
import BackHeader from "../components/common/BackHeader"
import OperationCont from "../components/common/OperationCont"
import { sendValidationSchema } from "../validationSchemas/send"
import { useSelector } from "react-redux"
import darkTheme from "../darkTheme"

const initialValues = {
    code: ""
}

const Send = ({navigation}) => {

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )

    return(
        <View style = {styles.container}>
            <BackHeader navigation = {navigation} name = "Send OSP"/>
            <OperationCont 
                header = "Enter the code"
                content="Enter the code to proceed with the payment of the established amount."
                btn_text="Send"
                placeholder="Code"
                name = "code"
                url = "/transfer/create-sendTransfer/"
                validationScheme={sendValidationSchema}
                initialValues={initialValues}
                navigation = {navigation}
                operation="send"
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

export default Send