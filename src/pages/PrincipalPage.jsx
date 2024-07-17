
import {ScrollView, TouchableOpacity } from "react-native"
import { View, StyleSheet } from "react-native"
import theme from "../theme"
import ManageFolderHeader from "../components/PrincipalHeader"
import StyledText from "../components/StyledText"
import TotalBalance from "../components/TotalBalance"
import Operations from "../components/Operations"
import Receibes from "../components/LastOperations"
import Icon from '@expo/vector-icons/EvilIcons'
import LastOperations from "../components/LastOperations"


const PrincipalPage = ({navigation, route}) => {
    return(
        <ScrollView style = {styles.container}>
            <ManageFolderHeader navigation = {navigation}  route = {route}/>
            <View style = {styles.items_bx}>
                <View style = {styles.item}>
                    <TotalBalance/>
                </View>

                <View style = {styles.item}>
                    <View style = {styles.header}>
                        <StyledText fontSize="h3">Operations</StyledText>
                    </View>
                    <Operations navigation={navigation}/>
                </View>

                <View style = {styles.item}>
                <View style = {styles.header}>
                    <StyledText fontSize="h3">Last Operations</StyledText>
                    <TouchableOpacity>
                        <Icon name = "undo" style = {styles.icon}></Icon>
                    </TouchableOpacity>
                </View>
                    <LastOperations navigation = {navigation}/>
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
    icon: {
        fontSize: theme.fontSize.h1
    }

})

export default PrincipalPage