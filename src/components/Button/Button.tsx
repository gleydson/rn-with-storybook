import React from 'react';

import { Container, Text } from './styles';
import { ButtonProps } from './types';

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <Text>{children}</Text>
    </Container>
  );
}
