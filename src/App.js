import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import StylingComponent from './pages/StylingComponent';
import SampleComponent from './pages/SampleComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';

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
        {/* <SampleComponent></SampleComponent> */}
        {/* <StylingComponent></StylingComponent> */}
        {/* <FlexBox /> */}
        {/* <PropsDinamis></PropsDinamis> */}
        {/* <StateDinamis></StateDinamis> */}
        {/* <Position></Position> */}
        <Communication></Communication>
      </ScrollView>
    </View>
  );
};

export default App;
