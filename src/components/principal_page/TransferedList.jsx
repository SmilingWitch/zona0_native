import { View } from "react-native"
import { useSelector } from "react-redux"
import TransferLastOperationItemList from "./TransferLastOperationItemList"

const TransferedList = () => {

    const transferedList = useSelector(state => state.transferedList)

    return(
        <View>
            <TransferLastOperationItemList data = {transferedList} />
        </View>
    )
}

export default TransferedList
