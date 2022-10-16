/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../assets/images/logo.png';
export default function Home({navigation}) {
  useEffect(() => {}, []);

  // const dispatch = useDispatch();

  const logOut = () => {
    // // dispatch(authLogout());
    // // clearUserToken()
    //   .then(() => {
    //     navigation.navigate('OnBoard');
    //   })
    //   .catch(() => {
    //     console.log('Handle me properly! Error clearing user token');
    //   });
  };
  const [status, setStatus] = useState('0');
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/bg.jpg')}>
      <LinearGradient
        colors={['transparent', COLORS.black, COLORS.black]}
        style={styles.overlay}>
        <View
          style={{
            marginTop: SIZES.height * 0.05,
          }}>
          <Text style={styles.title2}>Hello Varani!</Text>
          <Text style={styles.title1}>Welcom Back</Text>
        </View>
        {status === '0' && (
          <View style={styles.box2}>
            <Text style={styles.boxTextStyle2}>The Probability is:</Text>
            <Text style={styles.boxTextStyle3}>57%</Text>
            <Text style={styles.boxTextStyle2}>Your disease status is </Text>
            <TouchableOpacity
              style={styles.buttonStyle2}
              activeOpacity={0.5}
              disabled
              onPress={() => navigation.navigate('ImageUpload')}>
              <Text style={styles.buttonTextStyle}>ACTIVE</Text>
            </TouchableOpacity>
          </View>
        )}
        {status === '1' && (
          <View style={styles.box2}>
            <Image
              source={require('../assets/images/chart.png')}
              resizeMode="contain"
              style={{
                width: SIZES.width * 0.7,
                height: SIZES.width * 0.4,
              }}
            />
          </View>
        )}
        {status === '2' && (
          <View style={styles.box2}>
            <Text style={styles.boxTextStyle2}>
              Skin disease privation - pation version
            </Text>
            <Text>1. About skin diseases?</Text>
            <Text>2. What do you want to know about that?</Text>
            <Text>3. Skin disease privation?</Text>
            <Text style={styles.boxTextStyle2}>Read more</Text>
          </View>
        )}
        {status === '3' && (
          <View style={styles.box2}>
            <Text style={styles.boxTextStyle2}>
              Whould you like to generate report to check your risk level and
              activities?
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle2}
              activeOpacity={0.5}
              disabled
              onPress={() => navigation.navigate('ImageUpload')}>
              <Text style={styles.buttonTextStyle}>Generate Reports</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.rowN}>
          <TouchableOpacity style={styles.box} onPress={() => setStatus('1')}>
            <Image
              source={require('../assets/images/logo.png')}
              resizeMode="contain"
              style={{
                width: SIZES.width * 0.1,
                height: SIZES.width * 0.1,
              }}
            />
            <Text style={styles.boxTextStyle}>All Result</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => setStatus('2')}>
            <Image
              source={require('../assets/images/logo.png')}
              resizeMode="contain"
              style={{
                width: SIZES.width * 0.1,
                height: SIZES.width * 0.1,
              }}
            />
            <Text style={styles.boxTextStyle}>Prevention</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box} onPress={() => setStatus('3')}>
            <Image
              source={require('../assets/images/logo.png')}
              resizeMode="contain"
              style={{
                width: SIZES.width * 0.1,
                height: SIZES.width * 0.1,
              }}
            />
            <Text style={styles.boxTextStyle}>Reports</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.black},
  slide1: {
    // backgroundColor: COLORS.third,
    // borderColor: COLORS.third,
    // borderWidth: 0.6,
    // borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
    flex: 1,
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.25,
    shadowColor: COLORS.third,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 0.84,
    elevation: 45,
  },
  centerFlex: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  title2: {
    color: COLORS.white,
    fontWeight: 'bold',
    marginLeft: SIZES.width * 0.06,
    fontSize: 25,
  },
  text001: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 5,
  },
  overlay: {
    marginTop: SIZES.height * 0.1,
    height: SIZES.height * 0.9,
    // alignItems: 'center',
  },
  box: {
    width: SIZES.width * 0.3,
    height: SIZES.width * 0.2,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    padding: 5,
    justifyContent: 'center',
  },
  box2: {
    width: SIZES.width * 0.8,
    height: SIZES.width * 0.6,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: SIZES.width * 0.1,
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    padding: 5,
    justifyContent: 'center',
  },
  title1: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: SIZES.width * 0.06,
  },
  rowNorm: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    maxWidth: SIZES.width,
    flex: 1,
    marginTop: SIZES.height * 0.1,
    marginLeft: SIZES.width * 0.06,
    marginRight: SIZES.width * 0.06,
  },
  rowNw: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    width: SIZES.width * 0.7,
  },
  rowN: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  rowNorm2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: SIZES.width,
    marginTop: SIZES.height * 0.02,
    marginLeft: SIZES.width * 0.06,
    marginRight: SIZES.width * 0.06,
  },
  buttonStyle: {
    backgroundColor: '#8C3FB7',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#00BFA6',
    height: 40,
    alignItems: 'center',
    width: '30%',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 50,
  },
  buttonStyle2: {
    backgroundColor: '#00BFA6',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#00BFA6',
    height: 40,
    alignItems: 'center',

    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 50,
  },
  buttonTextStyle: {
    fontFamily: 'Oh Whale - TTF',
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
    padding: 10,
  },
  boxTextStyle: {
    fontFamily: 'Oh Whale - TTF',
    color: COLORS.third,

    fontSize: 12,
  },
  boxTextStyle2: {
    fontFamily: 'Oh Whale - TTF',
    color: COLORS.third,

    fontSize: 16,
  },
  boxTextStyle3: {
    fontFamily: 'Oh Whale - TTF',
    color: COLORS.secondary,
    paddingVertical: 10,
    fontSize: 36,
  },
});
