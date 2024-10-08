import { View, StyleSheet, TouchableOpacity, Image} from "react-native"
import StyledText from "../common/StyledText"
import { useDispatch, useSelector } from "react-redux";
import theme from "../../theme";
import darkTheme from "../../darkTheme";
import { Formik } from "formik";
import FormikInputValue from "../common/FormikInputValue";
import Button from "../common/Button";
import { useState } from "react";
import { fetchData } from "../../api/general/fetchData";
import { editDataValidationSchema } from "../../validationSchemas/editData";
import { updateUserInfo } from "../../store/reducer";
import { showToast } from "../../api/functions/showToast";
import * as ImagePicker from 'expo-image-picker';
import DialogComponent from "../common/Dialog";
import { updateData } from "../../api/functions/updateUserData";
import { updateImage } from "../../api/functions/updateUserImage";


const EditDataContent = () => {

    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme );
    const user = useSelector(state => state.user)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const accessToken = useSelector(state => state.accessToken)
    const [imageInfo, setImageInfo] = useState(null)
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
        // Solicitar permisos
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Se necesitan permisos para acceder a la galería.');
          return;
        }

        // Seleccionar imagen
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
            setImageInfo(result)
            updateImage(setLoading, imageInfo, accessToken, imageUri)

        }
      };


    return(
        <View style = {styles.container}>
            <Formik initialValues={initialValues}
            onSubmit={values => updateData( values,
                                            user.pk,
                                            setLoading,
                                            user,
                                            accessToken,
                                            dispatch,
                                            imageUri,
                                            imageInfo
                                            )}
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
