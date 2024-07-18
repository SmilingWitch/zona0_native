import { View, StyleSheet} from "react-native"
import theme from "../../theme"
import StyledText from "./StyledText"
import Button from "./Button"
import { Formik } from "formik"
import FormikInputValue from "./FormikInputValue"
import { useState } from "react"
import { useSelector } from "react-redux"
import { fetchData } from "../../api/authentication/fetchData"

const OperationCont = ({header, 
                        content,
                        btn_text,
                        placeholder, 
                        initialValues,
                        name, 
                        validationScheme,
                        url,
                        operation,
                        navigation}
                    ) => {

    const [error, setError ] = useState(null)
    const [loading, setLoading ] = useState(false)
    const accessToken = useSelector(state => state.accessToken)
    

    const operationFetch = async (value, url) => {
        console.log(value)
        const url_token = url !== null ? url : `/accounts/email/verify/${value.token}/`
        console.log(value)
        console.log("URLTOKEN",url_token)
        setLoading(true)
        const token = operation === 'verify_token' ? null : {"access_token": accessToken}
        const values = operation === 'verify_token' ? null : value
        fetchData(url_token, values, token)
        .then(data => {
                setLoading(false)
                console.log(data)
                if(operation === 'receive'){
                    navigation.navigate("ReceiveDetails", 
                                        {amount: data.amount,
                                        code: data.code,
                                        date: data.date,
                                        image: data.image,
                                        id: data.id,
                                        user: data.user,
                                        operation: 'pending'
                                        })
                }
                if(operation ==='verify_token'){
                    navigation.navigate("Login")
                }
                })
        .catch(error => {
                console.log("Error por aqui ",error)
                setLoading(false)})
    }


    return(
        <View style = {styles.container}>
            <View style = {styles.bx}>
                <StyledText  fontWeight="bold">{header}</StyledText>
                <StyledText fontSize="small">{content}</StyledText>
                <Formik initialValues={initialValues} 
                    onSubmit={value => operationFetch(value ,url)} 
                    validationSchema ={validationScheme}>
                    {({handleSubmit}) => (
                        <View style = {styles.form}>
                            <View style = {styles.input_bx}>
                                <FormikInputValue
                                    placeholder={placeholder} 
                                    name = {name}
                                />
                            </View>
                            <View style = {styles.error}>
                                <StyledText fontSize="small" error>{error}</StyledText>
                            </View>
                            <View style = {styles.btn_bx}>
                                <Button fnc ={handleSubmit} text = {btn_text} loading = {loading}></Button>
                            </View>
                            
                        </View>
                        )}
                </Formik>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: theme.padding,
        gap: 30,
        alignItems: 'center',
    },
    btn_bx:{
        width: 200,
    },
    bx: {
        width: '100%',
        minHeight: 250,
        backgroundColor: theme.colors.container,
        padding: theme.padding,
        flex: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    form: {
        width: '100%',
        marginTop: 20,
        alignItems: 'center'
    },
    input_bx: {
        width: '100%'
    }
})

export default OperationCont