// screens/Login.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet , SafeAreaView , Dimensions , TouchableOpacity, Image} from 'react-native';
import { Auth } from 'aws-amplify';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const RPW = (percentage) => {
  return (percentage / 100) * screenWidth;
}

const RPH = (percentage) => {
  return (percentage / 100) * screenHeight;
}

export default function SettingsScreen({ navigation }) {

  const signOut = async () => {
    try {
      await Auth.signOut();
      navigation.reset({
        index: 0,
        routes: [{ name: 'LogIn' }],
      });
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  };

  const goHome = async () => {
    try {
      navigation.navigate('Home');
    } catch (error) {
      console.log('Error navigating: ', error);
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.titleText}>Settings</Text>
      </View>
      <TouchableOpacity style={styles.signOutButton} onPress={signOut} >
        <Image style={styles.signOutButtonImage} source={require('./images/sign-out.png')}/>
        <Text style={styles.signOutButtonText}>SIGN OUT</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.homeButton} onPress={goHome}>
          <Image style={styles.homeButtonImage} source={require('./images/house.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButton} >
        <Image style={styles.homeButtonImage} source={require('./images/setting.png')}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: RPW(100),
    height: RPH(10),
    justifyContent: 'center',
    borderBottomColor: '#c3c7c8',
    borderBottomWidth: 0.5,
    backgroundColor: '#fefefe',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  titleText: {
    color: "#9e9e9e",
    fontSize: 30,
    fontWeight: '500',
    marginLeft: RPW(10),
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: RPW(5),
    marginTop: RPW(5)
  },
  signOutButtonImage: {
    width: RPH(5),
    height: RPH(5),
  },
  signOutButtonText: {
    color: '#9e9e9e',
    fontSize: 16,
    marginLeft: RPW(2),
    fontWeight: 'bold'
  },
  footer: {
    width: RPW(100),
    height: RPH(7),
    borderTopColor: '#c3c7c8',
    borderTopWidth: 0.5,
    backgroundColor: '#fefefe',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    top: RPH(93),
  },
  homeButton: {
    width: RPW(20),
    left: RPW(15),
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeButtonImage: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain'
  },
  settingsButton: {
    width: RPW(20),
    left: RPW(65),
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
