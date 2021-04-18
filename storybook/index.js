import { registerRootComponent } from 'expo';

import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import { loadStories } from './storyLoader';
import './rn-addons';

addDecorator(withKnobs);

configure(() => {
  loadStories()
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

registerRootComponent(StorybookUIRoot);

export default StorybookUIRoot;
