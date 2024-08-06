import { fetchData } from "../../api/general/fetchData";

export const register = async (values,setError, navigation) => {
    fetchData('/register/client/', values)
    .then(data => {
        if(data.error){
            console.log(data.error)
            setError(data.error)
        }else{
            navigation.navigate('VerifyCode')
        }
    })
    .catch(error => {
        console.log(error)});
}
