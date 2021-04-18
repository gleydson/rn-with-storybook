import React, { useCallback } from 'react';

import { RepositoryItemProps } from './types';
import { Container, Title, Description } from './styles';
import { Button } from '../Button';
import { Linking } from 'react-native';

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