import { fetchData } from "./fetchData"
import {showToast} from "../functions/showToast"

export const operations = (accessToken, dispatch, url, reducer, operation) => fetchData(
    url,
    null,
    {"access_token": accessToken} )
    .then(data => {
        if(!data.error){
            if(operation === 'total_balance'){
                dispatch(reducer(data.orcaStore_point))
                return data
            }else{
                dispatch(reducer(data))
                return data
            }
        } else{
            console.log(data)
        }


    })
    .catch(error => {
        console.log("ERRORRRR",error)
    })
