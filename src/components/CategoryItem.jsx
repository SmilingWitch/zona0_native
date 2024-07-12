import { View, StyleSheet, TouchableOpacity } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"


const CategoryItem = ({name, amount, navigation, active}) => {

    const containerStyle = [
        styles.container,
        active && styles.containerActive
    ]
    const numberStyle = [
        styles.number,
        active && styles.numberActive 
    ]

    return(
        <TouchableOpacity 
            style = {containerStyle} 
            onPress = {() => navigation.navigate('Notes', {name: name})}>
            <StyledText color = { active && 'secundary'} >{name}</StyledText>
            <View style = {numberStyle} ><StyledText fontSize = 'small' style = {styles.text}>{amount}</StyledText></View>
        </TouchableOpacity>

        
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: theme.colors.grey,
        borderRadius: 100,
        marginRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        minWidth: 50,
        justifyContent: 'space-between'
    },
    number: {
        width: 25,
        height: 25,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.white,
        marginLeft: 10 ,
        
    },
    text: {
        color: theme.colors.primary
    },
    containerActive: {
        backgroundColor: theme.colors.white,
        color: theme.colors.textSecundary
    },
    numberActive: {
        backgroundColor: theme.colors.lightGrey,
    }
})

export default CategoryItem