import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
const screen = Dimensions.get('screen');
const ListMovie = ({props}) => {
  return (
    <View style={[style.container]}>
      <Text style={[style.text]}>Last Upload</Text>
      {props.data.map((data, index) => {
        return (
          <View key={index} style={[style.containerChild]}>
            <TouchableOpacity
              style={[style.poster]}
              onPress={() => {
                props.navigation.navigate('Details', {id: data.id});
              }}>
              <Image
                style={[style.img]}
                source={{uri: `${data.poster_path}`}}
              />
            </TouchableOpacity>
            <View style={[style.header]}>
              <View style={{alignItems: 'center'}}>
                <Text style={[style.textTitle, {fontSize: 20}]}>
                  {data.title}
                </Text>
                <Text style={[style.textTitle]}>{data.release_date}</Text>
                <Text style={[style.textTitle]}>
                  {data.vote_average}  
                  <Icon name="star" size={15} color="yellow" />
                </Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity
                  style={[style.button]}
                  onPress={() => {
                    props.navigation.navigate('Details', {id: data.id});
                  }}>
                  <Text style={[style.textTitle]}>Show More</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};
const style = StyleSheet.create({
  header: {
    flex: 1,
    padding: 10,
  },
  container: {
    marginTop: 10,
    padding: 10,
    width: '100%',
  },
  containerChild: {
    backgroundColor: '#1c1c1c',
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  img: {
    width: screen.width * 0.4,
    height: screen.width * 0.4,
  },
  poster: {
    width: screen.width * 0.4,
    overflow: 'hidden',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 15,
    backgroundColor: '#ff002d',
    padding: 8,
    borderRadius: 10,
  },
});
export default ListMovie;
