import React from 'react';
import {StyleSheet, Button, Text, View, TextInput, Image} from 'react-native';

const Item = () => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri:
            'https://robohash.org/03dbad4d0c2a750186ceacd65022a9ff?set=set2&bgset=bg2&size=200x200',
        }}
        style={styles.avatar}></Image>
      <View style={styles.desc}>
        <Text style={styles.descName}>Nama Lengkap</Text>
        <Text style={styles.descEmail}>Email</Text>
        <Text style={styles.descJurusan}>Jurusan</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  );
};

const LocalAPI = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API (JSON Server)</Text>
      <Text>Masukkan Data Mahasiswa</Text>
      <TextInput placeholder="Nama Lengkap" style={styles.input}></TextInput>
      <TextInput placeholder="Email" style={styles.input}></TextInput>
      <TextInput placeholder="Jurusan" style={styles.input}></TextInput>
      <Button title="Simpan"></Button>
      <View style={styles.line}></View>
      <Item />
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  desc: {
    marginLeft: 18,
    flex: 1,
  },
  descName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descEmail: {
    fontSize: 16,
  },
  descJurusan: {
    fontSize: 12,
    marginTop: 8,
  },
  delete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
