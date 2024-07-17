import {StyleSheet, TouchableWithoutFeedback } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"


const ReceibeItemBtn = ({route, focused, styled}) => {
    return(
        <TouchableWithoutFeedback
            onPress={() => console.log(route)} >
                <StyledText  
                    fontSize='small'
                    style={styled ? (focused ? styles.btn_active : styles.btn) : (focused ? styles.btn_not_focus : styles.btn)}  >
                        {route.title}
                    </StyledText>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colors.textPrimary,
        minWidth: 50,
        alignItems: 'center',
        textAlign: 'center'
    },
    btn_active: {
        color: theme.colors.textSecundary,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: theme.fontWeight.bold,
        width: 50,
        textAlign: 'center'
    },
    btn_not_focus: {
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeight.bold,
    }
})


export default ReceibeItemBtn