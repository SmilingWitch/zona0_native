import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { registerValidationSchema } from "../../validationSchemas/register";
import { generateRandomPhoneNumber } from "../../api/functions/generateRandomPhoneNumber";
import theme from "../../theme";
import StyledText from "../common/StyledText"
import FormikInputValue from "../common/FormikInputValue";
import Button from "../common/Button";
import darkTheme from "../../darkTheme";
import useRegister from "../../api/hooks/useRegister";


const phoneNumber = generateRandomPhoneNumber("5", 7)
const ciNumber = generateRandomPhoneNumber("9", 10)
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


    const { loading, error, handleRegister } = useRegister();
    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )


    return(
        <View style={styles.container}>
            <Formik initialValues={initialValues}
            onSubmit={values => handleRegister(values, navigation)}
            validationSchema ={registerValidationSchema}>
            {({handleSubmit}) => (
                <View style = {styles.form}>
                        <View style = {styles.input_bx}>
                            <StyledText fontSize='h3' fontWeight="bold">Personal Information</StyledText>
                            <FormikInputValue
                                placeholder="Name"
                                name = "name"
                            />
                            {error.name && <StyledText error fontSize="small" style = {styles.error}>{error.name}</StyledText>}
                            <FormikInputValue
                                placeholder="Last Name"
                                name = "last_name"
                                secureTextEntry
                            />
                            {error.last_name && <StyledText error fontSize="small" style = {styles.error}>{error.last_name}</StyledText>}
                        </View>
                    <View style = {styles.input_bx}>
                        <StyledText fontSize='h3' fontWeight="bold">User Information</StyledText>
                        <FormikInputValue
                                placeholder="Username"
                                name = "username"
                            />
                        {error.username && <StyledText error fontSize="small" style = {styles.error}>{error.username}</StyledText>}
                        <FormikInputValue
                            placeholder="Email"
                            name = "email"
                        />
                        {error.email && <StyledText error fontSize="small" style = {styles.error}>{error.email}</StyledText>}
                        <FormikInputValue
                            placeholder="Password"
                            name = "password"
                            icon
                        />
                        {error.password && <StyledText error fontSize="small" style = {styles.error}>{error.password}</StyledText>}

                    </View>
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
    alignSelf: 'flex-start',
    bottom: 10
  }

   });

export default RegisterFormClient
