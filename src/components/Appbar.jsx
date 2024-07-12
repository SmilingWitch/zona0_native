import { View, StyleSheet, TouchableOpacity } from "react-native"
import Icon from '@expo/vector-icons/AntDesign'
import Icon1 from '@expo/vector-icons/FontAwesome'
import theme from "../theme"


const Appbar = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <TouchableOpacity onPress = {() => navigation.navigate('NotesFolder')}>
                <Icon1 name = "folder-o" style = {styles.icon}></Icon1>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.navigate('')}>
                <Icon name = "setting" style = {styles.icon}></Icon>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.icon_pluss} onPress={() => navigation.navigate('Note', {name: "Untiteled Note", content: ""})}>
                <Icon name = "plus" style = {styles.icon}></Icon>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.navigate('')}>
                <Icon1 name = "trash-o" style = {styles.icon}></Icon1>
            </TouchableOpacity>
            <Icon name = "search1" style = {styles.icon}></Icon>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.grey,
        height: 60,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between'
    },
    icon: {
        fontSize: theme.fontSize.h2,
        color: theme.colors.textPrimary
    },
    icon_pluss:{
        fontSize: theme.fontSize.h2,
        backgroundColor: theme.colors.secundary,
        width: 50,
        height: 50,
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1000
        
    }
})

export default Appbar