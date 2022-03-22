import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';
const Stack = createNativeStackNavigator();
const Index = () => {
  return (
    <NavigationContainer style={{backgroundColor: '#131313'}}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#131313',
          justifyContent: 'center',
        }}>
        <StatusBar
          animated={true}
          barStyle="light-content"
          backgroundColor="transparent"
          showHideTransition={'fade'}
          translucent={true}
        />
        <Stack.Navigator
          initialRouteName="Details"
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Details"
            component={Details}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Index;
