/* eslint-disable prettier/prettier */
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import axios from 'axios';

const OtpVerification = ({navigation}) => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');
  const [num5, setNum5] = useState('');
  const [num6, setNum6] = useState('');

  const verifyOtp = async () => {
    const otp = num1 + num2 + num3 + num4 + num5 + num6;
    const formData = new URLSearchParams();
    formData.append('phone', '9818979450');
    formData.append('otp', otp);
    formData.append('dial_code', '+91');
    if (otp === '123456') {
      try {
        const response = await axios.post(
          'https://staging.fastor.in/v1/pwa/user/login',
          formData.toString(),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        );
        const result = response.data;
        navigation.navigate('home');
      } catch (error) {}
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text style={styles.headerText}>OTP Verification</Text>
          <Text style={styles.description}>
            Enter the verfication code we just sent on your mobile number
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            ref={ref1}
            style={styles.inputField}
            maxLength={1}
            value={num1}
            keyboardType="number-pad"
            onChangeText={text => {
              setNum1(text);
              if (text.length >= 1) {
                ref2.current.focus();
              }
            }}
          />
          <TextInput
            ref={ref2}
            style={styles.inputField}
            maxLength={1}
            value={num2}
            keyboardType="number-pad"
            onChangeText={text => {
              setNum2(text);
              if (text.length >= 1) {
                ref3.current.focus();
              } else if (text.length < 1) {
                ref1.current.focus();
              }
            }}
          />
          <TextInput
            ref={ref3}
            style={styles.inputField}
            maxLength={1}
            value={num3}
            keyboardType="number-pad"
            onChangeText={text => {
              setNum3(text);
              if (text.length >= 1) {
                ref4.current.focus();
              } else if (text.length < 1) {
                ref2.current.focus();
              }
            }}
          />
          <TextInput
            ref={ref4}
            style={styles.inputField}
            maxLength={1}
            value={num4}
            keyboardType="number-pad"
            onChangeText={text => {
              setNum4(text);
              if (text.length >= 1) {
                ref5.current.focus();
              } else if (text.length < 1) {
                ref3.current.focus();
              }
            }}
          />
          <TextInput
            ref={ref5}
            style={styles.inputField}
            maxLength={1}
            value={num5}
            keyboardType="number-pad"
            onChangeText={text => {
              setNum5(text);
              if (text.length >= 1) {
                ref6.current.focus();
              } else if (text.length < 1) {
                ref4.current.focus();
              }
            }}
          />
          <TextInput
            ref={ref6}
            style={styles.inputField}
            maxLength={1}
            value={num6}
            keyboardType="number-pad"
            onChangeText={text => {
              setNum6(text);
              if (text.length >= 1) {
                ref6.current.focus();
              } else if (text.length < 1) {
                ref5.current.focus();
              }
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={verifyOtp}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.receivedText}>
            Didn't received code? <Text style={styles.resendBtn}>Resend</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    color: '#1e232c',
  },
  description: {
    fontSize: 18,
    color: '#8391a1',
  },
  inputContainer: {
    width: '100%',
    marginVertical: 40,
    flexDirection: 'row',
  },
  inputField: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    textAlign: 'center',
  },
  button: {
    width: 360,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#ff6d6a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '400',
  },
  textContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  receivedText: {
    color: '#1e232c',
    fontSize: 15,
  },
  resendBtn: {
    color: '#5574c6',
  },
});
