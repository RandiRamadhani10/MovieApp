import React from 'react';
import {View, ActivityIndicator, Dimensions} from 'react-native';
const Whenloading = () => {
  const screen = Dimensions.get('screen');
  return (
    <View
      style={{
        width: screen.width,
        height: screen.height,
        backgroundColor: '#131313',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100,
      }}>
      <ActivityIndicator size="large" color="#ff002d" />
    </View>
  );
};

export default Whenloading;
