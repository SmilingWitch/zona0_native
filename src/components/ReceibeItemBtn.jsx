import { TouchableOpacity,StyleSheet } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"


const ReceibeItemBtn = ({route, focused}) => {
    return(
        <TouchableOpacity 
            
            onPress={() => console.log(route)} >
            <StyledText  fontWeight="bold" color="secundary" style={focused ? styles.btn_active : styles.btn} >{route.title}</StyledText>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    btn: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_active: {
        color: theme.colors.secundary,
        height: '100%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    }

})


export default ReceibeItemBtn