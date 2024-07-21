import { fetchData } from "./fetchData"


export const operations = (accessToken, dispatch, url, reducer) => fetchData(
    url, 
    null,
    {"access_token": accessToken} )
    .then(data => {
        dispatch(reducer(data))
    })
    .catch(error => {
        console.log("ERRORRRR",error)
    })