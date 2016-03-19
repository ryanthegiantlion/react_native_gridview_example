import React, {
  Component,
  Text,
  StyleSheet,
  View,
  ListView,
} from 'react-native';

export default class GridView extends Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  	this.state = {
    	dataSource: ds.cloneWithRows(['item 1', 'item 2', 'item 3', 'item 4', 'item 5']),
  	};
  }

  render() {
    return (
      <ListView contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text key={rowData} style={styles.item}>{rowData}</Text>}/>
    );
  }
}

const styles = StyleSheet.create({
  list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: '#CCC',
        margin: 10,
        width: 100,
        height: 100
    }
});
