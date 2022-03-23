import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
const screen = Dimensions.get('screen');
const Genres = ({props}) => {
  return (
    <View style={[style.container]}>
      {props.data.genres.map(data => {
        return (
          <View key={data.id} style={[style.genre]}>
            <Text style={{color: 'white'}}>{data.name}</Text>
          </View>
        );
      })}
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginVertical: 20,
    width: screen.width,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  genre: {
    padding: 8,
    backgroundColor: '#2c2c2c',
    borderRadius: 10,
  },
});
export default Genres;
