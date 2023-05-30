/*
 * Created by Asad on 30 May 2023 []
 */

import React from 'react';
import { SafeAreaView, FlatList, View, Text, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import config from '../../config/config';
import { addLocation } from '../../redux/actions/locationActions';

const HomeScreen: React.FC = () => {

  const dispatch = useDispatch();
  const locations = useSelector((state: Location[]) => state.locations);
  
  const renderItem = (location) => {
    const { description } = location.item
    
    return (
      <View style={styles.item}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>)
  };

  return (
    <SafeAreaView style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => dispatch(addLocation(data))}
        query={{
          key: config.googleMapsApiKey,
          language: 'en', // Change language if desired
        }}
        currentLocation={true}
        currentLocationLabel="Current Location"
        enablePoweredByContainer={false}
      />

      <FlatList
        data={locations}
        keyExtractor={(location) => location.place_id}
        renderItem={renderItem}
        initialNumToRender={10} // Number of items to render initially
        windowSize={7} // Number of items to keep in memory
        removeClippedSubviews={true} // Remove items not currently visible
        maxToRenderPerBatch={5} // Maximum number of items to render per batch
        updateCellsBatchingPeriod={100} // Delay between rendering batches
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    marginTop: 5
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  }
});

export default HomeScreen;