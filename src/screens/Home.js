import React, {useState, useEffect} from 'react';
import {Text, ScrollView, StatusBar, View, Alert} from 'react-native';
import CallApi from '../services/CallApi';
import Header from '../components/Header';
import RecomMovie from '../components/RecomMovie';
import ListMovie from '../components/ListMovie';
import Whenloading from '../components/WhenLoading';
import NetInfo from '@react-native-community/netinfo';
const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [network, setNetwork] = useState(false);

  const checkConnection = NetInfo.addEventListener(state => {
    console.log(state.isConnected);
    return state.isConnected;
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CallApi.getMovies();
        const filterResult = filterData(result.results);
        const networkResult = checkConnection();
        !networkResult && setNetwork(networkResult);
        setFilter(filterResult);
        setData(result.results);
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
      {network && Alert.alert('network error', 'check your connection')}
      <View style={{flex: 1, backgroundColor: '#131313', position: 'relative'}}>
        <Header />
        {!loading ? (
          <ScrollView style={{flex: 1}}>
            <RecomMovie props={{navigation: navigation, filter: filter}} />
            <ListMovie props={{navigation: navigation, data: data}} />
          </ScrollView>
        ) : (
          <Whenloading />
        )}
      </View>
    </>
  );
};
const filterData = Data => {
  const result = [];
  Data.map(data => {
    data.popularity >= 2000 && result.push(data);
  });
  return result;
};
export default Home;
