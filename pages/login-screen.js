import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

function LoginScreen({ navigation }) {
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
        onPress={() => login(email, password)}
        style={{ backgroundColor: 'blue' }}>
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

function login(email, password) {

  fetch('http://137.184.103.104:8000/auth/account/login', {
    body: `email_address=${email}&password=${password}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    navigation.navigate('Home')
  })
  .catch((error) => {
    console.error('Error:', error);
  });
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

export default LoginScreen;
