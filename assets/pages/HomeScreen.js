// screens/Home.js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Auth } from 'aws-amplify';

export default function HomeScreen({ navigation }) {

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

  return (
    <View style={styles.container}>
      <Text>Welcome Home!</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
