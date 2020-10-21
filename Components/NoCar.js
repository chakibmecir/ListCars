import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';



export default class NoCar extends React.Component {
  
    render() {
      return (
        <View style={styles.container}>
            <Image
            style={styles.tinyLogo}
            source={require('../assets/notfound.png')}
            />
            <Text style={styles.title}>Véhicule introuvable</Text>
            <Text style={styles.smalltext}>Le véhicule que vous avez recherché n'est pas disponible ou ne fait pas partie de notre flotte.</Text>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 0,
      alignItems:'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
    },
    smalltext:{
        textAlign:'center',
        fontSize: 16,
    },
    tinyLogo: {
      width: '100%',
      height: 100,
      resizeMode: 'contain'
    },
  });