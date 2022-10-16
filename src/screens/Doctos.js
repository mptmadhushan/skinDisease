import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Modal,
  ImageBackground,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';
export default function OnBoard({navigation, route}) {
  const [modalVisible, setModalVisible] = React.useState(false);

  const api = {foo: 'bar', foz: 'baz'};
  const handlePlayOnClose = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/bg.jpg')}>
      <LinearGradient
        colors={['transparent', COLORS.third, COLORS.third]}
        style={styles.overlay}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Doctor Profile</Text>
              <View style={styles.row}>
                <Image
                  style={{width: 100, height: 200, resizeMode: 'cover'}}
                  source={require('../assets/images/doc.jpg')}
                />
                <View>
                  <Text style={styles.title}>Uriah Doyle</Text>
                  <Text style={styles.title2}>Dermatologist</Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'black',
                      paddingHorizontal: 20,
                    }}>
                    ABC Medicare
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      color: 'black',
                      paddingHorizontal: 20,
                    }}>
                    11.7KM
                  </Text>
                </View>

                <View style={styles.cer}>
                  <Text style={{fontSize: 25, color: 'white'}}>5</Text>
                </View>
              </View>
              <Text style={styles.title2}>Patient Reviews</Text>
              <View styles={styles.box3}>
                <Text>Patient01 posted 10hoursago</Text>
                <Text>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </Text>
              </View>
              <TouchableOpacity
                style={styles.buttonStyle2m}
                activeOpacity={0.5}
                onPress={() => handlePlayOnClose()}>
                <Text style={styles.buttonTextStyle}>close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Text style={styles.title1}>Doctors</Text>
        <Text style={{textAlign: 'left', color: 'white'}}>Filter by</Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('VisualizeDisease');
            }}
            style={styles.btn}>
            <Text style={styles.btnText}>Best Match</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('VisualizeDisease');
            }}
            style={styles.btn}>
            <Text style={styles.btnText}>Rating</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('VisualizeDisease');
            }}
            style={styles.btn}>
            <Text style={styles.btnText}>Distance</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Image
            source={require('../assets/images/acne-box-1.jpeg')}
            resizeMode="contain"
            style={{
              width: SIZES.width * 0.3,
              height: SIZES.width * 0.3,
            }}
          />
          <View>
            <Text style={styles.title}>Uriah Doyle</Text>
            <Text style={styles.title2}>Dermatologist</Text>
            <TouchableOpacity
              onPress={() => {
                handlePlayOnClose();
              }}
              style={styles.btn}>
              <Text style={styles.btnText}>Review</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePlayOnClose(); // navigation.navigate('VisualizeDisease');
              }}
              style={styles.btn}>
              <Text style={styles.btnText}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <Image
            source={require('../assets/images/acne-box-1.jpeg')}
            resizeMode="contain"
            style={{
              width: SIZES.width * 0.3,
              height: SIZES.width * 0.3,
            }}
          />
          <View>
            <Text style={styles.title}>Uriah Doyle</Text>
            <Text style={styles.title2}>Dermatologist</Text>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('VisualizeDisease');
              }}
              style={styles.btn}>
              <Text style={styles.btnText}>Review</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('VisualizeDisease');
              }}
              style={styles.btn}>
              <Text style={styles.btnText}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <Image
            source={require('../assets/images/acne-box-1.jpeg')}
            resizeMode="contain"
            style={{
              width: SIZES.width * 0.3,
              height: SIZES.width * 0.3,
            }}
          />
          <View>
            <Text style={styles.title}>Uriah Doyle</Text>
            <Text style={styles.title2}>Dermatologist</Text>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('VisualizeDisease');
              }}
              style={styles.btn}>
              <Text style={styles.btnText}>Review</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('VisualizeDisease');
              }}
              style={styles.btn}>
              <Text style={styles.btnText}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Varani');
            }}
            style={styles.btn}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Varani');
            }}
            style={styles.btn}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    flex: 1,
  },
  overlay: {
    marginTop: SIZES.height * 0.1,
    height: SIZES.height * 0.9,
    alignItems: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  btn2: {
    backgroundColor: COLORS.third,
    height: 40,
    width: 200,
    borderRadius: 20,
    margin: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.third,
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.98,
    shadowRadius: 16.0,
    elevation: 24,
  },
  btn: {
    backgroundColor: COLORS.third,
    height: 40,
    width: 100,
    borderRadius: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.third,
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.98,
    shadowRadius: 16.0,
    elevation: 24,
  },
  btnText: {
    color: COLORS.white,
  },
  title: {
    color: COLORS.third,
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  title1: {
    color: COLORS.third,
    fontSize: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  title2: {
    color: COLORS.third,
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  title3: {
    color: COLORS.third,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'red',
    borderRadius: 100,
    width: 30,
    height: 30,
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  des: {
    color: COLORS.third,
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },

  box: {
    flexDirection: 'row',
    width: SIZES.width * 0.8,
    height: SIZES.width * 0.4,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    padding: 5,
    justifyContent: 'center',
  },
  box3: {
    flexDirection: 'row',
    width: SIZES.width * 0.6,
    height: SIZES.width * 0.3,
    backgroundColor: '#898C95',
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    padding: 5,
    justifyContent: 'center',
  },

  cer: {
    flexDirection: 'row',
    width: SIZES.width * 0.1,
    height: SIZES.width * 0.1,
    backgroundColor: '#00BFA6',
    borderRadius: SIZES.width * 0.1,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    padding: 5,
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonStyle2m: {
    backgroundColor: COLORS.fourth,
    borderWidth: 0,
    color: COLORS.third,
    borderColor: '#00BFA6',
    height: 30,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  modalText: {
    // marginBottom: -15,
    fontSize: 30,
    textAlign: 'left',
    color: '#00BFA6',
  },
});
