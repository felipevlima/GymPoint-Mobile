import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert, View, Image, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import Background from '~/components/Background';
import logo from '~/assets/gympointlogo.png';

import { Container, Form, FormInput, SubmitButton, FormTitle } from './styles';

export default function New({ navigation }) {
  const id = useSelector(state => state.user.profile.id);

  const [question, setQuestion] = useState('');

  async function handleSubmit() {
    await api.post(`/students/${id}/help-orders`, {
      question,
    });

    Alert.alert('Aviso', 'Sua pergunta foi enviada com sucesso!');
    navigation.navigate('HelpOrders');
  }

  return (
    <Background>
      <Container>
        <Form>
          <FormTitle>Como podemos ajudar?</FormTitle>
          <FormInput
            autoCorrect
            placeholder="Digite aqui..."
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            onChangeText={setQuestion}
            textAlignVertical="top"
            multiline
          />

          <SubmitButton onPress={handleSubmit}>Enviar pedido</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

New.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'Pedir Ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
  headerTitle: () => (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 64,
        flex: 1,
      }}
    >
      <Image
        resizeMode="cover"
        style={{ width: 118, height: 18 }}
        source={logo}
      />
    </View>
  ),
  headerLeft: () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 64,
        paddingLeft: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon name="chevron-left" size={30} color="#EE4E62" />
      </TouchableOpacity>
    </View>
  ),
});
