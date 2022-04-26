import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {HomeScreen} from "./src/screens/HomeScreen";



const App = () => {

  return (
    <SafeAreaView >
        <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});


export default App;
