/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StatusBarIOS,
  Text,
  StyleSheet,
  View,
} from 'react-native';

var ScrollableTabView = require('react-native-scrollable-tab-view');
import GridViewDimensions from './gridViewDimensions'
import GridViewFlex from './gridViewFlex'
import GridView from './gridView'


export default function Init() {

  StatusBarIOS.setStyle('light-content')

  class Root extends Component {

    render() {
      return (
        <View style={styles.container}>
          <ScrollableTabView>
            <GridView tabLabel="Standard Grid" />
            <GridViewDimensions tabLabel="Dimensions Grid" />
            <GridViewFlex tabLabel="Flex Grid" itemsPerRow={3}/>
          </ScrollableTabView>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

  AppRegistry.registerComponent('GridView', () => Root);
}
