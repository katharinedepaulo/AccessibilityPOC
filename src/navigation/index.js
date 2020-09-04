import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import ScreenWithModal from '../screens/ScreenWithModal';
import ScreenWithCarousel from '../screens/ScreenWithCarousel';
import ScreenWithTabs from '../screens/ScreenWithTabs';
import ReactNavigationModal from '../screens/ReactNavigationModal';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
// import {createStackNavigator} from '@react-navigation/stack';

enableScreens();
const Stack = createNativeStackNavigator();

function NavigationStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: 'Screen1',
      }}>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
      <Stack.Screen name="ScreenWithModal" component={ScreenWithModal} />
      <Stack.Screen name="ScreenWithCarousel" component={ScreenWithCarousel} />
      <Stack.Screen name="ScreenWithTabs" component={ScreenWithTabs} />
    </Stack.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        stackPresentation: 'modal',
        initialRouteName: 'NavigationStack',
      }}>
      <Stack.Screen name="NavigationStack" component={NavigationStack} />
      <Stack.Screen
        name="ReactNavigationModal"
        component={ReactNavigationModal}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
