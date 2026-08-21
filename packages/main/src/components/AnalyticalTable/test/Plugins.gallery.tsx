import paperPlaneIcon from '@ui5/webcomponents-icons/paper-plane.js';
import { useCallback, useMemo, useState } from 'react';
import { Button } from '../../../webComponents/Button/index.js';
import type { ButtonDomRef } from '../../../webComponents/Button/index.js';
import { CheckBox } from '../../../webComponents/CheckBox/index.js';
import type { CheckBoxDomRef } from '../../../webComponents/CheckBox/index.js';
import { ComboBox } from '../../../webComponents/ComboBox/index.js';
import type { ComboBoxDomRef } from '../../../webComponents/ComboBox/index.js';
import { DatePicker } from '../../../webComponents/DatePicker/index.js';
import type { DatePickerDomRef } from '../../../webComponents/DatePicker/index.js';
import { DateRangePicker } from '../../../webComponents/DateRangePicker/index.js';
import type { DateRangePickerDomRef } from '../../../webComponents/DateRangePicker/index.js';
import { DateTimePicker } from '../../../webComponents/DateTimePicker/index.js';
import type { DateTimePickerDomRef } from '../../../webComponents/DateTimePicker/index.js';
import { DynamicDateRange } from '../../../webComponents/DynamicDateRange/index.js';
import type { DynamicDateRangeDomRef } from '../../../webComponents/DynamicDateRange/index.js';
import { FileUploader } from '../../../webComponents/FileUploader/index.js';
import type { FileUploaderDomRef } from '../../../webComponents/FileUploader/index.js';
import { Icon } from '../../../webComponents/Icon/index.js';
import type { IconDomRef } from '../../../webComponents/Icon/index.js';
import { Input } from '../../../webComponents/Input/index.js';
import type { InputDomRef } from '../../../webComponents/Input/index.js';
import { MultiComboBox } from '../../../webComponents/MultiComboBox/index.js';
import type { MultiComboBoxDomRef } from '../../../webComponents/MultiComboBox/index.js';
import { MultiInput } from '../../../webComponents/MultiInput/index.js';
import type { MultiInputDomRef } from '../../../webComponents/MultiInput/index.js';
import { RadioButton } from '../../../webComponents/RadioButton/index.js';
import type { RadioButtonDomRef } from '../../../webComponents/RadioButton/index.js';
import { RatingIndicator } from '../../../webComponents/RatingIndicator/index.js';
import type { RatingIndicatorDomRef } from '../../../webComponents/RatingIndicator/index.js';
import { Search } from '../../../webComponents/Search/index.js';
import type { SearchDomRef } from '../../../webComponents/Search/index.js';
import { SegmentedButton } from '../../../webComponents/SegmentedButton/index.js';
import type { SegmentedButtonDomRef } from '../../../webComponents/SegmentedButton/index.js';
import { SegmentedButtonItem } from '../../../webComponents/SegmentedButtonItem/index.js';
import { Select } from '../../../webComponents/Select/index.js';
import type { SelectDomRef } from '../../../webComponents/Select/index.js';
import { Slider } from '../../../webComponents/Slider/index.js';
import type { SliderDomRef } from '../../../webComponents/Slider/index.js';
import { SplitButton } from '../../../webComponents/SplitButton/index.js';
import type { SplitButtonDomRef } from '../../../webComponents/SplitButton/index.js';
import { StepInput } from '../../../webComponents/StepInput/index.js';
import type { StepInputDomRef } from '../../../webComponents/StepInput/index.js';
import { Switch } from '../../../webComponents/Switch/index.js';
import type { SwitchDomRef } from '../../../webComponents/Switch/index.js';
import { Tag } from '../../../webComponents/Tag/index.js';
import { TextArea } from '../../../webComponents/TextArea/index.js';
import type { TextAreaDomRef } from '../../../webComponents/TextArea/index.js';
import { TimePicker } from '../../../webComponents/TimePicker/index.js';
import type { TimePickerDomRef } from '../../../webComponents/TimePicker/index.js';
import { ToggleButton } from '../../../webComponents/ToggleButton/index.js';
import type { ToggleButtonDomRef } from '../../../webComponents/ToggleButton/index.js';
import { MessageViewButton } from '../../MessageViewButton/index.js';
import { AnalyticalTable } from '../index.js';
import * as AnalyticalTableHooks from '../pluginHooks/AnalyticalTableHooks.js';
import { useF2CellEdit } from '../pluginHooks/useF2CellEdit.js';
import { useRowDisableSelection } from '../pluginHooks/useRowDisableSelection.js';
import type {
  AnalyticalTableCellInstance,
  AnalyticalTableColumnDefinition,
  AnalyticalTablePropTypes,
  RowType,
} from '../types/index.js';
import type { F2InputColumnId } from './Plugins.f2-configs.js';
import { columns as defaultColumns, data as defaultData, generateMoreData } from './test-utils/data.js';

/* ----------------------------------------------------------------------------
 * useRowDisableSelection
 * ------------------------------------------------------------------------- */

/**
 * `useRowDisableSelection` flags row 0 as non-selectable. The running `onRowSelect` / `onRowClick`
 * call counts are recorded into `select-count` / `click-count` so the spec can assert selection is
 * suppressed on the disabled row while `onRowClick` still fires.
 */
export const PluginsRowDisableSelectionTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(() => defaultData.map((item, index) => ({ ...item, disableSelection: index === 0 })), []);
  // useRowDisableSelection is a react-table plugin factory, not a React hook — memoizing per AnalyticalTable guidance.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const tableHooks = useMemo(() => [useRowDisableSelection('disableSelection')], []);
  const [selectCount, setSelectCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const onRowSelect = useCallback<NonNullable<AnalyticalTablePropTypes['onRowSelect']>>(() => {
    setSelectCount((c) => c + 1);
  }, []);
  const onRowClick = useCallback<NonNullable<AnalyticalTablePropTypes['onRowClick']>>(() => {
    setClickCount((c) => c + 1);
  }, []);
  return (
    <>
      <AnalyticalTable
        data={data}
        columns={columns}
        onRowSelect={onRowSelect}
        onRowClick={onRowClick}
        selectionMode="Multiple"
        tableHooks={tableHooks}
        minRows={1}
      />
      <span data-testid="select-count">{selectCount}</span>
      <span data-testid="click-count">{clickCount}</span>
    </>
  );
};

/* ----------------------------------------------------------------------------
 * Keyboard navigation
 * ------------------------------------------------------------------------- */

export const PluginsKbdBasicTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(() => generateMoreData(50), []);
  return <AnalyticalTable data={data} columns={columns} />;
};

const manyColumns = Array.from({ length: 30 }, (_, i) => ({
  Header: `Col ${i}`,
  accessor: `col${i}`,
}));
const manyColumnsData = Array.from({ length: 10 }, (_, rowIdx) => {
  const row: Record<string, string> = {};
  for (let c = 0; c < 30; c++) {
    row[`col${c}`] = `R${rowIdx}C${c}`;
  }
  return row;
});

export const PluginsKbdEndHomeTestComp = () => {
  const columns = useMemo(() => manyColumns, []);
  const data = useMemo(() => manyColumnsData, []);
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      scaleWidthMode="Default"
      overscanCountHorizontal={2}
      style={{ width: '600px' }}
    />
  );
};

const kbdButtonColumns: AnalyticalTableColumnDefinition[] = [
  ...defaultColumns.slice(0, 2),
  { id: 'button', Cell: () => <Button>Button</Button> },
];

export const PluginsKbdWithButtonTestComp = () => {
  const columns = useMemo(() => kbdButtonColumns, []);
  const data = useMemo(() => generateMoreData(50), []);
  return <AnalyticalTable data={data} columns={columns} />;
};

const renderSubComp: AnalyticalTablePropTypes['renderRowSubComponent'] = (row) => {
  if (row.id === '2') {
    return null;
  }
  return <div style={{ height: '50px', width: '100%', background: 'cadetblue' }}>SubComponent</div>;
};

export const PluginsKbdSubCompTestComp = () => {
  const columns = useMemo(() => defaultColumns.slice(0, 2), []);
  const data = useMemo(() => generateMoreData(50), []);
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      subComponentsBehavior="Visible"
      renderRowSubComponent={renderSubComp}
    />
  );
};

const renderSubComp2: AnalyticalTablePropTypes['renderRowSubComponent'] = (row) => {
  if (row.id === '2') {
    return null;
  }
  return (
    <div style={{ height: '50px', width: '100%', background: 'cadetblue' }}>
      <Button data-subcomponent-active-element>Active</Button>
    </div>
  );
};

export const PluginsKbdSubCompActiveTestComp = () => {
  const columns = useMemo(() => defaultColumns.slice(0, 2), []);
  const data = useMemo(() => generateMoreData(50), []);
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      subComponentsBehavior="Visible"
      renderRowSubComponent={renderSubComp2}
    />
  );
};

export const PluginsKbdSelectionTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(() => generateMoreData(50), []);
  return (
    <>
      <AnalyticalTable data={data} columns={columns} selectionMode="Multiple" />
      <button>Interactive Element</button>
    </>
  );
};

export const PluginsKbdSelectionHighlightTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(() => generateMoreData(50), []);
  return <AnalyticalTable data={data} columns={columns} selectionMode="Multiple" withRowHighlight />;
};

export const PluginsKbdShiftArrowResizeTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(() => defaultData, []);
  return <AnalyticalTable data={data} columns={columns} />;
};

/* ----------------------------------------------------------------------------
 * useAnnounceEmptyCells
 * ------------------------------------------------------------------------- */

const dataWithEmptyFields = [
  {
    age: 0,
    friend: {
      name: null,
      age: undefined,
    },
  },
  {
    name: 'A',
    age: 1337,
    friend: {
      name: 'B',
      age: -2,
    },
  },
];

export const PluginsAnnounceEmptyBaselineTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(() => dataWithEmptyFields, []);
  return <AnalyticalTable data={data} columns={columns} />;
};

export const PluginsAnnounceEmptyTestComp = () => {
  const columns = useMemo(() => defaultColumns, []);
  const data = useMemo(() => dataWithEmptyFields, []);
  const tableHooks = useMemo(() => [AnalyticalTableHooks.useAnnounceEmptyCells], []);
  return <AnalyticalTable data={data} columns={columns} tableHooks={tableHooks} />;
};

/* ----------------------------------------------------------------------------
 * Interactive Cell content
 * ------------------------------------------------------------------------- */

const interactiveColumns: AnalyticalTableColumnDefinition[] = [
  { Header: 'Name', accessor: 'name' },
  {
    Header: 'Custom',
    id: 'custom',
    Cell: ({ row }: { row: RowType }) => {
      switch (row.index) {
        case 0: {
          return <Input />;
        }
        case 1: {
          return (
            <Button
              onClick={() => {
                const el = document.querySelector('[data-testid="btn-was-clicked"]');
                if (el) {
                  el.textContent = 'true';
                }
              }}
            >
              Click
            </Button>
          );
        }
        default: {
          return <Input />;
        }
      }
    },
  },
];

export const PluginsInteractiveCellTestComp = () => {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const columns = useMemo(() => interactiveColumns, []);
  const data = useMemo(() => defaultData, []);
  const handleRowSelect = useCallback<NonNullable<AnalyticalTablePropTypes['onRowSelect']>>((e) => {
    setSelected(e.detail.selectedRowIds);
  }, []);
  return (
    <>
      <AnalyticalTable data={data} columns={columns} selectionMode="Multiple" onRowSelect={handleRowSelect} />
      <span data-testid="sel">{JSON.stringify(selected)}</span>
      <span data-testid="btn-was-clicked" />
    </>
  );
};

/* ----------------------------------------------------------------------------
 * useF2CellEdit — navigation
 * ------------------------------------------------------------------------- */

const f2InputCols: AnalyticalTableColumnDefinition[] = [
  {
    Header: 'Input',
    id: 'input',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<InputDomRef>(props);
      return <Input ref={callbackRef} />;
    },
    interactiveElementName: 'Input',
  },
  {
    Header: 'Input & Button',
    id: 'input_btn',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      return (
        <>
          <Input ref={callbackRef} />
          <Button ref={callbackRef} icon={paperPlaneIcon} tooltip="Submit" accessibleName="Submit" />
        </>
      );
    },
    interactiveElementName: 'Input and Button',
  },
  {
    Header: 'Text',
    accessor: 'name',
  },
  {
    Header: 'Button',
    id: 'btn',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      return <Button ref={callbackRef}>Button</Button>;
    },
    interactiveElementName: () => 'Button',
  },
  {
    Header: 'Non-interactive custom content',
    accessor: 'friend.name',
    Cell: (props: AnalyticalTableCellInstance) => {
      return <Tag>{props.value}</Tag>;
    },
  },
  {
    Header: 'Switch or CheckBox',
    id: 'switch_checkbox',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef(props);
      if (props.row.index % 2) {
        return <CheckBox ref={callbackRef} accessibleName="Dummy CheckBox" />;
      }
      return <Switch ref={callbackRef} accessibleName="Dummy Switch" />;
    },
    interactiveElementName: (props: AnalyticalTableCellInstance) => {
      if (props.row.index % 2) {
        return 'CheckBox';
      }
      return 'Switch';
    },
  },
];

export const PluginsF2NavigationTestComp = () => {
  const columns = useMemo(() => f2InputCols, []);
  const data = useMemo(() => [...defaultData, ...defaultData], []);
  const tableHooks = useMemo(() => [useF2CellEdit], []);
  return (
    <>
      <button>Before</button>
      <AnalyticalTable data={data} columns={columns} tableHooks={tableHooks} visibleRows={5} />
      <button>After</button>
    </>
  );
};

/* ----------------------------------------------------------------------------
 * useF2CellEdit — per-input F2/Tab round-trip
 * ------------------------------------------------------------------------- */

// One-off column definitions per input type. Each definition is stable at module scope so
// it can be memoized inside the per-input TestComp without React remounts across renders.
const f2InputColumnDefs = {
  button: {
    Header: 'Button',
    id: 'button',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<ButtonDomRef>(props);
      return <Button ref={callbackRef} />;
    },
    interactiveElementName: 'Button',
  },
  'check-box': {
    Header: 'CheckBox',
    id: 'check-box',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<CheckBoxDomRef>(props);
      return <CheckBox ref={callbackRef} />;
    },
    interactiveElementName: 'CheckBox',
  },
  'combo-box': {
    Header: 'ComboBox',
    id: 'combo-box',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<ComboBoxDomRef>(props);
      return <ComboBox ref={callbackRef} />;
    },
    interactiveElementName: 'ComboBox',
  },
  'date-picker': {
    Header: 'DatePicker',
    id: 'date-picker',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<DatePickerDomRef>(props);
      return <DatePicker ref={callbackRef} />;
    },
    interactiveElementName: 'DatePicker',
  },
  'date-range-picker': {
    Header: 'DateRangePicker',
    id: 'date-range-picker',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<DateRangePickerDomRef>(props);
      return <DateRangePicker ref={callbackRef} />;
    },
    interactiveElementName: 'DateRangePicker',
  },
  'date-time-picker': {
    Header: 'DateTimePicker',
    id: 'date-time-picker',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<DateTimePickerDomRef>(props);
      return <DateTimePicker ref={callbackRef} />;
    },
    interactiveElementName: 'DateTimePicker',
  },
  'dynamic-date-range': {
    Header: 'DynamicDateRange',
    id: 'dynamic-date-range',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<DynamicDateRangeDomRef>(props);
      return <DynamicDateRange ref={callbackRef} />;
    },
    interactiveElementName: 'DynamicDateRange',
  },
  'file-uploader': {
    Header: 'FileUploader',
    id: 'file-uploader',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<FileUploaderDomRef>(props);
      return <FileUploader ref={callbackRef} />;
    },
    interactiveElementName: 'FileUploader',
  },
  icon: {
    Header: 'Icon',
    id: 'icon',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<IconDomRef>(props);
      return <Icon name="employee" mode="Interactive" ref={callbackRef} />;
    },
    interactiveElementName: 'Icon',
  },
  input: {
    Header: 'Input',
    id: 'input',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<InputDomRef>(props);
      return <Input ref={callbackRef} />;
    },
    interactiveElementName: 'Input',
  },
  'message-view-button': {
    Header: 'MessageViewButton',
    id: 'message-view-button',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<ButtonDomRef>(props);
      return <MessageViewButton ref={callbackRef} />;
    },
    interactiveElementName: 'MessageViewButton',
  },
  'multi-combo-box': {
    Header: 'MultiComboBox',
    id: 'multi-combo-box',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<MultiComboBoxDomRef>(props);
      return <MultiComboBox ref={callbackRef} />;
    },
    interactiveElementName: 'MultiComboBox',
  },
  'multi-input': {
    Header: 'MultiInput',
    id: 'multi-input',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<MultiInputDomRef>(props);
      return <MultiInput ref={callbackRef} />;
    },
    interactiveElementName: 'MultiInput',
  },
  'radio-button': {
    Header: 'RadioButton',
    id: 'radio-button',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<RadioButtonDomRef>(props);
      return <RadioButton ref={callbackRef} />;
    },
    interactiveElementName: 'RadioButton',
  },
  'rating-indicator': {
    Header: 'RatingIndicator',
    id: 'rating-indicator',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<RatingIndicatorDomRef>(props);
      return <RatingIndicator ref={callbackRef} />;
    },
    interactiveElementName: 'RatingIndicator',
  },
  search: {
    Header: 'Search',
    id: 'search',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<SearchDomRef>(props);
      return <Search ref={callbackRef} />;
    },
    interactiveElementName: 'Search',
  },
  'segmented-button': {
    Header: 'SegmentedButton',
    id: 'segmented-button',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<SegmentedButtonDomRef>(props);
      return (
        <SegmentedButton ref={callbackRef}>
          <SegmentedButtonItem ref={callbackRef}>Btn1</SegmentedButtonItem>
          <SegmentedButtonItem ref={callbackRef}>Btn2</SegmentedButtonItem>
        </SegmentedButton>
      );
    },
    interactiveElementName: 'SegmentedButton',
  },
  select: {
    Header: 'Select',
    id: 'select',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<SelectDomRef>(props);
      return <Select ref={callbackRef} />;
    },
    interactiveElementName: 'Select',
  },
  slider: {
    Header: 'Slider',
    id: 'slider',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<SliderDomRef>(props);
      return <Slider ref={callbackRef} />;
    },
    interactiveElementName: 'Slider',
  },
  'split-button': {
    Header: 'SplitButton',
    id: 'split-button',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<SplitButtonDomRef>(props);
      return <SplitButton ref={callbackRef} />;
    },
    interactiveElementName: 'SplitButton',
  },
  'step-input': {
    Header: 'StepInput',
    id: 'step-input',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<StepInputDomRef>(props);
      return <StepInput ref={callbackRef} />;
    },
    interactiveElementName: 'StepInput',
  },
  switch: {
    Header: 'Switch',
    id: 'switch',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<SwitchDomRef>(props);
      return <Switch ref={callbackRef} />;
    },
    interactiveElementName: 'Switch',
  },
  'text-area': {
    Header: 'TextArea',
    id: 'text-area',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<TextAreaDomRef>(props);
      return <TextArea ref={callbackRef} />;
    },
    interactiveElementName: 'TextArea',
  },
  'time-picker': {
    Header: 'TimePicker',
    id: 'time-picker',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<TimePickerDomRef>(props);
      return <TimePicker ref={callbackRef} />;
    },
    interactiveElementName: 'TimePicker',
  },
  'toggle-button': {
    Header: 'ToggleButton',
    id: 'toggle-button',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<ToggleButtonDomRef>(props);
      return <ToggleButton ref={callbackRef} />;
    },
    interactiveElementName: 'ToggleButton',
  },
} as const satisfies Record<F2InputColumnId, AnalyticalTableColumnDefinition>;

const f2DummyData = new Array(1).fill({});
const f2TableHooks = [useF2CellEdit];

interface PluginsF2SingleInputTestCompProps {
  columnId: F2InputColumnId;
}

export const PluginsF2SingleInputTestComp = ({ columnId }: PluginsF2SingleInputTestCompProps) => {
  const columns = useMemo(() => [f2InputColumnDefs[columnId]], [columnId]);
  const data = useMemo(() => f2DummyData, []);
  const tableHooks = useMemo(() => f2TableHooks, []);
  return (
    <>
      <button>Before</button>
      <AnalyticalTable
        data={data}
        columns={columns}
        tableHooks={tableHooks}
        visibleRows={5}
        rowHeight={100}
        headerRowHeight={44}
      />
      <button>After</button>
    </>
  );
};
