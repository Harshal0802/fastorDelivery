/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const RestaurantDetails = () => {
  return (
    <View>
      <Image source={require('../assets/cake.png')} style={styles.CakeImage} />
      <View style={styles.textContainer}>
        <View style={styles.nameContainer}>
          <View>
            <Text style={styles.restaurantName}>Lazy Bear</Text>
            <Text style={styles.locationName}>Connaught Place, New Delhi</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Text>⭐</Text>
            <Text>4.5</Text>
          </View>
        </View>

        <Text style={styles.offerText}>4 Offers Trending</Text>
        <Text style={styles.paraText}>
          Our delicate vanilla cake swirled with chocolate and filled with mocha
          chocolate chip cream and a layer of dark chocolate ganache
        </Text>
      </View>
    </View>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  textContainer: {
    marginHorizontal: 30,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CakeImage: {
    width: '100%',
    height: '70%',
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e232c',
  },
  locationName: {
    fontSize: 18,
    color: '#505259',
  },
  offerText: {
    marginTop: 8,
    color: '#d39171',
  },
  paraText:{
    marginTop: 20,
    fontSize: 15
  }
});
