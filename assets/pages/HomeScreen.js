// screens/Home.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button , TextInput , SafeAreaView , Dimensions , ScrollView} from 'react-native';
import { Auth , API, graphqlOperation } from 'aws-amplify';
import { createUser , updateUser } from '../../src/graphql/mutations';
import { getUser } from '../../src/graphql/queries';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const RPW = (percentage) => {
  return (percentage / 100) * screenWidth;
}

const RPH = (percentage) => {
  return (percentage / 100) * screenHeight;
}

export default function HomeScreen({ navigation }) {
  const [number, setNumber] = useState('');
  const [userId, setUserId] = useState(null);
  

  /*useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const { username } = user;
        const userData = await API.graphql(graphqlOperation(getUser, { id: username }));
        console.log(userData, " is data");

        if (userData.data.getUser) {
          setNumber(userData.data.getUser.number?.toString() || '');
          setUserId(userData.data.getUser.id);
        } else {
          const newUser = await API.graphql(graphqlOperation(createUser, {
            input: { id: username, username }
          }));
          setUserId(newUser.data.createUser.id);
        }
      } catch (error) {
        console.log('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []); */

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const { username } = user;
        const userData = await API.graphql(graphqlOperation(getUser, { id: username }));
        //console.log(userData, " is data");

        await API.graphql(graphqlOperation(updateUser, {
          input: { id: username, number: 10 }
        }));
        //alert('Number saved successfully!');

        const userData2 = await API.graphql(graphqlOperation(getUser, { id: username }));
        //console.log(userData2, " is data2");

        if (userData.data.getUser) {
          //console.log("There is data ",userData.data.getUser);
        }

      } catch (error) {
        console.log('Error fetching user data:', error);
      } 
    };

    fetchUserData();
  }, []);

  const handleSave = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const { username } = user;
      await API.graphql(graphqlOperation(updateUser, {
        input: { id: username, number: parseInt(number, 10) }
      }));
      alert('Number saved successfully!');
    } catch (error) {
      console.log('Error saving number:', error);
      alert('Error saving number.');
    }
  };

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
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <Text></Text>
        </View>
        <View style={styles.suggestions}>
          <Text></Text>
        </View>
        <View style={styles.browseArea}>
          <Text></Text>
        </View>
        <View style={styles.container}>
          <Text>Welcome Home!</Text>
          <TextInput
            style={styles.input}
            value={number}
            onChangeText={setNumber}
            keyboardType="numeric"
          />
          <Button title="Save Number" onPress={handleSave} />
          <Button title="Sign Out" onPress={signOut} />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.homeButton}>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButton}>
          <Text></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: RPW(100),
    height: RPH(10),
    backgroundColor: "red",
  },
  suggestions: {
    width: RPW(100),
    height: RPH(55),
    backgroundColor: "blue",
  },
  browseArea: {
    width: RPW(100),
    height: RPH(35),
    backgroundColor: "green",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  },
  footer: {
    width: RPW(100),
    height: RPH(7),
    backgroundColor: "yellow",
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row'
  },
  homeButton: {
    backgroundColor: 'grey',
    width: RPW(20),
    left: RPW(15),
    height: '100%',
    position: 'absolute'
  },
  settingsButton: {
    backgroundColor: 'grey',
    width: RPW(20),
    left: RPW(65),
    height: '100%',
    position: 'absolute'
  },
});
