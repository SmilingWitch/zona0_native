import { TouchableOpacity,StyleSheet, TouchableWithoutFeedback } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"


const ReceibeItemBtn = ({route, focused, styled}) => {
    return(
        <TouchableWithoutFeedback
            onPress={() => console.log(route)} >
                <StyledText  
                    fontWeight={focused ? "bold"  : ''}
                    fontSize='small'
                    style={styled ? (focused ? styles.btn_active : styles.btn) : (focused ? styles.btn_not_focus : styles.btn)}  >
                        {route.title}
                    </StyledText>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colors.textPrimary,
    },
    btn_active: {
        color: theme.colors.textSecundary,
        height: '100%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_not_focus: {
        color: theme.colors.textPrimary,
    }
})


export default ReceibeItemBtn