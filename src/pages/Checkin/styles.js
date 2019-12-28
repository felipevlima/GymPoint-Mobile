import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  margin: 20px;
`;

export const CButton = styled(Button)``;

export const ScrollView = styled.ScrollView`
  height: 100%;
  margin-top: 10px;
`;

export const CheckinList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  height: 100%;
  margin-top: 10px;
`;

export const Checkins = styled.View`
  margin-top: 10px;
  height: 46px;

  background: #fff;
  border-radius: 4px;
  border: 1px solid #dddddd;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CheckIn = styled.Text`
  padding-left: 20px;
  font-weight: bold;
  font-size: 12px;
  color: #000;
`;

export const CheckTime = styled.Text`
  padding-right: 20px;
  color: #666666;
  font-size: 12px;
  line-height: 19px;
`;
