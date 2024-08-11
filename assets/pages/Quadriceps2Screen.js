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

export default function Quadriceps3Screen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPopup, setCurrentPopup] = useState({ image: null, title: '', instructions: '' , offsetX: 0, offsetY: 0, colourBG: '#ffffff'});

  const goBack = async () => {
    try {
      navigation.navigate('QuadricepsOptions');
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
          <Text style={styles.titleText}>Quads 2</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <PopUp image={currentPopup.image} title={currentPopup.title} instructions={currentPopup.instructions} offsetX={currentPopup.offsetX} offsetY={currentPopup.offsetY} colourBG={currentPopup.colourBG} />
        <Stretch image={require('./images/Standing-Quad.png')} title="Standing Quad" length={"1:00"} onPress={() => handlePress(require('./images/Standing-Quad.png'), "Standing Quad", "From a standing position, grab your right leg just above the ankle with both hands and pull it backwards toward your buttocks. Hold on to the back of a chair or a wall with one hand for better balance.")}/>
        <Stretch image={require('./images/Lunge.png')} title="Lunge" length={"1:00"} onPress={() => handlePress(require('./images/Lunge.png'), "Lunge", "Start from a kneeling position with your hands at your sides. Step your left leg forward and position your left knee directly over your left ankle. Raise your arms above your head and shift your hips forward to deepen the lunge. If necessary, place a towel or blanket under your back knee for additional support.")}/>
        <Stretch image={require('./images/Kneeling-Quad.png')} title="Kneeling Quad" length={"1:00"} onPress={() => handlePress(require('./images/Kneeling-Quad.png'), "Kneeling Quad", "Starting from your hands and knees, step your left foot up to the outside of your left hand. Straighten your torso and upper body, then reach behind you to grab your right foot with your right hand. Bend your left knee and pull your right foot toward your body to further the stretch. If necessary, place a pillow under your knee for additional support and to avoid pressure pain.")}/>
        <Stretch image={require('./images/Reverse-Lunge.png')} title="Reverse Lunge" length={"1:00"} onPress={() => handlePress(require('./images/Reverse-Lunge.png'), "Reverse Lunge", "Starting from a kneeling position, extend your right foot forward in front of you so your right leg is straight and resting on your right heel. Keep your back straight while gently folding forward over your right leg to further the stretch in your hamstring. Rest your hands on the floor to maintain stability and balance.")}/>
        <Stretch image={require('./images/Lizard-Pose.png')} title="Lizard Pose" length={"0:00"} onPress={() => handlePress(require('./images/Lizard-Pose.png'), "Lizard Pose", "Start on your hands and knees with your toes facing the floor. Step your left foot to the outside of your left hand and slightly in front of it, with your toes pointing out at a 45 degree angle. If possible, drop your elbows to the floor and place your forearms flat on the ground.")}/>
        <Stretch image={require('./images/Upward-Dog.png')} title="Upward Dog" length={"0:30"} onPress={() => handlePress(require('./images/Upward-Dog.png'), "Upward Dog", "Start lying face-down on the floor with your legs straight behind you and your palms on the floor beside you, next to your ribs. Press down on your hands to straighten your arms and lift your chest, torso, and hips off the floor. Relax your shoulders and engage your legs and feet to keep your thighs lifted slightly off the floor.")}/>
        <Stretch image={require('./images/Downward-Dog.png')} title="Downward Dog" length={"0:30"} onPress={() => handlePress(require('./images/Downward-Dog.png'), "Downward Dog", "Start on your hands and knees with your wrists under your shoulders and your knees under your hips. Curl your toes under and push back through your hands to lift your hips toward the ceiling and straighten your legs. Lengthen your spine, draw your shoulder blades in, and let your heels sink toward the floor.")}/>
        <Stretch image={require('./images/Hero-Pose.png')} title="Hero Pose" length={"0:30"} onPress={() => handlePress(require('./images/Hero-Pose.png'), "Hero Pose", "Start from a kneeling position with your knees and feet together and the tops of your feet facing the floor. Keeping your toes together, let your heels fall apart and slowly sit back on your feet, placing your hands on your knees for additional support. If necessary, place a rolled up towel or blanket on top of your feet to make it easier.")}/>
        <Stretch image={require('./images/Quad-Stretch.png')} title="Quad Stretch" length={"1:00"} onPress={() => handlePress(require('./images/Quad-Stretch.png'), "Quad Stretch", "Start sitting on the floor with your legs extended straight out in front of you. Bend your knee and grab your foot to bring it back behind you, placing your foot directly underneath your buttocks. Gently lean back to rest on your elbows.")}/>
        <Stretch image={require('./images/Hurdler.png')} title="Hurdler" length={"1:00"} onPress={() => handlePress(require('./images/Hurdler.png'), "Hurdler", "Start from a seated position on the floor with your legs out in front of you. Bend your right leg, dropping your right knee toward the ground and bringing your right heel in toward your groin. With your left leg extended straight out in front of you, lean forward to grab your left foot or lower leg with both of your hands.")}/>
        <Stretch image={require('./images/Lying-Quad-Stretch.png')} title="Lying Quad Stretch" length={"1:00"} onPress={() => handlePress(require('./images/Lying-Quad-Stretch.png'), "Lying Quad Stretch", "Start by lying on the floor on your side. Use your hand to prop up your head or rest your upper body on your elbow. With your opposite hand, grab your top foot and pull it back toward your buttocks.")}/>
        <Stretch image={require('./images/Knees-To-Chest.png')} title="Knees To Chest" length={"0:30"} onPress={() => handlePress(require('./images/Knees-To-Chest.png'), "Knees To Chest", "Lying on your back, gently bring both knees up and in toward your chest using your abdominals. Grab your lower legs or lock your hands and hug your legs toward your body. Relax your legs and lower back.")}/>
      </ScrollView>
      <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Quadriceps2Stretch')}>
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
