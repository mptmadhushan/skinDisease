import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';
export default function OnBoard({navigation, route}) {
  const api = {foo: 'bar', foz: 'baz'};
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/bg.jpg')}>
      <LinearGradient
        colors={['transparent', COLORS.primary, COLORS.primary]}
        style={styles.overlay}>
        <Text style={styles.title2}>Measure Severity</Text>
        <View style={styles.box}>
          <Image
            source={require('../assets/images/acne-box-1.jpeg')}
            resizeMode="contain"
            style={{
              width: SIZES.width * 0.1,
              height: SIZES.width * 0.1,
            }}
          />
          <Text style={styles.title}>Impact area</Text>
          <Image
            source={require('../assets/images/prog.png')}
            resizeMode="contain"
            style={{
              width: SIZES.width * 0.3,
              height: SIZES.width * 0.3,
            }}
          />
        </View>
        <View style={styles.box}>
          <Image
            source={require('../assets/images/acne-box-1.jpeg')}
            resizeMode="contain"
            style={{
              width: SIZES.width * 0.1,
              height: SIZES.width * 0.1,
            }}
          />
          <Text style={styles.title}>Impact Level</Text>
          <Image
            source={require('../assets/images/level.jpeg')}
            resizeMode="contain"
            style={{
              width: SIZES.width * 0.2,
              height: SIZES.width * 0.2,
            }}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Doctos');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>Doctors</Text>
        </TouchableOpacity>
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
  btn: {
    backgroundColor: COLORS.secondary,
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
  btnText: {
    color: COLORS.white,
  },
  title: {
    color: COLORS.secondary,
    fontSize: 20,
    textAlign: 'center',
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
  title2: {
    marginTop: SIZES.height * 0.3,
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
  box: {
    flexDirection: 'row',
    width: SIZES.width * 0.8,
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
});
