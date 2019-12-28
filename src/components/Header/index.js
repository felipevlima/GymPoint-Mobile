import React from 'react';
import { StatusBar } from 'react-native';

import logo from '~/assets/gympointlogo.png';

import { Container, HeaderPrincipal, Image } from './styles';

export default function Header() {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <HeaderPrincipal>
        <Image source={logo} />
      </HeaderPrincipal>
    </Container>
  );
}
