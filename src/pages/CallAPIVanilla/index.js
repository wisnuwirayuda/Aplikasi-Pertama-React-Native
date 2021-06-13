import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CallAPIVanilla = () => {
  // Call API dengan Method GET
  useEffect(() => {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => console.log('get response', json));
  }, []);

  //   Call API dengan Method POST
  const DataForAPI = {
    name: 'morpheus',
    job: 'leader',
  };

  console.log('data object: ', DataForAPI);
  console.log('data stringify: ', JSON.stringify(DataForAPI));

  fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(DataForAPI), // harus mengirimkan data dalam bentuk STRING
  })
    .then(response => response.json())
    .then(json => console.log('post response: ', json));

  //   Call API dengan Method PUT
  fetch('https://reqres.in/api/users/2', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(DataForAPI),
  })
    .then(response => response.json())
    .then(json => console.log('put response', json));

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Integrasi Dengan Rest API</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
