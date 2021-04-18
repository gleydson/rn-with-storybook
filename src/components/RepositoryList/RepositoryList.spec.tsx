
import React from 'react';

import fetchMock from 'jest-fetch-mock'
import { waitFor, render } from '@testing-library/react-native';

import RepositoryList from './RepositoryList';
import { Repository } from '../../common/types';

describe('RepositoryList component', () => {
  it('should be render with list of repositories', async () => {
    const repositories: Repository[] = [
      {
        name: 'title - repo 1',
        description: 'description - repo 1',
        html_url: 'https://www.google.com',
      },
      {
        name: 'title - repo 2',
        description: 'description - repo 2',
        html_url: 'https://www.google.com',
      }
    ];

    fetchMock.mockResponse(JSON.stringify(repositories), { status: 200 });
  
    const { getByText } = render(<RepositoryList />);

    await waitFor(() => {
      expect(getByText(repositories[0].name)).toBeTruthy();
      expect(getByText(repositories[0].description)).toBeTruthy();
      expect(getByText(repositories[1].name)).toBeTruthy();
      expect(getByText(repositories[1].description)).toBeTruthy();
    });
  });
});