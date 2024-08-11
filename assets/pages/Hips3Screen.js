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

export default function Hips3Screen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentPopup, setCurrentPopup] = useState({ image: null, title: '', instructions: '' , offsetX: 0, offsetY: 0, colourBG: '#ffffff'});

  const goBack = async () => {
    try {
      navigation.navigate('HipsOptions');
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
          <Text style={styles.titleText}>Hips 3</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <PopUp image={currentPopup.image} title={currentPopup.title} instructions={currentPopup.instructions} offsetX={currentPopup.offsetX} offsetY={currentPopup.offsetY} colourBG={currentPopup.colourBG} />
        <Stretch image={require('./images/Standing-Frog.png')} title="Standing Frog" length={"0:30"} onPress={() => handlePress(require('./images/Standing-Frog.png'), "Standing Frog", "Start standing up with your feet more than hip-width apart and your toes angled outwards. Gradually lower your body into a squat position to form 90-degrees angle at the knees, while making sure your knees are directly above your ankles. Place each hand on the inside part of the knee and gently press outward to spread your hips further apart.")}/>
        <Stretch image={require('./images/Wide-Leg-Bend.png')} title="Wide Leg Bend" length={"0:30"} onPress={() => handlePress(require('./images/Wide-Leg-Bend.png'), "Wide Leg Bend", "From a standing position, keep your toes pointed forward and widen your stance while maintaining stability. Keeping a slight bend in the knees, gently fold forward at the hips and touch the floor with your fingers or palms. If possible, continue to reach further back to deepen the stretch." )} />
        <Stretch image={require('./images/Lunge.png')} title="Lunge" length={"1:00"} onPress={() => handlePress(require('./images/Lunge.png'), "Lunge", "Start from a kneeling position with your hands at your sides. Step your left leg forward and position your left knee directly over your left ankle. Raise your arms above your head and shift your hips forward to deepend the lunge.")}/>
        <Stretch image={require('./images/Reverse-Lunge.png')} title="Reverse Lunge" length={"1:00"} onPress={() => handlePress(require('./images/Reverse-Lunge.png'), "Reverse-Lunge", "Starting from a kneeling position, extend your right foot forward in front of you so your right leg is straight and resting on your right heel. Keep your back straight while gently folding forward over your right leg to further the stretch in your hamstring. Rest your hands on the floor to maintain stability and balance." )} />
        <Stretch image={require('./images/Side-Lunge.png')} title="Side Lunge" length={"1:00"} onPress={() => handlePress(require('./images/Side-Lunge.png'), "Side Lunge", "Standing with a wide stance, squat down to your right by bending your right knee and keeping your left leg straight. Keep both feet facing forwards." )} />
        <Stretch image={require('./images/Lizard-Pose.png')} title="Lizard Pose" length={"1:00"} onPress={() => handlePress(require('./images/Lizard-Pose.png'), "Lizard Pose", "Start with your hands and knees with your toes facing the floor. Step your left foot to the outside of your left hand and slightly in front of it, with your toes pointing out at a 45 degree angle. If possible, drop your elbows to the floor and place your forearms flat on the ground." )} />
        <Stretch image={require('./images/Frog-Pose.png')} title="Frog Pose" length={"0:30"} onPress={() => handlePress(require('./images/Frog-Pose.png'), "Frog Pose", "Start on your hands and knees. Spread your knees apart as wide as possible, pointing your toes outward and opening your feet so they are wider than your knees.  Drop down to your forearms and move your hips back towards your heels to further the stretch." )} />
        <Stretch image={require('./images/Pigeon.png')} title="Pigeon" length={"1:00"} onPress={() => handlePress(require('./images/Pigeon.png'), "Pigeon", "Start on your hands and knees. Bring your left knee up to your left hand, rotating your leg so that your left foot is as close to your right hand as possible. Keep your left knee pointed out at 45 degrees away from your body and extend your right leg straight back behind you. Gently fold forward over your left knee so your elbows are on the floor." )} />
        <Stretch image={require('./images/Leaning-9090.png')} title="Leaning 90/90" length={"1:00"} onPress={() => handlePress(require('./images/Leaning-9090.png'), "Leaning 90/90", "Start by sitting on the floor with your legs stretched out in front of you. Bend your knees so that they form a 90-degree angle, with your feet planted on the ground. Ensure that your hips and knees align with each other. Next, let your knees fall to one side so that your knees are against the floor while maintaining a 90-degree bend at your knees. Place your hands behind you and keep your back straight." )} />
        <Stretch image={require('./images/9090.png')} title="90/90" length={"1:00"} onPress={() => handlePress(require('./images/9090.png'), "90/90", "Start by sitting on the floor with your legs stretched out in front of you. Bend your knees so that they form a 90-degree angle, with your feet planted on the groud. Ensure that your hips and knees align with each other. Next, let your knees fall to one side so that your knees are against the floor while maintaining a 90-degree bend at your knees. Keep your back straight and lean your upper body forward, placing your hands on the floor in front of you." )} />
        <Stretch image={require('./images/Butterfly.png')} title="Butterfly" length={"0:30"} onPress={() => handlePress(require('./images/Butterfly.png'), "Butterfly", "Sitting on the floor with your back straight, bend your knees and drop your legs to the sides so the soles of your feet come together. Grab your feet and ankles and lean forward, keeping your spine straight." )} />
        <Stretch image={require('./images/Hurdler.png')} title="Hurdler" length={"1:00"} onPress={() => handlePress(require('./images/Hurdler.png'), "Hurdler", "Start from a seated position on the floor with your legs out in front of you. Bend your right leg, dropping your right knee toward the ground and bringing your right heel in toward your groin. With your left leg extended straight out in front of you, lean forward to grab your left foot or lower leg with both of your hands." )} />
        <Stretch image={require('./images/Quad-Stretch.png')} title="Quad Stretch" length={"1:00"} onPress={() => handlePress(require('./images/Quad-Stretch.png'), "Quad-Stretch", "Start sitting on the floor with your legs extended straight out in front of you. Bend your knee and grab your foot to bring it back behind you, placing your foot directly underneath your buttocks. Gently lean back to rest on your elbows." )} />
        <Stretch image={require('./images/Lying-Figure-Four.png')} title="Lying Figure Four" length={"1:00"} onPress={() => handlePress(require('./images/Lying-Figure-Four.png'), "Lying Figure Four", "Lying on your back with knees bent and feet flat on the floor, cross your left ankle over your right knee and grab the back of the right knee with both hands. Pull your right leg towards your chest while keeping your lower back on the floor." )} />
        <Stretch image={require('./images/Spinal-Twist.png')} title="Spinal Twist" length={"1:00"} onPress={() => handlePress(require('./images/Spinal-Twist.png'), "Spinal Twist", "Starting flat on your back, shift your hips to the right and your right leg over your left, placing your left hand on the outside of your right knee." )} />
        <Stretch image={require('./images/Reclined-Butterfly.png')} title="Reclined Butterfly" length={"0:30"} onPress={() => handlePress(require('./images/Reclined-Butterfly.png'), "Reclined Butterfly", "Lying flat on your back with legs extended, draw your feet in toward the center of your body, bringing the soles of your feet together with the knees out to the side. Slowly allow your legs to fall open." )} />
        <Stretch image={require('./images/Reverse-Butterfly.png')} title="Reverse Butterfly" length={"0:30"} onPress={() => handlePress(require('./images/Reverse-Butterfly.png'), "Reverse Butterfly", "Start by lying flat on your back, with your knees bent and your feet flat on the ground. Widen your feet to more than hip-width apart and allow your knees to fall inward towards each other while letting your feet extend outward." )} />
        <Stretch image={require('./images/Happy-Baby.png')} title="Happy Baby" length={"0:30"} onPress={() => handlePress(require('./images/Happy-Baby.png'), "Happy Baby", "Start lying on your back with your knees toward your chest. Bring your arms through the inside of your knees and grab the outsides of your feet with each hand. Pull back on your feet to bring you knees down toward the floor and position your ankles directly over your knees." )} />
        <Stretch image={require('./images/Knees-To-Chest.png')} title="Knees To Chest" length={"0:30"} onPress={() => handlePress(require('./images/Knees-To-Chest.png'), "Knees To Chest", "Lying on your back, gently bring both knees up and in toward your chest using your abdominals. Grab your lower legs or lock your hands and hug your legs toward your body. Relax your legs and lower back." )} />
  
      </ScrollView>
      <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Hips3Stretch')}>
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
