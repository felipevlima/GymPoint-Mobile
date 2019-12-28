import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Image, View, TouchableOpacity } from 'react-native';

import logo from '~/assets/gympointlogo.png';
import Background from '~/components/Background';

import {
  Container,
  QuestionBox,
  QuestionTitle,
  QuestionAnswer,
  QuestionHour,
  QuestionText,
  QuestionResp,
  QuestionTitleResp,
  QuestionTextResp,
} from './styles';

export default function Question({ navigation }) {
  const item = navigation.getParam('item');

  return (
    <Background>
      <Container>
        <QuestionBox>
          <QuestionTitle>
            <QuestionAnswer>PERGUNTA</QuestionAnswer>
            <QuestionHour>
              {item.answer_at ? formatRelative(parseISO(item.answer_at), new Date(), {
                locale: pt,
                  })
                : 'Sem resposta'}
            </QuestionHour>
          </QuestionTitle>
          <QuestionText>{item.question}</QuestionText>
          <QuestionResp>
            <QuestionTitleResp>RESPOSTA</QuestionTitleResp>
            <QuestionTextResp>
              {item.answer
                ? item.answer
                : 'Aguarde, em breve nossos instrutores entraram em contato com você!'}
            </QuestionTextResp>
          </QuestionResp>
        </QuestionBox>
      </Container>
    </Background>
  );
}

Question.navigationOptions = ({ navigation }) => ({
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
