// screens/Login.js
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Auth } from 'aws-amplify';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const RPW = (percentage) => {
  return (percentage / 100) * screenWidth;
}

const RPH = (percentage) => {
  return (percentage / 100) * screenHeight;
}

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const scrollViewRef = useRef();

  const handleLogin = async () => {
    try {
      await Auth.signIn(email, password);
      navigation.navigate('Home');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      navigation.navigate('SignUp');
    } catch (e) {
      console.error(e);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      // Reset the error when the screen is focused
      setError('');
      return () => {};
    }, [])
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <ScrollView ref={scrollViewRef} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: RPH(5)}}>
              <View style={styles.stretchImageContainer}>
                <Image style={styles.stretchImage} source={require('./images/Upward-Dog.png')}/>
              </View>
              <View style={styles.logoImageContainer}>
                <Image style={styles.logoImage} source={require('./images/StretchPro-Logo.png')}/>
              </View>
            </View>
            <Text style={{fontSize: 16, color: '#9e9e9e', fontWeight: '600', marginTop: RPH(2)}}>LOG IN</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="EMAIL"
                value={email}
                onChangeText={setEmail}
                onFocus={() => scrollViewRef.current.scrollTo({ y: 100, animated: true })}
              />
              <TextInput
                style={styles.input}
                placeholder="PASSWORD"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
                onFocus={() => scrollViewRef.current.scrollTo({ y: 150, animated: true })}
              />
            </View>
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity style={styles.buttons} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttons} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16,
  },
  stretchImageContainer: {
    width: RPH(40),
    height: RPH(40),
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stretchImage: {
    width: RPH(40),
    height: RPH(40),
    borderRadius: 200,
  },
  logoImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RPH(3)
  },
  logoImage: {
    height: RPH(10),
    width: RPH(35)
  },
  input: { 
    borderWidth: 2, 
    borderColor: '#9e9e9e',
    padding: 10, 
    marginVertical: RPH(1), 
    borderRadius: 15,
    color: '#9e9e9e',
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
  buttons: {
    backgroundColor: '#9e9e9e',
    justifyContent: 'center',
    alignItems: 'center',
    height: RPH(5),
    borderRadius: 20,
    marginTop: RPH(2),
    width: RPW(80)
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }, 
});
