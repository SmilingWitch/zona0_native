import { View, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import theme from "../../theme"
import darkTheme from "../../darkTheme"
import { Formik } from "formik"
import FormikInputValue from "../common/FormikInputValue"
import Button from "../common/Button"
import { useState } from "react"
import { changePassValidationSchema } from "../../validationSchemas/changePassword"
import { fetchData } from "../../api/general/fetchData"
import { showToast } from "../../api/functions/showToast"
import { changePassword } from "../../api/functions/changePassword"


const ChangePasswordForm = () => {

    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )
    const user = useSelector(state => state.user)
    const [loading, setLoading] = useState(false)
    const accessToken = useSelector(state => state.accessToken)
    console.log(user)

const initialValues = {
    new_password1:'',
    new_password2:''
}


    return(
        <View style = {styles.container}>
            <Formik initialValues={initialValues}
            onSubmit={values => changePassword(values, setLoading, accessToken)}
            validationSchema ={changePassValidationSchema}>
            {({handleSubmit}) => (
                <View style = {styles.form}>
                    <View style = {styles.input_bx}>
                        <FormikInputValue
                            placeholder="New Password"
                            name = "new_password1"
                            icon
                        />
                        <FormikInputValue
                            placeholder="Confirm Password"
                            name = "new_password2"
                            icon
                        />
                    </View>
                    <Button  text = "Change Password" fnc = {handleSubmit} loading={loading}></Button>
                </View>
                )}
            </Formik>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
     backgroundColor: theme.colors.primary,
     padding: theme.padding
    },
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

export default ChangePasswordForm
