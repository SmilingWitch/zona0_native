import { View, StyleSheet} from "react-native"
import theme from "../../theme"
import StyledText from "./StyledText"
import Button from "./Button"
import { Formik } from "formik"
import FormikInputValue from "./FormikInputValue"
import {useSelector } from "react-redux"
import darkTheme from "../../darkTheme"
import useOperationCont from "../../api/hooks/useOperationCont"




const OperationCont = ({header,
                        content,
                        btn_text,
                        placeholder,
                        initialValues,
                        name,
                        validationScheme,
                        url,
                        operation,
                        navigation}
                    ) => {


    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )
    const {loading, error, handleOperation} = useOperationCont()


    return(
        <View style = {styles.container}>
            <View style = {styles.bx}>
                <StyledText  fontWeight="bold">{header}</StyledText>
                <StyledText fontSize="small">{content}</StyledText>
                <Formik initialValues={initialValues}
                    onSubmit={value => handleOperation(value ,url, navigation, operation)}
                    validationSchema ={validationScheme}>
                    {({handleSubmit}) => (
                        <View style = {styles.form}>
                            <View style = {styles.input_bx}>
                                <FormikInputValue
                                    placeholder={placeholder}
                                    name = {name}
                                />
                            </View>
                            <View style = {styles.error}>
                                <StyledText fontSize="small" error>{error}</StyledText>
                            </View>
                            <View style = {styles.btn_bx}>
                                <Button fnc ={handleSubmit} text = {btn_text} loading = {loading}></Button>
                            </View>

                        </View>
                        )}
                </Formik>
            </View>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        padding: theme.padding,
        gap: 30,
        alignItems: 'center',
    },
    btn_bx:{
        width: 200,
    },
    bx: {
        width: '100%',
        minHeight: 250,
        backgroundColor: theme.colors.container,
        padding: theme.padding,
        flex: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    form: {
        width: '100%',
        marginTop: 20,
        alignItems: 'center'
    },
    input_bx: {
        width: '100%'
    }
})

export default OperationCont
