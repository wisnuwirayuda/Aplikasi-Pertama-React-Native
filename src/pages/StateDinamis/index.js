import React, {Component, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

// Functional Component dengan state
const Counter = () => {
  const [number, setPlusNumber] = useState(0);
  return (
    <View>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setPlusNumber(number + 1)}></Button>
    </View>
  );
};

// Class Component dengan state
class CounterClass extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View>
        <Text>{this.state.number}</Text>
        <Button
          title="Tambah"
          onPress={() =>
            this.setState({number: this.state.number + 1})
          }></Button>
      </View>
    );
  }
}

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>
        Materi Komponen State Dinamis Dengan Functional Component
      </Text>
      <Counter></Counter>
      <Counter></Counter>
      <Text style={styles.textTitle}>
        Materi Komponen State Dinamis Dengan Class Component
      </Text>
      <CounterClass></CounterClass>
      <CounterClass></CounterClass>
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
    paddingTop: 20,
  },
});
