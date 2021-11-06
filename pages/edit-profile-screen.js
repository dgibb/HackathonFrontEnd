import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'ad7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Fourth Item',
  },
  {
    id: 'aac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Fifth Item',
  },
  {
    id: 'a8694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Sixth Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function EditProfileScreen({ navigation }) {
  const [profile, setProfile] = useState({ data: {} });

    //get token from loacalstorage
    const token = window.localStorage.getItem("token");
    console.log(token);

    useEffect(() => {
      fetch(`http://137.184.103.104:8000/auth/profile/details?token_user=${token}`
      )
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setProfile(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
   <View>
     <Text>
       Name
     </Text>
   </View>

   <View>
     <Text>
       Email
     </Text>
   </View>

   <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.item}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>

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
  item: {
    flex: 1,
    textAlign: "center",
    marginLeft: 50,
    marginRight: 50,
    width: 50,
  }
});

export default EditProfileScreen;
