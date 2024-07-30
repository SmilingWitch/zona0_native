import { View, StyleSheet, TouchableOpacity } from "react-native"
import theme from "../../theme"
import Icon from '@expo/vector-icons/AntDesign'
import StyledText from "../common/StyledText"
import { useSelector } from "react-redux"
import darkTheme from "../../darkTheme"

const Operation = ({icon_name, url_name, operation_name, navigation}) => {
    
    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme );

    return(
        <View style = {styles.container}>

            <TouchableOpacity style = {styles.btn} onPress = {() => navigation.navigate(url_name)}>
                <Icon name = {icon_name} style = {styles.icon}></Icon>
            </TouchableOpacity> 

            <StyledText 
                fontSize="small" 
                fontWeight="bold"

                >
                    {operation_name}
                </StyledText>

        </View>
        
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        gap: 10,
        alignItems: 'center',
        width: 70
    },
    btn: {
        width: 60,
        height: 60,
        backgroundColor: theme.colors.buttonColor,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        fontSize: theme.fontSize.h2,
        color: theme.colors.textPrimary
    }
}) 

export default Operation