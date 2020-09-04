import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View,
  findNodeHandle,
  AccessibilityInfo,
} from 'react-native';
import Modal from 'react-native-modal';

const ScreenWithModal = ({navigation}) => {
  const firstTextRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  /* Ao abrir o modal, o foco se perde, é preciso focar no primeiro elemento para
  obter o comportamento esperado do leitor de telas */
  const setFocus = () => {
    const reactTag = findNodeHandle(firstTextRef.current);
    AccessibilityInfo.setAccessibilityFocus(reactTag);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.sectionTitle}>Tela com modal</Text>
        <Button
          onPress={showModal}
          accessibilityLabel={'Mostrar modal'}
          title={'Mostrar modal'}
        />
        <Button
          onPress={() => navigation.goBack()}
          accessibilityLabel={'Voltar'}
          title={'Voltar'}
        />
        <Modal isVisible={modalVisible} onModalShow={setFocus}>
          <View style={styles.modal}>
            <Text ref={firstTextRef} accessible={true}>
              Texto dentro do modal
            </Text>
            <Button
              onPress={hideModal}
              accessibilityLabel={'Fechar modal'}
              title={'Fechar modal'}
            />
          </View>
        </Modal>
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
  modal: {
    flex: 1,
    backgroundColor: 'white',
    margin: 0,
    padding: 20,
  },
});

export default ScreenWithModal;
