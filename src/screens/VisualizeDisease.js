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
        <Text style={styles.title2}>Visualize Infected Area</Text>
        <View style={{alignItems: 'center', paddingHorizontal: 20}}>
          <Image
            style={{
              width: SIZES.width * 0.8,
              height: SIZES.height * 0.7,
              marginTop: SIZES.height * 0.05,
              resizeMode: 'cover',
            }}
            source={require('../assets/images/thermalcameras.jpeg')}
          />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MeasureSeverity');
          }}
          style={styles.btn}>
          <Text style={styles.btnText}>Measure Severity</Text>
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
    height: SIZES.height,
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
    marginTop: SIZES.height * 0.05,
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
});
