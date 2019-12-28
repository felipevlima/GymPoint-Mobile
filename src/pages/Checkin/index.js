import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';

import {
  Container,
  CButton,
  CheckinList,
  Checkins,
  CheckIn,
  CheckTime,
} from './styles';

export default function Checkin() {
  const [checkin, setCheckin] = useState([]);

  const id = useSelector(state => state.user.profile.id);

  async function loadCheckin() {
    const response = await api.get(`/students/${id}/checkins`);

    setCheckin(response.data);
  }

  async function handleSubmit() {
    try {
      await api.post(`/students/${id}/checkins`);
    } catch (erro) {
      Alert.alert(
        'Aviso',
        'Você atigiu o limite permitido durante a semana de 5 check-ins!'
      );
    } finally {
      loadCheckin();
    }
  }

  useEffect(() => {
    loadCheckin();
  }, []);

  return (
    <>
      <Background>
        <Container>
          <CButton onPress={handleSubmit}>Novo Check-in</CButton>
          <CheckinList
            data={checkin}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Checkins>
                <CheckIn>Check-in #{item.id}</CheckIn>
                <CheckTime>
                  {formatRelative(parseISO(item.createdAt), new Date(), {
                    locale: pt,
                  })}
                </CheckTime>
              </Checkins>
            )}
          />
        </Container>
      </Background>
    </>
  );
}

Checkin.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="edit-location" size={20} color={tintColor} />
  ),
  headerTitle: () => <Header />,
};
