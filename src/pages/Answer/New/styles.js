import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
`;

export const Form = styled.View`
  align-self: stretch;
  padding: 0 30px;
`;

export const FormInput = styled.TextInput`
  margin-top: 20px;
  background: #fff;
  height: 300px;
  border-radius: 4px;
  padding: 20px;

  font-size: 15px;
  color: #999999;
  border: solid 1px #dddddd;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

export const FormTitle = styled.Text`
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #444444;
`;
