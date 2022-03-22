/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CallApi from './src/services/CallApi';
import NetInfo from '@react-native-community/netinfo';
import Index from './src/Index';
const res = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  NetInfo.fetch().then(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await CallApi.getMovies();
        // console.log(result.results);
        setData(result.results);
      } catch (error) {
        // console.log(error);
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setData]);

  return (
    <View>
      {loading && <Text>ini loading</Text>}
      {!loading &&
        data?.map(movie => {
          return (
            <>
              <Text key={movie.id}>{movie.popularity}</Text>
            </>
          );
        })}

      {errorMessage && <Text>{errorMessage}</Text>}
    </View>
  );
};
const App = () => {
  return <Index />;
};
export default App;
