import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  const [matchData, setMatchdata] =  useState({ data: {} });
  const [matchList, setMatchlist] =  useState({ data: {} });
  const [matchCards, setMatchcards] = useState([]);

  const token = window.localStorage.getItem('token')

  // useEffect(() => {
  //   fetch(`http://137.184.103.104:8000/statboard?token_user=${token}`
  //   )
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Success:', data);
  //     setMatchdata(data)
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error);
  //   });
  // });

  useEffect(() => {
      fetch(`http://137.184.103.104:8000/matches/recommendations?token_user=${token}`
      )
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);
          setMatchlist(data);
          for (let i = 0; i < 4; i++){
              console.log(i);
              fetch(`http://137.184.103.104:8000/matches/card?token_user=${token}&uid=${matchList[i]}`
              )
              .then(response => response.json())
              .then(data => {
                  console.log('Success:', data);
                  setMatchcards(matchCards.push(data))
              })
              .catch((error) => {
                  console.error('Error:', error);
              });
          }

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });

const renderItem = ({ item }) => (
  <Item title={item.title} />
);


console.log(matchData, matchList, matchCards)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Text>
          Activity
        </Text>
        <View>
          <Text>
            Active Matches
          </Text>
        </View>
        <View>
          <Text>
            Outgoing Matches
          </Text>
        </View>
        <View>
          <Text>
            Incoming Matches
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
           data={matchCards}
           renderItem={renderItem}
           keyExtractor={item => item.id}
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
});

export default HomeScreen
