import { fetchData } from "./fetchData"


export const operations = (accessToken, dispatch, url, reducer, operation) => fetchData(
    url, 
    null,
    {"access_token": accessToken} )
    .then(data => {
        if(operation === 'total_balance'){
            dispatch(reducer(data.orcaStore_point))
            return data
        }else{
            dispatch(reducer(data))
            return data
        }
        
    })
    .catch(error => {
        console.log("ERRORRRR",error)
    })