import React from 'react';
import { storiesOf } from '@storybook/react-native';

import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import Button from './Button';

const actions = {
  onPress: action('onPress')
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Button>{text('button', 'default')}</Button>
  ))
  .add('with onPress', () => (
    <Button {...actions}>{text('button', 'with onpress')}</Button>
  ));