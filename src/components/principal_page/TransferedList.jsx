import { View, StyleSheet } from "react-native"
import StyledText from "../common/StyledText"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchData } from "../../api/authentication/fetchData"
import { setTransferedList } from "../../store/reducer"
import theme from "../../theme"
import TransferLastOperationItemList from "./TransferLastOperationItemList"
import darkTheme from "../../darkTheme"


const TransferedList = () => {
    const transferedList = useSelector(state => state.transferedList)
    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )

    return(
        <View>
            <TransferLastOperationItemList data = {transferedList} />
        </View>
    )
}


const getStyles = (theme) => StyleSheet.create({
    empty_container: {
        alignItems: 'center',
        marginTop: 20
    },
    container: {
        gap: 10,
        marginTop: 10
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    date_details:{
        flexDirection: 'row',
        gap: 5
    },
    details_bx: {
        width: '60%',
        gap: 2
    },
    amount_bx: {
        backgroundColor: theme.colors.buttonColor,
        padding: 5,
        width: 100,
        alignItems: 'center',
        borderRadius: 20
    }
})
export default TransferedList