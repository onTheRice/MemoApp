import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet, Alert,
} from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function LogOutButton() {
  const navigation = useNavigation();

  function handlePress() {
    firebase.auth().signOut()
      .then(() => {
        console.log('success logOut');
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
        console.log('success logOut');
      })
      .catch((error) => {
        Alert.alert('ログアウトに失敗しました');
        console.log(error.code);
      });
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
