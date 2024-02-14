/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import '../imagenes/Logo.jpg'



const Drawer = createDrawerNavigator();

import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import OTPScreen from './screens/OTPScreen';
import NameScreen from './screens/NameScreen';
import EmailScreen from './screens/EmailScreen';
import DashboardScreen from './screens/DashboardScreen';

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Splash" component={SplashScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="OTP" component={OTPScreen} />
        <Drawer.Screen name="Name" component={NameScreen} />
        <Drawer.Screen name="Email" component={EmailScreen} />
        <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
