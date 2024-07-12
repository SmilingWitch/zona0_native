import { View, StyleSheet, TouchableOpacity } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"
import ReceibeItemBtn from "./ReceibeItemBtn"
import { useState } from "react"
import { SceneMap, TabBar, TabView } from "react-native-tab-view"


  
const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'transparent' }}
      style={styles.tapbar}
      renderLabel={({ route, focused }) => (
        <ReceibeItemBtn route = {route} focused={focused}/>
      )}
    />
  );

const TabViewComponent = ({routesComponent}) => {
    const [index, setIndex] = useState(0);  
    const [active, setActive] = useState("efectuados")  
    const renderScene = SceneMap(
        routesComponent
      );

    const routesArray = Object.keys(routesComponent).map(key => ({
      key: key,
      title: key.charAt(0).toUpperCase() + key.slice(1)
    }));

    const [routes] = useState(routesArray);
      
    

    return(
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: 300, height: 200 }}
                    renderTabBar={renderTabBar}
                    />
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        alignItems: 'center',
        padding: 10
    },
    header: {
        width: '90%',
        borderRadius: 30,
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        backgroundColor: theme.colors.buttonColor,
    },
    tapbar: {
        backgroundColor: theme.colors.buttonColor,
        borderRadius: 30,

    },
    tab_style: {
        backgroundColor: 'violet'
    }
    

})

export default TabViewComponent