import { View, StyleSheet} from "react-native"
import StyledText from "../StyledText"
import theme from "../../theme"
import Button from "../Button"
import { fetchData } from "../../api/authentication/fetchData"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { logout } from "../../store/reducer"





const Menu = ({navigation}) => {


    const accessToken = useSelector(state => state.accessToken)
    const dispatch = useDispatch()
    const [loading, setLoaging] = useState(false)

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
            
            <Button text = "Logout" fnc = {logout_session}  loading={loading}>

            </Button>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white
    }
})

export default Menu