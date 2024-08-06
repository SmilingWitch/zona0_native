import { updateUserInfo } from "../../store/reducer";
import { fetchData } from "../general/fetchData";
import { showToast } from "./showToast";
import { updateImage } from "./updateUserImage";


export const updateData = async (   values,
                                    id,
                                    setLoading,
                                    user,
                                    accessToken,
                                    dispatch,
                                    imageUri,
                                    imageInfo ) => {
    setLoading(true)
    fetchData(`/users/client-update/${id}/`,
        {
            last_name: values.last_name,
            name: values.name,
            username: values.username,
            movil: user.movil,
            ci: user.ci,}
        ,{"access_token" : accessToken}, "update")
    .then(data => {
        setLoading(false)
        console.log(data)

        if(data.error){
            console.log("ERROR",data.error)
            showToast('error', 'Failed', "An error has occurred")
            setLoading(false)
        }else{
            showToast('success', 'Updated Data', "Data has been updated correctly.")
            dispatch(updateUserInfo({
                image: imageUri,
                last_name: values.last_name,
                name: values.name,
                username: values.username
              }))
        }

    })
    .catch(error => {
        console.log(error)
        setLoading(false)});

}
