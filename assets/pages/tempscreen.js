import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, TextInput, Dimensions, Image, Animated, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createUser, updateUser } from '../../src/graphql/mutations';
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

const Card = ({ title, image, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.suggestionsCard}>
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
        <Card title="Card 1" image={require('./images/cat.jpg')} onPress={() => scrollToCard(0)} />
        <Card title="Card 2" image={require('./images/cat.jpg')} onPress={() => scrollToCard(1)} />
        <Card title="Card 3" image={require('./images/cat.jpg')} onPress={() => scrollToCard(2)} />
      </Animated.ScrollView>
    </View>
  );
};

const BBAScroll = () => {
  const navigation = useNavigation();

  const cards = [
    { id: 1, image: 'https://via.placeholder.com/150', text: 'Card 1', screen: 'HipsOptions' },
    { id: 2, image: 'https://via.placeholder.com/150', text: 'Card 2', screen: 'HipsOptions' },
    { id: 3, image: 'https://via.placeholder.com/150', text: 'Card 3', screen: 'HipsOptions' },
    { id: 4, image: 'https://via.placeholder.com/150', text: 'Card 4', screen: 'HipsOptions' },
    { id: 5, image: 'https://via.placeholder.com/150', text: 'Card 5', screen: 'HipsOptions' },
    { id: 6, image: 'https://via.placeholder.com/150', text: 'Card 6', screen: 'HipsOptions' },
    { id: 7, image: 'https://via.placeholder.com/150', text: 'Card 7', screen: 'HipsOptions' },
    { id: 8, image: 'https://via.placeholder.com/150', text: 'Card 8', screen: 'HipsOptions' },
    { id: 9, image: 'https://via.placeholder.com/150', text: 'Card 9', screen: 'HipsOptions' },
    { id: 10, image: 'https://via.placeholder.com/150', text: 'Card 10', screen: 'HipsOptions' },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.BBAscrollContainer}>
        <View style={styles.BBArow}>
          {cards.slice(0, 5).map(card => (
            <TouchableOpacity key={card.id} style={styles.BBAcard} onPress={() => navigation.navigate(card.screen)}>
              <Image source={{ uri: card.image }} style={styles.BBAimage} />
              <Text style={styles.BBAtext}>{card.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.BBArow}>
          {cards.slice(5, 10).map(card => (
            <TouchableOpacity key={card.id} style={styles.BBAcard} onPress={() => navigation.navigate(card.screen)}>
              <Image source={{ uri: card.image }} style={styles.BBAimage} />
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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        const { username } = user;
        const userData = await API.graphql(graphqlOperation(getUser, { id: username }));

        await API.graphql(graphqlOperation(updateUser, {
          input: { id: username, number: 10 }
        }));
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const getCurrentDate = () => {
      const date = new Date();
      const options = { month: 'long', day: 'numeric' };
      setCurrentDate(date.toLocaleDateString('en-US', options));
      setCurrentWeekday(date.toLocaleDateString('en-US', { weekday: 'long' }));
    };

    getCurrentDate();
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

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <Image style={styles.logoImage} source={require('./images/StretchPro-Logo.png')} />
          <View style={styles.dateContainer}>
            <Text style={styles.weekdayText}>{currentWeekday}</Text>
            <Text style={styles.dateText}>{currentDate}</Text>
          </View>
        </View>
        <View style={styles.suggestions}>
          <SuggestionScroll />
        </View>
        <View style={styles.browseArea}>
          <Text style={styles.BBAtitle}>BROWSE BY AREA</Text>
          <BBAScroll />
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
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsButton} onPress={goSettings}>
          <Image style={styles.settingsImage} source={require('./images/SettingsButton.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  dateContainer: {
    alignItems: 'center',
  },
  weekdayText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  suggestionsCardContainerStyle: {
    height: 200,
  },
  suggestionsScrollViewContainer: {
    alignItems: 'center',
  },
  suggestionsCard: {
    width: CARD_WIDTH,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  suggestionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  suggestionsImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  browseArea: {
    marginTop: 20,
    paddingLeft: 20,
  },
  BBAtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  BBAscrollContainer: {
    flexDirection: 'column',
  },
  BBArow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  BBAcard: {
    width: RPW(18),
    height: RPH(12),
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  BBAimage: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
  },
  BBAtext: {
    fontSize: 12,
    marginTop: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingLeft: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  homeButton: {
    flex: 1,
  },
  settingsButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  settingsImage: {
    width: 50,
    height: 50,
  },
});
