import '@ui5/webcomponents-ai/dist/Input.js';
import '@ui5/webcomponents/dist/MenuItem.js';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MenuItem } from '@ui5/webcomponents-react';
import { useRef, useState } from 'react';
import { Input } from './index.js';

const meta = {
  title: 'Input',
  component: Input,
  argTypes: {
    actions: { control: { disable: true } },
  },
  tags: ['package:@ui5/webcomponents-ai', 'experimental'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
