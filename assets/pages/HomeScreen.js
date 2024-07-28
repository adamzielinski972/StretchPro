// screens/Home.js
import React, { useState, useEffect , useRef} from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, TextInput , Dimensions, Image, Animated, TouchableWithoutFeedback , ScrollView } from 'react-native';
import { Auth , API, graphqlOperation } from 'aws-amplify';
import { createUser , updateUser } from '../../src/graphql/mutations';
import { getUser } from '../../src/graphql/queries';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const RPW = (percentage) => {
  return (percentage / 100) * screenWidth;
}

const RPH = (percentage) => {
  return (percentage / 100) * screenHeight;
}

const CARD_WIDTH = RPH(38); // Width of each card
const SPACING_FOR_CARD_INSET = (screenWidth - CARD_WIDTH) / 3.1; // Space to inset cards

const Card = ({length, title, image, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.suggestionsCard}>
        <Text style={styles.suggestionsLength}>{length}</Text>
        <Text style={styles.suggestionsTitle}>{title}</Text>
        <Image source={image} style={styles.suggestionsImage} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const SuggestionScroll = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleSnap = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / CARD_WIDTH);
    scrollViewRef.current.scrollTo({ x: index * CARD_WIDTH, animated: true });
  };

  const scrollToCard = (index) => {
    scrollViewRef.current.scrollTo({ x: index * CARD_WIDTH, animated: true });
  };

  return (
    <View style={styles.suggestionsCardContainerStyle}>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.suggestionsScrollViewContainer}
        snapToInterval={CARD_WIDTH}
        decelerationRate="fast"
        onScroll={handleScroll}
        onMomentumScrollEnd={handleSnap}
        scrollEventThrottle={16}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET
        }}
        contentOffset={{ x: -SPACING_FOR_CARD_INSET }}
      >
        <Card length="5 MINUTES" title="Wake Up" image={require('./images/cat.jpg')} onPress={() => scrollToCard(0)} />
        <Card length="15 MINUTES" title="Full Body" image={require('./images/cat.jpg')} onPress={() => scrollToCard(1)} />
        <Card length="10 MINUTES"title="Sleep" image={require('./images/cat.jpg')} onPress={() => scrollToCard(2)} />
      </Animated.ScrollView>
    </View>
  );
};

const BBAScroll = () => {
  const navigation = useNavigation();

  const cards = [
    { id: 1, image: require('./images/Butterfly.png'), text: 'Hips', screen: 'HipsOptions' },
    { id: 2, image: require('./images/Butterfly.png'), text: 'Lower Back' , screen: 'HipsOptions'},
    { id: 3, image: require('./images/Butterfly.png'), text: 'Hamstrings' , screen: 'HipsOptions'},
    { id: 4, image: require('./images/Butterfly.png'), text: 'Quadriceps' , screen: 'HipsOptions'},
    { id: 5, image: require('./images/Butterfly.png'), text: 'Upper Body' , screen: 'HipsOptions'},
    { id: 6, image: require('./images/Butterfly.png'), text: 'Shoulders' , screen: 'HipsOptions'},
    { id: 7, image: require('./images/Butterfly.png'), text: 'Neck' , screen: 'HipsOptions'},
    { id: 8, image: require('./images/Butterfly.png'), text: 'Posture' , screen: 'HipsOptions'},
    { id: 9, image: require('./images/Butterfly.png'), text: 'Chest' , screen: 'HipsOptions'},
    { id: 10, image: require('./images/Butterfly.png'), text: 'Lower Body' , screen: 'HipsOptions'},
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.BBAscrollContainer}>
        <View style={styles.BBArow}>
          {cards.slice(0, 5).map(card => (
            <TouchableOpacity key={card.id} style={styles.BBAcard} onPress={() => navigation.navigate(card.screen)}>
                <View style={styles.BBAimageContainer}>
                  <Image source={card.image} style={styles.BBAimage} />
                </View>
                <Text style={styles.BBAtext}>{card.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.BBArow}>
          {cards.slice(5, 10).map(card => (
            <TouchableOpacity key={card.id} style={styles.BBAcard} onPress={() => navigation.navigate(card.screen)}>
              <View style={styles.BBAimageContainer}>
                <Image source={card.image} style={styles.BBAimage} />
              </View>
              <Text style={styles.BBAtext}>{card.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default function HomeScreen({ navigation }) {
  const [number, setNumber] = useState('');
  const [userId, setUserId] = useState(null);
  const [currentDate, setCurrentDate] = useState('');
  const [currentWeekday, setCurrentWeekday] = useState('');

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
        //console.log(username);
        const userData = await API.graphql(graphqlOperation(getUser, { id: username }));
        //console.log(userData, " is data");

        await API.graphql(graphqlOperation(updateUser, {
          input: { id: username, number: 10 }
        }));
        //alert('Number saved successfully!');

        //const userData2 = await API.graphql(graphqlOperation(getUser, { id: username }));
        //console.log(userData2, " is data2");

        //if (userData.data.getUser) {
          //console.log("There is data ",userData.data.getUser);
        //}

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

  const goSettings = async () => {
    try {
      navigation.navigate('Settings');
    } catch (error) {
      console.log('Error navigating: ', error);
    }
  }

  useEffect(() => {
    const getCurrentDate = () => {
      const date = new Date();
      const options = { month: 'long', day: 'numeric' };
      setCurrentDate(date.toLocaleDateString('en-US', options));
      setCurrentWeekday(date.toLocaleDateString('en-US', { weekday: 'long' }));
    };

    getCurrentDate();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <Image style={styles.logoImage} source={require('./images/StretchPro-Logo.png')}/>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{currentDate.toUpperCase()}</Text>
            <Text style={styles.weekdayText}>{currentWeekday}</Text>
          </View>
        </View>
        <View style={styles.suggestions}>
          <SuggestionScroll/>
        </View>
        <View style={styles.browseArea}>
          <Text style={styles.BBAtitle}>BROWSE BY AREA</Text>
          <BBAScroll/>
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
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.homeButton}>
          <Image style={styles.homeButtonImage} source={require('./images/house.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButton} onPress={goSettings}>
        <Image style={styles.homeButtonImage} source={require('./images/setting.png')}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: RPW(100),
    height: RPH(13),
    flexDirection: 'row',
    borderBottomColor: '#c3c7c8',
    borderBottomWidth: 0.5,
    backgroundColor: '#fefefe',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  logoImage: {
    width: RPW(45),
    height: RPH(10),
    resizeMode: 'contain',
    marginTop: RPH(2),
  },
  dateContainer: {
    marginTop: RPH(4),
    marginLeft: RPW(30)
  },
  weekdayText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  dateText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontWeight: 'bold',
    color: '#9e9e9e',
    fontWeight: '500'
  },
  suggestions: {
    flex: 1,
    width: RPW(100),
    height: RPH(55),
    justifyContent: 'center',
    alignItems: 'center'
  },
  suggestionsCardContainerStyle: {
    marginTop: RPH(10),
    height: '100%',
    width: screenWidth,
  },
  suggestionsScrollViewContainer: {
    paddingHorizontal: SPACING_FOR_CARD_INSET,
  },
  suggestionsCard: {
    height: RPH(35),
    width: CARD_WIDTH,
    backgroundColor: 'white',
    borderRadius: 50,
    marginHorizontal: RPW(2),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    marginTop: RPH(5)
  },
  suggestionsLength: {
    color: '#9e9e9e',
    fontWeight: '600',
    fontSize: 14,
    marginLeft: RPW(8),
    marginTop: RPH(2),
  },
  suggestionsTitle: {
    color: 'black',
    fontWeight: '700',
    fontSize: 30,
    marginLeft: RPW(8)
  },
  suggestionsImage: {
    marginTop: RPH(0),
    width: '100%',
    height: '55%',
  },
  browseArea: {
    width: RPW(100),
    height: RPH(35),
  },
  BBAtitle: {
    marginLeft: RPW(5),
    color: '#9e9e9e',
    fontWeight: '600',
  },
  BBAscrollContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  BBArow: {
    flexDirection: 'row',
    marginBottom: RPH(2),
    marginLeft: RPW(5),
  },
  BBAcard: {
    width: RPW(20),
    alignItems: 'center',
    marginRight: RPW(3),
    width: RPW(35),
    borderWidth: 1,
    borderColor: '#9e9e9e',
    borderRadius: 15,
  },
  BBAimageContainer: {
    marginTop: RPH(1),
    width: RPH(7),
    height: RPH(7),
    borderRadius: 30,
    backgroundColor: '#caa3ea'
  },
  BBAimage: {
    width: '100%',
    height: RPH(7),
  },
  BBAtext: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: RPH(0.5),
    marginBottom: RPH(0.5)
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
