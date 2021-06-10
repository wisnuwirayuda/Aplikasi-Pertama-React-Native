import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

const Communication = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Mater Komunikasi antar Component</Text>
      <Cart quantity={totalProduct}></Cart>
      <Product
        onButtonPress={() => setTotalProduct(totalProduct + 1)}></Product>
    </View>
  );
};

export default Communication;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
