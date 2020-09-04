import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, Button} from 'react-native';

const Screen2 = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.sectionTitle}>Tela 2</Text>
        <Button
          accessible={true}
          onPress={() => navigation.navigate('Screen1')}
          accessibilityLabel={'Voltar para tela 1'}
          title={'Voltar para tela 1'}
        />
        <Button
          accessible={true}
          onPress={() => navigation.navigate('Screen3')}
          accessibilityLabel={'Navegar para tela 3'}
          title={'Navegar para tela 3'}
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

export default Screen2;
