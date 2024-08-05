import {View, StyleSheet, TouchableOpacity } from "react-native"
import { Formik } from "formik"
import {useSelector} from 'react-redux';
import { loginValidationSchema } from "../../validationSchemas/login"
import FormikInputValue from "../common/FormikInputValue"
import Button from "../common/Button"
import StyledText from "../common/StyledText"
import useAuth from "../../api/hooks/useAuth"
import darkTheme from "../../darkTheme"
import theme from "../../theme"

const initialValues = {
    email: '',
    password: ''
}

const LoginForm = ({navigation}) => {

    const { loading, error, handleLogin } = useAuth();
    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )


    return(

        <View style={styles.container}>
            <Formik initialValues={initialValues}
            onSubmit={values => handleLogin(values, navigation)}
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
                            icon
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
     backgroundColor: theme.colors.container,
     alignItems: 'center',
      padding: 20,
      borderRadius: 20
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
