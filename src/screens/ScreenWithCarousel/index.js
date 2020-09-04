import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View,
  Dimensions,
  AccessibilityInfo,
  findNodeHandle,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width} = Dimensions.get('window');

const ScreenWithModal = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const carouselRef = useRef(null);
  const firstSlideRef = useRef(null);
  const secondSlideRef = useRef(null);
  const entries = [0, 1];

  const getStatus = async () => {
    const status = await AccessibilityInfo.isScreenReaderEnabled();
    setIsEnabled(status);
  };

  useEffect(() => {
    getStatus();
  }, []);

  const setFocusOnSecond = () => {
    /* Necessário para focar no primeiro item do slide 2 */
    const reactTag = findNodeHandle(secondSlideRef.current);
    AccessibilityInfo.setAccessibilityFocus(reactTag);
  };

  const handleFirstItemButton = () => {
    carouselRef.current.snapToNext();
    setFocusOnSecond();
  };

  const handleSecondItemButton = () => {
    /* O leitor de telas vai focar no botão do primeiro slide, ja que não mudamos o
    foco para o primeiro item da tela, como no handle do primeiro botão */
    carouselRef.current.snapToPrev();
  };

  const firstItem = () => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title} ref={firstSlideRef}>
          {'Carousel 1'}
        </Text>
        <Button
          onPress={handleFirstItemButton}
          accessibilityLabel={'Ir para slide 2'}
          title={'Ir para slide 2'}
        />
        <Button
          onPress={() => navigation.navigate('Screen1')}
          accessibilityLabel={'Ir para tela 1'}
          title={'Ir para tela 1'}
        />
      </View>
    );
  };

  const secondItem = () => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title} ref={secondSlideRef}>
          {'Carousel 2'}
        </Text>
        <Button
          onPress={handleSecondItemButton}
          accessibilityLabel={'Ir para slide 1'}
          title={'Ir para slide 1'}
        />
      </View>
    );
  };

  const renderItem = ({item, index}) => {
    return index === 0 ? firstItem() : secondItem();
  };

  /* scrollEnabled=false é necessário se não ao fazer swipe de leitura
  o scroll se move -> investigar se o componente tem suporte a acessibilidade */

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Carousel
          ref={carouselRef}
          data={entries}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width}
          scrollEnabled={!isEnabled}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});

export default ScreenWithModal;
