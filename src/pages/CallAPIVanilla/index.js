import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

const CallAPIVanilla = () => {
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

  // Call API dengan Method GET
  //   useEffect(() => {
  //     fetch('https://reqres.in/api/users/2')
  //       .then(response => response.json())
  //       .then(json => console.log('get response', json));
  //   }, []);

  //   Call API dengan Method POST
  //   const DataForAPI = {
  //     name: 'morpheus',
  //     job: 'leader',
  //   };

  //   console.log('data object: ', DataForAPI);
  //   console.log('data stringify: ', JSON.stringify(DataForAPI));

  //   fetch('https://reqres.in/api/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(DataForAPI), // harus mengirimkan data dalam bentuk STRING
  //   })
  //     .then(response => response.json())
  //     .then(json => console.log('post response: ', json));

  //   //   Call API dengan Method PUT
  //   fetch('https://reqres.in/api/users/2', {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(DataForAPI),
  //   })
  //     .then(response => response.json())
  //     .then(json => console.log('put response', json));

  //   Memunculkan Hasil Call API Ke Dalam Aplikasi Method GET
  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  //   Memunculkan Hasil Call API Ke Dalam Aplikasi Method POST
  const postData = () => {
    const DataForAPI = {
      // Sebaiknya ini diisi dari hasil yang telah diinputkan oleh user melalui aplikasi
      name: 'morpheus',
      job: 'leader',
    };

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(DataForAPI), // harus mengirimkan data dalam bentuk STRING
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataJob(json);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Integrasi Dengan Rest API</Text>

      {/* Memunculkan Hasil Call API dengan Method GET */}
      <Button title="GET DATA" onPress={getData}></Button>
      <Text>Response GET DATA</Text>
      <Image source={{uri: dataUser.avatar}} style={styles.avatar}></Image>
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

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {height: 100, width: 100, borderRadius: 100},
});
