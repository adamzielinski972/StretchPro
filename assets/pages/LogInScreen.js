// screens/Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet , Image, Dimensions} from 'react-native';
import { Auth } from 'aws-amplify';

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

  const handleLogin = async () => {
    try {
      await Auth.signIn(email, password);
      navigation.navigate('Home');
    } catch (e) {
      console.error(e);
    }
  };

  const handleSignUp = async () => {
    try {
      navigation.navigate('SignUp');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: RPH(5)}}>
        <View style={styles.stretchImageContainer}>
          <Image style={styles.stretchImage} source={require('./images/Quad-Stretch.png')}/>
        </View>
        <View style={styles.logoImageContainer}>
          <Image style={styles.logoImage} source={require('./images/StretchPro-Logo.png')}/>
        </View>
      </View>
      <Text style={{fontSize: 16, color: '#9e9e9e', fontWeight: '600',}}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="EMAIL"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="PASSWORD"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
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
    backgroundColor: '#b12f05',
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stretchImage: {
    width: RPH(40),
    height: RPH(40),
    marginLeft: RPW(8)
  },
  input: { 
    borderWidth: 1, 
    padding: 8, 
    marginVertical: 8 
  },
});
