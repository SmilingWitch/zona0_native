import { View, StyleSheet, Dimensions, Touchable, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"
import StyledInput from "./StyledInput"



const CreateFolder = ({setShowDialog}) => {
    return(
        <KeyboardAvoidingView style = {styles.container}  behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style = {styles.input_bx}>
                <StyledText color='secundary' fontWeight= 'bold'>Create Folder</StyledText>
                <StyledInput placeholder = 'Folder'></StyledInput>

                <View style = {styles.btn_bx}>
                    <TouchableOpacity style = {styles.btn} onPress={() => setShowDialog(false)}>
                        <StyledText color="secundary" fontWeight='bold'>Cancel</StyledText>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.btn}>
                        <StyledText color="secundary" fontWeight='bold'>Add</StyledText>
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
container: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0, 0, 0, 0.78)',
    alignItems: 'center',
    justifyContent: 'center',

},
input_bx: {
    backgroundColor: theme.colors.lightGrey,
    width: `${90}%`,
    height: 200,
    borderRadius: 30,
    padding: 20,
    opacity: 1,
    zIndex: 10000,
    position: 'absolute',
    justifyContent: 'space-between'
},
btn_bx: {
    flexDirection: 'row',
    justifyContent: 'space-around',
},
btn: {
    width: 100,
    alignItems: 'center'
}
})

export default CreateFolder