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
  { label: 'Upward Dog', time: 30, image: require('./images/Upward-Dog.png'), index: '1 of 8' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '1 of 8' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '1 of 8' },
  { label: 'Downward-Dog', time: 30, image: require('./images/Downward-Dog.png'), index: '2 of 8' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '2 of 8' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '2 of 8' },
  { label: 'Bird Dog', time: 15, image: require('./images/Bird-Dog.png'), index: '3 of 7' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '3 of 7' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '3 of 7' },
  { label: 'Bird Dog', time: 15, image: require('./images/Bird-Dog.png'), index: '3 of 7' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '3 of 7' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '3 of 7' },
  { label: 'Lying Figure Four', time: 30, image: require('./images/Lying-Figure-Four.png'), index: '4 of 8' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '4 of 8' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '4 of 8' },
  { label: 'Lying Figure Four', time: 30, image: require('./images/Lying-Figure-Four.png'), index: '4 of 8' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '4 of 8' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '4 of 8' },
  { label: 'Spinal Twist', time: 30, image: require('./images/Spinal-Twist.png'), index: '5 of 8' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '5 of 8' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '5 of 8' },
  { label: 'Spinal Twist', time: 30, image: require('./images/Spinal-Twist.png'), index: '5 of 8' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '5 of 8' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '5 of 8' },
  { label: 'Pelvic Tilt Press', time: 30, image: require('./images/Pelvic-Tilt-Press.png'), index: '6 of 8' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '6 of 8' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '6 of 8' },
  { label: 'Bridge', time: 30, image: require('./images/Bridge.png'), index: '7 of 8' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '7 of 8' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '7 of 8' },
  { label: 'Single Knee To Chest', time: 30, image: require('./images/Single-Knee-To-Chest.png'), index: '8 of 8' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '8 of 8' },
  { label: 'Switch Sides', time: 5, image: require('./images/swap.png'), index: '8 of 8' },
  { label: 'Single Knee To Chest', time: 30, image: require('./images/Single-Knee-To-Chest.png'), index: '8 of 8' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '8 of 8' },
  { label: 'Next Stretch', time: 5, image: require('./images/next.png'), index: '8 of 8' },
];

const LowerBack4StretchScreen = ({ navigation }) => {
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
      navigation.navigate('LowerBack4');
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

export default LowerBack4StretchScreen;
