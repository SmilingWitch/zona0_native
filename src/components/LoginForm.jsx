import { Text, View, StyleSheet, Dimensions, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, ScrollView, TouchableOpacity } from "react-native"
import theme from "../theme"
import StyledText from "../components/StyledText"
import { Formik, useField } from "formik"
import { loginValidationSchema } from "../validationSchemas/login"
import FormikInputValue from "../components/FormikInputValue"
import Button from "../components/Button"

const initialValues = {
    email: '',
    password: ''
}


const LoginForm = ({route,navigation}) => {
    return(

        <View style={styles.container}>
           
            <Formik initialValues={initialValues} 
            onSubmit={values => console.log(values)} 
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
                    <Button fnc ={handleSubmit} text = "Login"></Button>
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
    marginBottom: 30,

  },
  forgot_pass:{
    alignSelf: 'flex-end',
    marginTop: 30,
  }

   });

export default LoginForm