import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;

  function handlePress() {
    const db = firebase.firestore();
    const ref = db.collection('memos');
    console.log('start add');
    ref.add({
      bodyText: 'Hello',
    })
      .then((dockRef) => {
        console.log('Create!', dockRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log('Error', error);
      });
    console.log('end add');
  }

  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton
        name="check"
        onPress={handlePress}
      />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
    textAlignVertical: 'top',
  },
});
