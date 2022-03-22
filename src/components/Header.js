import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
const screen = Dimensions.get('screen');
const Header = () => {
  return (
    <View style={[style.container]}>
      <Image
        style={[style.img]}
        source={require('../assets/LogoPilemFinder.png')}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 20,
    padding: 5,
    backgroundColor: '#ff002d',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    position: 'absolute',
    zIndex: 99,
  },
  img: {
    width: screen.width * 0.1,
    height: screen.width * 0.1,
  },
});
export default Header;
