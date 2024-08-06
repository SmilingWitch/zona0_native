import { TouchableOpacity, View, StyleSheet, ActivityIndicator } from "react-native"
import StyledText from "../common/StyledText"
import { useDispatch, useSelector } from "react-redux"
import Icon from '@expo/vector-icons/EvilIcons'
import { useState } from "react"
import theme from "../../theme"
import darkTheme from "../../darkTheme"
import BankedListItem from "./BankedListItem"
import { setBankedList } from "../../store/reducer"
import { operations } from "../../api/general/operations";


const BankingDeposits = () => {

    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )
    const bankedList = useSelector(state => state.bankedList)
    const accessToken = useSelector(state => state.accessToken)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const isValidArray = Array.isArray(bankedList) && bankedList.length > 0

    const fetchData = async () => {
        setLoading(true)
        await operations(accessToken, dispatch, "/banking/account/", setBankedList) ;
        setLoading(false)
      };


    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <StyledText fontSize="h3">Deposits</StyledText>
                {loading ?
                    <ActivityIndicator size="small" color={styles.loaderColor} />
                    : <TouchableOpacity onPress={fetchData}>
                    <Icon name = "undo" style = {styles.icon}></Icon>
                </TouchableOpacity>}
            </View>
            <View style = {styles.deposits}>
                {isValidArray ?
                    bankedList.slice().reverse().map((item) => {
                        return <BankedListItem key = {item.id} data = {item}></BankedListItem>
                    })
                    : <StyledText fontSize='small'>No hay depositos aun</StyledText>
                }
            </View>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
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
    loaderColor: theme.colors.secundary,
    icon: {
        fontSize: theme.fontSize.h1,
        color: theme.colors.textPrimary
    },
    deposits: {
        width: '100%',
        minHeight: 300,
        backgroundColor: theme.colors.container,
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10
    }
})
export default BankingDeposits
