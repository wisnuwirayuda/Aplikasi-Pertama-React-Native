import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
  Image,
  Alert,
} from 'react-native';

const Item = ({name, email, jurusan, onPress, onDelete}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri:
              'https://robohash.org/03dbad4d0c2a750186ceacd65022a9ff?set=set2&bgset=bg2&size=200x200',
          }}
          style={styles.avatar}></Image>
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descJurusan}>{jurusan}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [button, setButton] = useState('Simpan');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  // Create
  const submit = () => {
    const data = {
      name,
      email,
      jurusan,
    };
    // console.log('Data before send: ', data);

    if (button === 'Simpan') {
      axios
        .post('http://10.0.2.2:3000/users', data) // ip 10.0.2.2 adalah ip aliases dari sebuah emulator
        .then(result => {
          // console.log('result: ', result);
          setName('');
          setEmail('');
          setJurusan('');
          getData();
        })
        .catch(err => console.log('err: ', err));
    } else if (button === 'Update') {
      axios
        .put(`http://10.0.2.2:3000/users/${selectedUser.id}`, data)
        .then(result => {
          console.log('Update Data: '), result;
          setName('');
          setEmail('');
          setJurusan('');
          setButton('Simpan');
          getData();
        });
    }
  };

  // Read
  const getData = () => {
    axios.get('http://10.0.2.2:3000/users').then(response => {
      // console.log('result get data: ', response);
      setUsers(response.data);
    });
  };

  // Update
  const updateData = item => {
    // console.log('Update Data: ', item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setJurusan(item.jurusan);
    setButton('Update');
  };

  // Delete
  const deleteData = item => {
    // console.log('delete data: ', item);
    axios
      .delete(`http://10.0.2.2:3000/users/${item.id}`)
      .then(result => console.log('Delete data: ', result));
    getData();
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
      <Button title={button} onPress={submit}></Button>
      <View style={styles.line}></View>
      {users.map(user => {
        return (
          <Item
            key={user.id}
            name={user.name}
            email={user.email}
            jurusan={user.jurusan}
            onPress={() => updateData(user)}
            onDelete={() =>
              Alert.alert('Peringatan', 'Yakin?', [
                {text: 'Tidak', onPress: () => console.log('Button Tidak')},
                {text: 'Ya', onPress: () => deleteData(user)},
              ])
            }></Item>
        );
      })}
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
