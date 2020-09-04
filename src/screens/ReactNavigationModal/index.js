import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';

const Modal = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.sectionTitle} accessible={true}>
          Modal
        </Text>
        <Button
          onPress={() => navigation.goBack()}
          accessibilityLabel={'Close modal'}
          title={'Close modal'}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});

export default Modal;
