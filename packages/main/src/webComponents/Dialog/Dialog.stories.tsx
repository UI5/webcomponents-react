import { isChromatic } from '@sb/utils.js';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { Bar } from '../Bar/index.js';
import { Button, List, ListItemStandard } from '../index.js';
import { Dialog } from './index.js';

const meta = {
  title: 'Modals & Popovers / Dialog',
  component: Dialog,
  argTypes: {
    footer: { control: { disable: true } },
    header: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  args: {
    children: (
      <List>
        <ListItemStandard additionalText="Fruits" text="Apples" />
        <ListItemStandard additionalText="Fruits" text="Bananas" />
        <ListItemStandard additionalText="Vegetables" text="Potato" />
      </List>
    ),
    headerText: 'Dialog Header',
    open: isChromatic,
  },
  tags: ['package:@ui5/webcomponents'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [dialogOpen, setDialogOpen] = useState(args.open);
    useEffect(() => {
      setDialogOpen(args.open);
    }, [args.open]);
    return (
      <>
        <Button
          onClick={() => {
            setDialogOpen(true);
          }}
        >
          Open Dialog
        </Button>
        <Dialog
          {...args}
          data-sap-ui-fastnavgroup="true"
          className="contentPartNoPadding footerPartNoPadding"
          open={dialogOpen}
          onClose={(e) => {
            args.onClose(e);
            setDialogOpen(false);
          }}
          footer={
            <Bar
              design="Footer"
              endContent={
                <Button
                  data-sap-ui-fastnavgroup="true"
                  onClick={() => {
                    setDialogOpen(false);
                  }}
                >
                  Close
                </Button>
              }
            />
          }
        />
      </>
    );
  },
};
