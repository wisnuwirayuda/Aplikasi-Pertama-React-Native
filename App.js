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
import StylingReactNativeComponent from './StylingReactNativeComponent';
import SampleComponent from './SampleComponent';
import MateriFlexBox from './MateriFlexBox';

// Arrow Function
const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent></SampleComponent>
        <StylingReactNativeComponent></StylingReactNativeComponent>
        <MateriFlexBox></MateriFlexBox>
      </ScrollView>
    </View>
  );
};

export default App;
