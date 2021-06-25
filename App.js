import 'react-native-gesture-handler';
import * as React from 'react';
import NavigationStack from './components/NavigationStack'
import {LogBox } from 'react-native';

// To ignore the warning Reanimated 2 (we don't need it)
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <NavigationStack />
  )
}

export default App;