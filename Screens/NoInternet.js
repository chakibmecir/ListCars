

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



import NoCnx from '../Components/NoCnx'



export default function NoInternet() {

  
  return (
        <View style={styles.container}>
          <NoCnx />
        </View>
  );
  
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems:'center',
  },
});


