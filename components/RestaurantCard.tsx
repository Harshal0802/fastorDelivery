/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RestaurantCard = ({color}) => {
  return (
    <View style={[styles.nameContainer, {backgroundColor: color}]}>
      <Image source={require('../assets/cake.png')} style={styles.CakeImage} />
      <View style={styles.textContainer}>
        <Text style={styles.restaurantName}>Lazy Bear</Text>
        <Text style={styles.locationName}>Connaught Place,</Text>
        <Text style={styles.locationText}>New Delhi</Text>
      </View>
    </View>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  nameContainer: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  textContainer: {
    marginHorizontal: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CakeImage: {
    width: '100%',
    height: 100,
  },
  restaurantName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1e232c',
    marginVertical: 5,
  },
  locationName: {
    fontSize: 10,
    color: '#505259',
  },
  offerText: {
    marginTop: 8,
    color: '#d39171',
  },
  paraText: {
    marginTop: 20,
    fontSize: 15,
  },
  locationText: {
    fontSize: 10,
    color: '#505259',
  },
});
