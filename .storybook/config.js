import { configure, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';

setDefaults({
  inline: true,
  header: false
})
setAddon(infoAddon);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
