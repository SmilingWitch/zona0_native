import { View, StyleSheet, Image, TouchableOpacity} from "react-native"
import StyledText from "../common/StyledText"
import theme from "../../theme"
import darkTheme from "../../darkTheme"
import {  useDispatch, useSelector } from "react-redux"
import BackHeader from "../common/BackHeader"
import MenuButtons from "./MenuButtons"
import Icon from '@expo/vector-icons/Ionicons'
import { setDarkTheme } from "../../store/reducer"

const Menu = ({navigation}) => {

    const user = useSelector(state => state.user)
    const theme1 = useSelector(state => state.darkTheme)
    const dispatch = useDispatch()
    const styles = getStyles(theme1 ? theme : darkTheme );
   
    return(
        <View style = {styles.container}>
            <BackHeader navigation = {navigation} name = "Settings"></BackHeader>
            {!user ? <View></View>
            :
            <View style = {styles.bx}>
                <View style = {styles.user_info}>
                    <View style = {styles.details}>
                        <Image 
                            source={require('../../../assets/images/fondo.jpg')}
                            style = {styles.image}></Image>
                        <View style = {styles.user_details}>
                            <StyledText fontWeight='bold'>{user.username}</StyledText>
                            <StyledText fontWeight='bold'>{`${user.name} ${user.last_name}`}</StyledText>
                        </View>
                    </View>
                    <View style = {styles.icon_bx}>
                        {theme1 ?
                            <TouchableOpacity onPress={() => dispatch(setDarkTheme(false))}>
                                <Icon name = "sunny" style = {styles.icon}></Icon>
                            </TouchableOpacity> :
                            <TouchableOpacity onPress={() => dispatch(setDarkTheme(true))}>
                                <Icon name = "moon" style = {styles.icon}></Icon>
                            </TouchableOpacity>
                            }
                    </View>
                     
                </View>
                <View style = {styles.btns_bx}>
                    <MenuButtons navigation={navigation}/>
                </View>
                
            </View>}
        </View>
        
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    },
    bx: {
        padding: theme.padding,
        gap: 15
    },
    header:{
        borderStartWidth: 4,
        borderColor: theme.colors.secundary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingVertical: 5,
        alignItems: 'center'
    },
    user_info: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        gap: 20,
        /*backgroundColor: theme.colors.buttonColor,*/
        borderRadius: 20,
        justifyContent: 'space-between'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 2000,
    },
    user_details: {

    },
    btns_bx: {
        gap: 5
    },
    details: {
        gap: 10
    },
    icon_bx: {
        alignSelf: 'flex-start'
    },
    icon: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.h2,        
    }
})

export default Menu