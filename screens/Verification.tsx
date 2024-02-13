/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';

function Verification({navigation}): JSX.Element {
  const [mobileNumber, setMobileNumber] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#ffffff'} />
      <View>
        <View>
          <Text style={styles.headerText}>Enter Your Mobile Number</Text>
          <Text style={styles.descriptionText}>
            We will send you the 4 digit verification code
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter your number"
            onChangeText={text => setMobileNumber(text)}
            maxLength={10}
            style={styles.input}
            placeholderTextColor={'#8391a1'}
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('otpverification')}>
          <Text style={styles.btnText}>Send Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    color: '#1e232c',
  },
  descriptionText: {
    fontSize: 18,
    color: '#8391a1',
  },
  input: {
    width: 350,
    height: 60,
    borderWidth: 2,
    borderColor: '#dadada',
    borderRadius: 10,
    padding: 15,
  },
  btn: {
    backgroundColor: '#ff6d6a',
    width: 350,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '400',
  },
  inputContainer: {
    marginTop: 30,
    marginBottom: 15,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Verification;
