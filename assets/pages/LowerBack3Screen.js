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

export default function LowerBack3Screen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPopup, setCurrentPopup] = useState({ image: null, title: '', instructions: '' , offsetX: 0, offsetY: 0, colourBG: '#ffffff'});

  const goBack = async () => {
    try {
      navigation.navigate('LowerBackOptions');
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
          <Text style={styles.titleText}>Lower Back 3</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <PopUp image={currentPopup.image} title={currentPopup.title} instructions={currentPopup.instructions} offsetX={currentPopup.offsetX} offsetY={currentPopup.offsetY} colourBG={currentPopup.colourBG} />
        <Stretch image={require('./images/Upward-Salute.png')} title="Upward Salute" length={"0:30"} onPress={() => handlePress(require('./images/Upward-Salute.png'), "Upward Salute", "Start from a standing position with your arms hanging at your sides. Slowly sweep your arms out and up toward the ceiling, bringing your hands together overhead. Reach up and slightly back while keeping your neck and shoulders relaxed and lengthening your tailbone toward the ground.")}/>
        <Stretch image={require('./images/Toe-Touch.png')} title="Toe Touch" length={"0:30"} onPress={() => handlePress(require('./images/Toe-Touch.png'), "Toe Touch", "Start from a standing position with your feet hip-width apart and toes facing forward. Keeping a slight bend in the knees, gently fold forward at the hips and let your fingers hang down toward your toes.")}/>
        <Stretch image={require('./images/Kneeling-Psoas.png')} title="Kneeling Psoas" length={"1:00"} onPress={() => handlePress(require('./images/Kneeling-Psoas.png'), "Kneeling Psoas", "Start from a kneeling position with your hands at your sides. Step forward with one leg so that your foot is flat on the floor and your knee is directly over your ankle. Raise your opposite arm above your head, reaching up and over your head to deepen the stretch. If necessary, place a towel or blanket under your knee for additional support.")}/>
        <Stretch image={require('./images/Wide-Leg-Bend.png')} title="Wide Leg Bend" length={"0:30"} onPress={() => handlePress(require('./images/Wide-Leg-Bend.png'), "Wide Leg Bend", "From a standing position, keep your toes pointed forward and widen your stance while maintaining stability. Keeping a slight bend in the knees, gently fold forward at the hips and touch the floor with your fingers or palms. If possible, continue to reach further back to deepen the stretch." )} />
        <Stretch image={require('./images/Lunge.png')} title="Lunge" length={"1:00"} onPress={() => handlePress(require('./images/Lunge.png'), "Lunge", "Start from a kneeling position with your hands at your sides. Step your left leg forward and position your left knee directly over your left ankle. Raise your arms above your head and shift your hips forward to deepend the lunge.")}/>
        <Stretch image={require('./images/Reverse-Lunge.png')} title="Reverse Lunge" length={"1:00"} onPress={() => handlePress(require('./images/Reverse-Lunge.png'), "Reverse-Lunge", "Starting from a kneeling position, extend your right foot forward in front of you so your right leg is straight and resting on your right heel. Keep your back straight while gently folding forward over your right leg to further the stretch in your hamstring. Rest your hands on the floor to maintain stability and balance." )} />
        <Stretch image={require('./images/Kneeling-Quad.png')} title="Kneeling Quad" length={"1:00"} onPress={() => handlePress(require('./images/Kneeling-Quad.png'), "Kneeling Quad", "tarting from your hands and knees, step your left foot up to the outside of your left hand. Straighten your torso and upper body, then reach behind you to grab your right foot with your right hand. Bend your left knee and pull your right foot toward your body to further the stretch. If necessary, place a pillow under your knee for additional support and to avoid pressure pain.")}/>
        <Stretch image={require('./images/Cat-Cow.png')} title="Cat-Cow" length={"0:30"} onPress={() => handlePress(require('./images/Cat-Cow.png'), "Cat Cow", "Starting from all fours, drop your stomach towards the mat while lifting your chin and chest and gazing up toward the ceiling as you inhale. As you exhale, round your back toward the ceiling, draw your stomach to your spine, and release your head down toward the floor.")}/>
        <Stretch image={require('./images/Upward-Dog.png')} title="Upward Dog" length={"0:30"} onPress={() => handlePress(require('./images/Upward-Dog.png'), "Upward Dog", "Start lying face-down on the floor with your legs straight behind you and your palms on the floor beside you, next to your ribs. Press down on your hands to straighten your arms and lift your chest, torso, and hips off the floor. Relax your shoulders and engage your legs and feet to keep your thighs lifted slightly off the floor.")}/>
        <Stretch image={require('./images/Child-Pose.png')} title="Child's Pose" length={"0:30"} onPress={() => handlePress(require('./images/Child-Pose.png'), "Child's Pose", "Start from a kneeling position with your toes together and your knees hip-width apart. Lower your torso, allowing your stomach to rest between your knees and placing your forehead on the floor. Extend your arms forward with your palms against the floor and relax your shoulders toward the ground.")}/>
        <Stretch image={require('./images/Downward-Dog.png')} title="Downward Dog" length={"0:30"} onPress={() => handlePress(require('./images/Downward-Dog.png'), "Downward Dog", "Start on your hands and knees with your wrists under your shoulders and your knees under your hips. Curl your toes under and push back through your hands to lift your hips toward the ceiling and straighten your legs. Lengthen your spine, draw your shoulder blades in, and let your heels sink toward the floor.")}/>
        <Stretch image={require('./images/Pigeon.png')} title="Pigeon" length={"1:00"} onPress={() => handlePress(require('./images/Pigeon.png'), "Pigeon", "Start on your hands and knees. Bring your left knee up to your left hand, rotating your leg so that your left foot is as close to your right hand as possible. Keep your left knee pointed out at 45 degrees away from your body and extend your right leg straight back behind you. Gently fold forward over your left knee so your elbows are on the floor." )} />
        <Stretch image={require('./images/Folded-Butterfly.png')} title="Folded Butterfly" length={"0:30"} onPress={() => handlePress(require('./images/Folded-Butterfly.png'), "Folded Butterfly", "Sitting on the floor with your back straight, bend your knees and drop your legs to the sides so the soles of your feet come together. Pull your feet in toward your hips then fold forward over your feet, reaching out in front of you with your palms facing up." )} />
        <Stretch image={require('./images/Spinal-Twist.png')} title="Spinal Twist" length={"1:00"} onPress={() => handlePress(require('./images/Spinal-Twist.png'), "Spinal Twist", "Starting flat on your back, shift your hips to the right and your right leg over your left, placing your left hand on the outside of your right knee." )} />
        <Stretch image={require('./images/Seated-Fold.png')} title="Seated Fold" length={"0:30"} onPress={() => handlePress(require('./images/Seated-Fold.png'), "Seated Fold", "While seated on the ground, reach your arms up overhead before bending forward from the hips. Reach forward to grab your ankles or feet while trying not to round your back." )} />
        <Stretch image={require('./images/Quad-Stretch.png')} title="Quad Stretch" length={"1:00"} onPress={() => handlePress(require('./images/Quad-Stretch.png'), "Quad-Stretch", "Start sitting on the floor with your legs extended straight out in front of you. Bend your knee and grab your foot to bring it back behind you, placing your foot directly underneath your buttocks. Gently lean back to rest on your elbows." )} />
        <Stretch image={require('./images/Lying-Figure-Four.png')} title="Lying Figure Four" length={"1:00"} onPress={() => handlePress(require('./images/Lying-Figure-Four.png'), "Lying Figure Four", "Lying on your back with knees bent and feet flat on the floor, cross your left ankle over your right knee and grab the back of the right knee with both hands. Pull your right leg towards your chest while keeping your lower back on the floor." )} />
        <Stretch image={require('./images/Spinal-Twist.png')} title="Spinal Twist" length={"1:00"} onPress={() => handlePress(require('./images/Spinal-Twist.png'), "Spinal Twist", "Starting flat on your back, shift your hips to the right and your right leg over your left, placing your left hand on the outside of your right knee." )} />
        <Stretch image={require('./images/Pelvic-Tilt-Press.png')} title="Pelvic Tilt Press" length={"0:30"} onPress={() => handlePress(require('./images/Pelvic-Tilt-Press.png'), "Pelvic Tilt Press", "Start by lying on your back with your knees bent, feet flat on the floor, and your arms at your sides. Engage your abdomen and glutes to tilt your pelvis up and toward you while pressing your lower back flat into the floor.")}/>
        <Stretch image={require('./images/Single-Knee-To-Chest.png')} title="Single Knee To Chest" length={"1:00"} onPress={() => handlePress(require('./images/Single-Knee-To-Chest.png'), "Single Knee To Chest", "Start from a seated position on the floor with your legs out in front of you. Bend your right leg, dropping your right knee toward the ground and bringing your right heel in toward your groin. With your left leg extended straight out in front of you, lean forward to grab your left foot or lower leg with both of your hands." )} />
        <Stretch image={require('./images/Plow.png')} title="Plow" length={"0:30"} onPress={() => handlePress(require('./images/Plow.png'), "Plow", "Starting flat on your back with your arms at your sides, lift your legs and hips up toward the ceiling using your abdominals. Straighten your legs so that your torso is perpendicular to the floor and then slowly lower your toes to the floor behind you with your legs fully extended.")}/>
      </ScrollView>
      <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('LowerBack3Stretch')}>
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
