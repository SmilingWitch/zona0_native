import { showToast } from "./showToast"
import { handleOperationCont } from "./handleOperationCont"
import { fetchData } from "../../api/general/fetchData";

export const operationFetch = async (value, url, navigation, operation, accessToken, setLoading) => {

    const url_token = url !== null ? url : `/accounts/email/verify/${value.token}/`
    const token = operation === 'verify_token' ? null : {"access_token": accessToken}
    const values = operation === 'verify_token' ? null : value


    fetchData(url_token, values, token)
    .then(data => {
        console.log(data)
        setLoading(false)

        if(!data.error){
            handleOperationCont(operation, data, navigation);
        }else if (data.error.error) {
            showToast('error', 'Failed', data.error.error);
        }else if(data.error.amount){
          showToast('error', 'Failed', data.error.amount);
        }else if(data.error.message){
          showToast('error', 'Failed', data.error.message);
        } else {
            handleOperationCont(operation, data, navigation);
        }
        })

    .catch(error => {
        showToast('error', 'Failed', "An error has occurred")})
}
