import React, {useRef} from 'react';
import {StyleSheet, Button, View, Dimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';

/* Ao navegar entre tabs o leitor se perde -> investigar melhor se essa lib tem
suporte a acessibilidade */

const ScreenWithTabs = ({navigation}) => {
  const secondTabFirstRef = useRef(null);

  const FirstTab = ({jumpTo}) => {
    return (
      <View style={[styles.scene]}>
        <Button
          onPress={() => navigation.navigate('Screen2')}
          title="Navegar para tela 2"
          accessibilityLabel={'Navegar para tela 2'}
        />
        <Button
          onPress={() => jumpTo('second')}
          title="Navegar para slide 2"
          accessibilityLabel={'Navegar para slide 2'}
        />
      </View>
    );
  };

  const SecondRoute = ({jumpTo}) => (
    <View style={[styles.scene]}>
      <Button
        ref={secondTabFirstRef}
        onPress={() => navigation.goBack()}
        title="Voltar para tela 1"
        accessibilityLabel={'Voltar para tela 1'}
      />
      <Button
        onPress={() => jumpTo('first')}
        title="Navegar para slide 1"
        accessibilityLabel={'Navegar para slide 1'}
      />
    </View>
  );

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'first':
        return <FirstTab jumpTo={jumpTo} />;
      case 'second':
        return <SecondRoute jumpTo={jumpTo} />;
    }
  };

  const initialLayout = {width: Dimensions.get('window').width};

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ScreenWithTabs;
