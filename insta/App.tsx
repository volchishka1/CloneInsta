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
import {SearchScreen} from "./src/screens/SearchScreen";



const App = () => {

  return (
    <SafeAreaView >
        <SearchScreen />
        {/*<HomeScreen />*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});


export default App;
