import { View, StyleSheet, TouchableOpacity, Image} from "react-native"
import StyledText from "../common/StyledText"
import { useDispatch, useSelector } from "react-redux";
import theme from "../../theme";
import darkTheme from "../../darkTheme";
import { Formik } from "formik";
import FormikInputValue from "../common/FormikInputValue";
import Button from "../common/Button";
import { useState } from "react";
import { fetchData } from "../../api/authentication/fetchData";
import { editDataValidationSchema } from "../../validationSchemas/editData";
import { updateUserInfo } from "../../store/reducer";
import { showToast } from "../../api/showToast";
import * as ImagePicker from 'expo-image-picker';
import DialogComponent from "../common/Dialog";


const EditDataContent = () => {

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme );
    const user = useSelector(state => state.user)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.accessToken)
    const [visible, setVisible] = useState(false)
    const initialValues = {
    name : user.name,
    last_name: user.last_name,
    username: user.username,
    movil: user.movil,
    ci: user.ci,
    image: user.image
    }
    const [imageUri, setImageUri] = useState(user.image !== null ? user.image : null);
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
        });
        
        if (!result.canceled) {
          console.log(result);
          setImageUri(result.assets[0].uri)
          initialValues.image = result.assets[0].uri
        } else {
          setVisible(true)
        }
      };

const updateData = async (values,id ) => {
    setLoading(true)
    fetchData(`/users/client-update/${id}/`, values,{"access_token" : accessToken}, "update")
    .then(data => {
        setLoading(false)
        console.log(data)

        if(data.error){
            console.log("ERROR",data.error)
            showToast('error', 'Failed', "An error has occurred")
            setLoading(false)
        }else{
            showToast('success', 'Updated Data', "Data has been updated correctly.")
            dispatch(updateUserInfo({
                image: imageUri,
                last_name: values.last_name,
                name: values.name,
                username: values.username
              }))
        }
        
    })
    .catch(error => {
        console.log(error)
        setLoading(false)});
        showToast('error', 'Failed', "An error has occurred")
}


    return(
        <View style = {styles.container}>
            <Formik initialValues={initialValues} 
            onSubmit={values => updateData(values, user.pk )} 
            validationSchema ={editDataValidationSchema}>
            {({handleSubmit}) => (
                <View style = {styles.form}>
                <View style = {styles.image_bx}>
                        {imageUri !== null ? 
                    <TouchableOpacity onPress={pickImageAsync}>
                        <Image source={{ uri: imageUri }} style={styles.image} />
                    </TouchableOpacity> :
                    <TouchableOpacity onPress={pickImageAsync}>
                        <Image source={require('../../../assets/images/default_user.png')} style = {styles.image}></Image>
                    </TouchableOpacity>
                    
                    }
                </View>
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
            <DialogComponent 
                title = "Alert"
                description="You did not select any image"
                visible={visible}
                setVisible={setVisible}
                alert
                />
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
  image: {
    width: 150,
    height: 150,
    borderRadius: 100000
  },
  image_bx: {
    alignItems: 'center'
  },
  select_image: {

  },
  error:{
    /*marginBottom: 30,*/
    marginTop: 10
  }
})

export default EditDataContent