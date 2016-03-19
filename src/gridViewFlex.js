import React, {
  Component,
  Text,
  StyleSheet,
  View,
  ListView,
} from 'react-native';

class Row extends Component {
  render() {
    let items = this.props.rowItems.map(function(item) {
    	return (
    		<View key={item} style={styles.itemContainer}><Text style={styles.item}>{item}</Text></View>
    	);
		});
		let missingItemCount = this.props.fullRowItemCount - this.props.rowItems.length
    let padding = <View style={{flex: missingItemCount}}></View> 

    return (
      <View key={this.props.rowNo.toString()} style={styles.row}>
      	{items}
      	{padding}
      </View>
    );
  }
}

export default class GridViewFlex extends Component {
  constructor(props) {
    super(props);
    var items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
    var rows = []
    var rowCount = 0
    while (items.length)
    {
    	rowCount += 1;
    	rows.push({rowNo: rowCount, items: items.splice(0,this.props.itemsPerRow)})
    }

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  	this.state = {
    	dataSource: ds.cloneWithRows(rows),
  	};
  }

  render() {
    return (
    	<View>
	      <ListView
	        dataSource={this.state.dataSource}
	        renderRow={(rowData) => <Row rowNo={rowData.rowNo} rowItems={rowData.items} fullRowItemCount={this.props.itemsPerRow}/>}/>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  itemContainer: {
  	flex: 1,
  	alignItems: 'center',
  	justifyContent: 'center',
  	//borderWidth: 1,
  },
  item: {
    backgroundColor: '#CCC',
    margin: 10,
    width: 80,
    height: 80,
    textAlign: 'center',
  }
});
