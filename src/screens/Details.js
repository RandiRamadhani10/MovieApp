import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Alert,
  RefreshControl,
} from 'react-native';
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
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
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
      {errorMessage && Alert.alert('error', errorMessage)}
      <View
        style={{
          flex: 1,
          backgroundColor: '#131313',
          position: 'relative',
        }}>
        <Headerdetail props={{navigation: navigation, data: data}} />
        {!loading ? (
          <ScrollView
            style={{flex: 1}}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
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
