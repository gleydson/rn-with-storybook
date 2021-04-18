import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  border-radius: 3px;
  padding: 4px 0;

  justify-content: center;
  align-items: flex-start;
`;

export const Text = styled.Text`
  color: #7159c1;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`;