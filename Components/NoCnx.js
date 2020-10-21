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



export default class NoCnx extends React.Component {
  
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.cnx}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/lost-conection.png')}
                />
                <Text style={styles.title}>Pas de connexion</Text>
                <Text style={styles.smalltext}>Assurez-vous que vous êtes connecté à Internet</Text>
            </View>
            <View style={styles.bottom}>
                
            </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: 0,
      alignItems:'center',
      justifyContent: 'center',
      flex: 0.4,
      
    },
    bottom: {
        flex: 0.2,
        width: 332,
        backgroundColor: '#f1f1f1',
    },
    cnx :{
        flex: 0.6,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        justifyContent:'space-evenly',
        alignItems:'center',
        marginHorizontal: 30,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
      },
      smalltext:{
        textAlign:'center',
        fontSize: 16,
        paddingHorizontal: 35,
    },
  });