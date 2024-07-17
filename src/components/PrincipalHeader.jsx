import { TouchableOpacity, View, StyleSheet, Image } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"
import Icon from '@expo/vector-icons/Feather'


const ManageFolderHeader = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <View style = {styles.items_bx}>
              <Image source={require('../../assets/images/logo.jpg')} style = {styles.img_logo}></Image>
              <StyledText fontSize='h2' fontWeight="bold">Zona0</StyledText>
            </View>
            <View style = {styles.user_bx}>
              <TouchableOpacity style = {styles.user_details} onPress={() => navigation.navigate("Settings")}>
                  <StyledText fontSize="small" fontWeight="bold">user name</StyledText>
                  <Image source={require('../../assets/images/user.jpg')} style = {styles.img_user}></Image>
              </TouchableOpacity>
              <Icon name = 'bell' style = {styles.icon}></Icon>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      paddingVertical: 20,
      flexDirection: 'row', 
      paddingHorizontal: theme.padding,
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'space-between'

    },

    icon: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSize.h2
    },
    text: {
      marginLeft: 15
  },
  img_logo: {
    width: 60,
    height:60,
    borderRadius: 100000,
    overflow: 'hidden'
  },
  items_bx: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  user_bx:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  user_details: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3
  },
  img_user:{
    width: 30,
    height:30,
    borderRadius: 100000,

  }
})



export default ManageFolderHeader