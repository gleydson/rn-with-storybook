import React, { useState, useEffect } from 'react';

import { Repository } from '../../common/types';
import { RepositoryItem } from '../RepositoryItem';
import { Container, Title, List, Separator } from './styles';

export default function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://api.github.com/users/gleydson/repos');
      const data = await response.json();
      setRepositories(data);
    }

    getData();
  }, []);

  return (
    <Container>
      <Title>Repository List</Title>

      <List
        keyExtractor={item => item.name}
        data={repositories}
        renderItem={({ item }) => (<RepositoryItem repository={item} />)}
        contentContainerStyle={{ paddingVertical: 20 }}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
}