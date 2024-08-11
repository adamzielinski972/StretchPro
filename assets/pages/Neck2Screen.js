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

export default function Neck2Screen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPopup, setCurrentPopup] = useState({ image: null, title: '', instructions: '' , offsetX: 0, offsetY: 0, colourBG: '#ffffff'});

  const goBack = async () => {
    try {
      navigation.navigate('NeckOptions');
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
          <Text style={styles.titleText}>Neck 2</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <PopUp image={currentPopup.image} title={currentPopup.title} instructions={currentPopup.instructions} offsetX={currentPopup.offsetX} offsetY={currentPopup.offsetY} colourBG={currentPopup.colourBG} />
        <Stretch image={require('./images/Shoulder-Rolls.png')} title="Shoulder Rolls" length={"0:30"} onPress={() => handlePress(require('./images/Shoulder-Rolls.png'), "Shoulder Rolls", "Sitting with your back straight and chest up, start by lifting your shoulders up toward your ears and then making small forward circles with your shoulders by rolling them forward, down, back, and up. Change directions at the half way point.")}/>
        <Stretch image={require('./images/Neck-Roll.png')} title="Neck Roll" length={"0:30"} onPress={() => handlePress(require('./images/Neck-Roll.png'), "Neck Roll", "Start sitting with your back straight and arms resting at your sides. Tuck your chin down into toward your chest and gently roll your neck from side to side in a continuous motion.")}/>
        <Stretch image={require('./images/Chin-Retractions.png')} title="Chin Retractions" length={"0:30"} onPress={() => handlePress(require('./images/Chin-Retractions.png'), "Chin Retractions", "Start sitting with your back straight and arms resting at your sides. Tuck your chin down into toward your chest and gently roll your neck from side to side in a continuous motion.")}/>
        <Stretch image={require('./images/Diver.png')} title="Diver" length={"0:30"} onPress={() => handlePress(require('./images/Diver.png'), "Diver", "Sitting down in a chair, lock your hands and stretch your arms out in front of your body. Spread your shoulder blades, tuck your head forward, and round your back.")}/>
        <Stretch image={require('./images/Cactus-Arms.png')} title="Cactus Arms" length={"0:30"} onPress={() => handlePress(require('./images/Cactus-Arms.png'), "Cactus Arms", "Sitting with your back straight, raise your arms out to each side and lift them up half way. Pin back your shoulders, keep your palms facing forward, and lengthen the spine by leaning your head and neck forward.")}/>
        <Stretch image={require('./images/Neck-Extension.png')} title="Neck Extension" length={"0:30"} onPress={() => handlePress(require('./images/Neck-Extension.png'), "Neck Extension", "From a seated or standing position, straighten your back and tilt head up and back to point your chin straight up at the ceiling. Keep your mouth closed and use your hand to gently push your chin further up and back to deepen the stretch.")}/>
        <Stretch image={require('./images/Neck-Flexion.png')} title="Neck Flexion" length={"0:30"} onPress={() => handlePress(require('./images/Neck-Flexion.png'), "Neck Flexion", "From a seated or standing position, straighten your back and tilt your head forward to bring your chin to the top of your chest. Interlock your fingers behind your head and gently pull down on the back of your head to deepen the stretch.")}/>
        <Stretch image={require('./images/Ear-To-Shoulder.png')} title="Ear To Shoulder" length={"1:00"} onPress={() => handlePress(require('./images/Ear-To-Shoulder.png'), "Ear To Shoulder", "From a seated or standing position, straighten your back and bring on your arms behind your back, bending it at the elbow if possible. Using your other arm, gently pull your head to the side to bring your ear down toward your shoulder.")}/>
        <Stretch image={require('./images/Scalene-Stretch.png')} title="Scalene Stretch" length={"1:00"} onPress={() => handlePress(require('./images/Scalene-Stretch.png'), "Scalene Stretch", "From a standing or seated position, cross your hands and place them over your chest. Gently bring your ear to your shoulder, then rotate your neck and point your chin up toward the ceiling.")}/>
        <Stretch image={require('./images/Scapula-Stretch.png')} title="Scapula Stretch" length={"1:00"} onPress={() => handlePress(require('./images/Scapula-Stretch.png'), "Scapula Stretch", "From a standing or seated position, keep your head level and rotate it to look to one side. Next, rotate your head downward to look at your armpit. Use your hand to gently pull down on the back of your head to further the stretch.")}/>
        <Stretch image={require('./images/Neck-Rotation.png')} title="Neck Rotation" length={"1:00"} onPress={() => handlePress(require('./images/Neck-Rotation.png'), "Neck Rotation", "From a seated or standing position, straighten your back and rotate your head to the side while keeping your head level with the floor. Use your hand to gently push against the side of your chin to deepen the stretch.")}/>
        <Stretch image={require('./images/Wall-Arms.png')} title="Wall Arms" length={"1:00"} onPress={() => handlePress(require('./images/Wall-Arms.png'), "Wall Arms", "Start from a standing position with your feet hip-width apart and your side facing the wall. While keeping your feet in place, rotate your body to reach back with your arm and place your palm against the wall behind you. Rotate your body back to facing forward to deepen stretch.")}/>
        <Stretch image={require('./images/Reverse-Shoulder.png')} title="Reverse Shoulder" length={"0:30"} onPress={() => handlePress(require('./images/Reverse-Shoulder.png'), "Reverse Shoulder", "Start by standing with your feet shoulder-width apart and your arms at your sides. Clasp your hands behind your back with your thumbs pointing towards the floor. Slowly lift and elongate your spine, open your chest, and stand tall as you move your hands back and toward the ceiling. Keep your neck and shoulders relaxed and back off if you feel any sharp pain.")}/>
        <Stretch image={require('./images/Bear-Hug.png')} title="Bear Hug" length={"0:30"} onPress={() => handlePress(require('./images/Bear-Hug.png'), "Bear Hug", "From a seated or standing position, straighten your back and inhale as you open your arms wide. Cross your arms as you exhale, placing one arm on top of the other to give yourself a hug. Tilt your head down and use your hands to draw your shoulders in and deepen the stretch.")}/>
      </ScrollView>
      <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Neck2Stretch')}>
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
