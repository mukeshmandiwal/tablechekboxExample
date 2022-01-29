import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const initialState = {
  react: false,
  next: false,
  vue: false,
  angular: false,
};

export default function Checkbox() {
  const [state, setState] = React.useState(initialState);
  const [toggleButton, setToggleButton] = React.useState(false);
  return (
    <View style={styles.container}>
      <View>
        <View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={state.react}
              onValueChange={value =>
                setState({
                  ...state,
                  react: value,
                })
              }
            />
            <Text>React js</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={state.next}
              onValueChange={value =>
                setState({
                  ...state,
                  next: value,
                })
              }
            />
            <Text>Next js</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={state.vue}
              onValueChange={value =>
                setState({
                  ...state,
                  vue: value,
                })
              }
            />
            <Text>Vue js</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <CheckBox
              value={state.angular}
              onValueChange={value =>
                setState({
                  ...state,
                  angular: value,
                })
              }
            />
            <Text>Angular js</Text>
          </View>
        </View>
        <Button
          onPress={() => setToggleButton(toggleButton => !toggleButton)}
          title="Save"
        />
      </View>
      {toggleButton && (
        <View style={styles.resultContainer}>
          {Object.entries(state).map(([key, value]) => {
            return (
              value && (
                <View key={key} style={{paddingHorizontal: 5}}>
                  <Text>{key}</Text>
                </View>
              )
            );
          })}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  resultContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
});
