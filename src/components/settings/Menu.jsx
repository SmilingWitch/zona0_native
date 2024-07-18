import { View, StyleSheet, Image, DrawerLayoutAndroid,} from "react-native"
import StyledText from "../StyledText"
import theme from "../../theme"
import Button from "../Button"
import { fetchData } from "../../api/authentication/fetchData"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { logout } from "../../store/reducer"
import BackHeader from "../BackHeader"


const Menu = ({navigation}) => {


    const accessToken = useSelector(state => state.accessToken)
    const dispatch = useDispatch()
    const [loading, setLoaging] = useState(false)
    const user = useSelector(state => state.user)

    const logout_session = () => {
        setLoaging(true)
        fetchData("/accounts/logout/", null, {"access_token": accessToken }, logout)
                .then(data => {
                    console.log(data)
                    dispatch(logout())
                    setLoaging(false)
                    navigation.navigate("Login")
                    })
                .catch(error => {
                    console.log(error)
                    setLoaging(false)
                })
    }



    return(
        <View style = {styles.container}>
            <BackHeader navigation = {navigation} name = "Settings"></BackHeader>
            <View style = {styles.bx}>
                <View style = {styles.header}>
                    <StyledText fontSize="h3">Operations</StyledText>
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
                    <Button text = "Ver Perfil"  loading={loading}/>
                    <Button text = "Editar datos"   loading={loading}/>
                    <Button text = "Gestionar Tarjeta"  loading={loading}/>
                    <Button text = "Cambiar contrasena"  loading={loading}/>
                    <Button text = "Cerrar Sesion" fnc = {logout_session}  loading={loading}/>
                    <Button text = "Eliminar cuenta"  loading={loading}/>
                </View>
                
            </View>  

  
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
        backgroundColor: theme.colors.buttonColor,
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