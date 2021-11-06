import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ProfileScreen() {
  

  const email = window.localStorage.getItem("email");
  

  function changeUsername(){
    
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Text>profile pic</Text>

      <View>
        <Text>Username: </Text>

        <Button title="edit" onPress={changeUsername}/>
      </View>

      <View>
        <Text>Email: {email}</Text>
      </View>

      <View style={styles.interests}> 
        <Text>My Interests:</Text>
      </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  interests:{
    flex: 1,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 10,

  }
});

export default ProfileScreen;
