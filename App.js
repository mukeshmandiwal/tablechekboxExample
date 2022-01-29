import React from 'react';
import {
  SafeAreaView,
  Text,
  useColorScheme,
  View,
  StyleSheet,
} from 'react-native';
import TableSample from './src/components/Table/TableSample';
import ScrollableTable from './src/components/Table/ScrollableTable';
import Checkbox from './src/components/checkboxes/checkbox';
const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <TableSample />
      <ScrollableTable /> */}
      <Checkbox />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
});
