import { Button } from '@ui5/webcomponents-react/Button';
import { CheckBox } from '@ui5/webcomponents-react/CheckBox';
import { ComboBox } from '@ui5/webcomponents-react/ComboBox';
import { ComboBoxItem } from '@ui5/webcomponents-react/ComboBoxItem';
import { Dialog } from '@ui5/webcomponents-react/Dialog';
import { Input } from '@ui5/webcomponents-react/Input';
import { List } from '@ui5/webcomponents-react/List';
import { ListItemStandard } from '@ui5/webcomponents-react/ListItemStandard';
import { MultiComboBox } from '@ui5/webcomponents-react/MultiComboBox';
import { MultiComboBoxItem } from '@ui5/webcomponents-react/MultiComboBoxItem';
import { MultiInput } from '@ui5/webcomponents-react/MultiInput';
import { Option } from '@ui5/webcomponents-react/Option';
import { RadioButton } from '@ui5/webcomponents-react/RadioButton';
import { Select } from '@ui5/webcomponents-react/Select';
import { SuggestionItem } from '@ui5/webcomponents-react/SuggestionItem';
import { Switch } from '@ui5/webcomponents-react/Switch';
import { Tab } from '@ui5/webcomponents-react/Tab';
import { TabContainer } from '@ui5/webcomponents-react/TabContainer';
import { TextArea } from '@ui5/webcomponents-react/TextArea';
import { Toolbar } from '@ui5/webcomponents-react/Toolbar';
import { ToolbarButton } from '@ui5/webcomponents-react/ToolbarButton';
import { useState } from 'react';

export const InputTestComp = () => {
  const [value, setValue] = useState('');
  return (
    <>
      <Input data-testid="test-input" onInput={(e) => setValue(e.target.value)} />
      <span data-testid="input-value">{value}</span>
    </>
  );
};

export const ClearInputTestComp = () => {
  const [value, setValue] = useState('initial value');
  return (
    <>
      <Input data-testid="test-input" onInput={(e) => setValue(e.target.value)} />
      <span data-testid="input-value">{value}</span>
    </>
  );
};

export const CheckboxTestComp = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <CheckBox data-testid="test-checkbox" onChange={(e) => setChecked(e.target.checked)} />
      <span data-testid="checkbox-state">{checked ? 'checked' : 'unchecked'}</span>
    </div>
  );
};

export const SwitchTestComp = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Switch data-testid="test-switch" onChange={(e) => setChecked(e.target.checked)} />
      <span data-testid="switch-state">{checked ? 'on' : 'off'}</span>
    </div>
  );
};

export const RadioButtonTestComp = () => {
  const [selected, setSelected] = useState('');
  return (
    <div>
      <RadioButton data-testid="radio-1" name="group" text="Option 1" onChange={() => setSelected('option1')} />
      <RadioButton data-testid="radio-2" name="group" text="Option 2" onChange={() => setSelected('option2')} />
      <span data-testid="radio-state">{selected}</span>
    </div>
  );
};

export const TextAreaTestComp = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <TextArea data-testid="test-textarea" onInput={(e) => setValue(e.target.value)} />
      <span data-testid="textarea-value">{value}</span>
    </div>
  );
};

export const DialogTestComp = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Dialog data-testid="test-dialog" open={open} onClose={() => setOpen(false)} headerText="Test Dialog">
        <p>Dialog content</p>
      </Dialog>
      <span data-testid="dialog-state">{open ? 'open' : 'closed'}</span>
    </>
  );
};

export const AttributeTestComp = () => {
  return <Button data-testid="test-button">Click me</Button>;
};

export const ListTestComp = () => {
  const [selectedItem, setSelectedItem] = useState('');
  return (
    <div>
      <List
        data-testid="test-list"
        selectionMode="Single"
        onSelectionChange={(e) => {
          const item = e.detail.selectedItems[0];
          if (item) {
            setSelectedItem(item.getAttribute('text') || '');
          }
        }}
      >
        <ListItemStandard text="First Item" />
        <ListItemStandard text="Second Item" />
        <ListItemStandard text="Third Item" />
      </List>
      <span data-testid="selected-item">{selectedItem}</span>
    </div>
  );
};

export const SelectTestComp = () => {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <div>
      <Select data-testid="test-select" onChange={(e) => setSelectedValue(e.detail.selectedOption?.textContent || '')}>
        <Option>Option A</Option>
        <Option>Option B</Option>
        <Option>Option C</Option>
      </Select>
      <span data-testid="selected-value">{selectedValue}</span>
    </div>
  );
};

export const ComboBoxTestComp = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <ComboBox data-testid="test-combobox" onSelectionChange={(e) => setValue(e.detail.item?.text || '')}>
        <ComboBoxItem text="Apple" />
        <ComboBoxItem text="Banana" />
        <ComboBoxItem text="Cherry" />
      </ComboBox>
      <span data-testid="combobox-value">{value}</span>
    </div>
  );
};

export const MultiComboBoxTestComp = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  return (
    <div>
      <MultiComboBox
        data-testid="test-multicombobox"
        onSelectionChange={(e) => {
          const items = e.detail.items.map((item) => item.text);
          setSelectedItems(items);
        }}
      >
        <MultiComboBoxItem text="Red" />
        <MultiComboBoxItem text="Green" />
        <MultiComboBoxItem text="Blue" />
      </MultiComboBox>
      <span data-testid="multicombobox-values">{selectedItems.join(', ')}</span>
    </div>
  );
};

export const ToolbarTestComp = () => {
  const [clickedButton, setClickedButton] = useState('');
  return (
    <div>
      <Toolbar data-testid="test-toolbar">
        <ToolbarButton text="Save" onClick={() => setClickedButton('Save')} />
        <ToolbarButton text="Edit" onClick={() => setClickedButton('Edit')} />
        <ToolbarButton text="Delete" onClick={() => setClickedButton('Delete')} />
      </Toolbar>
      <span data-testid="clicked-button">{clickedButton}</span>
    </div>
  );
};

export const TabContainerTestComp = () => {
  const [selectedTab, setSelectedTab] = useState('Tab 1');
  return (
    <div>
      <TabContainer data-testid="test-tabcontainer" onTabSelect={(e) => setSelectedTab(e.detail.tab.text || '')}>
        <Tab text="Tab 1">Content 1</Tab>
        <Tab text="Tab 2">Content 2</Tab>
        <Tab text="Tab 3">Content 3</Tab>
      </TabContainer>
      <span data-testid="selected-tab">{selectedTab}</span>
    </div>
  );
};

export const TabContainerWithNestedTabsTestComp = () => {
  return (
    <TabContainer data-testid="test-tabcontainer-nested">
      <Tab text="Tab 1">Content 1</Tab>
      <Tab
        text="Tab 2"
        items={
          <>
            <Tab text="Tab 2.1">Content 2.1</Tab>
            <Tab text="Tab 2.2">Content 2.2</Tab>
          </>
        }
      >
        Content 2
      </Tab>
    </TabContainer>
  );
};

export const InputWithDelayTestComp = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <ComboBox data-testid="test-combobox-delay" onInput={(e) => setValue(e.target.value || '')}>
        <ComboBoxItem text="Suggestion 1" />
        <ComboBoxItem text="Suggestion 2" />
        <ComboBoxItem text="Suggestion 3" />
      </ComboBox>
      <span data-testid="delay-input-value">{value}</span>
    </div>
  );
};

export const InputWithSuggestionsTestComp = () => {
  return (
    <Input showSuggestions data-testid="test-input-suggestions">
      <SuggestionItem text="Suggestion A" />
      <SuggestionItem text="Suggestion B" />
      <SuggestionItem text="Other Item" />
    </Input>
  );
};

export const MultiInputWithSuggestionsTestComp = () => {
  return (
    <MultiInput showSuggestions data-testid="test-multiinput-suggestions">
      <SuggestionItem text="Suggestion X" />
      <SuggestionItem text="Suggestion Y" />
      <SuggestionItem text="Suggestion Z" />
    </MultiInput>
  );
};
