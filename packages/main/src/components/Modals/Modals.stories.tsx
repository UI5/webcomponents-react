import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { FlexBoxDirection, FlexBoxJustifyContent, MessageBoxType } from '../../enums/index.js';
import { Button, Label, MenuItem, Switch } from '../../webComponents/index.js';
import { FlexBox } from '../FlexBox/index.js';
import { Modals } from './index.js';

const meta = {
  title: 'User Feedback / Modals',
  component: Modals,
  tags: ['package:@ui5/webcomponents-react'],
} satisfies Meta<typeof Modals>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Dialog: Story = {
  render: () => {
    return (
      <>
        <Button
          onClick={() => {
            const { close } = Modals.showDialog({
              headerText: 'Dialog Title',
              children: "I'm a Dialog!",
              footer: (
                <FlexBox justifyContent={FlexBoxJustifyContent.End} fitContainer style={{ paddingBlock: '0.25rem' }}>
                  <Button onClick={() => close()}>Close</Button>{' '}
                </FlexBox>
              ),
            });
          }}
        >
          Show Dialog
        </Button>
      </>
    );
  },
};

export const Popover = {
  render: () => {
    const [autoClosePopovers, setAutoClosePopovers] = useState(false);
    return (
      <FlexBox direction={FlexBoxDirection.Column} alignItems="Start" gap="1rem">
        <FlexBox alignItems="Center" gap="0.5rem">
          <Switch checked={autoClosePopovers} onChange={(e) => setAutoClosePopovers(e.target.checked)} />
          <Label>autoClosePopovers</Label>
        </FlexBox>
        <Button
          id="modals-show-popover"
          onClick={() => {
            Modals.showPopover(
              {
                opener: 'modals-show-popover',
                headerText: 'Popover Title',
                children: "I'm a Popover!",
              },
              { autoClosePopovers },
            );
          }}
        >
          Show Popover
        </Button>
      </FlexBox>
    );
  },
};

export const ResponsivePopover = {
  render: () => {
    const [autoClosePopovers, setAutoClosePopovers] = useState(false);
    return (
      <FlexBox direction={FlexBoxDirection.Column} alignItems="Start" gap="1rem">
        <FlexBox alignItems="Center" gap="0.5rem">
          <Switch checked={autoClosePopovers} onChange={(e) => setAutoClosePopovers(e.target.checked)} />
          <Label>autoClosePopovers</Label>
        </FlexBox>
        <Button
          id="modals-show-responsive-popover"
          onClick={() => {
            Modals.showResponsivePopover(
              {
                opener: 'modals-show-responsive-popover',
                headerText: 'Responsive Popover Title',
                children: "I'm a Responsive Popover!",
              },
              { autoClosePopovers },
            );
          }}
        >
          Show ResponsivePopover
        </Button>
      </FlexBox>
    );
  },
};

export const Menu = {
  render: () => {
    const [autoClosePopovers, setAutoClosePopovers] = useState(false);
    return (
      <FlexBox direction={FlexBoxDirection.Column} alignItems="Start" gap="1rem">
        <FlexBox alignItems="Center" gap="0.5rem">
          <Switch checked={autoClosePopovers} onChange={(e) => setAutoClosePopovers(e.target.checked)} />
          <Label>autoClosePopovers</Label>
        </FlexBox>
        <Button
          id="modals-show-menu"
          onClick={() => {
            Modals.showMenu(
              {
                opener: 'modals-show-menu',
                headerText: 'Menu Title',
                children: (
                  <>
                    <MenuItem text="New File" icon="add-document" />
                    <MenuItem text="New Folder" icon="add-folder" disabled />
                  </>
                ),
              },
              { autoClosePopovers },
            );
          }}
        >
          Show Menu
        </Button>
      </FlexBox>
    );
  },
};

export const MessageBox = {
  render: () => {
    return (
      <>
        <Button
          onClick={() => {
            Modals.showMessageBox({
              type: MessageBoxType.Confirm,
              children: 'Can you see this MessageBox?',
            });
          }}
        >
          Show MessageBox
        </Button>
      </>
    );
  },
};

export const Toast = {
  render: () => {
    return (
      <>
        <Button
          onClick={() => {
            Modals.showToast({
              children: "I'm a Message Toast!",
            });
          }}
        >
          Show Toast
        </Button>
      </>
    );
  },
};
