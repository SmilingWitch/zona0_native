import { TextInput, StyleSheet, View, Animated, TouchableOpacity } from "react-native"
import theme from "../../theme"
import { useSelector } from "react-redux"
import darkTheme from "../../darkTheme"
import StyledText from "./StyledText"
import { useEffect, useRef, useState } from "react"
import Icon from '@expo/vector-icons/FontAwesome'


const StyledTextInput = ({style = {}, error,color, fontSize, fontWeight,icon, ...props}) => {

    const theme1 = useSelector(state => state.darkTheme)
    const styles = getStyles(theme1 ? theme : darkTheme )
    const [focus, setFocus] = useState(false)
    const [visible, setVisible] = useState(false)
    const animatedValues = {
        animation: useRef(new Animated.Value(0)).current
    }
    const {animation} = animatedValues

    const inputStyles = [
        styles.textInput,
        color === 'primary' && styles.colorPrimary,
        color === 'secundary' && styles.colorSecundary,
        fontSize === 'h1' && styles.h1,
        fontSize === 'h2' && styles.h2,
        fontSize === 'h3' && styles.h3,
        fontSize === 'small' && styles.small,
        fontWeight === 'bold' && styles.bold,
        style,
    ]
    const animatedStyle = {
        transform:[{
            translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -30],
                extrapolate: 'clamp'
            })
        }]
    }

    useEffect(() => {
        handleAnimated()
    }, [focus])

    const handleAnimated = () => {
        console.log("animation")
        Animated.timing(animation, {
            toValue: focus ? 1 : props.value === '' ? 0 : 1 ,
            duration: 300,
            useNativeDriver: true
        }).start()
    }

    console.log(!visible)

    return(
        <View style = {styles.input_bx}>
            <TextInput 
                  style = {inputStyles } 
                  {...props} 
                  editable 
                  inputMode="text"
                  textAlignVertical="top"
                  placeholderTextColor={styles.placeholder.color}
                  selectionColor={theme.colors.grey}
                  autoCapitalize="none" 
                  secureTextEntry= {icon && !visible}
                  onFocus={() => setFocus(true)}
                  onBlur={() => setFocus(false)}
                  
                  />
            {icon && (visible === false ?
                <TouchableOpacity onPress={() => setVisible(true)}>
                    <Icon style = {styles.icon} name = "eye-slash"/>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={() => setVisible(false)}>
                    <Icon style = {styles.icon} name = "eye"/>
                </TouchableOpacity>)
                
            }
            <Animated.View style = {[styles.title_box, animatedStyle]} pointerEvents="none">
                <StyledText style = {[styles.placeholder_text , focus || props.value !== '' ? styles.focus_placeholder : styles.placeholer_text ]}>{props.placeholder}</StyledText>
            </Animated.View>
            
        </View> 
    )
}


const getStyles = (theme) => StyleSheet.create({
    input_bx: {
        position: 'relative',
        borderColor: theme.colors.primary,
        fontSize: theme.fontSize.regular,
        color: theme.colors.textPrimary,
        width: `${100}%`,
        backgroundColor: /*theme.colors.primary*/ 'transparent',
        borderColor: theme.colors.secundary,
        borderWidth: 1,
        borderRadius: 20,
        padding: 12,
        /*backgroundColor: theme.colors.white,*/
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    placeholer_text: {
       color: theme.colors.grey
    },
    icon: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.regular,        
    },
    placeholder_text: {
        color: 'rgba(58, 109,200, 0.3)'
    },
    focus_placeholder: {
        color: theme.colors.secundary,
        fontSize: theme.fontSize.small
    },
    textInput: {
        fontSize: theme.fontSize.regular,
        color: theme.colors.textPrimary,
        paddingTop: 5,
        width: '90%'    
    },
     placeholder: {
        color: theme.colors.textPrimary,
        color: 'transparent'
     },
     title_box: {
        position: 'absolute',
        width: 'auto',
        height: 'auto',
        left: 12,
        backgroundColor: theme.colors.container
     },
     notHeader: {
        borderColor: theme.colors.primary,
        fontSize: theme.fontSize.regular,
        color: theme.colors.textPrimary,
        flex: 1
     },
     error: {
        borderColor: 'red'
     },
     colorPrimary: {
        color: theme.colors.textPrimary,
        
    },
    colorSecundary: {
        color: theme.colors.primary
    },
    h1: {
        fontSize: theme.fontSize.h1
    },
    h2: {
        fontSize: theme.fontSize.h2
    },
    h3: {
        fontSize: theme.fontSize.h3
    },
    regular: {
        fontSize: theme.fontSize.regular,
        fontWeight: theme.fontWeight.normal,
        color: theme.colors.textPrimary
    },
    small: {
        fontSize: theme.fontSize.small
    },
    bold: {
        fontWeight: theme.fontWeight.bold
    }
})


export default StyledTextInput