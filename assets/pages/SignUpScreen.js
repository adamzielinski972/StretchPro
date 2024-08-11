// screens/SignUp.js
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Auth } from 'aws-amplify';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const RPW = (percentage) => {
  return (percentage / 100) * screenWidth;
}

const RPH = (percentage) => {
  return (percentage / 100) * screenHeight;
}

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const scrollViewRef = useRef();

  const handleSignUp = async () => {
    try {
      await Auth.signUp({username: email, password, attributes: { email } });
      navigation.navigate('ConfirmSignUp', { email });
    } catch (error) {
      setError(error.message);
    }
  };

  const goBack = async () => {
    try {
      navigation.navigate('LogIn');
    } catch (error) {
      console.log('Error navigating: ', error);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <ScrollView ref={scrollViewRef} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.backButtonContainer}>
              <TouchableOpacity style={styles.backButton} onPress={goBack}>
                <Image style={styles.backImage} source={require('./images/back.png')}/>
              </TouchableOpacity>
              <Image style={styles.logoImage} source={require('./images/StretchPro-Logo.png')}/>
            </View>
            <Image style={styles.backgroundImage} source={require('./images/SignUp-Background.png')}/>
            <View>
              <Text style={{fontSize: 16, color: '#9e9e9e', fontWeight: '600', marginTop: RPH(2)}}>SIGN UP</Text>
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
              {error ? <Text style={styles.error}>{error}</Text> : null}
              <View style={{width: '100%', alignItems: 'center'}}>
                <TouchableOpacity style={styles.buttons} onPress={handleSignUp}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
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
    padding: 16 
  },
  backButtonContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  backButton: {
    backgroundColor: 'grey',
    width: RPW(12),
    left: RPW(5),
    height: RPW(12),
    borderRadius: 75,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImage: {
    width: '40%',
    height: '40%',
  },
  logoImage: {
    width: RPH(20),
    height: RPH(10),
    resizeMode: 'contain',
    position: 'absolute',
    right: RPW(0),
    top: RPH(-1),
  },
  backgroundImage: {
    width: '100%',
    height: RPH(50),
    resizeMode: 'contain'
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
