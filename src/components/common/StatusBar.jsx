import { StatusBar } from "expo-status-bar"
import { useSelector } from "react-redux"
import darkTheme from "../../darkTheme"
import theme from "../../theme"
import {StyleSheet} from 'react-native'
const StatusBarComponent = () => {

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )

    return <StatusBar 
            style = {theme1 ? "dark" : "light" }
            backgroundColor={styles.backgroundColor}/>
}

const getStyles = (theme) => StyleSheet.create({
        backgroundColor: theme.colors.primary
    
})

export default StatusBarComponent