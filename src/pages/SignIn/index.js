import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import logo from '~/assets/logo.png';

import { Container, Form, FormInput, SubmitButton } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();

  const [id, setId] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(id));
  }

  return (
    <Container>
      <Image source={logo} />
      <Form>
        <FormInput
          icon="person"
          keyboardType="numeric"
          placeholder="Informe seu ID de cadastro"
          value={id}
          onChangeText={setId}
        />

        <SubmitButton loading={loading} onPress={handleSubmit}>
          Acessar
        </SubmitButton>
      </Form>
    </Container>
  );
}
