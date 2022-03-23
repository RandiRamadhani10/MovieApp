import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
const Splash = () => {
  const screen = Dimensions.get('screen');
  return (
    <View style={{flex: 1, backgroundColor: '#131313'}}>
      <View style={{width: screen.width, height: screen.height * 0.7}}></View>
      <View style={{width: screen.width, height: screen.height * 0.7}}></View>
    </View>
  );
};

export default Splash;
