import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Table, Row} from 'react-native-table-component';

const tableDataSample = {
  tableHead: [
    'Table heading 1',
    'Table heading 2',
    'Table heading 3',
    'Table heading 4',
    'Table heading 5',
    'Table heading 6',
    'Table heading 7',
    'Table heading 8',
    'Table heading 9',
  ],
  widthArr: [140, 160, 180, 100, 120, 140, 160, 180, 200],
  tableData: [['Table column 1', 'Table column 2', 'Table column 3', 'Table column 4', 'Table column 5', 'Table column 6', 'Table column 7', 'Table column 8', 'Table column 9'],
        ['Table column 1', 'Table column 2', 'Table column 3', 'Table column 4', 'Table column 5', 'Table column 6', 'Table column 7', 'Table column 8', 'Table column 9'],
        ['Table column 1', 'Table column 2', 'Table column 3', 'Table column 4', 'Table column 5', 'Table column 6', 'Table column 7', 'Table column 8', 'Table column 9'],
        ['Table column 1', 'Table column 2', 'Table column 3', 'Table column 4', 'Table column 5', 'Table column 6', 'Table column 7', 'Table column 8', 'Table column 9'],
        ['Table column 1', 'Table column 2', 'Table column 3', 'Table column 4', 'Table column 5', 'Table column 6', 'Table column 7', 'Table column 8', 'Table column 9'],
        ['Table column 1', 'Table column 2', 'Table column 3', 'Table column 4', 'Table column 5', 'Table column 6', 'Table column 7', 'Table column 8', 'Table column 9'],
        ['Table column 1', 'Table column 2', 'Table column 3', 'Table column 4', 'Table column 5', 'Table column 6', 'Table column 7', 'Table column 8', 'Table column 9'],
        ['Table column 1', 'Table column 2', 'Table column 3', 'Table column 4', 'Table column 5', 'Table column 6', 'Table column 7', 'Table column 8', 'Table column 9'],
        ['Table column 1', 'Table column 2', 'Table column 3', 'Table column 4', 'Table column 5', 'Table column 6', 'Table column 7', 'Table column 8', 'Table column 9'],
        ['Table column 1', 'Table column 2', 'Table column 3', 'Table column 4', 'Table column 5', 'Table column 6', 'Table column 7', 'Table column 8', 'Table column 9'],
        ['Table column 1', 'Table column 2', 'Table column 3', 'Table column 4', 'Table column 5', 'Table column 6', 'Table column 7', 'Table column 8', 'Table column 9'],
        ['Table column 1', 'Table column 2', 'Table column 3', 'Table column 4', 'Table column 5', 'Table column 6', 'Table column 7', 'Table column 8', 'Table column 9'],
        ['Table column 1', 'Table column 2', 'Table column 3', 'Table column 4', 'Table column 5', 'Table column 6', 'Table column 7', 'Table column 8', 'Table column 9'],
    ],
};

export default function ScrollableTable() {
  const [data, setData] = React.useState(tableDataSample);
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{borderWidth: 1, borderColor: '#42b983'}}>
            <Row
              data={data.tableHead}
              widthArr={data.widthArr}
              style={styles.header}
              textStyle={styles.text}
            />
          </Table>
          <ScrollView style={styles.scrollContainer}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#42b983'}}>
              {data.tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={data.widthArr}
                  style={[
                    styles.rowSection,
                    index % 2 && {backgroundColor: '#fff'},
                  ]}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  rowSection: {height: 40, backgroundColor: '#E7E6E1'},
  header: {height: 50, backgroundColor: '#42b983'},
  text: {textAlign: 'center', fontWeight: '100', color: 'black'},
  scrollContainer: {},
});
