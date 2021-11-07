import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function RegisterScreen({ navigation }) {

  const register = function(email, password) {
    fetch('http://137.184.103.104:8000/auth/account/create', {
      body: `email_address=${email}&password=${password}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      if(data.token !== ""){
        window.localStorage.setItem('token', data.token.toString());
        navigation.navigate('EditProfile');
      }
      else{
        console.log("token is empty")
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.body}>
      <TextInput
        style={{height: 40}}
        placeholder="Email"
        onChangeText={email => setEmail(email)}
        defaultValue={email}
      />

      <TextInput
          style={{height: 40}}
          placeholder="Password"
          onChangeText={password => setPassword(password)}
          defaultValue={password}
        />

      <TouchableOpacity
        onPress={() => register(email, password)}
        style={{ backgroundColor: 'blue' }}>
        <Text style={styles.button}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
  },
  upper: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  lower: {
    flex: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  button: {
    backgroundColor: 'EC6F66',
    padding: 5,
    margin: 5,
    fontSize: 10,
    width: "50%",
  },
});

export default RegisterScreen;
