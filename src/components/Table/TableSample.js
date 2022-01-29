import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';

const tableData = {
  tableHead: ['Type', 'Star', 'Issue'],
  tableData: [
    ['React js', '182k', '701'],
    ['Vue js', '193k', '324'],
    ['Angular js', '20.8k', '1.7k'],
    ['Next js', '80.5k', '893'],
    ['Svelte js', '55.3k', '534'],
  ],
};

function TableSample() {
  const [data, setData] = React.useState(tableData);
  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#42b983'}}>
        <Row
          data={data.tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows data={data.tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
}

export default TableSample;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  head: {height: 44, backgroundColor: '#42b983'},
  text: {margin: 6},
});
