
import { useSelector } from "react-redux"
import StyledText from "../common/StyledText"
import Button from "../common/Button"
import { View,  StyleSheet, Image } from "react-native"
import theme from "../../theme"
import darkTheme from "../../darkTheme"


const Institution = ({item, navigation}) => {

    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme );


    return(
        <View style = {styles.container}>
            <Image source = {{uri: item.image}} style = {styles.image}></Image>
            <View style = {styles.visit}>
                <StyledText fontSize='h2' fontWeight='bold'>{item.institution_name}</StyledText>
                <Button text = "Visit" fnc = {() => navigation.navigate('Institution', {item : item })}></Button>
            </View>
        </View>
        
    )
}


const getStyles = (theme) => StyleSheet.create({
    container: {
        backgroundColor: theme.colors.container,
        height: 300,
        borderRadius: 20,
        marginBottom: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '60%'
    },
    visit: {
        padding: 15,
        alignItems: 'center',
        justifyContent: "space-between",
        height: `40%`
    }
})



export default Institution