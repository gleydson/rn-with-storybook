import { FlatList, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { Repository } from '../../common/types';

export const Container = styled.View``;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;

export const List = styled(FlatList as new () => FlatList<Repository>)``;

export const Separator = styled.View`
  width: 100%;
  height: ${StyleSheet.hairlineWidth}px;

  background-color: #aaa;
`;