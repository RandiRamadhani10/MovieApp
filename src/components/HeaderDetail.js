import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
const screen = Dimensions.get('screen');
import Icon from 'react-native-vector-icons/FontAwesome5';
import Share from 'react-native-share';
const Headerdetail = ({props}) => {
  const [active, setActive] = useState(false);
  const shareLink = link => {
    const shareOptions = {
      title: 'Share via',
      message: 'some message',
      url: link,
    };

    Share.open(shareOptions)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={style.back}
        onPress={() => {
          props.navigation.navigate('Home');
        }}>
        <Icon name="arrow-left" size={20} color="white" />
      </TouchableOpacity>
      <View style={style.btnCon}>
        <TouchableOpacity
          style={style.btn}
          onPress={() => {
            active ? setActive(false) : setActive(true);
          }}>
          <Icon
            name="heart"
            size={17}
            color={active ? '#ff002d' : 'white'}
            solid
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn}
          onPress={() => {
            shareLink(props.data.homepage);
          }}>
          <Icon name="share" size={17} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    width: screen.width,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 99,
  },
  back: {
    padding: 10,
    backgroundColor: '#131313',
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 7,
    backgroundColor: '#131313',
    borderRadius: 100,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  btnCon: {
    width: screen.width * 0.3,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
export default Headerdetail;
