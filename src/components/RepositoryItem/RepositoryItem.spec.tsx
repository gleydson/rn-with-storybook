
import React from 'react';
import { Linking } from 'react-native';

import { fireEvent, render } from '@testing-library/react-native';

import RepositoryItem from './RepositoryItem';
import { Repository } from '../../common/types';

describe('RepositoryItem component', () => {
  it('should be render with basic props', () => {
    const repository: Repository = {
      name: 'name example',
      description: 'description example',
      html_url: 'http://example.com',
    };
    const spyPressLink = jest.spyOn(Linking, 'openURL');
  
    const { getByText } = render(<RepositoryItem repository={repository} />);

    fireEvent.press(getByText('Go to repository'));

    expect(getByText(repository.name)).toBeTruthy();
    expect(getByText(repository.description)).toBeTruthy();
    expect(spyPressLink).toBeCalledWith(repository.html_url);
    expect(spyPressLink).toBeCalledTimes(1);

    spyPressLink.mockReset();
    spyPressLink.mockRestore();
  });
});