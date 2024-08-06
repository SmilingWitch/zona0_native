import { fetchData } from "../general/fetchData";
import { showToast } from "./showToast";


export const updateImage = async (  setLoading,
                                    imageInfo,
                                    accessToken,
                                    imageUri) => {
    setLoading(true)
    const formData = new FormData();
    const fileName = imageInfo.assets[0].uri.substring(
        imageInfo.assets[0].uri.lastIndexOf('/') + 1,
        imageInfo.assets[0].uri.length
    )
    const extension = fileName.split('.')[1]

    formData.append('image', JSON.parse(JSON.stringify({
    uri: imageInfo.assets[0].uri,
    type:'image/' + extension , // Obtén el tipo MIME correcto
    name: fileName,
   })))

   console.log(formData)

    fetchData(`/accounts/update/image-user/`,formData ,{"access_token" : accessToken}, "update")
    .then(data => {
        setLoading(false)
        console.log("DATA",data)
        console.log("URI",imageUri)
        if(data.error){
            console.log("ERROR",data.error)
            showToast('error', 'Failed', "An error has occurred")
            setLoading(false)
        }else{
            showToast('success', 'Updated Image', "Image has been updated correctly.")
        }

    })
    .catch(error => {
        console.log(error)
        setLoading(false)});

}
