import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BasicJavascript = () => {
  // Variabel adalah suatu penyederhanaan value

  // Tipe Data Primitive
  const nama = 'Wisnu Trenggono Wirayuda'; // String
  let age = 21; // Integer atau Number
  const apakahLakiLaki = true; // Boolean

  //   Tipe Data Complex
  const hewanPeliharaan = {
    nama: 'Miaw', // Property
    jenis: 'Kucing',
    usia: 2,
    apakahHewanLokal: true,
    warna: 'Kuning',
    orangTua: {
      jantan: 'Kaisar',
      betina: 'Kuin',
    },
  }; // Object

  const sapaOrang = (name, age) => {
    return console.log(`Hallo ${name} usia anda ${age}`);
  }; // Function
  sapaOrang('Wisnu', 21);

  const namaOrang = ['Wisnu', 'Trenggono', 'Wirayuda']; // object - array
  typeof namaOrang;

  //   Kondisi Percabangan
  //   if (hewanPeliharaan.nama === 'Miaw') {
  //     console.log('Halo Miaw!');
  //   } else {
  //     console.log('Hewan Siapa Ini?');
  //   }
  const sapaHewan = objectHewan => {
    // let hasilSapa = '';
    // if (objectHewan.nama === 'Miaw') {
    //   hasilSapa = 'Hallo Miaw, apa kabar?';
    // } else {
    //   hasilSapa = 'Ini Hewan Siapa?';
    // }
    // return hasilSapa;

    return objectHewan.nama === 'Miaw'
      ? 'Hallo Miaw, apa kabar?'
      : 'Ini Hewan Siapa?'; // Ternary Operator
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi Basic Javascript di React Native
      </Text>
      <Text>Name: {nama}</Text>
      <Text>Age: {age}</Text>
      <Text>{sapaHewan(hewanPeliharaan)}</Text>
      {/* Kondisi Perulangan */}
      {namaOrang.map(orang => (
        <Text>{orang}</Text>
      ))}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
