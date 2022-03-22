import React from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
const screen = Dimensions.get('screen');
const Banner = ({props}) => {
  const {data} = props;
  return (
    <View style={[style.container]}>
      <Image
        style={[style.img]}
        resizeMode="cover"
        blurRadius={2}
        source={{uri: data.poster_path}}
      />
      <View style={style.containerChild}>
        <Text style={[style.title]}>{data.title}</Text>
        <Text style={[style.titleChild, {color: 'white'}]}>{data.tagline}</Text>
        <Text style={[style.titleChild, {color: '#00ab66'}]}>
          {data.status}
        </Text>
      </View>
      <View style={[style.space]}></View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    position: 'relative',
    width: screen.width,
    alignItems: 'center',
  },
  containerChild: {
    backgroundColor: '#2c2c2ce6',
    position: 'absolute',
    width: screen.width * 0.9,
    height: screen.width * 0.3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    bottom: 0,
    zIndex: 99,

    borderRadius: 30,
  },
  img: {
    position: 'relative',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: screen.width,
    height: screen.width,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  titleChild: {fontSize: 13},
  space: {
    width: screen.width,
    height: screen.width * 0.15,
  },
  containerChildTitle: {
    flexDirection: 'row',
  },
});
export default Banner;
