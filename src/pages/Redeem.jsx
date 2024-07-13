import { View,StyleSheet} from "react-native"
import theme from "../theme"
import OperationCont from "../components/OperationCont"
import BackHeader from "../components/BackHeader"


const Redeem = ({navigation}) => {


    return(
        <View style = {styles.container}>
            <BackHeader name = "Canjear codigo" navigation = {navigation}/>
            <OperationCont 
                header = "Entre el codigo" 
                content="Aqui podras canjear codigos que estan disponibles para obtener OSP de manera gratuita"
                btn_text="Verificar"
                placeholder="Codigo"
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
    },

    
})


export default Redeem