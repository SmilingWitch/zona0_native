import { fetchData } from "../general/fetchData";
import { showToast } from "./showToast";
import { updateData } from "./updateData";

export const cancelReceipt = async (setLoading, id, accessToken,dispatch, navigation) => {
    setLoading(true)
    fetchData(`/transfer/list-delete-unpaid-receive/${id}`, null ,{"access_token" : accessToken}, "delete")
    .then(data => {
        console.log(data);
        if(data.error){
            showToast('error', 'Failed', "An error has occurred.")
            setLoading(false)
        }else{
            updateData(accessToken, dispatch, setLoading, navigation)
        }

    })
    .catch(error => {
        console.log(error)
        showToast('error', 'Failed', "An error has occurred.")
        setLoading(false)});

}
