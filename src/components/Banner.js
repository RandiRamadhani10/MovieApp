import React from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const screen = Dimensions.get('screen');
const Banner = ({props}) => {
  const {data} = props;
  return (
    <>
      <View style={[style.container]}>
        <Image
          style={[style.img]}
          resizeMode="cover"
          blurRadius={2}
          source={{uri: data.poster_path}}
        />
        <LinearGradient
          colors={['#13131310', '#131313', '#131313']}
          style={style.linearGradient}
        />
        <View style={style.containerChild}>
          <Text style={[style.title]}>{data.title}</Text>
          <Text style={[style.titleChild, {color: 'white'}]}>
            {data.tagline}
          </Text>
          <Text style={[style.titleChild, {color: '#00ab66'}]}>
            {data.status}
          </Text>
        </View>
        <View style={[style.space]}></View>
      </View>
      <View style={[style.bannerDetail]}>
        <Text style={[style.detailText, {color: '#bfbfbf'}]}>
          {data.release_date}  |  {data.vote_average} 
          <Icon name="star" size={15} color="yellow" />
            |  {data.runtime} minutes
        </Text>
      </View>
    </>
  );
};
const style = StyleSheet.create({
  container: {
    position: 'relative',
    width: screen.width,
    alignItems: 'center',
  },
  bannerDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailText: {fontSize: 15},
  containerChild: {
    backgroundColor: '#2c2c2cca',
    position: 'absolute',
    width: screen.width * 0.9,
    height: screen.width * 0.3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    bottom: 30,
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
    height: screen.width * 0.1,
  },
  containerChildTitle: {
    flexDirection: 'row',
  },
  linearGradient: {
    position: 'absolute',
    flex: 1,
    bottom: 10,
    width: screen.width,
    height: 200,
  },
});
export default Banner;
