import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Item = ({ name, interest, imgurl}) => (
  <View style={styles.match}>
    <Text style={styles.title}>{name}</Text>
      <View style={styles.flexrow}>
        <Image style={styles.image} source={{uri: {imgurl} }}/>
        <Text style={styles.title}>{interest}</Text>
      </View>
  </View>
);

function HomeScreen({ navigation }) {
  const [matchData, setMatchdata] =  useState({ data: {} });
  const [matchList, setMatchlist] =  useState({ data: {} });

  const token = window.localStorage.getItem('token');

  useEffect(() => {
    fetch(`http://137.184.103.104:8000/statboard?token_user=${token}`
    )
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      setMatchdata(data)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }, [token]);

  useEffect(() => {
      fetch(`http://137.184.103.104:8000/matches/recommendations/cards?token_user=${token}`
      )
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);
          setMatchlist(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [token]);

const renderItem = ({ item }) => (
  <Item name={item.full_name} interest={item.major_match_interest} />
);

  return (
    <View >
      
      <View style={styles.myProfButtonContainer}>
        <Button 
        title = "My Profile" 
        style={styles.myProfButton}  
        onPress={() => navigation.navigate('Profile')} />       
      </View>
      
      <Text>Home Screen</Text>

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Text>
          Activity
        </Text>
        <View>
          <Text>
            Active Matches {matchData.number_active_matches}
          </Text>
        </View>
        <View>
          <Text>
            Outgoing Matches {matchData.number_incoming_matches}
          </Text>
        </View>
        <View>
          <Text>
            Incoming Matches {matchData.number_active_matches}
          </Text>
        </View>
      </View>

      <View>
        <Text>
          Matches
        </Text>
      </View>

      <View>
      <SafeAreaView style={styles.container}>
         <FlatList
           data={matchList}
           renderItem={renderItem}
           keyExtractor={item => item.uid}
         />
       </SafeAreaView>
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

  myProfButtonContainer: {
    flexDirection: 'row-reverse',
  },

  myProfButton: {
    backgroundColor: '#7fffd4',
    width: 20
  }
  image: {
    height:10,
    width: 10,
  },
  flexrow: {
    flexDirection: 'row',
  }
});

export default HomeScreen
