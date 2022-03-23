import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet, Alert} from 'react-native';
import Banner from '../components/Banner';
import CallApi from '../services/CallApi';
import Genres from '../components/Genres';
import Synopsis from '../components/Synopsis';
import Actor from '../components/Actor';
import Headerdetail from '../components/HeaderDetail';
import Whenloading from '../components/WhenLoading';
const Details = ({route, navigation}) => {
  const {id} = route.params;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CallApi.getDetailMovies(id);
        setData(result);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setData]);
  return (
    <>
      {errorMessage && Alert.alert(errorMessage)}
      <View
        style={{
          flex: 1,
          backgroundColor: '#131313',
          position: 'relative',
        }}>
        <Headerdetail props={{navigation: navigation, data: data}} />
        {!loading ? (
          <ScrollView style={{flex: 1}}>
            <Banner props={{data: data}} />
            <Genres props={{data: data}} />
            <Synopsis props={{data: data}} />
            <Actor props={{data: data}} />
          </ScrollView>
        ) : (
          <Whenloading />
        )}
      </View>
    </>
  );
};

export default Details;
