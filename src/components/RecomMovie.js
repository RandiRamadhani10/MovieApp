import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
const screen = Dimensions.get('screen');
const RecomMovie = ({props}) => {
  console.log(props.filter);
  return (
    <View style={[style.container]}>
      <Text style={[style.text]}>Recomended</Text>
      <ScrollView
        endFillColor="#ff002d"
        horizontal={true}
        indicatorStyle={'white'}>
        {props.filter.map((data, index) => {
          return (
            <TouchableOpacity key={index} style={[style.poster]}>
              <Image
                key={index}
                style={[style.img]}
                source={{uri: `${data.poster_path}`}}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    marginTop: screen.width * 0.17,
    paddingHorizontal: 10,
    width: '100%',
  },
  img: {
    width: screen.width * 0.4,
    height: screen.width * 0.55,
  },
  poster: {
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 20,
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default RecomMovie;
