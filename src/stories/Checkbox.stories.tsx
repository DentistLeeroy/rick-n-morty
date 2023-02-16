import React from 'react';
import { Story, Meta } from '@storybook/react';
import Checkbox from '../components/library/input/Checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story = (args) => <Checkbox label={''} {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox Label',
};
