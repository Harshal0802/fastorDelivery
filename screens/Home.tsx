/* eslint-disable prettier/prettier */
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import RestaurantCard from '../components/RestaurantCard';

const Home = ({navigation}) => {
  //   useEffect(() => {
  // const getRestaurantList = async () => {
  //   const resp = await axios.get(
  //     'https://staging.fastor.in/v1/m/restaurant?city_id=118&&',
  //     {
  //       headers: {
  //         'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsImVtYWlsIjoiOTgxODk3OTQ1MEBmYXN0b3IuaW4iLCJwaG9uZSI6Ijk4MTg5Nzk0NTAiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjItMDEtMjVUMTE6NTU6NDcuMDAwWiIsImlhdCI6MTY0MzI5MjI4MywiZXhwIjoxNjUwNTQ5ODgzfQ.BuBKUQbczitsAPcYH13by1atgHh1Sf3SxwVYW1gLUCs`,
  //       },
  //     },
  //   );
  //   const result = await resp.data;
  // };
  // getRestaurantList();
  //   }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.headerContainer}>
            <View style={styles.subHeaderContainer}>
              <Text style={styles.orderText}>Pre Order From</Text>
              <View>
                <Text>Logo</Text>
              </View>
            </View>
            <Text style={styles.locationText}>Connaught Place</Text>
          </View>
          <View style={styles.offerContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>Karan</Text>
              <Text style={styles.descriptionBanner}>
                Let's explore this evening
              </Text>
            </View>
            <View style={styles.offerWalletContainer}>
              <View>
                <Image
                  source={require('../assets/offer.jpg')}
                  style={styles.offerImage}
                />
                <Text style={styles.offerText}>Offers</Text>
              </View>
              <View>
                <Image
                  source={require('../assets/wallet.jpg')}
                  style={styles.offerImage}
                />
                <Text style={styles.walletText}>Wallet</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{marginVertical: 35}}>
              <View style={styles.resNameContainer}>
                <Text style={styles.tasteText}>Your taste</Text>
                <Text style={styles.seeAllText}>
                  see all{'   '}
                  <Image
                    source={require('../assets/back.png')}
                    style={styles.seeAllIcon}
                  />{' '}
                </Text>
              </View>
              <View style={styles.restaurantContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('restaurantDetails')}>
                  <RestaurantCard color={'#f3e4f8'} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('restaurantDetails')}>
                  <RestaurantCard color={'#b9bc90'} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('restaurantDetails')}>
                  <RestaurantCard color={'#f3e4f8'} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('restaurantDetails')}>
                  <RestaurantCard color={'#f3e4f8'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    margin: 20,
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowColor: '#000',
  },
  subHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderText: {
    fontSize: 16,
    color: '#8b9ca8',
  },
  locationText: {
    fontSize: 17,
    color: '#3a4954',
  },
  restaurantContainer: {
    width: '30%',
    height: '50%',
    flexDirection: 'row',
    // marginLeft: 10,
  },
  nameContainer: {
    width: '50%',
  },
  offerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  descriptionBanner: {
    fontSize: 19,
    color: '#3a4954',
  },
  name: {
    fontSize: 18,
    color: '#8b9ca8',
  },
  offerImage: {
    borderWidth: 1,
    width: 40,
    height: 40,
  },
  offerText: {
    color: '#bac4cb',
  },
  walletText: {
    color: '#bac4cb',
  },
  offerWalletContainer: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  resNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  tasteText: {
    fontSize: 25,
    color: '#384853',
  },
  seeAllText: {
    color: '#8595a0',
  },
  seeAllIcon: {
    height: 20,
    width: 20,
  },
});
