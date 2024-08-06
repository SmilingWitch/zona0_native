import { View, StyleSheet, ActivityIndicator } from "react-native"
import Dialog from "react-native-dialog";
import theme from "../../theme";
import StyledText from "../common/StyledText";
import { useSelector } from "react-redux";
import darkTheme from "../../darkTheme";
import { Formik } from "formik";
import { donateValidationSchema } from "../../validationSchemas/donate";
import FormikInputValue from "../common/FormikInputValue";



const DialogDonate = ({title, visible, setVisible, fnc, loading, initialValues}) => {

    const handleCancel = () => {
        setVisible(false);
      };

    const isDarkTheme = useSelector(state => state.darkTheme)
    const styles = getStyles(isDarkTheme ? theme : darkTheme )

    return(
        <View >
            <Dialog.Container visible={visible} contentStyle = {styles.container} >
                <Dialog.Title style = {styles.text}>{title}</Dialog.Title>
                <Dialog.Description style = {styles.text}>
                    <Formik initialValues={initialValues}
                        onSubmit={value => fnc(value)}
                        validationSchema ={donateValidationSchema}>
                        {({handleSubmit}) => (
                            <View style = {styles.form}>
                                <View style = {styles.input_bx}>
                                    <FormikInputValue
                                        placeholder="amount to donate"
                                        name = "amount"
                                    />
                                </View>
                                <View style = {styles.error}>
                                    <StyledText fontSize="small" ></StyledText>
                                </View>
                                {loading ?
                                <View style = {styles.button_cont}>
                                    <ActivityIndicator size="small" color={styles.loader} />
                                    <StyledText>Please, wait...</StyledText>
                                </View>:
                                <View style = {styles.button_cont}>
                                    <Dialog.Button label="Cancel" onPress={handleCancel} style = {styles.button_cancel}/>
                                    <Dialog.Button label="Accept" onPress={handleSubmit} style = {styles.button_function}/>
                                </View>

                                }

                            </View>
                            )}
                    </Formik>
                </Dialog.Description>
            </Dialog.Container>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: theme.colors.dialogColor,
        backgroundColor: theme.colors.container,
        alignItems: 'center'
    },
    loader:
        theme.colors.secundary,
    text: {
        fontSize: theme.fontSize.regular,
        color: theme.colors.textPrimary,
        alignItems: 'center'

    },
    button_function: {
        borderRadius: 20,
        backgroundColor: theme.colors.secundary,
        color: theme.colors.primary,
        fontSize: theme.fontSize.small,
        paddingHorizontal: 20
    },
    button_cancel: {
        borderRadius: 20,
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.small,
        paddingHorizontal: 20,
    },
    button_cont: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 20
    },
    form: {
        alignSelf: 'center'
    },
    error: {

    }


  });

export default DialogDonate
