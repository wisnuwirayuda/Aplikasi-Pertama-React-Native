import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import product1 from '../../assets/image/product1.jpg';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          borderWidth: 2,
          borderColor: 'yellow',
          marginTop: 20,
          marginLeft: 100,
        }}></View>
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={product1}
          style={{width: 188, height: 107, borderRadius: 8}}></Image>
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Iphone 12 Pro 2020
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'orange',
            marginTop: 12,
          }}>
          Rp. 12.000.000
        </Text>
        <Text style={{fontSize: 12, marginTop: 10}}>Jakarta Timur</Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            borderRadius: 5,
            paddingVertical: 5,
            marginTop: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 16,
              fontWeight: '600',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
    marginVertical: 20,
  },
});

export default StylingComponent;
