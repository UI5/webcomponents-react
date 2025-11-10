import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea } from './index.js';

const meta = {
  title: 'TextArea',
  component: TextArea,
  argTypes: {
    menu: { control: { disable: true } },
    valueStateMessage: { control: { disable: true } },
  },
  tags: ['package:@ui5/webcomponents-ai', 'experimental'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
