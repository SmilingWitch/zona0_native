import { View, StyleSheet, TouchableOpacity } from "react-native"
import theme from "../../theme"
import Icon from '@expo/vector-icons/AntDesign'
import StyledText from "../common/StyledText"

const Operation = ({icon_name, url_name, operation_name, navigation}) => {
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

const styles = StyleSheet.create({
    container: {
        gap: 10,
        alignItems: 'center'
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
    }
}) 

export default Operation