// screens/ConfirmSignUpScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Auth } from 'aws-amplify';

const ConfirmSignUpScreen = ({ route, navigation }) => {
  const { email } = route.params;
  const [confirmationCode, setConfirmationCode] = useState('');
  const [error, setError] = useState('');

  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(email, confirmationCode);
      navigation.navigate('LogIn');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Confirmation Code"
        onChangeText={setConfirmationCode}
        value={confirmationCode}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Confirm Sign Up" onPress={confirmSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});

export default ConfirmSignUpScreen;
