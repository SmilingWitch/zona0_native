import { View, StyleSheet, Image, DrawerLayoutAndroid,} from "react-native"
import StyledText from "../common/StyledText"
import theme from "../../theme"
import Button from "../common/Button2"
import { fetchData } from "../../api/authentication/fetchData"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { logout } from "../../store/reducer"
import BackHeader from "../common/BackHeader"


const Menu = ({navigation}) => {


    const refreshToken = useSelector(state => state.refreshToken)
    const dispatch = useDispatch()
    const [loading, setLoaging] = useState(false)
    const user = useSelector(state => state.user)

    const logout_session = () => {
        setLoaging(true)
        fetchData("/accounts/logout/", {"refresh": refreshToken }, logout)
                .then(data => {
                    console.log("DATA",data)
                    dispatch(logout())
                    setLoaging(false)
                    navigation.navigate("Login")
                    })
                .catch(error => {
                    console.log("MESSAGE",error)
                    setLoaging(false)
                })
    }

    return(
        <View style = {styles.container}>
            <BackHeader navigation = {navigation} name = "Settings"></BackHeader>
            {!user ? <View></View>
            :
            <View style = {styles.bx}>
                <View style = {styles.header}>
                    <StyledText fontSize="h3">My Profile</StyledText>
                </View>
                <View style = {styles.user_info}>
                    <Image 
                        source={require('../../../assets/images/fondo.jpg')}
                        style = {styles.image}></Image>
                        <View style = {styles.user_details}>
                            <StyledText fontWeight='bold'>{`${user.name} ${user.last_name}`}</StyledText>
                            <StyledText fontWeight='bold'>{user.username}</StyledText>
                        </View>
                    
                </View>
                <View style = {styles.btns_bx}>
                    <Button text = "Cerrar Sesion" fnc = {logout_session} loading={loading} name = 'user'/>
                    {/*<Button text = "Ver Perfil"  loading={loading} name = 'user'/>
                    <Button text = "Editar datos"   loading={loading} name = 'user'/>
                    <Button text = "Gestionar Tarjeta"  loading={loading} name = 'user'/>
                    <Button text = "Cambiar contrasena"  loading={loading} name = 'user'/>
                    
                    <Button text = "Eliminar cuenta"  loading={loading} name = 'user'/>*/}
                </View>
                
            </View>}


  
        </View>
        
    )
}

const styles = StyleSheet.create({
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
        borderRadius: 20
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
    }
})

export default Menu