import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, ScrollView, Modal } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const RPW = (percentage) => {
  return (percentage / 100) * screenWidth;
}

const RPH = (percentage) => {
  return (percentage / 100) * screenHeight;
}

export default function Posture3Screen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPopup, setCurrentPopup] = useState({ image: null, title: '', instructions: '' , offsetX: 0, offsetY: 0, colourBG: '#ffffff'});

  const goBack = async () => {
    try {
      navigation.navigate('PostureOptions');
    } catch (error) {
      console.log('Error navigating: ', error);
    }
  }

  const Stretch = ({ image, title, length, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.stretch}>
          <View style={styles.stretchImageContainer}>
            <Image style={styles.stretchImage} source={image} />
          </View>
          <View style={styles.stretchTexts}>
            <Text style={styles.stretchTitle}>{title}</Text>
            <Text style={styles.stretchLength}>{length}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const PopUp = ({ image, title, instructions }) => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
          <View style={styles.popUp}>
            <View style={styles.popUpTitleContainer}>
              <Text style={styles.popUpTitle}>{title}</Text>
              <TouchableOpacity style={styles.exitPopUp} onPress={() => setModalVisible(false)}>
                <Image style={styles.exitPopUpImage} source={require('./images/close.png')}/>
              </TouchableOpacity>
            </View>
            <ScrollView style={{paddingBottom: RPH(10)}}>
              <View  style={{alignItems: 'center'}}>
                <View style={styles.popUpImageContainer}>
                  <Image style={styles.popUpImage} source={image} />
                </View>
              </View>
              <View style={styles.popUpTextContainer}>
                <Text style={{color: 'grey', fontSize: 14, fontWeight: 'bold'}}>INSTRUCTIONS</Text>
                <Text style={{marginTop: RPH(1), color: 'black', lineHeight: 20}}>{instructions}</Text>
              </View>
            </ScrollView>
          </View>
      </Modal>
    );
  };

  const handlePress = (image, title, instructions , offsetX, offsetY, colourBG) => {
    setCurrentPopup({ image, title, instructions , offsetX, offsetY, colourBG});
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {modalVisible && <View style={styles.overlay} />}
      <View style={styles.header}>
        <View style={styles.exitButtonContainer}>
          <TouchableOpacity style={styles.exitButton} onPress={goBack}>
            <Image style={styles.exitImage} source={require('./images/close.png')}/>
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Posture 3</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <PopUp image={currentPopup.image} title={currentPopup.title} instructions={currentPopup.instructions} offsetX={currentPopup.offsetX} offsetY={currentPopup.offsetY} colourBG={currentPopup.colourBG} />
        <Stretch image={require('./images/Crunch-Hold.png')} title="Crunch Hold" length={"0:15"} onPress={() => handlePress(require('./images/Crunch-Hold.png'), "Crunch Hold", "Start by sitting with your left side against the wall, then lean back and turn your body to the left to bring your legs up onto the wall. Rest your shoulders and head on the floor and shift your weight from side-to-side to scoot closer to the wall.")}/>
        <Stretch image={require('./images/Bridge.png')} title="Bridge" length={"0:30"} onPress={() => handlePress(require('./images/Bridge.png'), "Bridge", "Start lying on your back with your knees bent and feet flat on the floor. Lift your hips up off the floor until your knees, hips, and shoulders form a straight line. Engage your core to draw your abs in toward your spine and hold the position.")}/>
        <Stretch image={require('./images/Dead-Bug.png')} title="Dead Bug" length={"0:30"} onPress={() => handlePress(require('./images/Dead-Bug.png'), "Dead Bug", "Start lying flat on your back with your legs straight and your arms over your head. Raise your right arm straight up into the air and bring your left knee up and in so that your thigh is perpendicular to your body. Raise your left arm and right leg slightly off the floor and hold the position.")}/>
        <Stretch image={require('./images/Bridge-Leg-Lift.png')} title="Bridge Leg Lift" length={"0:30"} onPress={() => handlePress(require('./images/Bridge-Leg-Lift.png'), "Bridge Leg Lift", "Start lying on your back with your knees bent and feet flat on the floor. Lift your hips up off the floor until your knees, hips, and shoulders form a straight line. Engage your core to draw your abs in toward your spine and slowly raise your right leg up so it's in line with the rest of your body. Hold the position.")}/>
        <Stretch image={require('./images/Bicycle-Crunch-Hold.png')} title="Bicycle Crunch Hold" length={"0:30"} onPress={() => handlePress(require('./images/Bicycle-Crunch-Hold.png'), "Bicycle Crunch Hold", "Lie on your back with your knees bent and feet flat on the floor about hip-width apart and place your hands behind your head. Engage your core to rotate your trunk and bring your left elbow and right knee toward each other while straightening your left leg. Hold the position.")}/>
        <Stretch image={require('./images/Bird-Dog.png')} title="Bird Dog" length={"0:30"} onPress={() => handlePress(require('./images/Bird-Dog.png'), "Bird Dog", "Start on your hands and knees with your knees hip-width apart and hands about shoulder-width apart. Engage your core to simultaneously extend your left arm straight out in front of you and your right leg straight back behind you. Keep your hips squared and try to form a straight line all the way from your left hand to your right foot. Hold the position.")}/>
        <Stretch image={require('./images/Airplane.png')} title="Airplane" length={"0:30"} onPress={() => handlePress(require('./images/Airplane.png'), "Airplane", "Standing on one leg with the other leg lifted straight behind you, extend your arms out to your sides to form a T shape. Tilt your torso forward, keeping your hips squared, until your body forms a straight line from your head to your raised foot.")}/>
        <Stretch image={require('./images/Lying-Side-Leg-Raise.png')} title="Lying Side Leg Raise" length={"0:30"} onPress={() => handlePress(require('./images/Lying-Side-Leg-Raise.png'), "Lying Side Leg Raise", "Start lying on your left side with your legs together and your feet stacked on top of each other. Keep your left leg on the floor as you slowly raise your right leg up towards the ceiling. Keep your body in a straight line and hold the position.")}/>
        <Stretch image={require('./images/Elbow-Side-Plank.png')} title="Elbow Side Plank" length={"0:30"} onPress={() => handlePress(require('./images/Elbow-Side-Plank.png'), "Elbow Side Plank", "Lying on your left side with your legs straight and feet stacked on top of each other, place your left elbow under your left shoulder. Engage your core to lift your hips up off the floor so that you’re supporting your weight on your left elbow and the side of your left foot. Keep your body in a straight line and place your right hand on your hip or lift it up toward the ceiling.")}/>
        <Stretch image={require('./images/Hand-Plank.png')} title="Hand Plank" length={"0:15"} onPress={() => handlePress(require('./images/Hand-Plank.png'), "Hand Plank", "Start on the floor in a push up position. Ground your toes into the floor and engage your abs, shoulders, back, and glutes to stabilize the body. Be careful not to lock or hyperextend your knees. Keep a straight spine with your head in line with your back and look at a spot on the floor slightly above your hands.")}/>
      </ScrollView>
      <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Posture3Stretch')}>
        <View style={styles.startButtonTextContainer}>
          <Text style={styles.startButtonText}>START</Text>
        </View>
      </TouchableOpacity>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: 'white',
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
  stretch: {
    width: '100%',
    height: RPH(12),
    flexDirection: 'row',
    marginBottom: RPH(2)
  },
  stretchImageContainer: {
    width: RPH(10),
    height: RPH(10),
    marginTop: RPH(1),
    marginLeft: RPW(7),
    borderRadius: 75,
  },
  stretchImage: {
    width: RPH(10),
    height: RPH(10),
    borderRadius: 75,
  },
  stretchTexts: {
    flexDirection: 'row',
    marginLeft: RPW(7),
    alignItems: 'center',
  },
  stretchTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500'
  },
  stretchLength: {
    color: 'grey',
    position: 'absolute',
    left: RPW(50),
    fontSize: 15
  },
  scrollViewContent: {
    paddingBottom: RPH(10),
    marginTop: RPH(2)
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  popUpContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popUp: {
    backgroundColor: 'white',
    height: RPH(60),
    top: RPH(40),
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
    zIndex: 2,
  },
  popUpTitleContainer: {
    alignItems: 'center',
    width: '100%',
    height: RPH(6),
    borderBottomWidth: 0.2,
    borderBottomColor: 'black'
  },
  popUpTitle: {
    fontWeight: '700',
    fontSize: 22,
    color: 'black',
  },
  exitPopUp: {
    backgroundColor: 'white',
    width: RPW(10),
    height: RPW(10),
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    left: RPW(80),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  exitPopUpImage: {
    width: '40%',
    height: '40%',
  },
  popUpImageContainer: {
    alignItems: 'center',
    marginTop: RPH(2),
    borderRadius: 150,
    width: RPW(60),
    height: RPW(60),
  },
  popUpImage: {
    width: RPW(60),
    height: RPW(60),
    borderRadius: 150,
  },
  popUpTextContainer: {
    marginTop: RPH(2),
  },
  startButton: {
    borderRadius: 30,
    width: RPW(90),
    height: RPH(5),
    left: RPW(5),
    bottom: RPH(3),
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: 'white',
  },
  startButtonTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButtonText: {
    color: 'grey',
    fontWeight: 'bold'
  }
});
