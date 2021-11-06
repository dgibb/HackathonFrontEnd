import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function SplashScreen({ navigation }) {
  const token = localStorage.getItem('token');
  if(token) {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.body}>

      <View style={styles.upper}>
        <Text>App Name</Text>
        <LinearGradient
        colors={['#ffafbd, #ffc3a0']}
        />
      </View>

      <View style={styles.lower}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{ backgroundColor: 'blue' }}>
          <Text style={{ fontSize: 20, color: '#fff' }}>Login</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={{ backgroundColor: 'red' }}>
          <Text style={styles.button}>Register</Text>
        </TouchableOpacity>

        <Text>well delete everything below here later, just for easier navigation</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile')}
          style={{ backgroundColor: 'green' }}>
          <Text style={styles.button}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
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

export default SplashScreen;
