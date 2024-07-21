import { TouchableOpacity, StyleSheet, ActivityIndicator, Image } from "react-native"
import StyledText from "./StyledText"
import theme from "../../theme"
import { View } from "react-native"
import Icon from '@expo/vector-icons/AntDesign'
import images from "../../images/images"


const Button2 = ({text, fnc,loading,name, ...props}) => {

    return(
        loading ? 
        <View style = {styles.container}>
            <ActivityIndicator size="small" color="#ffff" /> 
        </View>
        :
        <TouchableOpacity style = {styles.container } onPress={fnc}>
            <View style = {styles.details}>

                <Icon  name = {name} style = {styles.image} ></Icon>
                
                <StyledText fontSize='small' fontWeight='bold' style = {styles.text}>{text}</StyledText>
            </View>
           
            <Icon name = 'right' style = {styles.icon}></Icon> 
        </TouchableOpacity> 
        
    )
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: theme.colors.container,
    width: '100%',
    paddingHorizontal: 20,
    padding: 15,
    borderRadius: 20 ,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
    },
    text: {
        textAlign: 'center',
    },
    icon: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.h2,        
    },
    details: {
      flexDirection: 'row',
      gap: 20,
      alignItems: 'center'
    },
    image: {
        width: 15,
        height: 15,        
    },
    image_bx: {
        backgroundColor: theme.colors.buttonColor,
        padding: 6,
        borderRadius: 20
    }
})

export default Button2