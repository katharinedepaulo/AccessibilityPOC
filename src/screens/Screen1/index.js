import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, Button} from 'react-native';

const Screen1 = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Tela 1</Text>
        <Button
          onPress={() => navigation.navigate('Screen2')}
          title="Navegar para tela 2"
          accessibilityLabel={'Navegar para tela 2'}
        />
        <Button
          onPress={() => navigation.navigate('ReactNavigationModal')}
          accessibilityLabel={'Abrir tela com modal react navigation'}
          title={'Abrir tela com modal react navigation'}
        />
        <Button
          onPress={() => navigation.navigate('ScreenWithModal')}
          accessibilityLabel={'Abrir tela com modal'}
          title={'Abrir tela com modal'}
        />
        <Button
          onPress={() => navigation.navigate('ScreenWithCarousel')}
          accessibilityLabel={'Botao1'}
          title={'Abrir tela com carousel'}
        />
        <Button
          onPress={() => navigation.navigate('ScreenWithTabs')}
          accessibilityLabel={'Abrir tela com tabs'}
          title={'Abrir tela com tabs'}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});

export default Screen1;
