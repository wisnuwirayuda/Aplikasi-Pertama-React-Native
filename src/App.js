import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import StylingComponent from './pages/StylingComponent';
import SampleComponent from './pages/SampleComponent';
import FlexBox from './pages/FlexBox';
import PropsDinamis from './pages/PropsDinamis';

// Arrow Function
const App = () => {
  // const [isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false);
  //   }, 6000);
  // }, []);

  return (
    <View>
      <ScrollView>
        {/* <SampleComponent></SampleComponent>
        <StylingComponent></StylingComponent>
        <FlexBox /> */}
        <PropsDinamis></PropsDinamis>
      </ScrollView>
    </View>
  );
};

export default App;
