import { View, StyleSheet, ActivityIndicator } from "react-native"
import Dialog from "react-native-dialog";
import theme from "../../theme";
import StyledText from "./StyledText";

const DialogComponent = ({title, description, fnc, visible, setVisible, loading}) => {

    const handleCancel = () => {
        setVisible(false);
      };
    



    return(
        <View >
            <Dialog.Container visible={visible} contentStyle = {styles.container} >
                <Dialog.Title style = {styles.text}>{title}</Dialog.Title>
                <Dialog.Description style = {styles.text}>
                    {description}
                </Dialog.Description>
                {loading ? 
                <View style = {styles.button_cont}>
                    <ActivityIndicator size="small" color={theme.colors.secundary} />
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

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
    },
    text: {
        fontSize: theme.fontSize.regular
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