/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Verification from './screens/Verification';
import OtpVerification from './screens/OtpVerification';
import Home from './screens/Home';
import RestaurantDetails from './screens/RestaurantDetails';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="verification"
          component={Verification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="otpverification"
          component={OtpVerification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="restaurantDetails"
          component={RestaurantDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
