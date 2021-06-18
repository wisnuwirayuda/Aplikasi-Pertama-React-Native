import axios from 'axios';
import React, {useState} from 'react';
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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jurusan, setJurusan] = useState('');

  const submit = () => {
    const data = {
      name,
      email,
      jurusan,
    };
    // console.log('Data before send: ', data);
    axios
      .post('http://10.0.2.2:3000/users', data) // ip 10.0.2.2 adalah ip aliases dari sebuah emulator
      .then(result => {
        console.log('result: ', result);
        setName('');
        setEmail('');
        setJurusan('');
      })
      .catch(err => console.log('err: ', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local API (JSON Server)</Text>
      <Text>Masukkan Data Mahasiswa</Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        value={name}
        onChangeText={value => setName(value)}></TextInput>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={value => setEmail(value)}></TextInput>
      <TextInput
        placeholder="Jurusan"
        style={styles.input}
        value={jurusan}
        onChangeText={value => setJurusan(value)}></TextInput>
      <Button title="Simpan" onPress={submit}></Button>
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
