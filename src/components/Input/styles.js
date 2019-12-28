import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 15px;
  height: 45px;
  border-radius: 4px;
  border: solid 1px #dddddd;
  background: #ffffff;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  flex: 1;
  font-size: 15px;
  color: #999999;
  margin-left: 10px;
`;
