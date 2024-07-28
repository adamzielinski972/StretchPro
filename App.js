// App.js
import * as React from 'react';
import { useState, useEffect , } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from './assets/pages/SignUpScreen';
import LogInScreen from './assets/pages/LogInScreen';
import HomeScreen from './assets/pages/HomeScreen';
import ConfirmSignUpScreen from './assets/pages/ConfirmSignUpScreen';
import SettingsScreen from './assets/pages/SettingsScreen';
import HipsOptionsScreen from './assets/pages/HipsOptionsScreen';
import Hips1Screen from './assets/pages/Hips1Screen';
import Hips1StretchScreen from './assets/pages/Hips1StretchScreen';

import { Amplify } from 'aws-amplify';
import amplifyconfig from './src/amplifyconfiguration.json';
import { Auth } from 'aws-amplify';
Amplify.configure(amplifyconfig);


const Stack = createStackNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await Auth.currentAuthenticatedUser();
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const MainStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LogIn" component={LogInScreen} options={{headerShown : false}}/>
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown : false}}/>
      <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUpScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="HipsOptions" component={HipsOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips1" component={Hips1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips1Stretch" component={Hips1StretchScreen} options={{headerShown : false}}/>
    </Stack.Navigator>
  );

  const AuthStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LogInScreen} options={{headerShown : false}}/>
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown : false}}/>
      <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUpScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown : false}}/>
    </Stack.Navigator>
  );
  

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
