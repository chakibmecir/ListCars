import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

const DATA = [
  {
    id: 'AB-123-AA',
    title: 'Renault Clio 4',
    CarImg: { uri: 'https://cdn.pixabay.com/photo/2015/10/01/17/17/car-967387_1280.png'},
    CarColor: 'Bleu Marine',
  },
  {
    id: 'AB-123-AB',
    title: 'Renault Clio 4',
    CarImg: { uri: 'https://cdn.pixabay.com/photo/2018/02/27/16/23/car-3185869_960_720.png'},
    CarColor: 'Bleu Marine',
  },
  
];

const Item = ({ title, id , CarColor, CarImg }) => (
  <View style={styles.item}>
    <View style={styles.carImg}>
    <Image
        style={styles.tinyLogo}
        source={CarImg}
      />
    </View>
    <View style={styles.carInfo}>
        <View style={styles.carName}>
            <Text style={styles.title}> { title } </Text>
            <Text style={styles.grayTitle}> { id } </Text>
        </View>
        <View style={styles.carColor}>
            <Text style={styles.grayTitle}> {CarColor} </Text>
        </View>
    </View>
  </View>
);

const ListCars = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id} CarColor={item.CarColor} CarImg={item.CarImg} />
  );

  return (
    <View style={styles.container}>
        <Text style={styles.mainTitle}>Véhicules Disponible</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    backgroundColor: '#FFF',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 10,
    flexDirection: 'row',
  },

  carImg:{
    flex: 0.2,
    backgroundColor: '#FFF',
  },

  carInfo:{
    flex: 0.8,
    flexDirection:'column',
    marginHorizontal: 5,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },

  carName:{
    flexDirection: 'row',
    justifyContent: "space-between",
    marginBottom: 3,
  },

  mainTitle: {
    fontSize: 20,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  grayTitle:{
    color: 'gray',
  },
  tinyLogo: {
    width: '100%',
    height: 50,
    resizeMode: 'contain'
  },
});

export default ListCars;