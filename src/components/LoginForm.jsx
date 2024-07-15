import { Text, View, StyleSheet, Dimensions, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, ScrollView, TouchableOpacity } from "react-native"
import theme from "../theme"
import StyledText from "../components/StyledText"
import { Formik, useField } from "formik"
import { loginValidationSchema } from "../validationSchemas/login"
import FormikInputValue from "../components/FormikInputValue"
import Button from "../components/Button"
import { useState } from "react"
import { fetchData } from "../api/authentication/fetchData"
import { storeData } from "../api/asyncStorage/storeData"
import { useDispatch, useSelector } from 'react-redux';
import { setUser, setAccessToken } from '../store/reducer';

const initialValues = {
    email: '',
    password: ''
}




const LoginForm = ({navigation}) => {



    
    const [data, setData ] = useState(null)
    const [error, setError ] = useState(null)
    const [loading, setLoading ] = useState(false)
    const dispatch = useDispatch();

    const login = async (values, result,error_result, navigation ) => {
        setLoading(true)
        fetchData('/accounts/login/', values)
        .then(data => {
            result(data)
            error_result(null)
            setLoading(false)
            dispatch(setUser(data.user));
            dispatch(setAccessToken(data.access));
            navigation.navigate('Dashboard')
        })
        .catch(error => {
            error_result("Unable to log in with provided credentials.")
            console.log(error)
            setLoading(false)});


    }


    return(

        <View style={styles.container}>
            <Formik initialValues={initialValues} 
            onSubmit={values => login(values, setData, setError, navigation  )} 
            validationSchema ={loginValidationSchema}>
            {({handleSubmit}) => (
                <View style = {styles.form}>
                    <View style = {styles.input_bx}>
                        <FormikInputValue
                            placeholder="Email" 
                            name = "email"
                        />
                        <FormikInputValue
                            placeholder="Password" 
                            name = "password"
                            secureTextEntry
                        />
                    </View>
                    <View style = {styles.error}>
                        <StyledText fontSize="small" error>{error}</StyledText>
                    </View>
                    <Button fnc ={handleSubmit} text = "Login" loading = {loading}></Button>
                </View>
                )}
            </Formik>

            

            <TouchableOpacity style = {styles.forgot_pass}>
                <StyledText fontSize="small" fontWeight="bold" color = "resalt" >
                    Forgot Password?
                </StyledText>
            </TouchableOpacity>
        </View>

        
    )
}


const styles = StyleSheet.create({
    container: {
     backgroundColor: theme.colors.primary,
     alignItems: 'center',
      /*paddingTop: 100,*/
      paddingHorizontal: 20
    } ,
    form: {
        width: `${100}%`,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

  btn: {
    backgroundColor: theme.colors.secundary,
    width: '100%',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center'
  },
  input_bx: {
    width: '100%',
    gap: 10,


  },
  forgot_pass:{
    alignSelf: 'flex-end',
    marginTop: 30,
  },
  error:{
    marginBottom: 30,
    marginTop: 10
  }

   });

export default LoginForm