import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { SafeAreaView } from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const RPW = (percentage) => {
  return (percentage / 100) * screenWidth;
}

const RPH = (percentage) => {
  return (percentage / 100) * screenHeight;
}

const activities = [
  { label: 'Chest Opener', time: 30, image: require('./images/Chest-Opener.png'), index: '1 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '1 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '1 of 10' },
  { label: 'Overhead Tricep', time: 15, image: require('./images/Overhead-Tricep.png'), index: '2 of 10' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '2 of 10' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '2 of 10' },
  { label: 'Overhead Tricep', time: 15, image: require('./images/Overhead-Tricep.png'), index: '2 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '2 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '2 of 10' },
  { label: 'One Arm Hug', time: 15, image: require('./images/One-Arm-Hug.png'), index: '3 of 10' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '3 of 10' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '3 of 10' },
  { label: 'One Arm Hug', time: 15, image: require('./images/One-Arm-Hug.png'), index: '3 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '3 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '3 of 10' },
  { label: 'Reverse Shoulder', time: 30, image: require('./images/Reverse-Shoulder.png'), index: '4 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '4 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '4 of 10' },
  { label: 'Diver', time: 30, image: require('./images/Diver.png'), index: '5 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '5 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '5 of 10' },
  { label: 'Wall Arms', time: 30, image: require('./images/Wall-Arms.png'), index: '6 of 10' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '6 of 10' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '6 of 10' },
  { label: 'Wall Arms', time: 30, image: require('./images/Wall-Arms.png'), index: '6 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '6 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '6 of 10' },
  { label: 'Neck Roll', time: 30, image: require('./images/Neck-Roll.png'), index: '7 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '7 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '7 of 10' },
  { label: 'Chin Retractions', time: 30, image: require('./images/Chin-Retractions.png'), index: '8 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '8 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '8 of 10' },
  { label: 'Ear To Shoulder', time: 15, image: require('./images/Ear-To-Shoulder.png'), index: '9 of 10' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '9 of 10' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '9 of 10' },
  { label: 'Ear To Shoulder', time: 15, image: require('./images/Ear-To-Shoulder.png'), index: '9 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '9 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '9 of 10' },
  { label: 'Scalene Stretch', time: 15, image: require('./images/Scalene-Stretch.png'), index: '10 of 10' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '10 of 10' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '10 of 10' },
  { label: 'Scalene Stretch', time: 15, image: require('./images/Scalene-Stretch.png'), index: '10 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '10 of 10' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '10 of 10' },
];

const UpperBody1StretchScreen = ({ navigation }) => {
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timerKey, setTimerKey] = useState(0); // Key to force timer reset
  const [countdown, setCountdown] = useState(3);
  const [showCountdown, setShowCountdown] = useState(true);
  const [hasShownCountdown, setHasShownCountdown] = useState(false);

  const currentActivity = activities[currentActivityIndex];

  useEffect(() => {
    // Reset timer when the activity changes
    setIsPaused(false);
    setTimerKey(prevKey => prevKey + 1); 
    if (!hasShownCountdown) {
      setCountdown(3);
      setShowCountdown(true);
    }
  }, [currentActivityIndex, hasShownCountdown]);

  useEffect(() => {
    let countdownInterval;
    if (showCountdown) {
      countdownInterval = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown === 1) {
            setShowCountdown(false);
            setHasShownCountdown(true);
            clearInterval(countdownInterval);
            return 0;
          }
          return prevCountdown - 1;
        });
      }, 1000);
    }
    return () => clearInterval(countdownInterval);
  }, [showCountdown]);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleComplete = () => {
    if (currentActivityIndex === activities.length - 1) {
      navigation.navigate('Home'); 
    } else {
      setCurrentActivityIndex((prevIndex) => (prevIndex + 1) % activities.length);
    }
  };

  const goBack = async () => {
    try {
      navigation.navigate('UpperBody1');
    } catch (error) {
      console.log('Error navigating: ', error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {showCountdown && (
        <>
          <View style={styles.countdownContainer}>
            <Text style={styles.countdownText}>{countdown}</Text>
          </View>
          <View style={styles.countdownOverlay} />
        </>
      )}
      <View style={styles.header}>
        <View style={styles.exitButtonContainer}>
          <TouchableOpacity style={styles.exitButton} onPress={goBack} disabled={showCountdown}>
            <Image style={styles.exitImage} source={require('./images/close.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{currentActivity.index}</Text>
        </View>
      </View>
      <View style={styles.timerContainer}>
        <CountdownCircleTimer
          key={timerKey} // Force reset of the timer
          isPlaying={!isPaused && !showCountdown}
          duration={currentActivity.time}
          colors={['#94928f', '#94928f', '#94928f']}
          colorsTime={[10, 5, 0]}
          onComplete={handleComplete}
          size={300}
          strokeWidth={10}
        >
          {({ remainingTime }) => (
            <Text style={styles.remainingTime}>{remainingTime}s</Text>
          )}
        </CountdownCircleTimer>
        <View style={styles.imageContainer}>
          <Image 
            source={currentActivity.image} 
            style={[styles.image, showCountdown && styles.darkenedImage]} 
          />
        </View>
      </View>
      <View style={styles.stretchTitleContainer}>
        <Text style={styles.stretchTitle}>{currentActivity.label}</Text>
      </View>
      <View style={styles.pausePlayButtonContainer}>
        <TouchableOpacity 
          style={styles.pausePlayButton} 
          onPress={handlePause} 
          disabled={showCountdown}
        >
          <Image 
            source={isPaused ? require('./images/play-button-arrowhead.png') : require('./images/pause.png')} 
            style={[styles.pausePlayButtonImage, isPaused && { marginLeft: 10 }]} 
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: RPW(100),
    height: RPH(10),
    flexDirection: 'row',
    
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
  timerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RPH(15),
    marginBottom: RPH(5),
  },
  imageContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: RPH(33),
    height: RPH(33),
    borderRadius: 150
  },
  darkenedImage: {
    opacity: 0.5, 
  },
  stretchTitleContainer: {
    alignItems: 'center',
  },
  stretchTitle: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  remainingTime: {
    fontSize: 24,
    position: 'absolute',
    bottom: -RPH(15),
  },
  pausePlayButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RPH(10),
  },
  pausePlayButton: {
    width: 100,
    height: 100,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: 'white'
  },
  pausePlayButtonImage: {
    width: 50,
    height: 50,
  },
  countdownContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  countdownText: {
    fontSize: 50,
    color: '#fffF',
    zIndex: 2,
  },
  countdownOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    zIndex: 1,
  },
});

export default UpperBody1StretchScreen;
