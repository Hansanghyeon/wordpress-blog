import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-viewport/register';
import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: themes.dark,
})
