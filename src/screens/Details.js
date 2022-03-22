import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Banner from '../components/Banner';
import CallApi from '../services/CallApi';
const Details = ({route, navigation}) => {
  // const {id} = route.params
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CallApi.getDetailMovies('634649');
        console.log(result);
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
    <View
      style={{
        flex: 1,
        backgroundColor: '#131313',
        position: 'relative',
      }}>
      <ScrollView style={{flex: 1}}>
        <Banner props={{data: data}} />
      </ScrollView>
    </View>
  );
};

export default Details;
