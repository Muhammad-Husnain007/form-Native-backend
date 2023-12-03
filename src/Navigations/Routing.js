import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../LoginSignup/Signup';
import Signin from '../LoginSignup/Signin';

const Stack = createNativeStackNavigator();

const Routing = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routing;
