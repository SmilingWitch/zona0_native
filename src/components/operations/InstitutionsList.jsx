import {useSelector } from "react-redux"
import { FlatList, View, StyleSheet } from "react-native"
import Institution from "./Institution"
import theme from "../../theme"



const Institutions = ({navigation}) => {

    const institutionsList = useSelector(state => state.institutionsList)

    const renderItem = ({item}) => {
       return <Institution item = {item} navigation = {navigation}/>
    }

    return(
        <View style = {styles.container}>
            <FlatList
                data = {institutionsList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>

    )
}

    const styles = StyleSheet.create({
        container: {
            padding: theme.padding,

        }
    })

export default Institutions
