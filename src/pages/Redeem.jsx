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
            <BackHeader name = "Canjear codigo" navigation = {navigation}/>
            <OperationCont 
                header = "Entre el codigo" 
                content="Aqui podras canjear codigos que estan disponibles para obtener OSP de manera gratuita"
                btn_text="Verificar"
                placeholder="Codigo"
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