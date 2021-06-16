import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import Axios from 'axios';

const CallAPIAxios = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  //   Memunculkan Hasil Call API Ke Dalam Aplikasi Method GET Menggunakan Axios
  const getData = () => {
    Axios.get('https://reqres.in/api/users/3')
      .then(result => setDataUser(result.data.data))
      .catch(err => console.log('err: ', err));
  };

  //   Memunculkan Hasil Call API Ke Dalam Aplikasi Method POST
  const postData = () => {
    const DataForAPI = {
      // Sebaiknya ini diisi dari hasil yang telah diinputkan oleh user melalui aplikasi
      name: 'morpheus',
      job: 'leader',
    };

    Axios.post('https://reqres.in/api/users', DataForAPI)
      .then(result => setDataJob(result.data))
      .catch(err => console.log('err: ', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi Integrasi Dengan Rest API Menggunakan Package AXIOS
      </Text>

      {/* Memunculkan Hasil Call API dengan Method GET */}
      <Button title="GET DATA" onPress={getData}></Button>
      <Text>Response GET DATA</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{uri: dataUser.avatar}} style={styles.avatar}></Image>
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line}></View>

      {/* Memunculkan hasil call API dengan method POST */}
      <Button title="POST DATA" onPress={postData}></Button>
      <Text>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallAPIAxios;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {height: 100, width: 100, borderRadius: 100},
});
