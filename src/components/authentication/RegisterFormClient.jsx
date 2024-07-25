import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import StyledText from "../common/StyledText"
import { Formik } from "formik";
import FormikInputValue from "../common/FormikInputValue";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../api/authentication/fetchData";
import Button from "../common/Button";
import { registerValidationSchema } from "../../validationSchemas/register";
import darkTheme from "../../darkTheme";
import { generateRandomPhoneNumber } from "../../api/generateRandomPhoneNumber";



const phoneNumber = generateRandomPhoneNumber("5", 7)
const ciNumber = generateRandomPhoneNumber("9", 11)
const initialValues = {
    name : '',
    last_name: '',
    email: '',
    username: '',
    movil: phoneNumber,
    password: '',
    ci: ciNumber,
    image: null
}

const RegisterFormClient = ({navigation}) => {


    const [data, setData ] = useState(null)
    const [error, setError ] = useState(null)
    const [loading, setLoading ] = useState(false)

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )

    const register = async (values, result,error_result, navigation ) => {
        setLoading(true)
        fetchData('/register/client/', values)
        .then(data => {
            result(data)
            error_result(null)
            setLoading(false)
            navigation.navigate('VerifyCode')
        })
        .catch(error => {
            error_result("Unable to log in with provided credentials.")
            console.log(error)
            setLoading(false)});
    }


    return(
        <View style={styles.container}>
            <Formik initialValues={initialValues} 
            onSubmit={values => register(values, setData, setError, navigation  )} 
            validationSchema ={registerValidationSchema}>
            {({handleSubmit}) => (
                <View style = {styles.form}>
                        <View style = {styles.input_bx}>
                            <StyledText fontSize='h3' fontWeight="bold">Personal Information</StyledText>
                            <FormikInputValue
                                placeholder="Name" 
                                name = "name"
                            />
                            <FormikInputValue
                                placeholder="Last Name" 
                                name = "last_name"
                                secureTextEntry
                            />
                        </View>
                    <View style = {styles.input_bx}>
                        <StyledText fontSize='h3' fontWeight="bold">User Information</StyledText>
                        <FormikInputValue
                                placeholder="Username" 
                                name = "username"
                            />
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

                    {/*<View style = {styles.error}>
                        <StyledText fontSize="small" error>{error}</StyledText>
                    </View>*/}
                    <Button fnc ={handleSubmit} text = "Register" loading = {loading}></Button>
                </View>
                )}
            </Formik>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
     backgroundColor: theme.colors.primary,
     alignItems: 'center',
      paddingHorizontal: 20,
    } ,
    form: {
        width: `${100}%`,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: theme.colors.container,
        padding:20,
        borderRadius: 20,
        gap: 30
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
    alignItems: 'center'

  },

  error:{
    /*marginBottom: 30,*/
    marginTop: 10
  }

   });

export default RegisterFormClient