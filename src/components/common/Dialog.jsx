import { View, StyleSheet, ActivityIndicator } from "react-native"
import Dialog from "react-native-dialog";
import theme from "../../theme";
import StyledText from "./StyledText";
import { useSelector } from "react-redux";
import darkTheme from "../../darkTheme";

const DialogComponent = ({title, description, fnc, visible, setVisible, loading}) => {

    const handleCancel = () => {
        setVisible(false);
      };
    
    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )


    return(
        <View >
            <Dialog.Container visible={visible} contentStyle = {styles.container} >
                <Dialog.Title style = {styles.text}>{title}</Dialog.Title>
                <Dialog.Description style = {styles.text}>
                    {description}
                </Dialog.Description>
                {loading ? 
                <View style = {styles.button_cont}>
                    <ActivityIndicator size="small" color={styles.loader} />
                    <StyledText>Please, wait...</StyledText>
                </View>:
                <View style = {styles.button_cont}>
                    <Dialog.Button label="Cancel" onPress={handleCancel} style = {styles.button_cancel}/>
                    <Dialog.Button label="Delete" onPress={fnc} style = {styles.button_function}/>
                </View>
                
                }
                
            </Dialog.Container>
        </View>
    )
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        borderRadius: 20,
        backgroundColor: theme.colors.dialogColor
    },
    loader: 
        theme.colors.secundary,
    text: {
        fontSize: theme.fontSize.regular,
        color: theme.colors.textPrimary
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
    }

  });

export default DialogComponent