import { View, StyleSheet } from "react-native"
import StyledText from "../common/StyledText"
import { useDispatch, useSelector } from "react-redux";
import theme from "../../theme";
import darkTheme from "../../darkTheme";
import { Formik } from "formik";
import FormikInputValue from "../common/FormikInputValue";
import Button from "../common/Button";
import { registerValidationSchema } from "../../validationSchemas/register";
import { generateRandomPhoneNumber } from "../../api/generateRandomPhoneNumber";
import { useState } from "react";
import { fetchData } from "../../api/authentication/fetchData";
import { editDataValidationSchema } from "../../validationSchemas/editData";
import { updateUserInfo } from "../../store/reducer";


const EditDataContent = () => {

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme );
    const user = useSelector(state => state.user)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.accessToken)
    const update = "update"
    console.log(user)

const initialValues = {
    name : user.name,
    last_name: user.last_name,
    username: user.username,
    movil: user.movil,
    ci: user.ci,
    image: null
}



const updateData = async (values,id ) => {
    setLoading(true)
    fetchData(`/users/client-update/${id}/`, values,{"access_token" : accessToken}, update)
    .then(data => {
        setLoading(false)
        console.log(data)
        dispatch(updateUserInfo({
          image: null,
          last_name: values.last_name,
          name: values.name,
          username: values.username
        }));
    })
    .catch(error => {
        console.log(error)
        setLoading(false)});

}


    return(
        <View style = {styles.container}>
            <Formik initialValues={initialValues} 
            onSubmit={values => updateData(values, user.pk )} 
            validationSchema ={editDataValidationSchema}>
            {({handleSubmit}) => (
                <View style = {styles.form}>
                        <View style = {styles.input_bx}>
                            <StyledText  fontWeight="bold">Personal Information</StyledText>
                            <FormikInputValue
                                placeholder="Username" 
                                name = "username"
                            />
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
                    <Button  text = "Update" fnc = {handleSubmit} loading={loading}></Button>
                </View>
                )}
            </Formik>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
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
})

export default EditDataContent