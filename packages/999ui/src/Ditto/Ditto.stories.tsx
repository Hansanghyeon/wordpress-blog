import { ComponentStory, ComponentMeta } from '@storybook/react';
import Ditto from './Ditto';

export default {
  component: Ditto,
  title: 'component/Ditto',
} as ComponentMeta<typeof Ditto>;

const Template: ComponentStory<typeof Ditto> = (args) => <Ditto {...args} />;

export const Default = Template.bind({});
Default.args = {};
