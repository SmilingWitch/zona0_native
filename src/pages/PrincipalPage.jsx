
import {ScrollView } from "react-native"
import { View, StyleSheet,useWindowDimensions } from "react-native"
import theme from "../theme"
import ManageFolderHeader from "../components/PrincipalHeader"
import StyledText from "../components/StyledText"
import TotalBalance from "../components/TotalBalance"
import Operations from "../components/Operations"
import Receibes from "../components/Receibes"
import Sends from "../components/Sends"


const PrincipalPage = ({navigation, route}) => {
    return(
        <ScrollView style = {styles.container}>
            <ManageFolderHeader navigation = {navigation}  route = {route}/>
            <View style = {styles.items_bx}>
                <View style = {styles.item}>
                    <TotalBalance/>
                </View>

                <View style = {styles.item}>
                    <StyledText fontSize="h3">Operations</StyledText>
                    <Operations navigation={navigation}/>
                </View>

                <View style = {styles.item}>
                    <StyledText fontSize="h3">Recibos</StyledText>
                    <Receibes/>
                </View>

                <View style = {styles.item}>
                    <StyledText fontSize="h3">Envios</StyledText>
                    <Sends/>
                </View>

            </View>
            
        </ScrollView>
        
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    items_bx: {
        padding: theme.padding,
        gap: 50
    },
    item: {
        gap:25
    }

})

export default PrincipalPage