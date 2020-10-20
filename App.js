

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';


import SearchCars from './Components/SearchCars'
import ListCars from './Components/ListCars'



export default class App extends React.Component {

  render() {
  return (
        <View style={styles.container}>
          <View style={styles.searchContainer}>
          <SearchCars />
          </View>
          <View style={styles.CarsList}> 
            <ListCars />
          </View>
        </View>
  );
  };
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFF',
  },
  searchContainer:{
    flex: 0.1,
  },
  CarsList:{
    flex: 0.9,
    backgroundColor: '#FFF'
  }
  
});


