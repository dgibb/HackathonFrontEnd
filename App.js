import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, Button, View, DatePickerAndroid } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View>
        <Button title="Login"></Button>
      </View>

      <View>
        <Button title="Register"></Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'Pink',

  }
});
