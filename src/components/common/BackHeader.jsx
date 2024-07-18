import { View, StyleSheet, TouchableOpacity } from "react-native"
import Icon from '@expo/vector-icons/AntDesign'
import theme from "../../theme"
import StyledText from "./StyledText"

const BackHeader = ({navigation, name}) => {

    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress = {() => navigation.navigate("Dashboard")} style = {styles.arrow}>
              <Icon name = 'arrowleft' style = {styles.icon}></Icon>
            </TouchableOpacity>
            <StyledText fontSize="h3">{name}</StyledText>
        </View>

    )
}

const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        flexDirection: 'row', 
        paddingHorizontal: theme.padding,
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        gap: 10
      },
      icon: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.h2,        
      },

})


export default BackHeader