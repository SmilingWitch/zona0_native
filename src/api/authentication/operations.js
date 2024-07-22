import { fetchData } from "./fetchData"


export const operations = (accessToken, dispatch, url, reducer, operation) => fetchData(
    url, 
    null,
    {"access_token": accessToken} )
    .then(data => {
        if(operation === 'total_balance'){
            dispatch(reducer(data.orcaStore_point))
        }else{
            dispatch(reducer(data))
        }
        
        console.log("OPERATION",operation)
        
    })
    .catch(error => {
        console.log("ERRORRRR",error)
    })