import React, { useCallback } from 'react';
import { Linking } from 'react-native';

import { RepositoryItemProps } from './types';
import { Container, Title, Description } from './styles';
import { Button } from '../Button';

export default function Repository({ repository }: RepositoryItemProps) {
  const goToRepository = useCallback(() => {
    Linking.openURL(repository.html_url);
  }, []);

  return (
    <Container>
      <Title>{repository.name}</Title>
      <Description>{repository.description}</Description>

      <Button onPress={goToRepository}>Go to repository</Button>
    </Container>
  );
}
