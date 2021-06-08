import React, {Component} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  Alert,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import StylingComponent from './pages/StylingComponent';
import SampleComponent from './pages/SampleComponent';
import FlexBox from './pages/FlexBox';

// Arrow Function
const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent></SampleComponent>
        <StylingComponent></StylingComponent>
        <FlexBox></FlexBox>
      </ScrollView>
    </View>
  );
};

export default App;
