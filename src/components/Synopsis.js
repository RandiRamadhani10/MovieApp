import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const screen = Dimensions.get('screen');
const Synopsis = ({props}) => {
  return (
    <View style={[style.container]}>
      <Text style={{fontSize: 25, color: '#bfbfbf', fontWeight: 'bold'}}>
        Synopshis
      </Text>
      <Text style={{fontSize: 13, color: '#bfbfbf', textAlign: 'justify'}}>
        {props.data.overview}
      </Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    width: screen.width,
    padding: 20,
  },
});
export default Synopsis;
