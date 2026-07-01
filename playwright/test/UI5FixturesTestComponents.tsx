import { Button } from '@ui5/webcomponents-react/Button';
import { ComboBox } from '@ui5/webcomponents-react/ComboBox';
import { ComboBoxItem } from '@ui5/webcomponents-react/ComboBoxItem';
import { Dialog } from '@ui5/webcomponents-react/Dialog';
import { Input } from '@ui5/webcomponents-react/Input';
import { MultiComboBox } from '@ui5/webcomponents-react/MultiComboBox';
import { MultiComboBoxItem } from '@ui5/webcomponents-react/MultiComboBoxItem';
import { MultiInput } from '@ui5/webcomponents-react/MultiInput';
import { Option } from '@ui5/webcomponents-react/Option';
import { Select } from '@ui5/webcomponents-react/Select';
import { SuggestionItem } from '@ui5/webcomponents-react/SuggestionItem';
import { Tab } from '@ui5/webcomponents-react/Tab';
import { TabContainer } from '@ui5/webcomponents-react/TabContainer';
import { TextArea } from '@ui5/webcomponents-react/TextArea';
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
