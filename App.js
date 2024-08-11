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
import Hips2Screen from './assets/pages/Hips2Screen';
import Hips2StretchScreen from './assets/pages/Hips2StretchScreen';
import Hips3Screen from './assets/pages/Hips3Screen';
import Hips3StretchScreen from './assets/pages/Hips3StretchScreen';
import Hips4Screen from './assets/pages/Hips4Screen';
import Hips4StretchScreen from './assets/pages/Hips4StretchScreen';
import Hips5Screen from './assets/pages/Hips5Screen';
import Hips5StretchScreen from './assets/pages/Hips5StretchScreen';
import Hips6Screen from './assets/pages/Hips6Screen';
import Hips6StretchScreen from './assets/pages/Hips6StretchScreen';
import Hips7Screen from './assets/pages/Hips7Screen';
import Hips7StretchScreen from './assets/pages/Hips7StretchScreen';
import LowerBackOptionsScreen from './assets/pages/LowerBackOptionsScreen';
import LowerBack1Screen from './assets/pages/LowerBack1Screen';
import LowerBack2Screen from './assets/pages/LowerBack2Screen';
import LowerBack3Screen from './assets/pages/LowerBack3Screen';
import LowerBack4Screen from './assets/pages/LowerBack4Screen';
import LowerBack5Screen from './assets/pages/LowerBack5Screen';
import LowerBack6Screen from './assets/pages/LowerBack6Screen';
import LowerBack1StretchScreen from './assets/pages/LowerBack1StretchScreen';
import LowerBack2StretchScreen from './assets/pages/LowerBack2StretchScreen';
import LowerBack3StretchScreen from './assets/pages/LowerBack3StretchScreen';
import LowerBack4StretchScreen from './assets/pages/LowerBack4StretchScreen';
import LowerBack5StretchScreen from './assets/pages/LowerBack5StretchScreen';
import LowerBack6StretchScreen from './assets/pages/LowerBack6StretchScreen';
import HamstringsOptionsScreen from './assets/pages/HamstringsOptionsScreen';
import Hamstrings1Screen from './assets/pages/Hamstrings1Screen';
import Hamstrings1StretchScreen from './assets/pages/Hamstrings1StretchScreen';
import Hamstrings2Screen from './assets/pages/Hamstrings2Screen';
import Hamstrings2StretchScreen from './assets/pages/Hamstrings2StretchScreen';
import Hamstrings3Screen from './assets/pages/Hamstrings3Screen';
import Hamstrings3StretchScreen from './assets/pages/Hamstrings3StretchScreen';
import QuadricepsOptionsScreen from './assets/pages/QuadricepsOptionsScreen';
import Quadriceps1Screen from './assets/pages/Quadriceps1Screen';
import Quadriceps1StretchScreen from './assets/pages/Quadriceps1StretchScreen';
import Quadriceps2Screen from './assets/pages/Quadriceps2Screen';
import Quadriceps2StretchScreen from './assets/pages/Quadriceps2StretchScreen';
import Quadriceps3Screen from './assets/pages/Quadriceps3Screen';
import Quadriceps3StretchScreen from './assets/pages/Quadriceps3StretchScreen';
import UpperBodyOptionsScreen from './assets/pages/UpperBodyOptionsScreen';
import UpperBody1Screen from './assets/pages/UpperBody1Screen';
import UpperBody1StretchScreen from './assets/pages/UpperBody1StretchScreen';
import UpperBody2Screen from './assets/pages/UpperBody2Screen';
import UpperBody2StretchScreen from './assets/pages/UpperBody2StretchScreen';
import UpperBody3Screen from './assets/pages/UpperBody3Screen';
import UpperBody3StretchScreen from './assets/pages/UpperBody3StretchScreen';
import ShouldersOptionsScreen from './assets/pages/ShouldersOptionsScreen';
import Shoulders1Screen from './assets/pages/Shoulders1Screen';
import Shoulders1StretchScreen from './assets/pages/Shoulders1StretchScreen';
import Shoulders2Screen from './assets/pages/Shoulders2Screen';
import Shoulders2StretchScreen from './assets/pages/Shoulders2StretchScreen';
import Shoulders3Screen from './assets/pages/Shoulders3Screen';
import Shoulders3StretchScreen from './assets/pages/Shoulders3StretchScreen';
import NeckOptionsScreen from './assets/pages/NeckOptionsScreen';
import Neck1Screen from './assets/pages/Neck1Screen';
import Neck1StretchScreen from './assets/pages/Neck1StretchScreen';
import Neck2Screen from './assets/pages/Neck2Screen';
import Neck2StretchScreen from './assets/pages/Neck2StretchScreen';
import Neck3Screen from './assets/pages/Neck3Screen';
import Neck3StretchScreen from './assets/pages/Neck3StretchScreen';
import Neck4Screen from './assets/pages/Neck4Screen';
import Neck4StretchScreen from './assets/pages/Neck4StretchScreen';
import Neck5Screen from './assets/pages/Neck5Screen';
import Neck5StretchScreen from './assets/pages/Neck5StretchScreen';
import PostureOptionsScreen from './assets/pages/PostureOptionsScreen';
import Posture1Screen from './assets/pages/Posture1Screen';
import Posture1StretchScreen from './assets/pages/Posture1StretchScreen';
import Posture2Screen from './assets/pages/Posture2Screen';
import Posture2StretchScreen from './assets/pages/Posture2StretchScreen';
import Posture3Screen from './assets/pages/Posture3Screen';
import Posture3StretchScreen from './assets/pages/Posture3StretchScreen';
import Posture4Screen from './assets/pages/Posture4Screen';
import Posture4StretchScreen from './assets/pages/Posture4StretchScreen';
import ChestOptionsScreen from './assets/pages/ChestOptionsScreen';
import Chest1Screen from './assets/pages/Chest1Screen';
import Chest1StretchScreen from './assets/pages/Chest1StretchScreen';
import Chest2Screen from './assets/pages/Chest2Screen';
import Chest2StretchScreen from './assets/pages/Chest2StretchScreen';
import Chest3Screen from './assets/pages/Chest3Screen';
import Chest3StretchScreen from './assets/pages/Chest3StretchScreen';
import LowerBodyOptionsScreen from './assets/pages/LowerBodyOptionsScreen';
import LowerBody1Screen from './assets/pages/LowerBody1Screen';
import LowerBody1StretchScreen from './assets/pages/LowerBody1StretchScreen';
import LowerBody2Screen from './assets/pages/LowerBody2Screen';
import LowerBody2StretchScreen from './assets/pages/LowerBody2StretchScreen';
import LowerBody3Screen from './assets/pages/LowerBody3Screen';
import LowerBody3StretchScreen from './assets/pages/LowerBody3StretchScreen';
import WakeUpScreen from './assets/pages/WakeUpScreen';
import WakeUpStretchScreen from './assets/pages/WakeUpStretchScreen';
import FullBodyScreen from './assets/pages/FullBodyScreen';
import FullBodyStretchScreen from './assets/pages/FullBodyStretchScreen';
import SleepScreen from './assets/pages/SleepScreen';
import SleepStretchScreen from './assets/pages/SleepStretchScreen';

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
      <Stack.Screen name="Hips2" component={Hips2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips2Stretch" component={Hips2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips3" component={Hips3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips3Stretch" component={Hips3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips4" component={Hips4Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips4Stretch" component={Hips4StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips5" component={Hips5Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips5Stretch" component={Hips5StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips6" component={Hips6Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips6Stretch" component={Hips6StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips7" component={Hips7Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips7Stretch" component={Hips7StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBackOptions" component={LowerBackOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack1" component={LowerBack1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack2" component={LowerBack2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack3" component={LowerBack3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack4" component={LowerBack4Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack5" component={LowerBack5Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack6" component={LowerBack6Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack1Stretch" component={LowerBack1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack2Stretch" component={LowerBack2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack3Stretch" component={LowerBack3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack4Stretch" component={LowerBack4StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack5Stretch" component={LowerBack5StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack6Stretch" component={LowerBack6StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="HamstringsOptions" component={HamstringsOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hamstrings1" component={Hamstrings1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hamstrings1Stretch" component={Hamstrings1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hamstrings2" component={Hamstrings2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hamstrings2Stretch" component={Hamstrings2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hamstrings3" component={Hamstrings3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hamstrings3Stretch" component={Hamstrings3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="QuadricepsOptions" component={QuadricepsOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Quadriceps1" component={Quadriceps1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Quadriceps1Stretch" component={Quadriceps1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Quadriceps2" component={Quadriceps2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Quadriceps2Stretch" component={Quadriceps2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Quadriceps3" component={Quadriceps3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Quadriceps3Stretch" component={Quadriceps3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="UpperBodyOptions" component={UpperBodyOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="UpperBody1" component={UpperBody1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="UpperBody1Stretch" component={UpperBody1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="UpperBody2" component={UpperBody2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="UpperBody2Stretch" component={UpperBody2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="UpperBody3" component={UpperBody3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="UpperBody3Stretch" component={UpperBody3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="ShouldersOptions" component={ShouldersOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Shoulders1" component={Shoulders1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Shoulders1Stretch" component={Shoulders1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Shoulders2" component={Shoulders2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Shoulders2Stretch" component={Shoulders2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Shoulders3" component={Shoulders3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Shoulders3Stretch" component={Shoulders3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="NeckOptions" component={NeckOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck1" component={Neck1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck1Stretch" component={Neck1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck2" component={Neck2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck2Stretch" component={Neck2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck3" component={Neck3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck3Stretch" component={Neck3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck4" component={Neck4Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck4Stretch" component={Neck4StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck5" component={Neck5Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck5Stretch" component={Neck5StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="PostureOptions" component={PostureOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Posture1" component={Posture1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Posture1Stretch" component={Posture1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Posture2" component={Posture2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Posture2Stretch" component={Posture2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Posture3" component={Posture3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Posture3Stretch" component={Posture3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Posture4" component={Posture4Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Posture4Stretch" component={Posture4StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="ChestOptions" component={ChestOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Chest1" component={Chest1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Chest1Stretch" component={Chest1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Chest2" component={Chest2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Chest2Stretch" component={Chest2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Chest3" component={Chest3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Chest3Stretch" component={Chest3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBodyOptions" component={LowerBodyOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBody1" component={LowerBody1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBody1Stretch" component={LowerBody1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBody2" component={LowerBody2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBody2Stretch" component={LowerBody2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBody3" component={LowerBody3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBody3Stretch" component={LowerBody3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="WakeUp" component={WakeUpScreen} options={{headerShown : false}}/>
      <Stack.Screen name="WakeUpStretch" component={WakeUpStretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="FullBody" component={FullBodyScreen} options={{headerShown : false}}/>
      <Stack.Screen name="FullBodyStretch" component={FullBodyStretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Sleep" component={SleepScreen} options={{headerShown : false}}/>
      <Stack.Screen name="SleepStretch" component={SleepStretchScreen} options={{headerShown : false}}/>
    </Stack.Navigator>
  );

  const AuthStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LogInScreen} options={{headerShown : false}}/>
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown : false}}/>
      <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUpScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="HipsOptions" component={HipsOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips1" component={Hips1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips1Stretch" component={Hips1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips2" component={Hips2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips2Stretch" component={Hips2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips3" component={Hips3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips3Stretch" component={Hips3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips4" component={Hips4Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips4Stretch" component={Hips4StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips5" component={Hips5Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips5Stretch" component={Hips5StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips6" component={Hips6Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips6Stretch" component={Hips6StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips7" component={Hips7Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hips7Stretch" component={Hips7StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBackOptions" component={LowerBackOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack1" component={LowerBack1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack2" component={LowerBack2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack3" component={LowerBack3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack4" component={LowerBack4Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack5" component={LowerBack5Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack6" component={LowerBack6Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack1Stretch" component={LowerBack1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack2Stretch" component={LowerBack3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack3Stretch" component={LowerBack4StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack4Stretch" component={LowerBack5StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack5Stretch" component={LowerBack1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBack6Stretch" component={LowerBack6StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="HamstringsOptions" component={HamstringsOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hamstrings1" component={Hamstrings1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hamstrings1Stretch" component={Hamstrings1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hamstrings2" component={Hamstrings2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hamstrings2Stretch" component={Hamstrings2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Hamstrings3" component={Hamstrings3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Hamstrings3Stretch" component={Hamstrings3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="QuadricepsOptions" component={QuadricepsOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Quadriceps1" component={Quadriceps1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Quadriceps1Stretch" component={Quadriceps1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Quadriceps2" component={Quadriceps2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Quadriceps2Stretch" component={Quadriceps2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Quadriceps3" component={Quadriceps3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Quadriceps3Stretch" component={Quadriceps3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="UpperBodyOptions" component={UpperBodyOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="UpperBody1" component={UpperBody1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="UpperBody1Stretch" component={UpperBody1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="UpperBody2" component={UpperBody2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="UpperBody2Stretch" component={UpperBody2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="UpperBody3" component={UpperBody3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="UpperBody3Stretch" component={UpperBody3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="ShouldersOptions" component={ShouldersOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Shoulders1" component={Shoulders1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Shoulders1Stretch" component={Shoulders1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Shoulders2" component={Shoulders2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Shoulders2Stretch" component={Shoulders2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Shoulders3" component={Shoulders3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Shoulders3Stretch" component={Shoulders3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="NeckOptions" component={NeckOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck1" component={Neck1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck1Stretch" component={Neck1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck2" component={Neck2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck2Stretch" component={Neck2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck3" component={Neck3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck3Stretch" component={Neck3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck4" component={Neck4Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck4Stretch" component={Neck4StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck5" component={Neck5Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Neck5Stretch" component={Neck5StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="PostureOptions" component={PostureOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Posture1" component={Posture1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Posture1Stretch" component={Posture1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Posture2" component={Posture2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Posture2Stretch" component={Posture2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Posture3" component={Posture3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Posture3Stretch" component={Posture3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Posture4" component={Posture4Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Posture4Stretch" component={Posture4StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="ChestOptions" component={ChestOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Chest1" component={Chest1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Chest1Stretch" component={Chest1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Chest2" component={Chest2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Chest2Stretch" component={Chest2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Chest3" component={Chest3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="Chest3Stretch" component={Chest3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBodyOptions" component={LowerBodyOptionsScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBody1" component={LowerBody1Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBody1Stretch" component={LowerBody1StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBody2" component={LowerBody2Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBody2Stretch" component={LowerBody2StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBody3" component={LowerBody3Screen} options={{headerShown : false}}/>
      <Stack.Screen name="LowerBody3Stretch" component={LowerBody3StretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="WakeUp" component={WakeUpScreen} options={{headerShown : false}}/>
      <Stack.Screen name="WakeUpStretch" component={WakeUpStretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="FullBody" component={FullBodyScreen} options={{headerShown : false}}/>
      <Stack.Screen name="FullBodyStretch" component={FullBodyStretchScreen} options={{headerShown : false}}/>
      <Stack.Screen name="Sleep" component={SleepScreen} options={{headerShown : false}}/>
      <Stack.Screen name="SleepStretch" component={SleepStretchScreen} options={{headerShown : false}}/>
    </Stack.Navigator>
  );
  

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
