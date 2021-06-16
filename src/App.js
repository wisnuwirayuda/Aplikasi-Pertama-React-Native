import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import StylingComponent from './pages/StylingComponent';
import SampleComponent from './pages/SampleComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import BasicJavascript from './pages/BasicJavascript';
import CallAPIVanilla from './pages/CallAPIVanilla';
import CallAPIAxios from './pages/CallAPIAxios';

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
        {/* <Communication></Communication> */}
        {/* <BasicJavascript></BasicJavascript> */}
        {/* <CallAPIVanilla></CallAPIVanilla> */}
        <CallAPIAxios></CallAPIAxios>
      </ScrollView>
    </View>
  );
};

export default App;
