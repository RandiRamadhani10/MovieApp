import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
const screen = Dimensions.get('screen');
const Actor = ({props}) => {
  return (
    <View style={[style.container]}>
      <Text
        style={{
          fontSize: 25,
          color: '#bfbfbf',
          fontWeight: 'bold',
          marginBottom: 10,
        }}>
        Actor / Artist
      </Text>
      <ScrollView style={{flex: 1}} horizontal={true}>
        {props.data.credits.cast.map((data, index) => {
          return (
            <View key={index} style={style.item}>
              <Image style={style.img} source={{uri: data.profile_path}} />
              <Text style={style.text}>{data.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    width: screen.width,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  item: {
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: screen.width * 0.3,
    height: screen.width * 0.3,
    backgroundColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});
export default Actor;
