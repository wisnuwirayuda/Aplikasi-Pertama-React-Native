import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={styles.gambar}
      />
      <Text style={{maxWidth: 60, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            gambar="https://yt3.ggpht.com/ytc/AAUvwnjQGfD8VqPmCMjy5Bx06LExf7GwMQ_BijYt2eFBP2o=s176-c-k-c0x00ffffff-no-rj"
            judul="Bruno Mars"></Story>
          <Story
            gambar="https://yt3.ggpht.com/ytc/AAUvwnh8skP33nF0B3JIBFXTg1vFf5UYgg1OtS30Fy-jEA=s176-c-k-c0x00ffffff-no-rj"
            judul="Felix Official"></Story>
          <Story
            gambar="https://yt3.ggpht.com/ytc/AAUvwnj2Hwa4HCaN1NbD6LAMgXFlRZtMwZTbv0eewLOwbw=s176-c-k-c0x00ffffff-no-rj"
            judul="Menjadi Manusia"></Story>
          <Story
            gambar="https://yt3.ggpht.com/ytc/AAUvwnjQGfD8VqPmCMjy5Bx06LExf7GwMQ_BijYt2eFBP2o=s176-c-k-c0x00ffffff-no-rj"
            judul="Bruno Mars"></Story>
          <Story
            gambar="https://yt3.ggpht.com/ytc/AAUvwnh8skP33nF0B3JIBFXTg1vFf5UYgg1OtS30Fy-jEA=s176-c-k-c0x00ffffff-no-rj"
            judul="Felix Official"></Story>
          <Story
            gambar="https://yt3.ggpht.com/ytc/AAUvwnj2Hwa4HCaN1NbD6LAMgXFlRZtMwZTbv0eewLOwbw=s176-c-k-c0x00ffffff-no-rj"
            judul="Menjadi Manusia"></Story>
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({
  gambar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});
