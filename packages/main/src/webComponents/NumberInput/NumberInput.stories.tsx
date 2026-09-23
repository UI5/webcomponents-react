import type { Meta, StoryObj } from '@storybook/react-vite';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { NumberInput } from './index.js';

const meta = {
  title: 'Inputs / NumberInput',
  component: NumberInput,
  argTypes: {
    valueStateMessage: { control: { disable: true } },
  },
  args: {
    valueState: ValueState.None,
  },
  tags: ['package:@ui5/webcomponents', 'experimental'],
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
