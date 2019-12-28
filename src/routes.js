import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';

import Checkins from './pages/Checkin';
import HelpOrders from './pages/HelpOrders';
import New from './pages/Answer/New';
import Question from './pages/Answer/Question';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            screen1: createStackNavigator(
              {
                Checkins,
              },
              {
                navigationOptions: {
                  tabBarLabel: 'Check-ins',
                  tabBarIcon: ({ tintColor }) => (
                    <Icon name="edit-location" size={20} color={tintColor} />
                  ),
                },
              }
            ),
            screen2: createStackNavigator(
              {
                HelpOrders,
                New,
                Question,
              },
              {
                navigationOptions: {
                  tabBarLabel: 'Pedir Ajuda',
                  tabBarIcon: ({ tintColor }) => (
                    <Icon name="live-help" size={20} color={tintColor} />
                  ),
                },
              }
            ),
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#ee4e62',
              inactiveTintColor: '#999999',
              style: {
                backgroundColor: '#FFF',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
