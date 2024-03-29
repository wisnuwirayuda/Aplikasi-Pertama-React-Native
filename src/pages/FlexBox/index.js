import React, {Component, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';

// class Flexbox extends Component {
//   // Proses Mounting
//   constructor(props) {
//     super(props);
//     console.log('===> Constructor');
//     this.state = {subscriber: 100};
//   }

//   componentDidMount() {
//     console.log('===> Component Did Mount');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 500,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('===> Component Did Update');
//   }

//   componentWillUnmount() {
//     console.log('===> Component Will Unmount');
//   }

//   render() {
//     console.log('===> Render');
//     return (
//       <View>
//         <Text
//           style={{
//             fontSize: 22,
//             fontWeight: 'bold',
//             textAlign: 'center',
//             marginVertical: 20,
//           }}>
//           Ini MateriFlexBox
//         </Text>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: 'lightgrey',
//             alignItems: 'center',
//             justifyContent: 'space-around',
//           }}>
//           <View
//             style={{
//               backgroundColor: 'green',
//               width: 50,
//               height: 50,
//               //   flex: 1,
//             }}></View>
//           <View
//             style={{
//               backgroundColor: 'orange',
//               width: 50,
//               height: 100,
//               //   flex: 2,
//             }}></View>
//           <View
//             style={{
//               backgroundColor: 'yellow',
//               width: 50,
//               height: 150,
//               //   flex: 3,
//             }}></View>
//           <View
//             style={{
//               backgroundColor: 'purple',
//               width: 50,
//               height: 200,
//               //   flex: 4,
//             }}></View>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-around',
//           }}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Channel</Text>
//         </View>
//         <View style={{flexDirection: 'row'}}>
//           <Image
//             source={{
//               uri:
//                 'https://yt3.ggpht.com/ytc/AAUvwnjLQaAw9oMwj2TilguWi0wrVigKRREqjtrkz-bBcEY=s176-c-k-c0x00ffffff-no-rj',
//             }}
//             style={{
//               width: 100,
//               height: 100,
//               borderRadius: 100 / 2,
//               marginTop: 20,
//             }}></Image>
//           <View style={{justifyContent: 'center', marginLeft: 20}}>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Deddy Corbuzier
//             </Text>
//             <Text style={{fontSize: 13}}>
//               {this.state.subscriber} Subscribers
//             </Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const Flexbox = () => {
  const [subscriber, setSubscriber] = useState(200);
  useEffect(() => {
    console.log('did mount');
    setTimeout(() => {
      setSubscriber(400);
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [subscriber]);

  // useEffect(() => {
  //   console.log('did update');
  // }, [subscriber]);

  return (
    <View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          textAlign: 'center',
          marginVertical: 20,
        }}>
        Ini MateriFlexBox
      </Text>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'lightgrey',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            backgroundColor: 'green',
            width: 50,
            height: 50,
            //   flex: 1,
          }}></View>
        <View
          style={{
            backgroundColor: 'orange',
            width: 50,
            height: 100,
            //   flex: 2,
          }}></View>
        <View
          style={{
            backgroundColor: 'yellow',
            width: 50,
            height: 150,
            //   flex: 3,
          }}></View>
        <View
          style={{
            backgroundColor: 'purple',
            width: 50,
            height: 200,
            //   flex: 4,
          }}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Channel</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{
            uri:
              'https://yt3.ggpht.com/ytc/AAUvwnjLQaAw9oMwj2TilguWi0wrVigKRREqjtrkz-bBcEY=s176-c-k-c0x00ffffff-no-rj',
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            marginTop: 20,
          }}></Image>
        <View style={{justifyContent: 'center', marginLeft: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Deddy Corbuzier
          </Text>
          <Text style={{fontSize: 13}}>{subscriber} Subscribers</Text>
        </View>
      </View>
    </View>
  );
};

export default Flexbox;
