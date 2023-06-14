
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import MobileLogin from './src/screens/MobileLogin';
import Verification from './src/screens/Verification';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

        {/* <Stack.Screen name="MobileLogin" component={MobileLogin} /> */}
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Verification" component={Verification} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;