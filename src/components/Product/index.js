import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import product1 from '../../assets/image/product1.jpg';

const Product = props => {
  return (
    <View style={styles.wrapper}>
      <Image source={product1} style={styles.imageProduct}></Image>
      <Text style={styles.productName}>New Iphone 12 Pro 2020</Text>
      <Text style={styles.productPrice}>Rp. 12.000.000</Text>
      <Text style={styles.Location}>Jakarta Timur</Text>
      {/* Touchable pengganti button, biasa digunakan untuk text ketika di klik */}
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>BELI</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
  },
  imageProduct: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'orange',
    marginTop: 12,
  },
  Location: {
    fontSize: 12,
    marginTop: 10,
  },
  buttonWrapper: {
    backgroundColor: '#6FCF97',
    borderRadius: 5,
    paddingVertical: 5,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
