import React, {
  Component,
  Text,
  StyleSheet,
  View,
  ListView,
  Dimensions,
} from 'react-native';

const itemWidth = 120

export default class GridViewDimensions extends Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  	this.state = {
    	dataSource: ds.cloneWithRows(['item 1', 'item 2', 'item 3', 'item 4', 'item 5']),
  	};
  }

  render() {
  	var screenWidth = Dimensions.get('window').width;
  	var itemsPerRow = Math.floor(screenWidth / itemWidth)
  	var containerWidth = Math.floor(screenWidth/ itemsPerRow)
  	console.log('fdgdfgdfg')
  	console.log(screenWidth)
  	console.log(itemsPerRow)
  	console.log(containerWidth)
    return (
      <ListView contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <View style={[styles.itemContainer, {width: containerWidth}]}><Text key={rowData} style={styles.item}>{rowData}</Text></View>}/>
    );
  }
}

const styles = StyleSheet.create({
  list: {
        //justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    itemContainer: {
	  	alignItems: 'center',
	  	justifyContent: 'center',
	  	//borderWidth: 1,
	  },
    item: {
        backgroundColor: '#CCC',
        margin: 10,
        width: itemWidth,
        height: 100,
        textAlign: 'center',
    }
});
