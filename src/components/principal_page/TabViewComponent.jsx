import { StyleSheet} from "react-native"
import theme from "../../theme"
import ReceibeItemBtn from "./ReceibeItemBtn"
import { useState } from "react"
import { SceneMap, TabBar, TabView } from "react-native-tab-view"



const TabViewComponent = ({routesComponent, styled}) => {

  const styledTab = [
    styled && styles.tapbar,
    !styled && styles.not_styled_tab
  ]

  const styledIndicator = [
    styled && styles.indicator_visible,
    !styled && styles.not_visible_indicator
  ]

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styledIndicator}
      style={styledTab}
      renderLabel={({ route, focused }) => (
        <ReceibeItemBtn route = {route} focused={focused} styled = {styled}/>
      )}
    />
  );


    const [index, setIndex] = useState(0);   
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
        
    },
    tapbar: {
        backgroundColor: theme.colors.buttonColor,
        borderRadius: 30,
        marginBottom: 15,
    },

    not_styled_tab: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      shadowColor: 'transparent',
      borderBottomWidth: 1,
      borderColor: theme.colors.buttonColor
    },
    indicator_visible: {
      height: '100%',
      borderRadius: 30,
      backgroundColor: theme.colors.secundary
    },
    not_visible_indicator: {
      backgroundColor: theme.colors.secundary
    }

    

})

export default TabViewComponent