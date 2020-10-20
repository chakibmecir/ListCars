import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { SearchBar } from 'react-native-elements';

export default class SearchCars extends React.Component {
    state = {
      search: '',
    };

    updateSearch = (search) => {
      this.setState({ search });
    };

    render() {
      const { search } = this.state;

      return (
        <SearchBar
        placeholder="Recherche par voiture, immatriculation..."
        onChangeText={this.updateSearch}
        value={search}
        containerStyle={{ backgroundColor: '#FFF', borderBottomColor: '#FFF',borderTopColor: '#FFF',  flex:1,}}
        inputContainerStyle={{ backgroundColor: '#FFF', borderColor: '#000', borderBottomColor: '#000', borderWidth: 0.3,}}
        />
      );
    }
  }
