import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { withNavigationFocus } from 'react-navigation';
import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';

import {
  Container,
  CButton,
  HelpList,
  Help,
  HelpTitle,
  HelpAnswer,
  HelpResp,
  HelpTime,
} from './styles';

function HelpOrders({ navigation, isFocused }) {
  const [helpOrder, setHelpOrder] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const id = useSelector(state => state.user.profile.id);

  async function loadHelpOrders() {
    const response = await api.get(`/students/${id}/help-orders`);

    setHelpOrder(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadHelpOrders();
    }
  }, [isFocused]);

  async function load() {
    const response = await api.get(`/students/${id}/help-orders`);

    setHelpOrder(response.data);
    setRefreshing(false);
  }

  function refreshList() {
    setRefreshing(true);
    load();
  }

  return (
    <>
      <Background>
        <Container>
          <CButton onPress={() => navigation.navigate('New')}>
            Novo Pedido de auxílio
          </CButton>
          <HelpList
            data={helpOrder}
            onRefresh={refreshList}
            refreshing={refreshing}
            onEndReachedThreshold={0.2}
            onEndReached={refreshList}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Help onPress={() => navigation.navigate('Question', { item })}>
                <HelpTitle>
                  <HelpAnswer resp={item.answer_at}>
                    {item.answer_at ? 'Respondido' : 'Sem resposta'}
                  </HelpAnswer>
                  <HelpTime>
                    {item.answer_at
                      ? formatRelative(parseISO(item.answer_at), new Date(), {
                          locale: pt,
                          addSuffix: true,
                        })
                      : 'Sem resposta'}
                  </HelpTime>
                </HelpTitle>

                <HelpResp>{item.question}</HelpResp>
              </Help>
            )}
          />
        </Container>
      </Background>
    </>
  );
}

HelpOrders.navigationOptions = {
  tabBarLabel: 'Pedir ajuda',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="live-help" size={20} color={tintColor} />
  ),
  headerTitle: () => <Header />,
};

export default withNavigationFocus(HelpOrders);
