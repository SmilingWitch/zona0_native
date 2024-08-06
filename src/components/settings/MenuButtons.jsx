import { View, StyleSheet } from "react-native"
import Button2 from "../common/Button2"
import { useState } from "react"
import DialogComponent from "../common/Dialog"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../../api/general/fetchData"
import { logout } from "../../store/reducer"


const MenuButtons = ({navigation}) => {

    const [visible, setVisible] = useState(false)
    const refreshToken = useSelector(state => state.refreshToken)
    const dispatch = useDispatch()
    const [loading, setLoaging] = useState(false)

    const logout_session = () => {
        setLoaging(true)
        fetchData("/accounts/logout/", {"refresh": refreshToken }, logout)
                .then(data => {
                    console.log("DATA",data)
                    dispatch(logout())
                    setLoaging(false)
                    setVisible(false)
                    navigation.navigate("Login")
                    })

                .catch(error => {
                    console.log("MESSAGE",error)
                    setLoaging(false)

                })
    }

    return(
        <View style = {styles.container}>
            <Button2 text = "Edit Data" name = 'user' fnc = {() => navigation.navigate("EditData")} navigation = {navigation}/>
            <Button2 text = "Change Password" name = 'user' fnc = {() => navigation.navigate("ChangePassword")} navigation = {navigation}/>
            <Button2 text = "Logout" fnc = {() => setVisible(true)} /*loading={loading}*/ name = 'user'/>

            <DialogComponent
                title="Logout"
                description="Are you sure you want to close the session?"
                visible = {visible}
                setVisible={setVisible}
                fnc ={logout_session}
                loading={loading}
                />
        </View>)

}

const styles = StyleSheet.create({
    container: {
        gap: 10
    }
})

export default MenuButtons
