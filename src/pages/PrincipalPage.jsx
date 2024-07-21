
import {ActivityIndicator, ScrollView, TouchableOpacity } from "react-native"
import { View, StyleSheet } from "react-native"
import theme from "../theme"
import ManageFolderHeader from "../components/principal_page/PrincipalHeader"
import StyledText from "../components/common/StyledText"
import TotalBalance from "../components/principal_page/TotalBalance"
import Operations from "../components/principal_page/Operations"
import Icon from '@expo/vector-icons/EvilIcons'
import LastOperations from "../components/principal_page/LastOperations"
import { operations } from "../api/authentication/operations"
import { useDispatch, useSelector } from "react-redux"
import { setDonatedList, setpendingList, setPerformedList, setTransferedList } from "../store/reducer";
import { useState } from "react"


const PrincipalPage = ({navigation, route}) => {

    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.accessToken)
    const [loading, setLoading] = useState(false)


        const refreshData = async () => {
          try {
            setLoading(true)
            await Promise.all([
                operations(accessToken, dispatch, "/transfer/list-unpaid-receive/", setpendingList), 
                operations(accessToken, dispatch, "/transfer/list-paid-receive/", setPerformedList), 
                operations(accessToken, dispatch, "/institutions/donations/", setDonatedList), 
                operations(accessToken, dispatch, "/transfer/list-sendTransfer/", setTransferedList) ]);
                setLoading(false)
            }catch (error) {
            console.error(error)
            setLoading(false)
          }
        };



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
                    {loading ? 
                    <View>
                        <ActivityIndicator size="small" color={theme.colors.secundary} /> 
                    </View>
                    : <TouchableOpacity onPress={() => refreshData() }>
                        <Icon name = "undo" style = {styles.icon}></Icon>
                    </TouchableOpacity>}
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