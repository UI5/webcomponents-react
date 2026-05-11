import { isChromatic } from '@sb/utils.js';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import { Button } from '../Button/index.js';
import { ComboBox } from '../ComboBox/index.js';
import { ComboBoxItem } from '../ComboBoxItem/index.js';
import { FilterItem } from '../FilterItem/index.js';
import { FilterItemOption } from '../FilterItemOption/index.js';
import { GroupItem } from '../GroupItem/index.js';
import { SegmentedButton } from '../SegmentedButton/index.js';
import { SegmentedButtonItem } from '../SegmentedButtonItem/index.js';
import { SortItem } from '../SortItem/index.js';
import { StepInput } from '../StepInput/index.js';
import { Switch } from '../Switch/index.js';
import { ViewSettingsDialogCustomTab } from '../ViewSettingsDialogCustomTab/index.js';
import { ViewSettingsDialog } from './index.js';

const meta = {
  title: 'Modals & Popovers / ViewSettingsDialog',
  component: ViewSettingsDialog,
  argTypes: {
    filterItems: { control: { disable: true } },
    sortItems: { control: { disable: true } },
    customTabs: { control: { disable: true } },
  },
  args: {
    open: isChromatic,
    filterItems: (
      <>
        <FilterItem
          text="Position"
          values={
            <>
              <FilterItemOption text="CEO" />
              <FilterItemOption text="CTO" />
              <FilterItemOption text="CIO" />
            </>
          }
        />
        <FilterItem
          text="Department"
          values={
            <>
              <FilterItemOption text="Legal" />
              <FilterItemOption text="Finance" />
              <FilterItemOption text="Development" />
            </>
          }
        />
      </>
    ),
    sortItems: (
      <>
        <SortItem text="Name" />
        <SortItem text="Position" />
        <SortItem text="Company" />
        <SortItem text="Department" />
      </>
    ),
  },
  parameters: {
    chromatic: { delay: 999 },
  },
  tags: ['package:@ui5/webcomponents-fiori'],
} satisfies Meta<typeof ViewSettingsDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    return (
      <>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Show ViewSettingsDialog
        </Button>
        <ViewSettingsDialog
          {...args}
          open={open}
          onClose={(e) => {
            setOpen(false);
            args.onClose(e);
          }}
        />
      </>
    );
  },
};

export const WithCustomTabs: Story = {
  render: (args) => {
    const [open, setOpen] = useState(args.open);

    useEffect(() => {
      setOpen(args.open);
    }, [args.open]);

    return (
      <>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          Show ViewSettingsDialog
        </Button>
        <ViewSettingsDialog
          {...args}
          open={open}
          onClose={(e) => {
            setOpen(false);
            args.onClose(e);
          }}
          sortItems={
            <>
              <SortItem text="Name" selected />
              <SortItem text="Position" />
              <SortItem text="Company" />
              <SortItem text="Department" />
            </>
          }
          filterItems={
            <>
              <FilterItem
                text="Position"
                values={
                  <>
                    <FilterItemOption text="CTO" />
                    <FilterItemOption text="CPO" />
                    <FilterItemOption text="VP" />
                  </>
                }
              />
              <FilterItem
                text="Department"
                values={
                  <>
                    <FilterItemOption text="Sales" />
                    <FilterItemOption text="Management" />
                    <FilterItemOption text="PR" />
                  </>
                }
              />
              <FilterItem
                text="Location"
                values={
                  <>
                    <FilterItemOption text="Walldorf" />
                    <FilterItemOption text="New York" />
                    <FilterItemOption text="London" />
                  </>
                }
              />
            </>
          }
          groupItems={
            <>
              <GroupItem text="Name" selected />
              <GroupItem text="Position" />
              <GroupItem text="Company" />
              <GroupItem text="Department" />
              <GroupItem text="(Not Grouped)" />
            </>
          }
          customTabs={
            <>
              <ViewSettingsDialogCustomTab titleText="Preferences" tooltip="Preferences" icon="action-settings">
                <div style={{ padding: '0.75rem', display: 'grid', gap: '0.75rem' }}>
                  <div
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}
                  >
                    <span>Compact mode</span>
                    <Switch />
                  </div>
                  <div
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}
                  >
                    <span>Live updates</span>
                    <Switch checked />
                  </div>
                  <SegmentedButton>
                    <SegmentedButtonItem selected>Cozy</SegmentedButtonItem>
                    <SegmentedButtonItem>Compact</SegmentedButtonItem>
                  </SegmentedButton>
                </div>
              </ViewSettingsDialogCustomTab>
              <ViewSettingsDialogCustomTab icon="palette" titleText="Display" tooltip="Display">
                <div style={{ padding: '0.75rem', display: 'grid', gap: '0.75rem' }}>
                  <SegmentedButton>
                    <SegmentedButtonItem selected>List</SegmentedButtonItem>
                    <SegmentedButtonItem>Grid</SegmentedButtonItem>
                  </SegmentedButton>
                  <ComboBox placeholder="Theme">
                    <ComboBoxItem text="Default" />
                    <ComboBoxItem text="High Contrast" />
                    <ComboBoxItem text="Compact Light" />
                  </ComboBox>
                  <StepInput min={10} max={100} value={25} />
                </div>
              </ViewSettingsDialogCustomTab>
            </>
          }
        />
      </>
    );
  },
};
