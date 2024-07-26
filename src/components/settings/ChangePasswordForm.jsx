import { View, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import theme from "../../theme"
import darkTheme from "../../darkTheme"
import { Formik } from "formik"
import FormikInputValue from "../common/FormikInputValue"
import Button from "../common/Button"
import { useState } from "react"
import { changePassValidationSchema } from "../../validationSchemas/changePassword"
import { fetchData } from "../../api/authentication/fetchData"
import { showToast } from "../../api/showToast"


const ChangePasswordForm = () => {

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )
    const user = useSelector(state => state.user)
    const [loading, setLoading] = useState(false)
    const accessToken = useSelector(state => state.accessToken)
    const update = "update"
    console.log(user)

const initialValues = {
    new_password1:'',
    new_password2:''
}


const changePassword = async (values ) => {
    setLoading(true)
    fetchData('/accounts/password/change/', values,{"access_token" : accessToken})
    .then(data => {
        setLoading(false)
        console.log(data);
         if(data.error){
            if(data.error.new_password1 || data.error.new_password2){
                showToast('error', 'Failed', "The two password fields didn’t match.")
            }else{
                showToast('error', 'Failed', "An error has occurred")
            }
            
        }else{
            showToast('success', 'Password Changed', "New password has been saved.")
        }
        
    })
    .catch(error => {
        console.log(error)
        showToast('error', 'Failed', "An error has occurred")
        setLoading(false)});

}



    return(
        <View style = {styles.container}>
            <Formik initialValues={initialValues} 
            onSubmit={values => changePassword(values)} 
            validationSchema ={changePassValidationSchema}>
            {({handleSubmit}) => (
                <View style = {styles.form}>
                    <View style = {styles.input_bx}>
                        <FormikInputValue
                            placeholder="New Password" 
                            name = "new_password1"
                        />
                        <FormikInputValue
                            placeholder="Confirm Password" 
                            name = "new_password2"
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