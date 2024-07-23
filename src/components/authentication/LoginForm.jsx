import { Text, View, StyleSheet, Dimensions, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, ScrollView, TouchableOpacity } from "react-native"
import theme from "../../theme"
import StyledText from "../common/StyledText"
import { Formik, useField } from "formik"
import { loginValidationSchema } from "../../validationSchemas/login"
import FormikInputValue from "../common/FormikInputValue"
import Button from "../common/Button"
import { useState } from "react"
import { fetchData } from "../../api/authentication/fetchData"
import { useDispatch, useSelector} from 'react-redux';
import { setUser, setAccessToken, setRefreshToken, setZonaPoint } from '../../store/reducer';
import { BASE_URL } from '../../../config';
import darkTheme from "../../darkTheme"

const initialValues = {
    email: '',
    password: ''
}


const LoginForm = ({navigation}) => {

    const [error, setError ] = useState(null)
    const [loading, setLoading ] = useState(false)
    const dispatch = useDispatch();

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )

    const login = async (values,error_result, navigation ) => {
        setLoading(true)
        fetchData('/accounts/login/', values)
        .then(data => {
            if(data.error){
                setLoading(false)
                error_result(data.error.non_field_errors)
            }else{
                error_result(null)
                setLoading(false)
                dispatch(setUser(data.user));
                dispatch(setAccessToken(data.access));
                dispatch(setRefreshToken(data.refresh));
                dispatch(setZonaPoint(data.user.zona_point))
                navigation.navigate('Welcome') 
            } 
        })
        .catch(error => {
            error_result("Unable to log in with provided credentials.")
            console.log("Error en el componente",error)
            setLoading(false)});
    }

    return(

        <View style={styles.container}>
            <Formik initialValues={initialValues} 
            onSubmit={values => login(values, setError, navigation  )} 
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


const getStyles = (theme) => StyleSheet.create({
    container: {
     backgroundColor: theme.colors.primary,
     alignItems: 'center',
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