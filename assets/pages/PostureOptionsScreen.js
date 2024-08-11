import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const RPW = (percentage) => {
  return (percentage / 100) * screenWidth;
}

const RPH = (percentage) => {
  return (percentage / 100) * screenHeight;
}

const StretchOption = ({ image, title, length, onPress }) => {
  return (
    <TouchableOpacity style={styles.stretchOption} onPress={onPress}>
          <View style={styles.stretchOptionImageContainerContainer}>
            <View style={styles.stretchOptionImageContainer}>
              <Image style={styles.stretchOptionImage} source={image}/>
            </View>
          </View>
          <View style={styles.stretchOptionTexts}>
            <Text style={styles.stretchOptionTitle}>{title}</Text>
            <Text style={styles.stretchOptionLength}>{length}</Text>
          </View>
    </TouchableOpacity>
  );
};

export default function PostureOptionsScreen({ navigation }) {

  const goHome = async () => {
    try {
      navigation.navigate('Home');
    } catch (error) {
      console.log('Error navigating: ', error);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.exitButtonContainer}>
          <TouchableOpacity style={styles.exitButton} onPress={goHome}>
            <Image style={styles.exitImage} source={require('./images/close.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Posture</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <StretchOption image={require('./images/Wall-Dog.png')} title="Tech Neck" length={"5 MINUTES"} onPress={()=> navigation.navigate('Posture1')} />
        <StretchOption image={require('./images/Pelvic-Tilt-Press.png')} title="Pevlic Tilt" length={"7 MINUTES"} onPress={()=> navigation.navigate('Posture2')} />
        <StretchOption image={require('./images/Airplane.png')} title="Posture Stabilizer" length={"4 MINUTES"} onPress={()=> navigation.navigate('Posture3')}/>
        <StretchOption image={require('./images/Split-Lunge-Hold.png')} title="Posture Power" length={"3 MINUTES"} onPress={()=> navigation.navigate('Posture4')}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
  },
  header: {
    width: RPW(100),
    height: RPH(10),
    flexDirection: 'row',
    borderBottomColor: '#c3c7c8',
    borderBottomWidth: 0.5,
    backgroundColor: '#fefefe',
  },
  exitButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitButton: {
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
  exitImage: {
    width: '40%',
    height: '40%',
  },
  titleContainer: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'black',
    fontSize: 24,
    fontWeight: '500',
  },
  stretchesContainer: {
    backgroundColor: 'green',
    marginTop: RPH(2),
    width: '100%',
    height: '100%',
  },
  stretchOption: {
    width: '100%',
    height: RPH(13),
    flexDirection: 'row',
  },
  stretchOptionImageContainerContainer: {
    backgroundColor: 'white',
    width: RPH(11),
    height: RPH(11),
    marginTop: RPH(1),
    marginLeft: RPW(7),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  stretchOptionImageContainer: {
    width: RPH(9),
    height: RPH(9),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  stretchOptionImage: {
    width: RPH(8),
    height: RPH(8),
    borderRadius: 50,
  },
  stretchOptionTexts: {
    flexDirection: 'column',
    marginLeft: RPW(7),
    justifyContent: 'center',
  },
  stretchOptionTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600'
  },
  stretchOptionLength: {
    color: 'grey',
    fontWeight: '600'
  },
  scrollViewContent: {
    paddingBottom: RPH(2),
    marginTop: RPH(2)
  },
});
