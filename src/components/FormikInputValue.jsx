import { useField } from "formik"
import { View, StyleSheet } from "react-native"
import StyledTextInput from "./StyleTextInput"
import StyledText from "./StyledText"
import theme from "../theme"


const FormikInputValue = ({name, ...props}) => {
    
    const [field, meta, helpers] = useField(name)


    return(
        <View style = {styles.input_container}>
            <StyledTextInput
                error = {meta.touched && meta.error ? meta.error : ''}
                value={field.value} 
                onChangeText={value => helpers.setValue(value)} 
                onBlur={() => helpers.setTouched(true)}
                {...props}/>

            <View style = {styles.errorContainer}>
                {meta.touched && meta.error ? (
                    <StyledText style={styles.error} fontSize='small'>{meta.error}</StyledText>
                ) : null}

            </View>

        </View>
        
    )
}


const styles = StyleSheet.create({
    input_container: {
        width: '100%'
    },
  error: {
    color: 'red'
  }
   });


export default FormikInputValue