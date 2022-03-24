import React, {useEffect} from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
const Splash = ({navigation}) => {
  const screen = Dimensions.get('screen');
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, [navigation]);
  return (
    <View style={{flex: 1, backgroundColor: '#131313'}}>
      <View style={{width: screen.width, height: screen.height * 0.2}}></View>
      <View
        style={{
          width: screen.width,
          height: screen.height * 0.6,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/logoWhite.png')}
          style={{width: screen.width * 0.3, height: screen.width * 0.3}}
        />
        <Text style={{color: 'white', fontSize: 18}}>PilemFinder</Text>
      </View>
      <View
        style={{
          width: screen.width,
          height: screen.height * 0.2,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 15, margin: 15}}>
          Randi Ramadhani
        </Text>
      </View>
    </View>
  );
};

export default Splash;
