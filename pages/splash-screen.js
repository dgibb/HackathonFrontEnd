// import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
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
        <Text style={styles.appname}>Coterie</Text>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/graph.png')}
        />
      </View>

      <View style={styles.lower}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.button}>
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={styles.button}>
          <Text style={styles.buttontext}>Register</Text>
        </TouchableOpacity>

        <Text>well delete everything below here later, just for easier navigation</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfile')}
          style={styles.button}>
          <Text style={styles.buttontext}>Edit Profile</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    flex:1,
  },
  upper: {
    flex: 10,
    backgroundColor: 'peachpuff',
  },
  appname: {
    marginTop: 50,
    color: 'white',
    fontSize: 50,
    margin: 'auto',
  },
  lower: {
    flex: 4,
    backgroundColor: 'peachpuff',
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#EC6F66',
    padding: 8,
    paddingBottom: 10,
    margin: 'auto',
    marginBottom: 10,
    fontSize: 15,
    width: '50%',
    borderRadius: 8,
  },
  buttontext: {
    color: 'white',
    fontSize: 20,
  },
  tinyLogo: {
    position: 'fixed',
    width: '100%',
    height: 300,
    top: '50%',
    transform: 'translateY(-50%)',
  }
});

export default SplashScreen;
