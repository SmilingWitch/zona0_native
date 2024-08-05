import { View, StyleSheet, TouchableOpacity } from "react-native"
import Icon from '@expo/vector-icons/AntDesign'
import theme from "../../theme"
import StyledText from "./StyledText"
import { useSelector } from "react-redux"
import darkTheme from "../../darkTheme"

const BackHeader = ({navigation, name}) => {

  const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme );

    return (
        <View style = {styles.container}>
            <TouchableOpacity onPress = {() => navigation.goBack()} style = {styles.arrow}>
              <Icon name = 'arrowleft' style = {styles.icon}></Icon>
            </TouchableOpacity>
            <StyledText fontSize="h3">{name}</StyledText>
        </View>

    )
}

const getStyles = (theme) => StyleSheet.create({
      container: {
        alignItems: 'center',
        flexDirection: 'row', 
        paddingHorizontal: theme.padding,
        backgroundColor: theme.colors.white,
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