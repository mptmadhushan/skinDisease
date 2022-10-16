import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {icons, images, SIZES, COLORS, FONTS} from '../helpers';
import LinearGradient from 'react-native-linear-gradient';

export default function OnBoard({navigation, route}) {
  const [text, setText] = React.useState('');

  const api = {foo: 'bar', foz: 'baz'};
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/bg.jpg')}>
      <LinearGradient
        colors={[COLORS.third, 'transparent', COLORS.third]}
        style={styles.overlay}>
        <Text style={styles.title2}>Support Community</Text>
        <View style={styles.box}>
          <Text style={styles.title}>Patient01</Text>
          <Text style={styles.title}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. It is a
            long established?
          </Text>
        </View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Review"
          multiline={true}
          numberOfLines={4}
          onChangeText={val => setText(val)}
          value={text}
        />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Doctos');
            }}
            style={styles.btn}>
            <Text style={styles.btnText}>Post</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Doctos');
            }}
            style={styles.btn}>
            <Text style={styles.btnText}>Cancel</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{flex: 1, height: SIZES.height * 0.3}}>
          <View style={styles.box}>
            <Text style={styles.title}>Patient01</Text>
            <Text style={styles.title}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established?
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>Patient01</Text>
            <Text style={styles.title}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established?
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>Patient01</Text>
            <Text style={styles.title}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established?
            </Text>
          </View>
        </ScrollView>
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
    backgroundColor: COLORS.third,
    height: 40,
    width: 150,
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
    color: COLORS.black,
    fontSize: 15,
    textAlign: 'left',
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
    marginTop: SIZES.height * 0.1,
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  },
  box: {
    // flexDirection: 'row',
    width: SIZES.width * 0.8,
    height: SIZES.width * 0.3,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    // alignItems: 'center',
    alignContent: 'center',
    padding: 5,
    justifyContent: 'center',
  },
  inputStyle: {
    width: SIZES.width * 0.8,
    color: '#00BFA6',
    paddingLeft: 15,
    paddingRight: 15,
    // placeHolder: 'white',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
  },
});
