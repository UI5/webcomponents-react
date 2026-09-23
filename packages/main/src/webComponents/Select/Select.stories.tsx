import type { Meta, StoryObj } from '@storybook/react-vite';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import { Option } from '../Option/index.js';
import { OptionGroup } from '../OptionGroup/index.js';
import { Select } from './index.js';

const meta = {
  title: 'Inputs / Select',
  component: Select,
  argTypes: {
    children: { control: { disable: true } },
    valueStateMessage: { control: { disable: true } },
  },
  args: {
    valueState: ValueState.None,
  },
  tags: ['package:@ui5/webcomponents'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <Select {...args}>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
        <Option>Option 3</Option>
        <Option>Option 4</Option>
        <Option>Option 5</Option>
      </Select>
    );
  },
};

export const WithOptionGroups: Story = {
  render: (args) => {
    return (
      <Select {...args}>
        <OptionGroup headerText="Oceania">
          <Option value="au">Australia</Option>
          <Option value="nz">New Zealand</Option>
        </OptionGroup>
        <OptionGroup headerText="Europe">
          <Option value="fr">France</Option>
          <Option value="de" selected>
            Germany
          </Option>
        </OptionGroup>
      </Select>
    );
  },
};
