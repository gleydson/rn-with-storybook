
import React from 'react';

import { render } from '@testing-library/react-native';

import Button from './Button';

describe('Button component', () => {
  it('should be render with text children', () => {
    const { getByText } = render(<Button>test</Button>);

    expect(getByText('test')).toBeTruthy();
  });
});