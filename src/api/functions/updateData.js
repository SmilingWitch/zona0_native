import { setpendingList } from "../../store/reducer"
import { fetchData } from "../general/fetchData"
import { showToast } from "./showToast"

export const updateData = async (accessToken, dispatch, setLoading, navigation) => {
    await fetchData("/transfer/list-unpaid-receive/", null, { "access_token": accessToken })
    .then(data => {
       dispatch(setpendingList(data))
       setLoading(false)
       navigation.navigate("Dashboard")
       showToast('success', 'Deleted Payment Receive', "The payment receipt has been deleted correctly.")
    })

}
