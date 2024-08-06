import { fetchData } from "../general/fetchData";
import { showToast } from "./showToast";


export const changePassword = async (values, setLoading, accessToken ) => {
    setLoading(true)
    fetchData('/accounts/password/change/', values,{"access_token" : accessToken})
    .then(data => {
        setLoading(false)
        console.log(data);
         if(data.error){
            if(data.error.new_password1 || data.error.new_password2){
                showToast('error', 'Failed', "The two password fields didn’t match.")
            }else{
                showToast('error', 'Failed', "An error has occurred")
            }

        }else{
            showToast('success', 'Password Changed', "New password has been saved.")
        }

    })
    .catch(error => {
        console.log(error)
        showToast('error', 'Failed', "An error has occurred")
        setLoading(false)});

}
