import type { Meta, StoryObj } from '@storybook/react-vite';
import ToolbarAlign from '@ui5/webcomponents/dist/types/ToolbarAlign.js';
import { useRef, useState } from 'react';
import { CheckBox } from '../CheckBox/index.js';
import { ComboBox } from '../ComboBox/index.js';
import { ComboBoxItem } from '../ComboBoxItem/index.js';
import { DatePicker } from '../DatePicker/index.js';
import { Input } from '../Input/index.js';
import { MultiComboBox } from '../MultiComboBox/index.js';
import { MultiComboBoxItem } from '../MultiComboBoxItem/index.js';
import { Popover } from '../Popover/index.js';
import type { PopoverDomRef } from '../Popover/index.js';
import { RadioButton } from '../RadioButton/index.js';
import { Switch } from '../Switch/index.js';
import { ToolbarButton } from '../ToolbarButton/index.js';
import { ToolbarItem } from '../ToolbarItem/index.js';
import { ToolbarSelect } from '../ToolbarSelect/index.js';
import { ToolbarSelectOption } from '../ToolbarSelectOption/index.js';
import { ToolbarSeparator } from '../ToolbarSeparator/index.js';
import { ToolbarSpacer } from '../ToolbarSpacer/index.js';
import { Toolbar } from './index.js';

const meta = {
  title: 'Layouts & Floorplans / Toolbar',
  component: Toolbar,
  argTypes: {
    children: { control: { disable: true } },
  },
  args: {
    alignContent: ToolbarAlign.Start,
  },
  tags: ['package:@ui5/webcomponents'],
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Toolbar {...args}>
      <ToolbarButton text="Button 1" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
      <ToolbarSeparator />
      <ToolbarSpacer />
      <ToolbarSeparator />
      <ToolbarButton text="Button 2" />
      <ToolbarSelect>
        <ToolbarSelectOption>Option 1</ToolbarSelectOption>
        <ToolbarSelectOption>Option 2</ToolbarSelectOption>
        <ToolbarSelectOption>Option 3</ToolbarSelectOption>
      </ToolbarSelect>
    </Toolbar>
  ),
};

export const OpenPopover: Story = {
  name: 'Opening Popovers via ToolbarButton',
  render(args) {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const popoverRef = useRef<PopoverDomRef>(null);
    return (
      <>
        <Toolbar {...args}>
          <ToolbarButton
            onClick={(e) => {
              e.preventDefault();
              const { targetRef } = e.detail;
              if (popoverRef.current) {
                popoverRef.current.opener = targetRef;
                setPopoverOpen(true);
              }
            }}
            text="Open Popover"
          />
        </Toolbar>
        <Popover
          open={popoverOpen}
          ref={popoverRef}
          onClose={() => {
            setPopoverOpen(false);
          }}
        >
          Content
        </Popover>
      </>
    );
  },
};

export const WithToolbarItem: Story = {
  render(args) {
    return (
      <Toolbar {...args}>
        <ToolbarItem>
          <div role="radiogroup" aria-label="Options" className="toolbar-item-group">
            <RadioButton name="group1" text="Option 1" checked />
            <RadioButton name="group1" text="Option 2" />
            <RadioButton name="group1" text="Option 3" />
          </div>
        </ToolbarItem>
        <ToolbarItem>
          <div role="group" aria-label="Checkboxes" className="toolbar-item-group">
            <CheckBox text="Checkbox 1" />
            <CheckBox text="Checkbox 2" checked />
            <CheckBox text="Checkbox 3" />
          </div>
        </ToolbarItem>
        <ToolbarItem>
          <Input placeholder="Enter text" />
        </ToolbarItem>
        <ToolbarItem>
          <ComboBox placeholder="Select an option">
            <ComboBoxItem text="Option 1" />
            <ComboBoxItem text="Option 2" />
            <ComboBoxItem text="Option 3" />
          </ComboBox>
        </ToolbarItem>
        <ToolbarItem>
          <MultiComboBox placeholder="Select options">
            <MultiComboBoxItem text="Item 1" />
            <MultiComboBoxItem text="Item 2" />
            <MultiComboBoxItem text="Item 3" />
          </MultiComboBox>
        </ToolbarItem>
        <ToolbarItem>
          <Switch textOn="On" textOff="Off" />
        </ToolbarItem>
        <ToolbarItem>
          <DatePicker placeholder="Select a date" />
        </ToolbarItem>
      </Toolbar>
    );
  },
};
