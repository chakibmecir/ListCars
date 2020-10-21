

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


import SearchCars from '../Components/SearchCars'
import NoCar from '../Components/NoCar'



export default function NoCars() {

  
  return (
        <View style={styles.container}>
          <View style={styles.searchContainer}>
          <SearchCars />
          </View>
          <View style={styles.CarsList}> 
            <NoCar />
          </View>
        </View>
  );
  
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


