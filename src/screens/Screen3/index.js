import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, Button} from 'react-native';

const Screen3 = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.sectionTitle}>Tela 3</Text>
        <Button
          onPress={() => navigation.navigate('Screen1')}
          title={'Navegar para tela 1'}
          accessibilityLabel={'Navegar para tela 1'}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});

export default Screen3;
