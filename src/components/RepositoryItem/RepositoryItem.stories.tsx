import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { withKnobs, object } from '@storybook/addon-knobs';

import RepositoryItem from './RepositoryItem';
import { Repository } from '../../common/types';

const repository: Repository = {
  name: 'Repository Item Example',
  description: 'This is a description',
  html_url: 'https://www.google.com',
};

storiesOf('RepositoryItem', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <RepositoryItem repository={object('repository-item', repository)} />
  ));