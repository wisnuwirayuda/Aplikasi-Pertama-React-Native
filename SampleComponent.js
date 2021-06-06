import React, {Component} from 'react';
import {View, Text, TextInput, Button, Image, Alert} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <Text style={{marginTop: 10, marginHorizontal: 10}}>Username</Text>
      <InputUsername></InputUsername>
      <Text style={{marginTop: 10, marginHorizontal: 10}}>Password</Text>
      <InputPassword></InputPassword>
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <Tombol></Tombol>
      </View>
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Tombol = () => {
  return (
    <Button
      onPress={() => Alert.alert('Successfully')}
      title="Login"
      color="#acb"
    />
  );
};

const InputUsername = () => {
  return (
    <TextInput
      //   secureTextEntry={true}
      style={{
        borderWidth: 1,
        margin: 10,
      }}></TextInput>
  );
};

const InputPassword = () => {
  return (
    <TextInput
      secureTextEntry={true}
      style={{
        borderWidth: 1,
        margin: 10,
      }}></TextInput>
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini adalah text dari class component</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/tech'}}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
          }}></Image>
        <Text>Ini adalah foto Tech</Text>
      </View>
    );
  }
}

export default SampleComponent;
