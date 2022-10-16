import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoard from '../screens/OnBoard';
import ImageUpload from '../screens/ImageUpload';
import Home from '../screens/Home';
import Result from '../screens/Result';
import CompSkin from '../screens/Skin';
import VisualizeDisease from '../screens/VisualizeDisease';
import MeasureSeverity from '../screens/MeasureSeverity';
import Doctos from '../screens/Doctos';
import Varani from '../screens/Varani';
import Support from '../screens/Support';

import Alert from '../screens/Alert';
import {TapGestureHandler} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoard"
        screenOptions={{
          headerShown: TapGestureHandler,
        }}>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen
          name="OnBoard"
          options={{headerShown: false}}
          component={OnBoard}
        />
        <Stack.Screen
          name="CompSkin"
          options={{headerShown: false}}
          component={CompSkin}
        />
        <Stack.Screen
          name="Result"
          options={{headerShown: false}}
          component={Result}
        />
        <Stack.Screen
          name="ImageUpload"
          options={{headerShown: false}}
          component={ImageUpload}
        />
        <Stack.Screen
          name="VisualizeDisease"
          options={{headerShown: false}}
          component={VisualizeDisease}
        />
        <Stack.Screen
          name="MeasureSeverity"
          options={{headerShown: false}}
          component={MeasureSeverity}
        />
        <Stack.Screen
          name="Doctos"
          options={{headerShown: false}}
          component={Doctos}
        />
        <Stack.Screen
          name="Support"
          options={{headerShown: false}}
          component={Support}
        />
        <Stack.Screen
          name="Alert"
          options={{headerShown: false}}
          component={Alert}
        />
        <Stack.Screen
          name="Varani"
          options={{headerShown: false}}
          component={Varani}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
