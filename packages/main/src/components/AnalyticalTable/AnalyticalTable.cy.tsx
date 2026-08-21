import { cssVarToRgb } from '@/cypress/support/utils';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import NoDataIllustration from '@ui5/webcomponents-fiori/dist/illustrations/NoData.js';
import NoFilterResults from '@ui5/webcomponents-fiori/dist/illustrations/NoFilterResults.js';
import { isIOS, isMac } from '@ui5/webcomponents-react-base/Device';
import { ThemingParameters } from '@ui5/webcomponents-react-base/ThemingParameters';
import { useCallback, useEffect, useMemo, useRef, useState, version as reactVersion } from 'react';
import type { ComponentClass, ComponentProps } from 'react';
import type {
  AnalyticalTableCellInstance,
  AnalyticalTableColumnDefinition,
  AnalyticalTableDomRef,
  AnalyticalTablePropTypes,
  InputDomRef,
  ButtonDomRef,
  CheckBoxDomRef,
  ComboBoxDomRef,
  DatePickerDomRef,
  DateRangePickerDomRef,
  DateTimePickerDomRef,
  DynamicDateRangeDomRef,
  FileUploaderDomRef,
  MessageViewButtonDomRef,
  MultiComboBoxDomRef,
  MultiInputDomRef,
  RadioButtonDomRef,
  RatingIndicatorDomRef,
  SearchDomRef,
  SegmentedButtonDomRef,
  SelectDomRef,
  SliderDomRef,
  SplitButtonDomRef,
  StepInputDomRef,
  SwitchDomRef,
  TextAreaDomRef,
  TimePickerDomRef,
  ToggleButtonDomRef,
  IconDomRef,
} from '../..';
import {
  AnalyticalTable,
  AnalyticalTableHooks,
  AnalyticalTablePopinDisplay,
  AnalyticalTableScaleWidthMode,
  AnalyticalTableSelectionMode,
  AnalyticalTableVisibleRowCountMode,
  Button,
  CheckBox,
  ComboBox,
  DatePicker,
  DateRangePicker,
  DateTimePicker,
  DynamicDateRange,
  FileUploader,
  Icon,
  IllustratedMessage,
  Input,
  MessageViewButton,
  MultiComboBox,
  MultiInput,
  RadioButton,
  RatingIndicator,
  Search,
  SegmentedButton,
  SegmentedButtonItem,
  Select,
  Slider,
  SplitButton,
  StepInput,
  Switch,
  Text,
  TextArea,
  TimePicker,
  ToggleButton,
} from '../..';
import { useF2CellEdit } from './pluginHooks/useF2CellEdit.js';
import { useManualRowSelect } from './pluginHooks/useManualRowSelect';

const canUseVoiceOver = isIOS() || isMac();

const generateMoreData = (count) => {
  return new Array(count).fill('').map((item, index) => ({
    name: `Name-${index}`,
    age: index,
    friend: {
      name: `FriendName-${index}`,
      age: index + 10,
    },
  }));
};

function checkColumnWidthWithTolerance(
  selector: string,
  expectedGrow: number,
  expectedSmart: number,
  isGrow: boolean,
  tolerance = 0.5,
) {
  cy.log('checkColumnWidthWithTolerance');
  cy.get(selector)
    .invoke('outerWidth')
    .should((width) => {
      const expected = isGrow ? expectedGrow : expectedSmart;
      if (isGrow) {
        expect(width).to.equal(expected);
      } else {
        expect(width).to.be.within(expected - tolerance, expected + tolerance);
      }
    });
}

type PropTypes = AnalyticalTablePropTypes['onRowSelect'];

const columns = [
  {
    Header: 'Name',
    headerTooltip: 'Full Name',
    accessor: 'name',
  },
  {
    Header: 'Age',
    accessor: 'age',
  },
  {
    Header: 'Friend Name',
    accessor: 'friend.name', // Custom value accessors!
  },
  {
    Header: () => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age',
    headerLabel: 'Custom Label',
  },
];
const data = [
  {
    name: 'A',
    age: 40,
    friend: {
      name: 'Lorem',
      age: 28,
    },
    status: ValueState.Positive,
    navigation: ValueState.Negative,
  },
  {
    name: 'B',
    age: 20,
    friend: {
      name: 'Ipsum',
      age: 50,
    },
  },
  {
    name: 'X',
    age: 17,
    friend: {
      name: 'Dolor',
      age: 42,
    },
  },
  {
    name: 'C',
    age: 79,
    friend: {
      name: 'Sit',
      age: 50,
    },
  },
];

describe('AnalyticalTable', () => {
  it('row count modes', () => {
    [AnalyticalTableVisibleRowCountMode.Auto, AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows].forEach(
      (visibleRowCountMode) => {
        cy.mount(
          <div style={{ height: '200px' }}>
            <AnalyticalTable
              data={data}
              columns={columns}
              visibleRowCountMode={visibleRowCountMode}
              overscanCount={10}
            />
          </div>,
        );
        cy.findByRole('grid').should('have.attr', 'data-per-page', '3');
        cy.findByText('X').should('be.visible');
        cy.findByText('C').should('not.be.visible');
        cy.get('[data-empty-row]').should('not.be.visible').should('have.length', 1);
      },
    );
    [AnalyticalTableVisibleRowCountMode.Auto, AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows].forEach(
      (visibleRowCountMode) => {
        cy.mount(
          <AnalyticalTable
            style={{ height: '4400px' }}
            data={generateMoreData(200)}
            columns={columns}
            visibleRowCountMode={visibleRowCountMode}
          />,
        );
        cy.findByRole('grid').should('have.attr', 'data-per-page', '99'); //rows(99*44) + header(44) = 4400
        cy.findByText('Name-98').should('be.visible');
        cy.findByText('Name-99').should('not.be.visible');
        cy.get('[data-empty-row]').should('not.exist');
      },
    );

    [AnalyticalTableVisibleRowCountMode.Auto, AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows].forEach(
      (visibleRowCountMode) => {
        cy.mount(
          <AnalyticalTable
            style={{ height: '4400px' }}
            data={data}
            columns={columns}
            visibleRowCountMode={visibleRowCountMode}
          />,
        );
        if (visibleRowCountMode === AnalyticalTableVisibleRowCountMode.Auto) {
          cy.get('[data-empty-row]').should('be.visible').should('have.length', 1);
        } else {
          cy.get('[data-empty-row]').should('be.visible').should('have.length', 95);
        }
      },
    );

    //test if visibleRows prop is ignored when row-count-mode is "Auto" or "AutoWithEmptyRows"
    [AnalyticalTableVisibleRowCountMode.Auto, AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows].forEach(
      (visibleRowCountMode) => {
        cy.mount(
          <AnalyticalTable
            style={{ height: '200px' }}
            data={data}
            columns={columns}
            visibleRowCountMode={visibleRowCountMode}
            visibleRows={1337}
          />,
        );
        cy.findByRole('grid').should('have.attr', 'data-per-page', '3');
        cy.findByText('X').should('be.visible');
        cy.findByText('C').should('not.be.visible');
      },
    );

    //test default visibleRow count
    cy.mount(
      <AnalyticalTable
        data={generateMoreData(50)}
        columns={columns}
        visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Fixed}
      />,
    );
    cy.findByRole('grid').should('have.attr', 'data-per-page', '15');
    cy.findByText('Name-14').should('be.visible');
    cy.findByText('Name-15').should('not.be.visible');

    cy.mount(
      <AnalyticalTable
        data={generateMoreData(50)}
        columns={columns}
        visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Fixed}
        visibleRows={20}
      />,
    );
    cy.findByRole('grid').should('have.attr', 'data-per-page', '20');
    cy.findByText('Name-19').should('be.visible');
    cy.findByText('Name-20').should('not.be.visible');

    cy.mount(
      <AnalyticalTable
        data={generateMoreData(50)}
        columns={columns}
        visibleRowCountMode={AnalyticalTableVisibleRowCountMode.Interactive}
        visibleRows={10}
      />,
    );
    cy.findByRole('grid').should('have.attr', 'data-per-page', '10');
    cy.findByText('Name-9').should('be.visible');
    cy.findByText('Name-10').should('not.be.visible');
    cy.findByTitle('Drag to resize')
      .trigger('mousedown')
      .trigger('mousemove', { pageY: 742, force: true })
      .trigger('mouseup', { pageY: 742 });
    cy.findByRole('grid').should('have.attr', 'data-per-page', '15');
    cy.findByText('Name-14').should('be.visible');
    cy.findByText('Name-15').should('not.be.visible');
    cy.findByTitle('Drag to resize').realMouseDown();
    cy.findByTitle('Drag to resize').realMouseMove(0, -540, { scrollBehavior: false });
    cy.get('body').realMouseUp({ position: { x: 100, y: 200 } });
    cy.findByRole('grid').should('have.attr', 'data-per-page', '3');
    cy.findByText('Name-2').should('be.visible');
    cy.findByText('Name-3').should('not.be.visible');
  });

  it('Auto row count: no double vertical scrollbar when horizontally scrollable', () => {
    const wideColumns = [
      { Header: 'Name', accessor: 'name', minWidth: 280 },
      { Header: 'Type', accessor: 'type', minWidth: 180 },
      { Header: 'Description', accessor: 'description', minWidth: 220 },
      { Header: 'Location', accessor: 'location', minWidth: 180 },
      { Header: 'Published', accessor: 'published', minWidth: 220 },
    ];
    const wideData = Array.from({ length: 50 }, (_, index) => ({
      name: `Item ${index}`,
      type: 'Type',
      description: 'Long description',
      location: 'Folder',
      published: 'Jun 5, 2026',
    }));

    [AnalyticalTableVisibleRowCountMode.Auto, AnalyticalTableVisibleRowCountMode.AutoWithEmptyRows].forEach(
      (visibleRowCountMode) => {
        cy.mount(
          <div style={{ height: 528, width: 592, display: 'flex', flexDirection: 'column' }}>
            <AnalyticalTable
              columns={wideColumns}
              data={wideData}
              visibleRowCountMode={visibleRowCountMode}
              rowHeight={38}
              headerRowHeight={32}
              selectionMode={AnalyticalTableSelectionMode.None}
            />
          </div>,
        );

        // `should` retries until the auto row count settles (React 18 commits the corrected render later)
        cy.get('[data-component-name="AnalyticalTableContainerWithScrollbar"]')
          .parent()
          .should(($root) => {
            const root = $root[0];
            const container = root.querySelector<HTMLElement>('[data-component-name="AnalyticalTableContainer"]');
            expect(container!.scrollWidth, 'container is horizontally scrollable').to.be.greaterThan(
              container!.clientWidth,
            );
            expect(root.scrollHeight, 'table root is not vertically scrollable').to.be.at.most(root.clientHeight + 1);
          });
      },
    );
  });

  it('autoResize', () => {
    function doubleClickResizer(selector: string, columnName: string, outerWidth: number) {
      cy.get(selector)
        .realHover()
        .dblclick()
        // fallback
        .realClick({ clickCount: 2 });

      cy.get(`[data-column-id="${columnName}"]`)
        .invoke('outerWidth')
        .should(($width: number) => {
          expect(Math.floor($width)).to.equal(outerWidth);
        });
    }

    let resizeColumns = columns.map((el) => {
      return { ...el, autoResizable: true };
    });

    let dataFixed = data.map((el, i) => {
      if (i === 2) return { ...el, name: 'Longer Name Too' };
      return el;
    });

    const resizeSpy = cy.spy().as('resize');

    cy.mount(
      <AnalyticalTable
        data={dataFixed}
        columns={resizeColumns}
        onAutoResize={(e) => {
          resizeSpy(e);
          e.preventDefault();
        }}
      />,
    );

    cy.get('[data-component-name="AnalyticalTableResizer"]').eq(0).as('resizer1');
    cy.get('[data-component-name="AnalyticalTableResizer"]').eq(1).as('resizer2');

    cy.document().its('fonts.status').should('equal', 'loaded');

    doubleClickResizer('@resizer2', 'age', 476);
    doubleClickResizer('@resizer1', 'name', 476);
    // doubled call count because of fallback
    cy.get('@resize').should('have.callCount', 4);

    cy.mount(<AnalyticalTable data={dataFixed} columns={resizeColumns} onAutoResize={resizeSpy} />);
    doubleClickResizer('@resizer2', 'age', 60);
    doubleClickResizer('@resizer1', 'name', 129);
    cy.get('@resize').should('have.callCount', 8);

    dataFixed = generateMoreData(200);

    dataFixed = dataFixed.map((el, i) => {
      if (i === 2) return { ...el, name: 'Much Longer Name To Resize Larger For Testing A Larger Auto Resize' };
      else if (i > 50) return { ...el, name: 'Short Name' };
      return el;
    });

    const loadMore = cy.spy().as('more');
    cy.mount(
      <AnalyticalTable
        data={dataFixed}
        columns={resizeColumns}
        onLoadMore={loadMore}
        infiniteScroll={true}
        infiniteScrollThreshold={0}
        onAutoResize={resizeSpy}
      />,
    );

    cy.get('[data-component-name="AnalyticalTableBody"]').scrollTo('bottom');
    cy.wait(50);
    doubleClickResizer('@resizer1', 'name', 93);
    cy.get('@resize').should('have.callCount', 10);

    resizeColumns = columns.map((el) => {
      return { ...el, autoResizable: false };
    });

    cy.mount(<AnalyticalTable data={dataFixed} columns={resizeColumns} />);
    cy.wait(100);
    doubleClickResizer('@resizer2', 'age', 472);
    doubleClickResizer('@resizer1', 'name', 472);

    cy.get('@resize').should('have.callCount', 10);

    const dataSub = data.map((el, i) => {
      if (i === 2) return { ...el, name: 'Longer Name Too' };
      return el;
    });

    resizeColumns = columns.map((el) => {
      return { ...el, autoResizable: true };
    });

    const renderRowSubComponent = () => {
      return <div title="subcomponent">SubComponent</div>;
    };

    cy.mount(
      <AnalyticalTable
        data={dataSub}
        columns={resizeColumns}
        renderRowSubComponent={renderRowSubComponent}
        onAutoResize={resizeSpy}
      />,
    );
    doubleClickResizer('@resizer2', 'age', 60);
    doubleClickResizer('@resizer1', 'name', 165);
    cy.get('@resize').should('have.callCount', 14);

    const dataResizeTree = [...dataTree];
    dataResizeTree[0].subRows[0].name = 'Longer Name To Resize Here';
    cy.mount(<AnalyticalTable columns={resizeColumns} data={dataResizeTree} isTreeTable onAutoResize={resizeSpy} />);
    doubleClickResizer('@resizer1', 'name', 169);
    cy.get('[aria-rowindex="2"] > [aria-colindex="1"] > [title="Expand Node"] > [ui5-button]').click();
    doubleClickResizer('@resizer1', 'name', 251);
    cy.get('@resize').should('have.callCount', 18);
  });

  it('scrollTo', () => {
    interface ScrollTableProps {
      scrollFn: string;
      args: Array<string | number>;
      onTableScroll?: AnalyticalTablePropTypes['onTableScroll'];
    }

    const scroll = cy.spy().as('scroll');
    const ScrollTable = (props: ScrollTableProps) => {
      const { scrollFn, args, onTableScroll } = props;
      const tableRef = useRef(null);
      const handleScroll = () => {
        tableRef.current[scrollFn](...args);
      };
      return (
        <>
          <Button onClick={handleScroll}>Click</Button>
          <AnalyticalTable
            data-testid="table"
            style={{ width: '170px' }}
            ref={tableRef}
            onTableScroll={onTableScroll}
            header="Table Title"
            data={data}
            columns={columns}
            visibleRows={1}
            minRows={1}
          />
        </>
      );
    };
    cy.mount(<ScrollTable scrollFn="scrollToItem" args={[1, 'start']} onTableScroll={scroll} />);
    cy.findByText('A').should('be.visible');
    // should not be rendered due to virtualization
    cy.findByText('B').should('not.exist', { timeout: 100 });
    cy.findByText('Click').click();
    cy.findByText('B').should('be.visible');
    cy.findByText('A').should('not.exist', { timeout: 100 });

    cy.mount(<ScrollTable scrollFn="scrollTo" args={[50]} onTableScroll={scroll} />);
    cy.findByText('Click').click();
    cy.get('[data-component-name="AnalyticalTableBody"]').invoke('scrollTop').should('equal', 50);

    cy.mount(<ScrollTable scrollFn="horizontalScrollToItem" args={[1, 'start']} onTableScroll={scroll} />);
    cy.findByText('A').should('be.visible');
    cy.findByText('28').should('not.be.visible');
    cy.findByText('Click').click();
    cy.findByText('28').should('be.visible');
    cy.findByText('A').should('not.be.visible');

    cy.mount(<ScrollTable scrollFn="horizontalScrollTo" args={[20]} onTableScroll={scroll} />);
    cy.findByText('Click').click();
    cy.findByRole('grid').invoke('scrollLeft').should('equal', 20);

    cy.get('@scroll').should('have.been.called');
  });

  it('tree selection & filtering', () => {
    const filterSpy = cy.spy().as('filter');
    const TreeSelectFilterTable = (props: PropTypes) => {
      const [filter, setFilter] = useState('');
      const [relevantPayload, setRelevantPayload] = useState<Record<string, any>>({});
      return (
        <>
          <Input data-testid="input" onInput={(e) => setFilter(e.target.value)} />
          <AnalyticalTable
            {...props}
            isTreeTable
            filterable
            columns={columns}
            onRowSelect={(e) => {
              const { allRowsSelected, allVisibleRowsSelected, isSelected, row, rowsById, selectedRowIds } = e.detail;
              const selectedRowIdsArrayMapped = Object.keys(selectedRowIds).reduce((acc, key) => {
                if (selectedRowIds[key]) {
                  acc.push(rowsById[key]);
                }
                return acc;
              }, []);
              setRelevantPayload({
                allRowsSelected,
                allVisibleRowsSelected,
                isSelected,
                row: row.id,
                selectedFlatRows: selectedRowIdsArrayMapped.map((item) => ({
                  id: item?.id,
                })),
                selectedRowIds,
              });
              props.onRowSelect(e);
            }}
            data={dataTree}
            globalFilterValue={filter}
            selectionMode="Multiple"
            onFilter={filterSpy}
          />
          <div data-testid="payloadHelper">
            {JSON.stringify(relevantPayload?.selectedFlatRows?.filter(Boolean).length)}
            {JSON.stringify(relevantPayload?.selectedRowIds)}
          </div>
          <div data-testid="payloadAllRowsSelected">{`${relevantPayload?.allRowsSelected ?? false}`}</div>
          <div data-testid="payloadAllVisibleRowsSelected">{`${relevantPayload?.allVisibleRowsSelected ?? false}`}</div>
        </>
      );
    };
    const select = cy.spy().as('onRowSelectSpy');
    cy.mount(<TreeSelectFilterTable onRowSelect={select} />);

    // expand
    cy.findByText('Robin Moreno').should('not.exist', { timeout: 100 });
    cy.findByText('Judith Mathews').should('not.exist', { timeout: 100 });
    cy.get('[aria-rowindex="2"] > [aria-colindex="2"] > [title="Expand Node"] > [ui5-button]').click();
    cy.findByText('Robin Moreno').should('be.visible');
    cy.get('[aria-rowindex="5"] > [aria-colindex="2"] > [title="Expand Node"] > [ui5-button]')
      .shadow()
      .find('button')
      .focus();
    cy.realPress('Enter');

    cy.findByText('Judith Mathews').should('be.visible');

    // select
    cy.findByText('Robin Moreno').click();
    cy.get('@onRowSelectSpy').should('have.been.calledWithMatch', {
      detail: { isSelected: true },
    });
    cy.findByTestId('payloadHelper').should('have.text', '1{"0.2":true}');
    cy.findByText('Judith Mathews').click();
    cy.get('@onRowSelectSpy').should('have.been.calledWithMatch', {
      detail: { isSelected: true },
    });
    cy.findByTestId('payloadHelper').should('have.text', '2{"0.2":true,"0.2.0":true}');

    // global filter + select
    cy.findByTestId('input').typeIntoUi5Input('Katy Bradshaw');
    cy.findByText('Robin Moreno').should('not.exist', { timeout: 100 });
    cy.findByText('Judith Mathews').should('not.exist', { timeout: 100 });
    cy.findByText('Katy Bradshaw').click();
    cy.get('@onRowSelectSpy').should('have.been.calledWithMatch', {
      detail: { isSelected: true },
    });
    cy.get('@onRowSelectSpy').should('have.been.calledThrice');
    cy.findByTestId('payloadHelper').should('have.text', '3{"1":true,"0.2":true,"0.2.0":true}');

    cy.findByTestId('input').typeIntoUi5Input('{selectall}{backspace}');

    // column filter + select
    cy.findByText('Name').click();
    cy.get(`[ui5-input][show-clear-icon]`).typeIntoUi5Input('Flowers Mcfarland', { force: true });
    cy.get('@filter').should('have.callCount', 17);
    cy.get('@filter').should('have.been.calledWithMatch', {
      value: 'Flowers Mcfarland',
      columnId: 'name',
      filters: [{ id: 'name', value: 'Flowers Mcfarland' }],
    });
    cy.findByText('Robin Moreno').should('not.exist', { timeout: 100 });
    cy.findByText('Judith Mathews').should('not.exist', { timeout: 100 });
    cy.findByText('Katy Bradshaw').should('not.exist', { timeout: 100 });
    cy.findByText('Flowers Mcfarland').click({ force: true });
    cy.get('@onRowSelectSpy').should('have.been.calledWithMatch', {
      detail: { isSelected: true },
    });
    cy.get('@onRowSelectSpy').should('have.callCount', 4);
    cy.findByTestId('payloadHelper').should('have.text', '4{"0":true,"1":true,"0.2":true,"0.2.0":true}');

    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'false');
    cy.findByTestId('payloadAllVisibleRowsSelected').should('have.text', 'true');

    cy.findByText('Name').click();
    cy.get(`[ui5-input][show-clear-icon]`).typeIntoUi5Input('{selectall}{backspace}{enter}', { force: true });

    cy.findByText('Flowers Mcfarland').click();
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'false');
    cy.findByTestId('payloadAllVisibleRowsSelected').should('have.text', 'false');
  });

  it('programmatic and user selection + filtering', () => {
    const data = [
      ...generateMoreData(20),
      {
        name: `Name-7`,
        age: 22,
        friend: {
          name: `FriendName-X`,
          age: 22 + 10,
        },
      },
    ];

    const filterSpy = cy.spy().as('filter');
    const TestComp = ({ onRowSelect }: PropTypes) => {
      const [selectedRowIds, setSelectedRowIds] = useState({});
      const [selectedFlatRows, setSelectedFlatRows] = useState([]);
      const [selectedRowIdsCb, setSelectedRowIdsCb] = useState({});
      const [allRowsSelected, setAllRowsSelected] = useState(false);
      const [allVisibleRowsSelected, setAllVisibleRowsSelected] = useState(false);
      const [globalFilterVal, setGlobalFilterVal] = useState('');
      return (
        <>
          <Button onClick={() => setSelectedRowIds({ 2: true, 3: false })}>Set selected rows</Button>
          <input
            data-testid="input"
            value={globalFilterVal}
            onInput={(e) => {
              setGlobalFilterVal(e.target.value);
            }}
          />
          <AnalyticalTable
            filterable
            data={data}
            columns={columns}
            globalFilterValue={globalFilterVal}
            onRowSelect={(e) => {
              const { selectedRowIds: _selectedRowIds, rowsById } = e.detail;
              const selectedRowIdsArrayMapped = Object.keys(_selectedRowIds).reduce((acc, key) => {
                if (_selectedRowIds[key]) {
                  acc.push(rowsById[key]);
                }
                return acc;
              }, []);
              setSelectedFlatRows(selectedRowIdsArrayMapped.map((item) => item.id));
              setSelectedRowIdsCb(e.detail.selectedRowIds);
              setAllRowsSelected(e.detail.allRowsSelected);
              setAllVisibleRowsSelected(e.detail.allVisibleRowsSelected);
              onRowSelect(e);
            }}
            onFilter={filterSpy}
            selectionMode={AnalyticalTableSelectionMode.Multiple}
            selectedRowIds={selectedRowIds}
          />
          <p>
            "selectedFlatRows (state - not part of event):"
            <span data-testid="payload">{JSON.stringify(selectedFlatRows)}</span>
          </p>
          <p>
            "e.detail.selectedRowIds:"<span data-testid="payloadRowsById">{JSON.stringify(selectedRowIdsCb)}</span>
          </p>
          <p>
            "e.detail.allRowsSelected:"
            <span data-testid="payloadAllRowsSelected">{`${allRowsSelected}`}</span>
          </p>
          <p>
            "e.detail.allVisibleRowsSelected:"
            <span data-testid="payloadAllVisibleRowsSelected">{`${allVisibleRowsSelected}`}</span>
          </p>
        </>
      );
    };
    const select = cy.spy().as('onRowSelectSpy');
    cy.mount(<TestComp onRowSelect={select} />);

    cy.findByText('Name-0').click();
    cy.findByText('Name-1').click();
    cy.findByText('Name-5').click();
    cy.findByText('Name-5').click();

    cy.findByTestId('payload').should('have.text', '["0","1"]');
    cy.findByTestId('payloadRowsById').should('have.text', '{"0":true,"1":true}');
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'false');
    cy.get('@onRowSelectSpy').should('have.callCount', 4);

    cy.findByText('Set selected rows').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 4);
    cy.findByText('Name-1').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 5);
    cy.findByTestId('payload').should('have.text', '["1","2"]');
    cy.findByTestId('payloadRowsById').should('have.text', '{"1":true,"2":true,"3":false}');
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'false');

    //select all
    //click
    cy.get('[data-row-index="0"][data-column-index="0"]').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 6);
    cy.findByTestId('payload').should(
      'have.text',
      '["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]',
    );
    cy.findByTestId('payloadRowsById').should(
      'have.text',
      '{"0":true,"1":true,"2":true,"3":true,"4":true,"5":true,"6":true,"7":true,"8":true,"9":true,"10":true,"11":true,"12":true,"13":true,"14":true,"15":true,"16":true,"17":true,"18":true,"19":true,"20":true}',
    );
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'true');

    // enter (keydown)
    cy.get('[data-row-index="0"][data-column-index="0"]').realPress('Enter');
    cy.get('@onRowSelectSpy').should('have.callCount', 7);
    cy.findByTestId('payload').should('have.text', '[]');
    cy.findByTestId('payloadRowsById').should('have.text', '{}');
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'false');

    // Space (keyup) + ArrowDown => 1st row selected
    cy.get('[data-row-index="0"][data-column-index="0"]').realPress(['Space', 'ArrowDown']);
    cy.get('@onRowSelectSpy').should('have.callCount', 8);
    cy.findByTestId('payload').should('have.text', '["0"]');
    cy.findByTestId('payloadRowsById').should('have.text', '{"0":true}');
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'false');

    // Space (keyup) + ArrowUp => all rows selected
    cy.get('[data-row-index="0"][data-column-index="0"]').realPress(['Space', 'ArrowUp']);
    cy.get('@onRowSelectSpy').should('have.callCount', 9);
    cy.findByTestId('payload').should(
      'have.text',
      '["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]',
    );
    cy.findByTestId('payloadRowsById').should(
      'have.text',
      '{"0":true,"1":true,"2":true,"3":true,"4":true,"5":true,"6":true,"7":true,"8":true,"9":true,"10":true,"11":true,"12":true,"13":true,"14":true,"15":true,"16":true,"17":true,"18":true,"19":true,"20":true}',
    );
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'true');

    cy.get('[data-row-index="0"][data-column-index="0"]').click();

    cy.findByText('Name-0').click();
    cy.findByText('Name-1').click();
    cy.findByText('Name-5').click();
    cy.findByText('Name').click();
    cy.get('[ui5-li-custom]').shadow().get('[ui5-input]').typeIntoUi5Input('7{enter}');
    cy.get('@filter').should('have.callCount', 1);
    cy.get('@filter').should('have.been.calledWithMatch', {
      value: '7',
      columnId: 'name',
      filters: [{ id: 'name', value: '7' }],
    });
    cy.findByTestId('payload').should('have.text', '["0","1","5"]');
    cy.findByTestId('payloadRowsById').should('have.text', '{"0":true,"1":true,"5":true}');
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'false');

    cy.get('[data-row-index="0"][data-column-index="0"]').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 14);
    cy.findByTestId('payload').should('have.text', '["0","1","5","7","17","20"]');
    cy.findByTestId('payloadRowsById').should('have.text', '{"0":true,"1":true,"5":true,"7":true,"17":true,"20":true}');
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'false');
    cy.findByTestId('payloadAllVisibleRowsSelected').should('have.text', 'true');

    cy.findByText('Name').click();
    cy.get('[ui5-li-custom]').shadow().get('[ui5-input]').typeIntoUi5Input('{selectall}{backspace}{enter}');
    cy.get('@filter').should('have.callCount', 2);
    cy.get('@filter').should('have.been.calledWithMatch', {
      value: undefined,
      columnId: 'name',
      filters: [],
    });

    cy.get('[data-row-index="0"][data-column-index="0"]').click();
    cy.findByText('Name-17').click({ force: true });
    cy.findByText('Name').click();
    cy.get('[ui5-li-custom]').shadow().get('[ui5-input]').typeIntoUi5Input('7{enter}');
    cy.get('@filter').should('have.callCount', 3);
    cy.findByTestId('payload').should(
      'have.text',
      '["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","18","19","20"]',
    );
    cy.findByTestId('payloadRowsById').should(
      'have.text',
      '{"0":true,"1":true,"2":true,"3":true,"4":true,"5":true,"6":true,"7":true,"8":true,"9":true,"10":true,"11":true,"12":true,"13":true,"14":true,"15":true,"16":true,"18":true,"19":true,"20":true}',
    );
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'false');
    cy.findByTestId('payloadAllVisibleRowsSelected').should('have.text', 'false');
    cy.findByText('Name-17').click();
    cy.findByTestId('payload').should(
      'have.text',
      '["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]',
    );
    cy.findByTestId('payloadRowsById').should(
      'have.text',
      '{"0":true,"1":true,"2":true,"3":true,"4":true,"5":true,"6":true,"7":true,"8":true,"9":true,"10":true,"11":true,"12":true,"13":true,"14":true,"15":true,"16":true,"17":true,"18":true,"19":true,"20":true}',
    );
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'true');
    cy.findByTestId('payloadAllVisibleRowsSelected').should('have.text', 'true');

    cy.findByText('Name').click();
    cy.get('[ui5-li-custom]').shadow().get('[ui5-input]').typeIntoUi5Input('{selectall}{backspace}{enter}');
    cy.get('@filter').should('have.callCount', 4);

    cy.findByText('Name-17').click({ force: true });
    cy.findByTestId('input').type('7{enter}');
    cy.findByTestId('payload').should(
      'have.text',
      '["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","18","19","20"]',
    );
    cy.findByTestId('payloadRowsById').should(
      'have.text',
      '{"0":true,"1":true,"2":true,"3":true,"4":true,"5":true,"6":true,"7":true,"8":true,"9":true,"10":true,"11":true,"12":true,"13":true,"14":true,"15":true,"16":true,"18":true,"19":true,"20":true}',
    );
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'false');
    cy.findByTestId('payloadAllVisibleRowsSelected').should('have.text', 'false');
    cy.findByText('Name-17').click();
    cy.findByTestId('payload').should(
      'have.text',
      '["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]',
    );
    cy.findByTestId('payloadRowsById').should(
      'have.text',
      '{"0":true,"1":true,"2":true,"3":true,"4":true,"5":true,"6":true,"7":true,"8":true,"9":true,"10":true,"11":true,"12":true,"13":true,"14":true,"15":true,"16":true,"17":true,"18":true,"19":true,"20":true}',
    );
    cy.findByTestId('payloadAllRowsSelected').should('have.text', 'true');
    cy.findByTestId('payloadAllVisibleRowsSelected').should('have.text', 'true');
    cy.get('@onRowSelectSpy').should('have.callCount', 19);
  });

  it('GroupBy selection', () => {
    const GroupBySelectTable = (props: PropTypes) => {
      const { onRowSelect } = props;
      const [relevantPayload, setRelevantPayload] = useState<Record<string, any>>({});
      const tableInstance = useRef<Record<string, any>>(null);
      // strict mode
      const hasRun = useRef(false);

      useEffect(() => {
        if (tableInstance.current && !hasRun.current) {
          setTimeout(() => {
            tableInstance.current.toggleAllRowsExpanded(true);
          }, 100);
          hasRun.current = true;
        }
      }, []);

      return (
        <>
          <AnalyticalTable
            {...props}
            groupable
            columns={columns}
            tableInstance={tableInstance}
            onRowSelect={(e) => {
              const { allRowsSelected, allVisibleRowsSelected, isSelected, row, rowsById, selectedRowIds } = e.detail;
              const selectedRowIdsArrayMapped = Object.keys(selectedRowIds).reduce((acc, key) => {
                if (selectedRowIds[key]) {
                  acc.push(rowsById[key]);
                }
                return acc;
              }, []);
              setRelevantPayload({
                allRowsSelected,
                allVisibleRowsSelected,
                isSelected,
                row: row?.id,
                selectedFlatRows: selectedRowIdsArrayMapped.map((item) => ({
                  id: item?.id,
                })),
                selectedRowIds,
              });
              onRowSelect(e);
            }}
            data={groupableData}
            reactTableOptions={{ initialState: { groupBy: ['name'] } }}
            selectionMode="Multiple"
          />
          <div data-testid="selectedFlatRowsLength">
            {JSON.stringify(relevantPayload?.selectedFlatRows?.filter(Boolean).length)}
          </div>
          <div data-testid="selectedRowIds">{JSON.stringify(relevantPayload?.selectedRowIds)}</div>
          <div data-testid="isSelected">{`${relevantPayload.isSelected}`}</div>
          <div data-testid="allRowsSelected">{`${relevantPayload.allRowsSelected}`}</div>
          <div data-testid="allVisibleRowsSelected">{`${relevantPayload.allVisibleRowsSelected}`}</div>
        </>
      );
    };
    const select = cy.spy().as('onRowSelectSpy');
    cy.mount(<GroupBySelectTable onRowSelect={select} />);

    const selectAllCheckbox = '[data-column-id="__ui5wcr__internal_selection_column"] [ui5-checkbox]';
    const selectAllCell = '[data-column-id="__ui5wcr__internal_selection_column"]';

    cy.findByText('QWE').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 1);
    cy.findByTestId('selectedFlatRowsLength').should('have.text', '1');
    cy.findByTestId('selectedRowIds').should('have.text', '{"2":true}');
    cy.findByTestId('isSelected').should('have.text', 'true');
    cy.findByTestId('allRowsSelected').should('have.text', 'false');
    cy.findByTestId('allVisibleRowsSelected').should('have.text', 'false');
    cy.get(selectAllCheckbox).should('have.attr', 'indeterminate');

    cy.findByText('Friend Name').click();
    cy.get('[ui5-list]').clickUi5ListItemByText('Group');
    cy.focused()
      .should('have.attr', 'data-row-index', '0')
      .and('have.attr', 'data-column-index', '2')
      .and('have.text', 'Friend Name');

    cy.get('[aria-rowindex="8"] > [aria-colindex="3"] > [title="Expand Node"] > [ui5-icon]').click();

    cy.findByText('25').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 2);
    cy.findByTestId('selectedFlatRowsLength').should('have.text', '2');
    cy.findByTestId('selectedRowIds').should('have.text', '{"2":true,"4":true}');
    cy.findByTestId('isSelected').should('have.text', 'true');
    cy.findByTestId('allRowsSelected').should('have.text', 'false');
    cy.findByTestId('allVisibleRowsSelected').should('have.text', 'false');

    cy.findByText('25').click();
    cy.get('@onRowSelectSpy').should('have.callCount', 3);
    cy.findByTestId('selectedFlatRowsLength').should('have.text', '1');
    cy.findByTestId('selectedRowIds').should('have.text', '{"2":true}');
    cy.findByTestId('isSelected').should('have.text', 'false');
    cy.findByTestId('allRowsSelected').should('have.text', 'false');
    cy.findByTestId('allVisibleRowsSelected').should('have.text', 'false');

    cy.get(selectAllCell).click();
    cy.get('@onRowSelectSpy').should('have.callCount', 4);
    cy.findByTestId('allVisibleRowsSelected').should('have.text', 'true');
    cy.get(selectAllCheckbox).should('not.have.attr', 'indeterminate');
    cy.get(selectAllCheckbox).should('have.attr', 'checked');

    cy.get(selectAllCell).click();
    cy.get('@onRowSelectSpy').should('have.callCount', 5);
    cy.findByTestId('allVisibleRowsSelected').should('have.text', 'false');
    cy.get(selectAllCheckbox).should('not.have.attr', 'indeterminate');
    cy.get(selectAllCheckbox).should('not.have.attr', 'checked');

    cy.findByText('Friend Name').click();
    cy.get('[ui5-list]').clickUi5ListItemByText('Ungroup');
    cy.focused()
      .should('have.attr', 'data-row-index', '0')
      .and('have.attr', 'data-column-index', '3')
      .and('have.text', 'Friend Name');
  });

  it('useIndeterminateRowSelection - select subRows', () => {
    const indeterminateChange = cy.spy().as('onIndeterminateChangeSpy');
    const TestComp = (props) => {
      const [selectedRowIds, setSelectedRowIds] = useState({});
      return (
        <>
          <AnalyticalTable
            selectionMode={AnalyticalTableSelectionMode.Multiple}
            data={dataTree}
            columns={columns}
            isTreeTable
            tableHooks={[AnalyticalTableHooks.useIndeterminateRowSelection(indeterminateChange)]}
            reactTableOptions={{ selectSubRows: true }}
            onRowSelect={(e) => {
              setSelectedRowIds(e.detail.selectedRowIds);
            }}
            {...props}
          />
          <p data-testid="selectedRows">{JSON.stringify(selectedRowIds)}</p>
        </>
      );
    };
    cy.mount(<TestComp />);

    // select all
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();
    cy.findByTestId('selectedRows').should(
      'have.text',
      '{"0":true,"1":true,"0.0":true,"0.0.0":true,"0.0.0.0":true,"0.0.0.1":true,"0.0.0.2":true,"0.0.0.3":true,"0.0.1":true,"0.0.1.0":true,"0.0.1.1":true,"0.0.1.2":true,"0.0.1.3":true,"0.0.2":true,"0.0.2.0":true,"0.0.2.1":true,"0.0.2.2":true,"0.0.2.3":true,"0.0.3":true,"0.0.3.0":true,"0.0.3.1":true,"0.0.3.2":true,"0.0.3.3":true,"0.1":true,"0.1.0":true,"0.1.0.0":true,"0.1.0.1":true,"0.1.0.2":true,"0.1.0.3":true,"0.1.1":true,"0.1.1.0":true,"0.1.1.1":true,"0.1.1.2":true,"0.1.1.3":true,"0.1.2":true,"0.1.2.0":true,"0.1.2.1":true,"0.1.2.2":true,"0.1.2.3":true,"0.1.3":true,"0.1.3.0":true,"0.1.3.1":true,"0.1.3.2":true,"0.1.3.3":true,"0.2":true,"0.2.0":true,"0.2.0.0":true,"0.2.0.1":true,"0.2.0.2":true,"0.2.0.3":true,"0.2.1":true,"0.2.1.0":true,"0.2.1.1":true,"0.2.1.2":true,"0.2.1.3":true,"0.2.2":true,"0.2.2.0":true,"0.2.2.1":true,"0.2.2.2":true,"0.2.2.3":true,"0.2.3":true,"0.2.3.0":true,"0.2.3.1":true,"0.2.3.2":true,"0.2.3.3":true,"0.3":true,"0.3.0":true,"0.3.0.0":true,"0.3.0.1":true,"0.3.0.2":true,"0.3.0.3":true,"0.3.1":true,"0.3.1.0":true,"0.3.1.1":true,"0.3.1.2":true,"0.3.1.3":true,"0.3.2":true,"0.3.2.0":true,"0.3.2.1":true,"0.3.2.2":true,"0.3.2.3":true,"0.3.3":true,"0.3.3.0":true,"0.3.3.1":true,"0.3.3.2":true,"0.3.3.3":true,"1.0":true,"1.0.0":true,"1.0.0.0":true,"1.0.0.1":true,"1.0.0.2":true,"1.0.0.3":true,"1.0.1":true,"1.0.1.0":true,"1.0.1.1":true,"1.0.1.2":true,"1.0.1.3":true,"1.0.2":true,"1.0.2.0":true,"1.0.2.1":true,"1.0.2.2":true,"1.0.2.3":true,"1.0.3":true,"1.0.3.0":true,"1.0.3.1":true,"1.0.3.2":true,"1.0.3.3":true,"1.1":true,"1.1.0":true,"1.1.0.0":true,"1.1.0.1":true,"1.1.0.2":true,"1.1.0.3":true,"1.1.1":true,"1.1.1.0":true,"1.1.1.1":true,"1.1.1.2":true,"1.1.1.3":true,"1.1.2":true,"1.1.2.0":true,"1.1.2.1":true,"1.1.2.2":true,"1.1.2.3":true,"1.1.3":true,"1.1.3.0":true,"1.1.3.1":true,"1.1.3.2":true,"1.1.3.3":true,"1.2":true,"1.2.0":true,"1.2.0.0":true,"1.2.0.1":true,"1.2.0.2":true,"1.2.0.3":true,"1.2.1":true,"1.2.1.0":true,"1.2.1.1":true,"1.2.1.2":true,"1.2.1.3":true,"1.2.2":true,"1.2.2.0":true,"1.2.2.1":true,"1.2.2.2":true,"1.2.2.3":true,"1.2.3":true,"1.2.3.0":true,"1.2.3.1":true,"1.2.3.2":true,"1.2.3.3":true,"1.3":true,"1.3.0":true,"1.3.0.0":true,"1.3.0.1":true,"1.3.0.2":true,"1.3.0.3":true,"1.3.1":true,"1.3.1.0":true,"1.3.1.1":true,"1.3.1.2":true,"1.3.1.3":true,"1.3.2":true,"1.3.2.0":true,"1.3.2.1":true,"1.3.2.2":true,"1.3.2.3":true,"1.3.3":true,"1.3.3.0":true,"1.3.3.1":true,"1.3.3.2":true,"1.3.3.3":true}',
    );

    // expand
    cy.get('[aria-rowindex="3"] > [aria-colindex="2"] > [title="Expand Node"] > [ui5-button]').click();
    cy.get('[aria-rowindex="4"] > [aria-colindex="2"] > [title="Expand Node"] > [ui5-button]').click();
    cy.get('[aria-rowindex="5"] > [aria-colindex="2"] > [title="Expand Node"] > [ui5-button]').click();

    // deselect row
    cy.findByText('Wiggins Cotton').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 1);
    cy.findByTestId('selectedRows').should(
      'have.text',
      '{"0":true,"1":true,"0.0":true,"0.0.0":true,"0.0.0.0":true,"0.0.0.1":true,"0.0.0.2":true,"0.0.0.3":true,"0.0.1":true,"0.0.1.0":true,"0.0.1.1":true,"0.0.1.2":true,"0.0.1.3":true,"0.0.2":true,"0.0.2.0":true,"0.0.2.1":true,"0.0.2.2":true,"0.0.2.3":true,"0.0.3":true,"0.0.3.0":true,"0.0.3.1":true,"0.0.3.2":true,"0.0.3.3":true,"0.1":true,"0.1.0":true,"0.1.0.0":true,"0.1.0.1":true,"0.1.0.2":true,"0.1.0.3":true,"0.1.1":true,"0.1.1.0":true,"0.1.1.1":true,"0.1.1.2":true,"0.1.1.3":true,"0.1.2":true,"0.1.2.0":true,"0.1.2.1":true,"0.1.2.2":true,"0.1.2.3":true,"0.1.3":true,"0.1.3.0":true,"0.1.3.1":true,"0.1.3.2":true,"0.1.3.3":true,"0.2":true,"0.2.0":true,"0.2.0.0":true,"0.2.0.1":true,"0.2.0.2":true,"0.2.0.3":true,"0.2.1":true,"0.2.1.0":true,"0.2.1.1":true,"0.2.1.2":true,"0.2.1.3":true,"0.2.2":true,"0.2.2.0":true,"0.2.2.1":true,"0.2.2.2":true,"0.2.2.3":true,"0.2.3":true,"0.2.3.0":true,"0.2.3.1":true,"0.2.3.2":true,"0.2.3.3":true,"0.3":true,"0.3.0":true,"0.3.0.0":true,"0.3.0.1":true,"0.3.0.2":true,"0.3.0.3":true,"0.3.1":true,"0.3.1.0":true,"0.3.1.1":true,"0.3.1.2":true,"0.3.1.3":true,"0.3.2":true,"0.3.2.0":true,"0.3.2.1":true,"0.3.2.2":true,"0.3.2.3":true,"0.3.3":true,"0.3.3.0":true,"0.3.3.1":true,"0.3.3.2":true,"0.3.3.3":true,"1.0":true,"1.0.0":true,"1.0.0.1":true,"1.0.0.2":true,"1.0.0.3":true,"1.0.1":true,"1.0.1.0":true,"1.0.1.1":true,"1.0.1.2":true,"1.0.1.3":true,"1.0.2":true,"1.0.2.0":true,"1.0.2.1":true,"1.0.2.2":true,"1.0.2.3":true,"1.0.3":true,"1.0.3.0":true,"1.0.3.1":true,"1.0.3.2":true,"1.0.3.3":true,"1.1":true,"1.1.0":true,"1.1.0.0":true,"1.1.0.1":true,"1.1.0.2":true,"1.1.0.3":true,"1.1.1":true,"1.1.1.0":true,"1.1.1.1":true,"1.1.1.2":true,"1.1.1.3":true,"1.1.2":true,"1.1.2.0":true,"1.1.2.1":true,"1.1.2.2":true,"1.1.2.3":true,"1.1.3":true,"1.1.3.0":true,"1.1.3.1":true,"1.1.3.2":true,"1.1.3.3":true,"1.2":true,"1.2.0":true,"1.2.0.0":true,"1.2.0.1":true,"1.2.0.2":true,"1.2.0.3":true,"1.2.1":true,"1.2.1.0":true,"1.2.1.1":true,"1.2.1.2":true,"1.2.1.3":true,"1.2.2":true,"1.2.2.0":true,"1.2.2.1":true,"1.2.2.2":true,"1.2.2.3":true,"1.2.3":true,"1.2.3.0":true,"1.2.3.1":true,"1.2.3.2":true,"1.2.3.3":true,"1.3":true,"1.3.0":true,"1.3.0.0":true,"1.3.0.1":true,"1.3.0.2":true,"1.3.0.3":true,"1.3.1":true,"1.3.1.0":true,"1.3.1.1":true,"1.3.1.2":true,"1.3.1.3":true,"1.3.2":true,"1.3.2.0":true,"1.3.2.1":true,"1.3.2.2":true,"1.3.2.3":true,"1.3.3":true,"1.3.3.0":true,"1.3.3.1":true,"1.3.3.2":true,"1.3.3.3":true}',
    );

    cy.get('[aria-rowindex="5"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate');
    cy.get('[aria-rowindex="4"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate');
    cy.get('[aria-rowindex="3"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate');
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"] [ui5-checkbox]').should(
      'have.attr',
      'indeterminate',
    );

    // deselect all
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 2);

    // select leaf row
    cy.findByText('Wiggins Cotton').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 3);
    cy.findByTestId('selectedRows').should('have.text', '{"1.0.0.0":true}');

    cy.get('[aria-rowindex="5"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate');
    cy.get('[aria-rowindex="4"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate');
    cy.get('[aria-rowindex="3"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate');
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"] [ui5-checkbox]').should(
      'have.attr',
      'indeterminate',
    );

    // deselect all
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 4);

    // select row with subRows
    cy.findByText('Diann Alvarado').click();
    cy.get('@onIndeterminateChangeSpy').should('have.callCount', 5);

    cy.get('[aria-rowindex="5"] > [aria-colindex="1"]').should('have.attr', 'aria-selected', 'true');
    cy.get('[aria-rowindex="6"] > [aria-colindex="1"]').should('have.attr', 'aria-selected', 'true');
    cy.get('[aria-rowindex="7"] > [aria-colindex="1"]').should('have.attr', 'aria-selected', 'true');
    cy.get('[aria-rowindex="8"] > [aria-colindex="1"]').should('have.attr', 'aria-selected', 'true');
    cy.get('[aria-rowindex="9"] > [aria-colindex="1"]').should('have.attr', 'aria-selected', 'true');
    cy.get('[aria-rowindex="4"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate');
    cy.get('[aria-rowindex="3"] > [aria-colindex="1"] [ui5-checkbox]').should('have.attr', 'indeterminate');
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"] [ui5-checkbox]').should(
      'have.attr',
      'indeterminate',
    );

    // deselect all
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"]').click();

    // select parent row by selecting sub rows
    cy.findByText('Wiggins Cotton').click();
    cy.findByText('Herring Flores').click();
    cy.findByText('Allen Kidd').click();
    cy.findByTestId('selectedRows').should('have.text', '{"1.0.0.0":true,"1.0.0.1":true,"1.0.0.2":true}');
    cy.findByText('Selma Kaufman').click();

    // parent row "1.0.0" is automatically added when all children are selected
    cy.findByTestId('selectedRows').should(
      'have.text',
      '{"1.0.0.0":true,"1.0.0.1":true,"1.0.0.2":true,"1.0.0.3":true,"1.0.0":true}',
    );
  });

  [AnalyticalTableScaleWidthMode.Grow, AnalyticalTableScaleWidthMode.Smart].forEach((scaleWidthMode) => {
    it(`scaleWidthMode: ${scaleWidthMode}`, () => {
      const isGrow = scaleWidthMode === AnalyticalTableScaleWidthMode.Grow;
      const headerText =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum aliquet arcu, ac facilisis tellus blandit nec. Etiam justo erat, dictum a ex ac, fermentum fringilla metus. Donec nibh magna, pellentesque ut odio id, feugiat vulputate nibh. In feugiat tincidunt quam, vitae sodales metus lobortis pellentesque. Donec eget rhoncus ante, in posuere nulla. Proin viverra, turpis id fermentum scelerisque, felis ipsum pharetra tortor, sed aliquet mi ex eu nisl. Praesent neque nunc, suscipit non interdum vitae, consequat sit amet velit. Morbi commodo dapibus lobortis. Vestibulum auctor velit sit amet semper egestas.';
      const initialColumns = [
        {
          Header: headerText,
          accessor: 'name',
        },
      ];
      const longDataEntry = { long: headerText };
      const TableComp = (props: AnalyticalTablePropTypes) => {
        const { columns } = props;
        const [_columns, setColumns] = useState<{ Header: string; accessor: string; maxWidth?: number }[]>(
          columns ?? initialColumns,
        );
        return (
          <>
            <Button
              onClick={() => {
                setColumns([
                  {
                    Header: headerText,
                    accessor: 'name',
                    maxWidth: Infinity,
                  },
                ]);
              }}
            >
              Infinity
            </Button>
            <Button
              onClick={() => {
                setColumns([
                  {
                    Header: headerText,
                    accessor: 'name',
                    maxWidth: 100,
                  },
                ]);
              }}
            >
              100
            </Button>
            <AnalyticalTable {...props} columns={_columns} scaleWidthMode={scaleWidthMode} />
          </>
        );
      };

      cy.log('cols: initial');
      // additional fonts need to be prefetched in Cypress, otherwise it leads to flakiness
      cy.window()
        .then((win) => {
          return Promise.all([
            win.document.fonts.load('16px "72-Bold"'),
            win.document.fonts.load('16px "72-Boldfull"'),
          ]);
        })
        .then(() => {
          cy.mount(<TableComp data={data} />);
        });

      cy.get('[data-column-id="name"]')
        .invoke('outerWidth')
        .should('equal', isGrow ? 700 : 4120);

      cy.findByText('Infinity').click();
      cy.get('[data-column-id="name"]').invoke('outerWidth').should('equal', 4120);

      cy.findByText('100').click();
      cy.get('[data-column-id="name"]').invoke('outerWidth').should('equal', 100);

      cy.log('cols: cols');
      const cols = [...initialColumns, { Header: 'Short Width', accessor: 'age' }];
      cy.mount(<TableComp columns={cols} data={data} />);
      cy.get('[data-column-id="name"]')
        .invoke('outerWidth')
        .should('equal', isGrow ? 700 : 4120);
      cy.get('[data-column-id="age"]')
        .invoke('outerWidth')
        .should('equal', isGrow ? 700 : 97);

      cy.log('cols: cols2');
      const cols2 = [
        { ...initialColumns[0], maxWidth: Infinity },
        { Header: 'Short Width', accessor: 'age' },
      ];
      cy.mount(<TableComp columns={cols2} data={data} />);
      cy.get('[data-column-id="name"]').invoke('outerWidth').should('equal', 4120);
      cy.get('[data-column-id="age"]').invoke('outerWidth').should('equal', 97);

      cy.log('cols: cols3');
      const cols3 = [
        { ...initialColumns[0], maxWidth: Infinity, width: 200 },
        { Header: 'Short Width', accessor: 'age' },
      ];
      cy.mount(<TableComp columns={cols3} data={data} />);
      cy.get('[data-column-id="name"]').invoke('outerWidth').should('equal', 200);
      cy.get('[data-column-id="age"]')
        .invoke('outerWidth')
        .should('equal', isGrow ? 700 : 1704);

      cy.log('cols: cols4');
      const cols4 = [
        { ...initialColumns[0], maxWidth: Infinity, width: 200 },
        { Header: 'Short Width', accessor: 'age' },
        { Header: 'Spread', accessor: 'friend.name', maxWidth: Infinity },
      ];
      cy.mount(<TableComp columns={cols4} data={data} />);
      cy.get('[data-column-id="name"]').invoke('outerWidth').should('equal', 200);
      cy.get('[data-column-id="age"]')
        .invoke('outerWidth')
        .should('equal', isGrow ? 700 : 868);
      cy.get('[data-column-id="friend.name"]')
        .invoke('outerWidth')
        .should('equal', isGrow ? 1004 : 836);

      cy.log('cols: cols5');
      const cols5 = [
        { ...initialColumns[0], maxWidth: Infinity, width: 200 },
        { Header: 'Short Width', accessor: 'age' },
        { Header: 'Spread', accessor: 'friend.name', maxWidth: Infinity },
        { Header: 'Long Content', accessor: 'long' },
      ];
      cy.mount(<TableComp columns={cols5} data={[...data, longDataEntry]} />);
      cy.get('[data-column-id="name"]').invoke('outerWidth').should('equal', 200);
      checkColumnWidthWithTolerance('[data-column-id="age"]', 518, 356.0625, isGrow);
      checkColumnWidthWithTolerance('[data-column-id="friend.name"]', 486, 324.0625, isGrow);
      checkColumnWidthWithTolerance('[data-column-id="long"]', 700, 1023.8593139648438, isGrow);

      cy.log('cols: cols6');
      const cols6 = [
        { ...initialColumns[0], maxWidth: Infinity, width: 200 },
        { Header: 'Short Width', accessor: 'age' },
        { Header: 'Spread', accessor: 'friend.name', maxWidth: Infinity },
        { Header: 'Long Content', accessor: 'long', maxWidth: Infinity },
      ];
      cy.mount(<TableComp columns={cols6} data={[...data, longDataEntry]} />);
      cy.get('[data-column-id="name"]').invoke('outerWidth').should('equal', 200);
      checkColumnWidthWithTolerance('[data-column-id="age"]', 97, 356.0625, isGrow);
      checkColumnWidthWithTolerance('[data-column-id="friend.name"]', 65, 324.0625, isGrow);
      checkColumnWidthWithTolerance('[data-column-id="long"]', 3824, 1023.8593139648438, isGrow);

      cy.log('cols: cols7');
      const cols7 = [
        { ...initialColumns[0], maxWidth: Infinity, width: 200 },
        { Header: 'Short Width', accessor: 'age', minWidth: 400 },
        { Header: 'Long Content', accessor: 'long', maxWidth: Infinity },
      ];
      cy.mount(<TableComp columns={cols7} data={[...data, longDataEntry]} />);
      cy.get('[data-column-id="name"]').invoke('outerWidth').should('equal', 200);
      cy.get('[data-column-id="age"]').invoke('outerWidth').should('equal', 400);
      cy.get('[data-column-id="long"]')
        .invoke('outerWidth')
        .should('equal', isGrow ? 3824 : 1304);

      cy.log('cols: cols8');
      const cols8 = [
        { ...initialColumns[0], maxWidth: Infinity, width: 200 },
        { Header: 'Spread', accessor: 'friend.name' },
        { Header: 'Short Width', accessor: 'age', minWidth: 400 },
      ];
      cy.mount(<TableComp columns={cols8} data={data} />);
      cy.get('[data-column-id="name"]').invoke('outerWidth').should('equal', 200);
      cy.get('[data-column-id="friend.name"]')
        .invoke('outerWidth')
        .should('equal', isGrow ? 700 : 1304);
      cy.get('[data-column-id="age"]')
        .invoke('outerWidth')
        .should('equal', isGrow ? 1004 : 400);
    });
  });

  it('Column Scaling: programatically change cols', () => {
    const TestComp = (props) => {
      const [columns, setColumns] = useState([]);
      return (
        <>
          <Button
            onClick={() => {
              setColumns([
                { accessor: 'name', Header: 'Name' },
                { accessor: 'age', Header: 'Age' },
              ]);
            }}
          >
            Both
          </Button>
          <Button
            onClick={() => {
              setColumns([{ accessor: 'name', Header: 'Name' }]);
            }}
          >
            NameCol
          </Button>
          <Button
            onClick={() => {
              setColumns([{ accessor: 'age', Header: 'Age' }]);
            }}
          >
            AgeCol
          </Button>
          <AnalyticalTable {...props} columns={columns} />
        </>
      );
    };

    [
      { props: {}, bothWidth: 952, onlyNameWidth: 1904, onlyAgeWidth: 1904 },
      {
        props: { selectionMode: AnalyticalTableSelectionMode.Multiple },
        bothWidth: 930,
        onlyNameWidth: 1860,
        onlyAgeWidth: 1860,
      },
      {
        props: { withRowHighlight: true },
        bothWidth: 949,
        onlyNameWidth: 1898,
        onlyAgeWidth: 1898,
      },
      {
        props: { withNavigationHighlight: true },
        bothWidth: 949,
        onlyNameWidth: 1898,
        onlyAgeWidth: 1898,
      },
      {
        props: {
          withNavigationHighlight: true,
          withRowHighlight: true,
          selectionMode: AnalyticalTableSelectionMode.Single,
        },
        bothWidth: 924,
        onlyNameWidth: 1848,
        onlyAgeWidth: 1848,
      },
    ].forEach((item) => {
      cy.mount(<TestComp data={data} {...item.props} />);

      cy.findByText('Both').click();
      cy.get('[data-column-id="name"]').invoke('outerWidth').should('equal', item.bothWidth);
      cy.get('[data-column-id="age"]').invoke('outerWidth').should('equal', item.bothWidth);

      cy.findByText('NameCol').click();
      cy.get('[data-column-id="name"]').invoke('outerWidth').should('equal', item.onlyNameWidth);
      cy.get('[data-column-id="age"]').should('not.exist', { timeout: 100 });

      cy.findByText('AgeCol').click();
      cy.get('[data-column-id="age"]').invoke('outerWidth').should('equal', item.onlyAgeWidth);
      cy.get('[data-column-id="name"]').should('not.exist', { timeout: 100 });
    });
  });

  it('Loading & No Data', () => {
    cy.mount(<AnalyticalTable data={[]} columns={columns} loading loadingDelay={0} />);
    cy.get('[data-component-name="AnalyticalTableLoadingPlaceholder"]').should('be.visible');
    cy.get('.ui5-busy-indicator-busy-area').should('not.exist');
    cy.get('[data-component-name="AnalyticalTableContainerWithScrollbar"] > :not([class*="busyIndicator"])').should(
      'not.have.css',
      'opacity',
      '0.4',
    );
    cy.mount(<AnalyticalTable data={[]} columns={columns} loading loadingDelay={0} alwaysShowBusyIndicator />);
    cy.get('[data-component-name="AnalyticalTableLoadingPlaceholder"]').should('not.exist');
    cy.get('.ui5-busy-indicator-busy-area', { timeout: 2000 }).should('be.visible');
    cy.get('[data-component-name="AnalyticalTableContainerWithScrollbar"] > :not([class*="busyIndicator"])').should(
      'have.css',
      'opacity',
      '0.4',
    );
    cy.mount(<AnalyticalTable data={data} columns={columns} loading />);
    cy.get('[data-component-name="AnalyticalTableLoadingPlaceholder"]').should('not.exist');
    cy.get('.ui5-busy-indicator-busy-area', { timeout: 2000 }).should('be.visible');
    cy.get('[data-component-name="AnalyticalTableContainerWithScrollbar"] > :not([class*="busyIndicator"])').should(
      'have.css',
      'opacity',
      '0.4',
    );
    cy.mount(<AnalyticalTable data={data} columns={columns} loading loadingDelay={50000} />);
    cy.get('.ui5-busy-indicator-busy-area', { timeout: 2000 }).should('not.exist');
    cy.mount(<AnalyticalTable data={[]} columns={columns} selectionMode={AnalyticalTableSelectionMode.Multiple} />);
    cy.findByText('No data').should('be.visible');
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"] [ui5-checkbox]').should('not.exist');
    cy.mount(
      <AnalyticalTable
        data={data}
        columns={columns}
        filterable
        globalFilterValue="test123"
        selectionMode={AnalyticalTableSelectionMode.Multiple}
      />,
    );
    cy.findByText('No data found. Try adjusting the filter settings.').should('be.visible');
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"] [ui5-checkbox]').should('not.exist');
    cy.mount(
      <AnalyticalTable
        data={data}
        columns={columns}
        filterable
        selectionMode={AnalyticalTableSelectionMode.Multiple}
      />,
    );
    cy.findByText('Lorem').should('be.visible');
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"] [ui5-checkbox]').should('exist');
    cy.findByText('Name').realClick();
    cy.get('[ui5-input]').typeIntoUi5Input('test123');
    cy.findByText('Lorem').should('not.exist');
    cy.findByText('No data found. Try adjusting the filter settings.').should('be.visible');
    cy.get('[data-column-id="__ui5wcr__internal_selection_column"] [ui5-checkbox]').should('not.exist');
  });

  it('NoDataComponent', () => {
    const NoDataComponent = (
      props: ComponentProps<Exclude<AnalyticalTablePropTypes['NoDataComponent'], ComponentClass<any>>>,
    ) => {
      return props.noDataReason === 'Filtered' ? (
        <IllustratedMessage role={props.accessibleRole} name={NoFilterResults} />
      ) : (
        <IllustratedMessage role={props.accessibleRole} name={NoDataIllustration} />
      );
    };

    cy.mount(<AnalyticalTable data={data} columns={columns} NoDataComponent={NoDataComponent} />);
    cy.get('[data-component-name="AnalyticalTableBody"]').should('have.attr', 'style').and('include', 'height: 220px');
    cy.mount(<AnalyticalTable data={[]} columns={columns} NoDataComponent={NoDataComponent} />);
    cy.get('[data-component-name="AnalyticalTableNoDataContainer"]')
      .should('have.attr', 'style')
      .and('include', 'height: 220px');

    cy.mount(
      <div style={{ height: '400px' }}>
        <AnalyticalTable
          data={[...data, ...data]}
          columns={columns}
          NoDataComponent={NoDataComponent}
          visibleRowCountMode="Auto"
        />
      </div>,
    );
    cy.get('[data-component-name="AnalyticalTableBody"]').should('have.attr', 'style').and('include', 'height: 352px');
    cy.mount(
      <div style={{ height: '400px' }}>
        <AnalyticalTable data={[]} columns={columns} NoDataComponent={NoDataComponent} visibleRowCountMode="Auto" />
      </div>,
    );
    cy.get('[data-component-name="AnalyticalTableNoDataContainer"]')
      .should('have.attr', 'style')
      .and('include', 'height: 352px');

    cy.mount(
      <div style={{ height: '400px' }}>
        <AnalyticalTable
          data={data}
          columns={columns}
          NoDataComponent={NoDataComponent}
          visibleRowCountMode="AutoWithEmptyRows"
        />
      </div>,
    );
    cy.get('[data-component-name="AnalyticalTableBody"]').should('have.attr', 'style').and('include', 'height: 352px');
    cy.mount(
      <div style={{ height: '400px' }}>
        <AnalyticalTable
          data={[]}
          columns={columns}
          NoDataComponent={NoDataComponent}
          visibleRowCountMode="AutoWithEmptyRows"
        />
      </div>,
    );
    cy.get('[data-component-name="AnalyticalTableNoDataContainer"]')
      .should('have.attr', 'style')
      .and('include', 'height: 352px');
  });

  it('Alternate Row Color', () => {
    const standardRowColor = cssVarToRgb(ThemingParameters.sapList_Background);
    const alternatingRowColor = cssVarToRgb(ThemingParameters.sapList_AlternatingBackground);
    cy.mount(<AnalyticalTable data={data} columns={columns} alternateRowColor minRows={7} sortable />);
    cy.get('[data-component-name="AnalyticalTableContainer"]').should('have.css', 'background-color', standardRowColor);

    function testAlternateRowColor() {
      for (let i = 2; i <= 4; i++) {
        if (i % 2) {
          // no color set
          cy.get(`[aria-rowindex="${i}"]`).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
        } else {
          cy.get(`[aria-rowindex="${i}"]`).should('have.css', 'background-color', alternatingRowColor);
        }
      }
      cy.get('[data-empty-row="true"]').each(($emptyRow, i) => {
        if ((i + 1) % 2) {
          // no color set
          cy.wrap($emptyRow).should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
        } else {
          cy.wrap($emptyRow).should('have.css', 'background-color', alternatingRowColor);
        }
      });
    }

    testAlternateRowColor();
    cy.findByText('Name').click();
    cy.get('[ui5-list]').clickUi5ListItemByText('Sort Ascending');
    testAlternateRowColor();
  });

  it('columns drag & drop', () => {
    const localCols = [...columns];
    localCols.pop();
    const updatedCols = [...localCols, { accessor: 'friend.age', Header: 'Friend Age', disableDragAndDrop: true }];
    const reorder = cy.spy().as('reorder');
    ['ltr', 'rtl'].forEach((dir) => {
      cy.mount(<AnalyticalTable dir={dir} data={data} columns={updatedCols} onColumnsReorder={reorder} />);
      const dataTransfereById = (colId) => ({
        getData: () => {
          return colId;
        },
        types: ['text', 'application/x-ui5wcr-columndnd'],
      });

      // only real column drags may highlight a header.
      const borderSide = dir === 'rtl' ? 'border-right-width' : 'border-left-width';
      // Foreign (file) drag must NOT highlight the header.
      cy.get('[data-column-id="age"]').trigger('dragenter', { dataTransfer: { getData: () => '', types: ['Files'] } });
      cy.get('[data-column-id="age"]').should('have.css', borderSide, '0px');
      // A real column drag highlights the header it enters...
      cy.get('[data-column-id="age"]').trigger('dragenter', { dataTransfer: dataTransfereById('name') });
      cy.get('[data-column-id="age"]').should('have.css', borderSide, '3px');
      // ...and leaving the header (relatedTarget outside) clears the highlight again.
      cy.get('[data-column-id="age"]').trigger('dragleave', { relatedTarget: null });
      cy.get('[data-column-id="age"]').should('have.css', borderSide, '0px');

      cy.get('[data-column-id="name"]')
        .trigger('dragstart')
        .trigger('drop', { dataTransfer: dataTransfereById('age') });
      const newColOrder = ['Age', 'Name', 'Friend Name', 'Friend Age'];
      cy.get('[data-column-id]').each(($col, index) => {
        cy.wrap($col).should('have.text', newColOrder[index]);
      });
    });
    cy.get('@reorder').should('have.been.calledTwice');
  });

  // `describe` is used to clean-up zoom level after test
  if (reactVersion.startsWith('19')) {
    ['ltr', 'rtl'].forEach((dir) => {
      it(`pop-in columns (${dir})`, () => {
        document.body.style.margin = '0px';
        cy.mount(<AnalyticalTable data={data} columns={columnsWithPopIn} dir={dir} />);
        cy.viewport(801, 1024);
        cy.findByText('Name').should('be.visible');
        cy.findByText('Age').should('be.visible');
        cy.findByText('Friend Name').should('be.visible');
        cy.findByText('Custom original Header1').should('be.visible');
        cy.findByText('Custom original Header2').should('be.visible');
        cy.findByText('Custom Header').should('be.visible');
        cy.findByText('Custom Header').should('be.visible');
        cy.findByText('PopinDisplay Modes').should('be.visible').should('have.attr', 'ui5-text');
        cy.findAllByTestId('popinCell').should('exist');
        cy.contains('Custom Cell 2').should('be.visible');

        cy.contains('Custom Header 1').should('not.exist');
        cy.contains('Custom Header 2').should('not.exist');
        cy.contains('pop-in content').should('not.exist');

        cy.viewport(800, 1024);
        cy.wait(200);

        cy.findByText('Name').should('be.visible');
        cy.findByText('Age').should('be.visible');
        // header
        cy.findByText('Friend Name').should('not.exist');
        // cell
        cy.contains('Friend Name').should('be.visible');
        cy.findByText('Custom original Header1').should('not.exist');
        cy.findByText('Custom original Header2').should('not.exist');
        cy.contains('Custom Header').should('exist');
        cy.contains('Custom Cell 2').should('be.visible');

        cy.contains('Custom Header 1').should('be.visible');
        cy.contains('Custom Header 2').should('be.visible');
        cy.contains('pop-in content').should('exist');
        cy.contains('C').should('exist');
        cy.findAllByTestId('popinCell').should('exist');
        cy.findAllByText('PopinDisplay Modes:').as('popinHeader').should('be.exist');
        //popinDisplay: Block
        cy.get('@popinHeader').parent().should('have.css', 'flex-direction', 'column');

        // a11y: pop-in elements have id + aria-hidden, first cell aria-labelledby includes pop-in IDs
        cy.get('[data-component-name="AnalyticalTablePopinHeaderContainer"]')
          .first()
          .should('have.attr', 'aria-hidden', 'true')
          .and('have.attr', 'id');
        cy.get('[aria-rowindex="2"] [data-is-first-column="true"]')
          .first()
          .then(($cell) => {
            const labelledby = $cell.attr('aria-labelledby');
            expect(labelledby).to.contain('popin-h-friend.name-');
            expect(labelledby).to.contain('popin-v-friend.name-');
          });

        cy.viewport(600, 1024);
        cy.wait(200);
        cy.contains('Age').should('not.exist');
        cy.contains('40').should('not.exist');

        cy.mount(
          <AnalyticalTable
            data={data}
            columns={[
              ...columnsWithPopIn.slice(0, -1),
              {
                id: 'popinDisplay',
                Header: 'PopinDisplay Modes',
                responsivePopIn: true,
                responsiveMinWidth: 801,
                popinDisplay: AnalyticalTablePopinDisplay.Inline,
                Cell: () => {
                  return (
                    <Text data-testid="popinCell" maxLines={1}>
                      Popin Cell
                    </Text>
                  );
                },
              },
            ]}
            dir={dir}
          />,
        );
        cy.findAllByText('PopinDisplay Modes:').as('popinHeader').should('be.exist');
        //popinDisplay: Row
        cy.get('@popinHeader').parent().should('have.css', 'flex-direction', 'row');
        cy.findAllByTestId('popinCell').should('exist');

        cy.mount(
          <AnalyticalTable
            data={data}
            columns={[
              ...columnsWithPopIn.slice(0, -1),
              {
                id: 'popinDisplay',
                Header: 'PopinDisplay Modes',
                responsivePopIn: true,
                responsiveMinWidth: 801,
                popinDisplay: AnalyticalTablePopinDisplay.WithoutHeader,
                Cell: () => {
                  return (
                    <Text data-testid="popinCell" maxLines={1}>
                      Popin Cell
                    </Text>
                  );
                },
              },
            ]}
            dir={dir}
          />,
        );
        //popinDisplay: WithoutHeader
        cy.findAllByText('PopinDisplay Modes:').should('not.exist');
        cy.findAllByTestId('popinCell').should('exist');

        // a11y: WithoutHeader skips header IDs in aria-labelledby
        cy.get('[aria-rowindex="2"] [data-is-first-column="true"]')
          .first()
          .then(($cell) => {
            const labelledby = $cell.attr('aria-labelledby');
            expect(labelledby).to.contain('popin-v-popinDisplay-');
            expect(labelledby).to.not.contain('popin-h-popinDisplay-');
          });
      });
    });
  } else {
    ['ltr', 'rtl'].forEach((dir) => {
      it(`pop-in columns (${dir}) - 801 x 1024`, { viewportWidth: 801, viewportHeight: 1024 }, () => {
        document.body.style.margin = '0px';
        cy.mount(<AnalyticalTable data={data} columns={columnsWithPopIn} dir={dir} />);
        cy.findByText('Name').should('be.visible');
        cy.findByText('Age').should('be.visible');
        cy.findByText('Friend Name').should('be.visible');
        cy.findByText('Custom original Header1').should('be.visible');
        cy.findByText('Custom original Header2').should('be.visible');
        cy.findByText('Custom Header').should('be.visible');
        cy.findByText('Custom Header').should('be.visible');
        cy.findByText('PopinDisplay Modes').should('be.visible').should('have.attr', 'ui5-text');
        cy.findAllByTestId('popinCell').should('exist');
        cy.contains('Custom Cell 2').should('be.visible');

        cy.contains('Custom Header 1').should('not.exist');
        cy.contains('Custom Header 2').should('not.exist');
        cy.contains('pop-in content').should('not.exist');
      });
      it(`pop-in columns (${dir}) - 800 x 1024`, { viewportWidth: 800, viewportHeight: 1024 }, () => {
        cy.mount(<AnalyticalTable data={data} columns={columnsWithPopIn} dir={dir} />);
        cy.findByText('Name').should('be.visible');
        cy.findByText('Age').should('be.visible');
        // header
        cy.findByText('Friend Name').should('not.exist');
        // cell
        cy.contains('Friend Name').should('be.visible');
        cy.findByText('Custom original Header1').should('not.exist');
        cy.findByText('Custom original Header2').should('not.exist');
        cy.contains('Custom Header').should('exist');
        cy.contains('Custom Cell 2').should('be.visible');

        cy.contains('Custom Header 1').should('be.visible');
        cy.contains('Custom Header 2').should('be.visible');
        cy.contains('pop-in content').should('exist');
        cy.contains('C').should('exist');
        cy.findAllByTestId('popinCell').should('exist');
        cy.findAllByText('PopinDisplay Modes:').as('popinHeader').should('be.exist');
        //popinDisplay: Block
        cy.get('@popinHeader').parent().should('have.css', 'flex-direction', 'column');
      });
      it(`pop-in columns (${dir}) - 600 x 1024`, { viewportWidth: 600, viewportHeight: 1024 }, () => {
        cy.mount(<AnalyticalTable data={data} columns={columnsWithPopIn} dir={dir} />);
        cy.contains('Age').should('not.exist');
        cy.contains('40').should('not.exist');

        cy.mount(
          <AnalyticalTable
            data={data}
            columns={[
              ...columnsWithPopIn.slice(0, -1),
              {
                id: 'popinDisplay',
                Header: 'PopinDisplay Modes',
                responsivePopIn: true,
                responsiveMinWidth: 801,
                popinDisplay: AnalyticalTablePopinDisplay.Inline,
                Cell: () => {
                  return (
                    <Text data-testid="popinCell" maxLines={1}>
                      Popin Cell
                    </Text>
                  );
                },
              },
            ]}
            dir={dir}
          />,
        );
        cy.findAllByText('PopinDisplay Modes:').as('popinHeader').should('be.exist');
        //popinDisplay: Row
        cy.get('@popinHeader').parent().should('have.css', 'flex-direction', 'row');
        cy.findAllByTestId('popinCell').should('exist');

        cy.mount(
          <AnalyticalTable
            data={data}
            columns={[
              ...columnsWithPopIn.slice(0, -1),
              {
                id: 'popinDisplay',
                Header: 'PopinDisplay Modes',
                responsivePopIn: true,
                responsiveMinWidth: 801,
                popinDisplay: AnalyticalTablePopinDisplay.WithoutHeader,
                Cell: () => {
                  return (
                    <Text data-testid="popinCell" maxLines={1}>
                      Popin Cell
                    </Text>
                  );
                },
              },
            ]}
            dir={dir}
          />,
        );
        //popinDisplay: WithoutHeader
        cy.findAllByText('PopinDisplay Modes:').should('not.exist');
        cy.findAllByTestId('popinCell').should('exist');
      });
    });
  }

  ['default', 'checked'].forEach((key) => {
    const isDefault = key === 'default';
    const selectionKey = isDefault ? 'isSelected' : key;

    it(`plugin hook: useManualRowSelect (${key} key)`, () => {
      const testData = [
        { name: 'Initially Selected', age: 40, friend: { name: 'MAR', age: 28 }, [selectionKey]: true },
        { name: 'Initially Not selected', age: 20, friend: { name: 'Nei', age: 50 }, [selectionKey]: false },
        { name: 'No key', age: 20, friend: { name: 'Nei', age: 50 } },
      ];

      const hook = isDefault ? useManualRowSelect() : useManualRowSelect(selectionKey);

      // 1st row selected
      cy.mount(
        <AnalyticalTable
          selectionMode={AnalyticalTableSelectionMode.Multiple}
          data={testData}
          columns={columns}
          tableHooks={[hook]}
        />,
      );

      cy.findAllByRole('row').each(($row, index) => {
        if (index === 1) {
          cy.wrap($row).should('have.attr', 'data-is-selected');
        } else {
          cy.wrap($row).should('not.have.attr', 'data-is-selected');
        }
      });

      const testData2 = [
        { name: 'Selected', age: 40, friend: { name: 'MAR', age: 28 }, [selectionKey]: false },
        { name: 'Not selected', age: 20, friend: { name: 'Nei', age: 50 }, [selectionKey]: true },
        { name: 'No key', age: 20, friend: { name: 'Nei', age: 50 } },
      ];
      // 2nd row selected
      cy.mount(
        <AnalyticalTable
          selectionMode={AnalyticalTableSelectionMode.Multiple}
          data={testData2}
          columns={columns}
          tableHooks={[hook]}
        />,
      );
      cy.findAllByRole('row').each(($row, index) => {
        if (index === 2) {
          cy.wrap($row).should('have.attr', 'data-is-selected');
        } else {
          cy.wrap($row).should('not.have.attr', 'data-is-selected');
        }
      });

      // select 3rd row
      cy.get('[data-selection-cell="true"]').eq(2).click();
      cy.findAllByRole('row').eq(3).should('have.attr', 'data-is-selected');
      cy.findAllByRole('row').eq(2).should('have.attr', 'data-is-selected');

      // deselect 2nd row
      cy.get('[data-selection-cell="true"]').eq(1).click();
      cy.findAllByRole('row').eq(2).should('not.have.attr', 'data-is-selected');
      cy.findAllByRole('row').eq(3).should('have.attr', 'data-is-selected');
    });
  });

  it('a11y: grouped, filtered, sorted, headerLabel, cellLabel', () => {
    const customCellColumn = {
      Header: 'Custom',
      id: 'custom',
      Cell: () => 'Custom Content',
      cellLabel: ({ cell }) => `${cell.cellLabel} custom aria-label`,
    };
    cy.mount(<AnalyticalTable columns={[...columns, customCellColumn]} data={data} groupable filterable sortable />);

    cy.get('[data-visible-row-index="1"][data-visible-column-index="0"]')
      .should('have.attr', 'aria-labelledby')
      .then((labelledby) => {
        const ids = labelledby.split(' ');
        if (canUseVoiceOver) {
          expect(ids).to.have.length(2);
          expect(ids[1]).to.include('name');
        } else {
          expect(ids).to.have.length(1);
        }
        expect(ids[0]).to.include('name0');
      });
    cy.get('[data-visible-row-index="1"][data-visible-column-index="1"]')
      .should('have.attr', 'aria-labelledby')
      .then((labelledby) => {
        const ids = labelledby.split(' ');
        if (canUseVoiceOver) {
          expect(ids).to.have.length(2);
          expect(ids[1]).to.include('age');
        } else {
          expect(ids).to.have.length(1);
        }
        expect(ids[0]).to.include('age0');
      });
    cy.findByText('Name').click();
    cy.get('[ui5-list]').clickUi5ListItemByText('Sort Ascending');
    cy.get('[data-column-id="name"]').should('have.attr', 'aria-sort', 'ascending');
    cy.findByText('Name').click();
    cy.get('[ui5-list]').clickUi5ListItemByText('Clear Sorting');
    cy.get('[data-column-id="name"]').should('not.have.attr', 'aria-sort');
    cy.findByText('Name').click();
    cy.get('[ui5-list]').clickUi5ListItemByText('Sort Descending');
    cy.get('[data-column-id="name"]').should('have.attr', 'aria-sort', 'descending');
    cy.findByText('Name').click();
    cy.get('[text="Sort Ascending"]').shadow().get('[ui5-input]').typeIntoUi5Input('A{enter}');

    cy.get('[data-column-id="name"]')
      .should('have.attr', 'aria-sort', 'descending')
      .and('have.attr', 'aria-label', 'Filtered');

    cy.findByText('Name').click();
    cy.get('[ui5-list]').clickUi5ListItemByText('Group');
    cy.get('[data-column-id="name"]')
      .should('have.attr', 'aria-sort', 'descending')
      .and('have.attr', 'aria-label', 'Filtered Grouped');
    cy.get('[data-visible-row-index="1"][data-visible-column-index="0"]')
      .should('have.attr', 'aria-labelledby')
      .then((labelledby) => {
        const ids = labelledby.split(' ');
        if (canUseVoiceOver) {
          expect(ids).to.have.length(2);
          expect(ids[1]).to.include('name');
        } else {
          expect(ids).to.have.length(1);
        }
        expect(ids[0]).to.include('namename:A');
      });
    cy.get('[data-visible-row-index="1"][data-visible-column-index="0"]')
      .should('have.attr', 'aria-describedby')
      .then((labelledby) => {
        expect(labelledby).to.include('cell-expand');
      });
    cy.get('[name="navigation-right-arrow"]').click();
    cy.findByText('Name').click();
    cy.get('[ui5-list]').clickUi5ListItemByText('Ungroup');
    cy.get('[data-visible-row-index="1"][data-visible-column-index="0"]')
      .should('have.attr', 'aria-labelledby')
      .then((labelledby) => {
        const ids = labelledby.split(' ');
        if (canUseVoiceOver) {
          expect(ids).to.have.length(2);
          expect(ids[1]).to.include('name');
        } else {
          expect(ids).to.have.length(1);
        }
        expect(ids[0]).to.include('name0');
      });
    cy.get('[data-column-id="name"]')
      .should('have.attr', 'aria-sort', 'descending')
      .and('have.attr', 'aria-label', 'Filtered');

    cy.findByText('Name').click();
    cy.get('[text="Sort Ascending"]').shadow().get('[ui5-input]').typeIntoUi5Input('{selectall}{backspace}{enter}');
    cy.get('[data-column-id="name"]').should('have.attr', 'aria-sort', 'descending').and('not.have.attr', 'aria-label');

    cy.get('[data-column-id="friend.age"]').should('have.attr', 'aria-label', 'Custom Label ');
    cy.realPress('ArrowDown');

    cy.get('[data-visible-row-index="1"][data-visible-column-index="3"]')
      .should('have.attr', 'aria-labelledby')
      .then((labelledby) => {
        const ids = labelledby.split(' ');
        if (canUseVoiceOver) {
          expect(ids).to.have.length(2);
          expect(ids[1]).to.include('friend.age');
        } else {
          expect(ids).to.have.length(1);
        }
        expect(ids[0]).to.include('friend.age2');
      });
    cy.get('[data-visible-row-index="1"][data-visible-column-index="4"]').should(
      'have.attr',
      'aria-label',
      'Custom  custom aria-label',
    );
  });

  it('a11y: accessibleName and accessibleNameRef', () => {
    // no aria-labelledby
    cy.mount(<AnalyticalTable columns={columns} data={data} />);
    cy.get('[data-component-name="AnalyticalTableContainer"]').should('not.have.attr', 'aria-labelledby');
    cy.get('[data-component-name="AnalyticalTableContainer"]').should('not.have.attr', 'aria-label');

    // with header: aria-labelledby points to the title bar
    cy.mount(<AnalyticalTable columns={columns} data={data} header="Items Table" />);
    cy.get('[data-component-name="AnalyticalTableContainer"]')
      .should('have.attr', 'aria-labelledby')
      .then((labelledby) => {
        cy.get(`[id="${labelledby}"]`).should('exist');
      });

    // accessibleName: aria-label on the grid and removes the header connection
    cy.mount(<AnalyticalTable columns={columns} data={data} header="Items Table" accessibleName="Financing Details" />);
    cy.get('[data-component-name="AnalyticalTableContainer"]').should('have.attr', 'aria-label', 'Financing Details');
    cy.get('[data-component-name="AnalyticalTableContainer"]').should('not.have.attr', 'aria-labelledby');

    // accessibleNameRef: overrides the header connection
    cy.mount(
      <>
        <span id="custom-label">Custom Table Label</span>
        <AnalyticalTable columns={columns} data={data} header="Items Table" accessibleNameRef="custom-label" />
      </>,
    );
    cy.get('[data-component-name="AnalyticalTableContainer"]').should('have.attr', 'aria-labelledby', 'custom-label');
  });

  it("Expandable: don't scroll when expanded/collapsed", () => {
    const TestComp = () => {
      const tableInstanceRef = useRef<{ toggleRowExpanded?: (e: string) => void }>({});
      return (
        <>
          <button
            onClick={() => {
              tableInstanceRef.current.toggleRowExpanded('6');
            }}
          >
            toggle row
          </button>
          <AnalyticalTable
            data={[
              ...dataTree,
              ...dataTree,
              ...dataTree,
              { name: 'toggle', subRows: [{ name: 'toggled' }] },
              ...dataTree,
              ...dataTree,
            ]}
            columns={columns}
            isTreeTable
            visibleRows={5}
            tableInstance={tableInstanceRef}
          />
        </>
      );
    };
    cy.mount(<AnalyticalTable data={[...dataTree, ...dataTree]} columns={columns} isTreeTable visibleRows={5} />);
    cy.findAllByText('Katy Bradshaw').eq(1).trigger('keydown', {
      key: 'Enter',
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').scrollTo('bottom');
    cy.findByText('Carol Perez').trigger('keydown', {
      key: 'Enter',
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').should('not.equal', 0);
    cy.findByText('Carol Perez').trigger('keydown', {
      key: 'Enter',
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').invoke('scrollTop').should('not.equal', 0);

    cy.mount(<AnalyticalTable data={[...data, ...data]} columns={columns} visibleRows={5} groupable />);
    cy.findByText('Name').click();
    cy.get('[ui5-list]').clickUi5ListItemByText('Group');
    cy.findByText('A (2)').trigger('keydown', {
      key: 'Enter',
    });
    cy.findByText('B (2)').trigger('keydown', {
      key: 'Enter',
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').scrollTo('bottom');
    cy.findByText('C (2)').trigger('keydown', {
      key: 'Enter',
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').invoke('scrollTop').should('not.equal', 0);
    cy.get('[data-component-name="AnalyticalTableBody"]').scrollTo('bottom');
    cy.findByText('C (2)').trigger('keydown', {
      key: 'Enter',
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').invoke('scrollTop').should('not.equal', 0);

    const renderRowSubComponent = () => {
      return (
        <div style={{ height: '80px' }} title="subcomponent">
          SubComponent
        </div>
      );
    };
    cy.mount(<AnalyticalTable data={data} columns={columns} renderRowSubComponent={renderRowSubComponent} />);
    cy.findByText('A').trigger('keydown', {
      key: 'Enter',
    });
    cy.findByText('B').trigger('keydown', {
      key: 'Enter',
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').scrollTo('bottom');
    cy.findByText('X').trigger('keydown', {
      key: 'Enter',
      force: true,
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').invoke('scrollTop').should('not.equal', 0);
    cy.get('[data-component-name="AnalyticalTableBody"]').scrollTo('bottom');
    cy.findByText('X').trigger('keydown', {
      key: 'Enter',
      force: true,
    });
    cy.get('[data-component-name="AnalyticalTableBody"]').invoke('scrollTop').should('not.equal', 0);

    cy.mount(<TestComp />);
    cy.get('[data-component-name="AnalyticalTableBody"]').scrollTo('center');
    cy.findByText('toggled').should('not.exist');
    cy.findByText('toggle row').click();
    cy.findByText('toggled').should('be.visible');
    cy.get('[data-component-name="AnalyticalTableBody"]').invoke('scrollTop').should('not.equal', 0);
    cy.findByText('toggle row').click();
    cy.findByText('toggled').should('not.exist');
    cy.get('[data-component-name="AnalyticalTableBody"]').invoke('scrollTop').should('not.equal', 0);
  });

  //todo: This test fails in the pipeline with React19. Investigate how to enable it again.
  if (reactVersion.startsWith('18')) {
    it('initial scroll-to', () => {
      const ScrollTo = () => {
        const tableRef = useRef<AnalyticalTableDomRef>(null);
        useEffect(() => {
          tableRef.current.scrollTo(520);
        }, []);
        return <AnalyticalTable data={generateMoreData(200)} columns={columns} ref={tableRef} />;
      };
      cy.mount(<ScrollTo />);
      cy.get('[data-component-name="AnalyticalTableContainer"]').findByText('Name-12').should('be.visible');
      cy.get('[data-component-name="AnalyticalTableContainer"]').findByText('Name-11').should('not.be.visible');

      const ScrollToItem = () => {
        const tableRef = useRef(null);
        useEffect(() => {
          tableRef.current.scrollToItem(12, { align: 'start' });
        }, []);
        return <AnalyticalTable data={generateMoreData(200)} columns={columns} ref={tableRef} />;
      };
      cy.mount(<ScrollToItem />);
      cy.get('[data-component-name="AnalyticalTableContainer"]').findByText('Name-12').should('be.visible');
      cy.get('[data-component-name="AnalyticalTableContainer"]').findByText('Name-11').should('not.be.visible');

      const cols = [
        ...columns,
        ...new Array(50).fill('').map((_, index) => ({
          id: `${index}`,
          Header: () => index,
        })),
      ];
      const ScrollToHorizontal = () => {
        const tableRef = useRef(null);
        useEffect(() => {
          tableRef.current.horizontalScrollTo(1020);
        }, []);
        return <AnalyticalTable data={generateMoreData(50)} columns={cols} ref={tableRef} />;
      };
      cy.mount(<ScrollToHorizontal />);
      cy.get('[data-component-name="AnalyticalTableContainer"]').findByText('13').should('be.visible');
      cy.get('[data-component-name="AnalyticalTableContainer"]').findByText('12').should('not.be.visible');

      const ScrollToItemHorizontal = () => {
        const tableRef = useRef(null);
        useEffect(() => {
          tableRef.current.horizontalScrollToItem(13, { align: 'start' });
        }, []);
        return (
          <AnalyticalTable
            data={generateMoreData(200)}
            columns={new Array(50).fill('').map((_, index) => ({ id: `${index}`, Header: () => index }))}
            ref={tableRef}
          />
        );
      };
      cy.mount(<ScrollToItemHorizontal />);
      cy.get('[data-component-name="AnalyticalTableContainer"]').findByText('13').should('be.visible');
      cy.get('[data-component-name="AnalyticalTableContainer"]').findByText('12').should('not.be.visible');
    });
  }

  it('additionalEmptyRowsCount', () => {
    cy.mount(<AnalyticalTable data={data} columns={columns} minRows={4} />);
    cy.get('[data-empty-row]').should('not.exist');
    cy.mount(<AnalyticalTable data={data} columns={columns} minRows={4} additionalEmptyRowsCount={1} />);
    cy.get('[data-empty-row]').should('exist').and('not.be.visible');
    cy.mount(<AnalyticalTable data={data} columns={columns} minRows={4} additionalEmptyRowsCount={5} />);
    cy.get('[data-empty-row]').should('exist').and('have.length', 5).and('not.be.visible');
    cy.get('[data-component-name="AnalyticalTableBody"]').scrollTo('bottom');
    cy.get('[data-empty-row]').should('exist').and('have.length', 5).and('be.visible');
  });

  it('TreeTable + SubComps + lazy-load', () => {
    const initialData = [
      {
        displayId: '1337',
        name: 'root1',
        nodeId: 'root1',
        parentId: null,
      },
      {
        displayId: '1337',
        name: 'root2',
        nodeId: 'root2',
        parentId: null,
      },
    ];

    const columns = [
      {
        Header: 'Test',
        accessor: 'name',
      },
      {
        accessor: 'displayId',
      },
    ];

    /**
     * This example will render a tree table using AnalyticalTable.
     * the children nodes will be lazy loaded from server when expanding the parent node.
     *a "Load more" button is rendered if the parent node's children are not completely loaded.
     */
    const TestComp = () => {
      // flattend data. will be transformed before passed to the tree table
      const [raw, setRaw] = useState(initialData);
      const rowById = useRef({});
      const names = useRef(mockNames);

      // simulate getting children from server. randomly generate a child node.
      const fetchChildren = (nodeId) => {
        return Promise.resolve({
          value: [
            {
              displayId: `1337`,
              name: `${nodeId}-${names.current[0]}`,
              nodeId: `${nodeId}-${names.current[0]}`,
              parentId: nodeId,
            },
          ],
        });
      };

      const getChildren = useCallback(
        (nodeId) => {
          return fetchChildren(nodeId).then((result) => {
            names.current.shift();
            setRaw([...raw, ...result.value]);
          });
        },
        [raw],
      );

      const handleRowExpandChange = useCallback(
        (event) => {
          const row = event.detail.row;
          if (!row.isExpanded && row.canExpand && !row.original.subRows?.length) {
            void getChildren(row.original.nodeId, row.original.subRows?.length || 0);
          }
        },
        [getChildren],
      );

      // render "Load more" button
      // the "Load more" button will be rendered as the row's subcomponent if the row is the last child of its parent node
      const renderLoadMore = (row) => {
        const parentId = row.original.parentId;

        // root node
        const parentNode = rowById.current[parentId];
        if (!parentNode) {
          return null;
        }

        // current node is not the last node of the parent's children: do not render the Load more button
        const currentChildrenCount = parentNode.subRows?.length || 0;
        const currentRowIndex = parentNode.subRows?.findIndex((subRow) => subRow.nodeId === row.original.nodeId);
        if (currentRowIndex !== currentChildrenCount - 1) {
          return null;
        }

        const arrowWidth = 35;

        return (
          <div
            style={{
              paddingBottom: '0.25rem',
              paddingInlineStart: `calc(var(--_ui5wcr-AnalyticalTableTreePaddingLevel${row.depth}) + ${arrowWidth}px)`,
            }}
          >
            <Button
              design="Transparent"
              onClick={() => {
                if (typeof getChildren === 'function') {
                  void getChildren(parentId, currentChildrenCount);
                }
              }}
            >
              Load more for {parentNode.name}
            </Button>
          </div>
        );
      };

      const customTableHook = (hooks) => {
        hooks.prepareRow.push((row) => {
          row.canExpand = true;
        });
      };

      // transform data to the pattern which is accepted by the tree table
      // NOTES: this algorithm is less likely related to the bug, because in our reality project there is a different algorithm to generate the tree table and the bug still occurs.
      const data = useMemo(() => {
        raw.forEach((item) => {
          const newItem = { ...item };
          rowById.current[newItem.nodeId] = {
            ...(rowById[newItem.node] || {}),
            ...newItem,
          };
          if (!newItem.parentId) {
            rowById.current[newItem.nodeId] = {
              ...newItem,
              ...(rowById.current[newItem.nodeId] || {}),
            };
          } else {
            if (!rowById.current[newItem.parentId]) {
              rowById.current[newItem.parentId] = {
                nodeId: newItem.parentId,
                subRows: [],
              };
            } else if (!rowById.current[newItem.parentId].subRows) {
              rowById.current[newItem.parentId].subRows = [];
            }
            rowById.current[newItem.parentId].subRows.push(rowById.current[newItem.nodeId]);
          }
        });

        return Object.values(rowById.current).filter((row) => !row.parentId);
      }, [raw]);

      return (
        <AnalyticalTable
          columns={columns}
          data={data}
          isTreeTable
          onRowExpandChange={handleRowExpandChange}
          reactTableOptions={{
            autoResetExpanded: false,
          }}
          renderRowSubComponent={renderLoadMore}
          subComponentsBehavior={'IncludeHeight'}
          tableHooks={[customTableHook]}
          minRows={1}
        />
      );
    };

    cy.mount(<TestComp />);

    cy.findByText('root1').siblings().click();
    cy.findByText('Load more for root1').should('have.length', 1).click();
    cy.findByText('Load more for root1').should('have.length', 1).click();

    cy.findByText('root1-John').siblings().click();
    cy.findByText('Load more for root1-John').should('have.length', 1).click();

    cy.get('[aria-rowindex="7"]').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 260)');
  });

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
  it('useAnnounceEmptyCells', () => {
    const assertAriaLabelledby = (rowIndex: number, colIndex: number, colName: string, isEmpty = true) => {
      cy.get(`[data-visible-row-index="${rowIndex}"][data-visible-column-index="${colIndex}"]`)
        .should('have.attr', 'aria-labelledby')
        .then((labelledby) => {
          const ids = labelledby.split(' ');
          expect(ids).to.have.length((isEmpty ? 3 : 2) + (!canUseVoiceOver ? -1 : 0));
          expect(ids[0]).to.include(colName + '0');
          if (canUseVoiceOver) {
            expect(ids[1]).to.include(colName);
          }
          if (isEmpty) {
            expect(ids[2 + (!canUseVoiceOver ? -1 : 0)]).to.include('empty');
          }
        });
    };
    cy.mount(<AnalyticalTable data={dataWithEmptyFields} columns={columns} />);
    assertAriaLabelledby(1, 0, 'name', false);
    cy.mount(
      <AnalyticalTable
        data={dataWithEmptyFields}
        columns={columns}
        tableHooks={[AnalyticalTableHooks.useAnnounceEmptyCells]}
      />,
    );
    assertAriaLabelledby(1, 0, 'name');
    assertAriaLabelledby(1, 1, 'age', false);
    assertAriaLabelledby(1, 2, 'friend.name');
    assertAriaLabelledby(1, 3, 'friend.age');
    cy.get('[data-visible-row-index="2"][data-visible-column-index="0"]')
      .should('have.attr', 'aria-labelledby')
      .then((labelledby) => {
        const ids = labelledby.split(' ');
        if (canUseVoiceOver) {
          expect(ids).to.have.length(2);
          expect(ids[1]).to.include('name');
        } else {
          expect(ids).to.have.length(1);
        }
        expect(ids[0]).to.include('name1');
      });
  });

  [5, 2].forEach((visibleRows) => {
    const withVertScrollbar = visibleRows === 2;
    it(`scaleWidthMode: Default (w/${withVertScrollbar ? '' : 'o'} vertical scrollbar)`, () => {
      const _data = [
        {
          age: 80,
          friend: {
            age: 68,
            name: 'Carver Vance',
          },
          name: 'Allen Best',
        },
        {
          age: 31,
          friend: {
            age: 70,
            name: 'Strickland Gallegos',
          },
          name: 'Combs Fleming',
        },
        {
          age: 31,
          friend: {
            age: 70,
            name: 'Strickland Gallegos',
          },
          name: 'Combs Fleming',
        },
        {
          age: 31,
          friend: {
            age: 70,
            name: 'Strickland Gallegos',
          },
          name: 'Combs Fleming',
        },
      ];
      const _columns = [
        {
          Header: 'Name',
          accessor: 'name',
          headerTooltip: 'Full Name',
        },
        {
          Header: 'Age',
          accessor: 'age',
          hAlign: 'End',
          maxWidth: 192,
        },
        {
          Header: 'Friend Name',
          accessor: 'friend.name',
          maxWidth: 160,
        },
        {
          accessor: 'friend.age',
          maxWidth: 160,
          hAlign: 'End',
        },
        {
          Header: 'Actions',
          id: 'actions1',
          maxWidth: 192,
          hAlign: 'End',
        },
        {
          Header: 'Actions',
          id: 'actions2',
          hAlign: 'End',
        },
        {
          Header: 'Actions',
          id: 'actions3',
          maxWidth: 160,
          hAlign: 'End',
        },
      ];
      document.body.style.margin = '0px';
      cy.viewport(1306, 1080);
      cy.mount(<AnalyticalTable data={_data} columns={_columns} visibleRows={visibleRows} />);
      cy.get('[data-component-name="AnalyticalTableContainer"]').should(
        'have.css',
        'width',
        withVertScrollbar ? '1290px' : '1306px',
      );
      cy.get('[data-component-name="AnalyticalTableBody"]').should(
        'have.css',
        'width',
        withVertScrollbar ? '1290px' : '1306px',
      );

      const _data2 = [
        {
          age: 80,
          friend: {
            age: 68,
            name: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          },
          name: 'Allen Best Allen Best Allen Best Allen Best Allen Best Allen Best Allen Best',
          status: 'Positive',
        },
        {
          age: 80,
          friend: {
            age: 68,
            name: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          },
          name: 'Allen Best Allen Best Allen Best Allen Best Allen Best Allen Best Allen Best',
          status: 'Positive',
        },
        {
          age: 80,
          friend: {
            age: 68,
            name: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          },
          name: 'Allen Best Allen Best Allen Best Allen Best Allen Best Allen Best Allen Best',
          status: 'Positive',
        },
        {
          age: 80,
          friend: {
            age: 68,
            name: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          },
          name: 'Allen Best Allen Best Allen Best Allen Best Allen Best Allen Best Allen Best',
          status: 'Positive',
        },
      ];
      const _columns2 = [
        {
          Header: 'Name',
          accessor: 'name',
          minWidth: 400,
        },
        {
          Header: 'Age',
          accessor: 'age',
          minWidth: 100,
        },
        {
          Header: 'Friend Name',
          accessor: 'friend.name',
          minWidth: 100,
        },
        {
          Header: 'Friend Age',
          accessor: 'friend.age',
          minWidth: 300,
        },
      ];
      cy.mount(<AnalyticalTable data={_data2} columns={_columns2} visibleRows={visibleRows} />);
      cy.get('[data-component-name="AnalyticalTableContainer"]').should(
        'have.css',
        'width',
        withVertScrollbar ? '1290px' : '1306px',
      );
      cy.get('[data-component-name="AnalyticalTableBody"]').should(($el) => {
        const width = Math.round(parseFloat($el.css('width')));
        expect(width).to.equal(withVertScrollbar ? 1290 : 1306);
      });

      cy.mount(<AnalyticalTable data={data} columns={columns} visibleRows={visibleRows} />);
      cy.get('[data-component-name="AnalyticalTableContainer"]').should(
        'have.css',
        'width',
        withVertScrollbar ? '1290px' : '1306px',
      );
      cy.get('[data-component-name="AnalyticalTableBody"]').should(
        'have.css',
        'width',
        withVertScrollbar ? '1290px' : '1306px',
      );

      const _columns3 = [...columns, { id: 'long', Header: 'Long', width: 2000, Cell: 'Long' }];
      cy.mount(<AnalyticalTable data={data} columns={_columns3} visibleRows={visibleRows} />);
      cy.get('[data-component-name="AnalyticalTableContainer"]').should(
        'have.css',
        'width',
        withVertScrollbar ? '1290px' : '1306px',
      );
      cy.get('[data-component-name="AnalyticalTableBody"]').should('have.css', 'width', '2240px'); // 4 * 60 (minWidth) + 2000

      const _columns4 = [
        ...columns,
        { id: 'long', Header: 'Long', width: 2000, Cell: 'Long', maxWidth: 1000 },
        { id: 'minWidth', Header: 'minWidth', minWidth: 200, Cell: 'minWidth', maxWidth: 1000 },
      ];
      cy.mount(<AnalyticalTable data={data} columns={_columns4} visibleRows={visibleRows} />);
      cy.get('[data-component-name="AnalyticalTableContainer"]').should(
        'have.css',
        'width',
        withVertScrollbar ? '1290px' : '1306px',
      );
      cy.get('[data-component-name="AnalyticalTableBody"]').should('have.css', 'width', '1440px'); // 4 * 60 (minWidth) + 1000 (maxWidth) + 200
    });
  });

  it('plugin hook: useF2CellEdit - all ui5wc inputs', () => {
    const tableHooks = [useF2CellEdit];
    const dummyData = new Array(1).fill({});
    cy.mount(
      <>
        <button>Before</button>
        <AnalyticalTable
          data={dummyData}
          columns={allRelevantInputCompontentsForF2}
          tableHooks={tableHooks}
          visibleRows={5}
          rowHeight={100}
          headerRowHeight={44}
        />
        <button>After</button>
      </>,
    );

    cy.findByText('Before').click();
    cy.realPress('Tab');
    cy.log('Cell 0-0');
    cy.focused().should('have.attr', 'data-row-index', '0');
    cy.focused().should('have.attr', 'data-column-index', '0');
    cy.realPress('Tab');
    cy.focused().should('have.attr', 'data-row-index', '1');
    cy.focused().should('have.attr', 'data-column-index', '0');
    cy.realPress('Tab');
    cy.focused().should('have.text', 'After');
    cy.realPress(['Shift', 'Tab']);
    cy.realPress('ArrowDown');

    cy.realPress('F2');
    allRelevantInputCompontentsForF2.forEach((col) => {
      cy.log(col.Header);
      if (col.id === 'segmented-button') {
        // SegmentedButton has two tab stops
        cy.realPress('Tab');
      }
      cy.realPress('F2');
      cy.focused().should('have.attr', 'role', 'gridcell');
      cy.realPress('F2');
      cy.realPress('Tab');
    });

    cy.focused().should('have.text', 'After');

    cy.realPress(['Shift', 'Tab']);
    allRelevantInputCompontentsForF2.forEach((col) => {
      if (col.id === 'segmented-button') {
        // SegmentedButton has two tab stops
        cy.realPress(['Shift', 'Tab']);
      }
      cy.realPress(['Shift', 'Tab']);
    });
    // SegmentedButton has two tab stops
    cy.focused().should('have.text', 'Before');
  });

  it('vertical scroll sync', () => {
    cy.mount(<AnalyticalTable columns={columns} data={generateMoreData(100)} />);

    cy.get('[data-component-name="AnalyticalTableBody"]').scrollTo(0, 2000).should('have.prop', 'scrollTop', 2000);
    cy.get('[data-component-name="AnalyticalTableVerticalScrollbar"]').should('have.prop', 'scrollTop', 2000);

    cy.get('[data-component-name="AnalyticalTableVerticalScrollbar"]')
      .scrollTo(0, 3000)
      .should('have.prop', 'scrollTop', 3000);
    cy.get('[data-component-name="AnalyticalTableBody"]').should('have.prop', 'scrollTop', 3000);

    cy.wait(100);
    cy.get('[data-component-name="AnalyticalTableContainerWithScrollbar"]').realMouseWheel({ deltaY: 500 });
    cy.get('[data-component-name="AnalyticalTableBody"]').should('have.prop', 'scrollTop', 3500);
    cy.get('[data-component-name="AnalyticalTableVerticalScrollbar"]').should('have.prop', 'scrollTop', 3500);

    cy.get('[data-component-name="AnalyticalTableVerticalScrollbar"]').realMouseWheel({ deltaY: -1000 });
    cy.get('[data-component-name="AnalyticalTableVerticalScrollbar"]').should('have.prop', 'scrollTop', 2500);
    cy.get('[data-component-name="AnalyticalTableBody"]').should('have.prop', 'scrollTop', 2500);

    const TestComp = () => {
      const [_data, setData] = useState([]);
      useEffect(() => {
        setTimeout(() => {
          setData(generateMoreData(100));
        }, 100);
      }, []);

      return (
        <>
          <div style={{ height: '500px' }}>
            <AnalyticalTable
              columns={columns}
              data={_data}
              header={<div>Header</div>}
              visibleRowCountMode="AutoWithEmptyRows"
            />
          </div>
        </>
      );
    };

    cy.mount(<TestComp />);

    cy.get('[data-component-name="AnalyticalTableBody"]').scrollTo(0, 2000).should('have.prop', 'scrollTop', 2000);
    cy.get('[data-component-name="AnalyticalTableVerticalScrollbar"]').should('have.prop', 'scrollTop', 2000);

    cy.get('[data-component-name="AnalyticalTableVerticalScrollbar"]')
      .scrollTo(0, 3000)
      .should('have.prop', 'scrollTop', 3000);
    cy.get('[data-component-name="AnalyticalTableBody"]').should('have.prop', 'scrollTop', 3000);

    cy.get('[data-component-name="AnalyticalTableContainerWithScrollbar"]').realMouseWheel({ deltaY: 500 });
    cy.get('[data-component-name="AnalyticalTableBody"]').should('have.prop', 'scrollTop', 3500);
    cy.get('[data-component-name="AnalyticalTableVerticalScrollbar"]').should('have.prop', 'scrollTop', 3500);

    cy.get('[data-component-name="AnalyticalTableVerticalScrollbar"]').realMouseWheel({ deltaY: -1000 });
    cy.get('[data-component-name="AnalyticalTableVerticalScrollbar"]').should('have.prop', 'scrollTop', 2500);
    cy.get('[data-component-name="AnalyticalTableBody"]').should('have.prop', 'scrollTop', 2500);
  });

  it('column className & classNameHeader', () => {
    const columnsWithClassNames: AnalyticalTableColumnDefinition[] = [
      {
        Header: 'Name',
        accessor: 'name',
        className: 'cy-body-cell',
        classNameHeader: 'cy-header-cell',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
    ];
    cy.mount(
      <>
        <style>{`
          .cy-body-cell { background-color: lightblue; }
          .cy-header-cell { background-color: lightgrey; }
        `}</style>
        <AnalyticalTable data={data} columns={columnsWithClassNames} />
      </>,
    );

    cy.get('[data-column-id="name"][role="columnheader"]')
      .should('have.class', 'cy-header-cell')
      .and('not.have.class', 'cy-body-cell')
      .and('have.css', 'background-color', 'rgb(211, 211, 211)');

    cy.get('[data-column-id="age"][role="columnheader"]')
      .should('not.have.class', 'cy-header-cell')
      .and('not.have.class', 'cy-body-cell');

    cy.get('[data-row-index="1"][data-column-index="0"]')
      .should('have.class', 'cy-body-cell')
      .and('not.have.class', 'cy-header-cell')
      .and('have.css', 'background-color', 'rgb(173, 216, 230)');

    cy.get('[data-row-index="1"][data-column-index="1"]')
      .should('not.have.class', 'cy-body-cell')
      .and('not.have.class', 'cy-header-cell');
  });
});

const mockNames = [
  'John',
  'Jane',
  'Bob',
  'Alice',
  'Charlie',
  'David',
  'Eva',
  'Frank',
  'Grace',
  'Henry',
  'Isabel',
  'Jack',
  'Kate',
  'Liam',
  'Mia',
  'Noah',
  'Olivia',
  'Parker',
  'Quinn',
  'Ryan',
  'Sophia',
  'Thomas',
  'Uma',
  'Vincent',
  'Willow',
  'Xavier',
  'Yara',
  'Zane',
  'Ava',
  'Benjamin',
  'Cora',
  'Dylan',
  'Emily',
  'Finn',
  'Gabriella',
  'Hudson',
  'Isla',
  'Julian',
  'Katherine',
  'Leo',
  'Mila',
  'Nathan',
  'Oliver',
  'Penelope',
  'Quentin',
  'Rose',
  'Samuel',
  'Tessa',
  'Ulysses',
  'Victoria',
  'Wesley',
  'Xander',
  'Yasmine',
  'Zachary',
  'Abigail',
  'Brady',
  'Chloe',
  'Daniel',
  'Eleanor',
  'Felix',
  'Giselle',
  'Hayden',
  'Isabella',
  'Jasper',
  'Kylie',
  'Landon',
  'Maddison',
  'Natalie',
  'Oscar',
  'Paige',
  'Quincy',
  'Riley',
  'Savannah',
  'Theodore',
  'Ursula',
  'Violet',
  'Wyatt',
  'Ximena',
  'Yannick',
  'Zara',
];

const columnsWithPopIn = [
  {
    Header: 'Name',
    headerTooltip: 'Full Name',
    accessor: 'name',
  },
  {
    responsiveMinWidth: 601,
    Header: 'Age',
    accessor: 'age',
  },
  {
    responsivePopIn: true,
    responsiveMinWidth: 801,
    Header: 'Friend Name',
    accessor: 'friend.name',
  },
  {
    responsivePopIn: true,
    responsiveMinWidth: 801,
    Header: () => <span>Custom original Header1</span>,
    PopInHeader: 'Custom Header 1',
    accessor: 'friend.age',
  },
  {
    responsivePopIn: true,
    responsiveMinWidth: 801,
    Header: () => <span>Custom original Header2</span>,
    PopInHeader: () => {
      return 'Custom Header 2';
    },
    id: 'custom1',
    Cell: 'Custom Cell 2',
  },
  {
    responsivePopIn: true,
    responsiveMinWidth: 801,
    Header: () => 'Custom Header',
    id: 'custom2',
    Cell: ({ isPopIn }) => {
      if (isPopIn) {
        return 'pop-in content';
      }
      return 'original content';
    },
  },
  {
    id: 'popinDisplay',
    Header: 'PopinDisplay Modes',
    responsivePopIn: true,
    responsiveMinWidth: 801,
    popinDisplay: 'Block',
    Cell: () => {
      return (
        <Text data-testid="popinCell" maxLines={1}>
          Popin Cell
        </Text>
      );
    },
  },
];

const groupableData = [
  {
    name: 'GroupMe',
    age: 25,
    friend: {
      name: 'Peter',
      age: 42,
    },
  },
  {
    name: 'GroupMe',
    age: 56,
    friend: {
      name: 'ASD',
      age: 42,
    },
  },
  {
    name: 'GroupMe',
    age: 13,
    friend: {
      name: 'QWE',
      age: 42,
    },
  },
  {
    name: 'GroupMe',
    age: 25,
    friend: {
      name: 'ZXC',
      age: 42,
    },
  },
  {
    name: 'GroupMe2',
    age: 25,
    friend: {
      name: 'Peter',
      age: 42,
    },
  },
  {
    name: 'GroupMe2',
    age: 25,
    friend: {
      name: 'ASD',
      age: 42,
    },
  },
  {
    name: 'GroupMe2',
    age: 55,
    friend: {
      name: 'Peter',
      age: 42,
    },
  },
  {
    name: 'GroupMe2',
    age: 55,
    friend: {
      name: 'ZXC',
      age: 42,
    },
  },
];

const dataTree = [
  {
    name: 'Flowers Mcfarland',
    age: 82,
    friend: {
      name: 'Gardner Chang',
      age: 38,
    },

    subRows: [
      {
        name: 'Head Hardy',
        age: 35,
        friend: {
          name: 'Mcmillan Bray',
          age: 85,
        },

        subRows: [
          {
            name: 'Deann Thompson',
            age: 42,
            friend: {
              name: 'Meghan Talley',
              age: 40,
            },

            subRows: [
              {
                name: 'Barker Perkins',
                age: 24,
                friend: {
                  name: 'Gallegos Morin',
                  age: 77,
                },
              },
              {
                name: 'Marquez Fletcher',
                age: 51,
                friend: {
                  name: 'Mia Conway',
                  age: 37,
                },
              },
              {
                name: 'Holman Shannon',
                age: 75,
                friend: {
                  name: 'Cleo Newman',
                  age: 77,
                },
              },
              {
                name: 'Letitia Blackburn',
                age: 46,
                friend: {
                  name: 'Helena Johnson',
                  age: 37,
                },
              },
            ],
          },
          {
            name: 'Rose Lancaster',
            age: 32,
            friend: {
              name: 'Valarie Tanner',
              age: 61,
            },

            subRows: [
              {
                name: 'Courtney Ochoa',
                age: 55,
                friend: {
                  name: 'Bartlett Craft',
                  age: 37,
                },
              },
              {
                name: 'Holder Gilmore',
                age: 59,
                friend: {
                  name: 'Perry William',
                  age: 64,
                },
              },
              {
                name: 'Eve Burke',
                age: 36,
                friend: {
                  name: 'Rhonda Hurley',
                  age: 26,
                },
              },
              {
                name: 'Lilia Raymond',
                age: 32,
                friend: {
                  name: 'Leach Spence',
                  age: 60,
                },
              },
            ],
          },
          {
            name: 'Kerry Murray',
            age: 65,
            friend: {
              name: 'Madeleine Brown',
              age: 84,
            },

            subRows: [
              {
                name: 'Lynn Sanchez',
                age: 64,
                friend: {
                  name: 'Gail Hawkins',
                  age: 62,
                },
              },
              {
                name: 'Stevens Valencia',
                age: 66,
                friend: {
                  name: 'Keller Woods',
                  age: 42,
                },
              },
              {
                name: 'Wilkerson Solis',
                age: 26,
                friend: {
                  name: 'Wynn Carney',
                  age: 22,
                },
              },
              {
                name: 'Booker Hyde',
                age: 21,
                friend: {
                  name: 'Ginger Obrien',
                  age: 47,
                },
              },
            ],
          },
          {
            name: 'Graves Larson',
            age: 45,
            friend: {
              name: 'Reid Harrington',
              age: 30,
            },

            subRows: [
              {
                name: 'Simone Kane',
                age: 65,
                friend: {
                  name: 'Bobbi Osborn',
                  age: 35,
                },
              },
              {
                name: 'Nona Holt',
                age: 56,
                friend: {
                  name: 'Meadows Beach',
                  age: 33,
                },
              },
              {
                name: 'Whitney Castro',
                age: 80,
                friend: {
                  name: 'Nichole Roberson',
                  age: 47,
                },
              },
              {
                name: 'Lisa Salinas',
                age: 51,
                friend: {
                  name: 'Leona Short',
                  age: 81,
                },
              },
            ],
          },
        ],
      },
      {
        name: 'Fleming Cote',
        age: 64,
        friend: {
          name: 'York Buckner',
          age: 60,
        },

        subRows: [
          {
            name: 'Helga Franks',
            age: 52,
            friend: {
              name: 'Blankenship Clarke',
              age: 52,
            },

            subRows: [
              {
                name: 'Mcknight Le',
                age: 80,
                friend: {
                  name: 'Harris Skinner',
                  age: 17,
                },
              },
              {
                name: 'Patrick Boyle',
                age: 31,
                friend: {
                  name: 'Latasha Fitzpatrick',
                  age: 51,
                },
              },
              {
                name: 'Kathy Chambers',
                age: 41,
                friend: {
                  name: 'Gwen Russo',
                  age: 61,
                },
              },
              {
                name: 'Waters Huff',
                age: 35,
                friend: {
                  name: 'Cook Norton',
                  age: 58,
                },
              },
            ],
          },
          {
            name: 'Kate Horne',
            age: 30,
            friend: {
              name: 'Kidd Mays',
              age: 17,
            },

            subRows: [
              {
                name: 'Kristi Gillespie',
                age: 61,
                friend: {
                  name: 'Margarita Gallagher',
                  age: 16,
                },
              },
              {
                name: 'Molly Sargent',
                age: 64,
                friend: {
                  name: 'Geraldine Bird',
                  age: 25,
                },
              },
              {
                name: 'Boone Clayton',
                age: 83,
                friend: {
                  name: 'Dawn Dorsey',
                  age: 84,
                },
              },
              {
                name: 'Terra Sawyer',
                age: 67,
                friend: {
                  name: 'Lessie Barnes',
                  age: 36,
                },
              },
            ],
          },
          {
            name: 'Nadia Jacobs',
            age: 35,
            friend: {
              name: 'Pratt Vazquez',
              age: 36,
            },

            subRows: [
              {
                name: 'Acosta Singleton',
                age: 49,
                friend: {
                  name: 'Burke Reese',
                  age: 57,
                },
              },
              {
                name: 'Bridget Meadows',
                age: 74,
                friend: {
                  name: 'Monroe Sparks',
                  age: 79,
                },
              },
              {
                name: 'Morse Justice',
                age: 60,
                friend: {
                  name: 'Lily Petty',
                  age: 66,
                },
              },
              {
                name: 'Mckinney Riley',
                age: 47,
                friend: {
                  name: 'Brandy Garrison',
                  age: 33,
                },
              },
            ],
          },
          {
            name: 'Lilian Horn',
            age: 52,
            friend: {
              name: 'Levy Buck',
              age: 74,
            },

            subRows: [
              {
                name: 'Porter Walter',
                age: 67,
                friend: {
                  name: 'Young Welch',
                  age: 52,
                },
              },
              {
                name: 'Ingrid Becker',
                age: 30,
                friend: {
                  name: 'Adrian Burnett',
                  age: 41,
                },
              },
              {
                name: 'Harding Norman',
                age: 73,
                friend: {
                  name: 'Maribel Watson',
                  age: 71,
                },
              },
              {
                name: 'Sparks Mccullough',
                age: 52,
                friend: {
                  name: 'Agnes Bowen',
                  age: 34,
                },
              },
            ],
          },
        ],
      },
      {
        name: 'Robin Moreno',
        age: 62,
        friend: {
          name: 'Kristin Warner',
          age: 24,
        },

        subRows: [
          {
            name: 'Judith Mathews',
            age: 44,
            friend: {
              name: 'Norton Guzman',
              age: 67,
            },

            subRows: [
              {
                name: 'Trudy Roman',
                age: 72,
                friend: {
                  name: 'Ashley Rutledge',
                  age: 57,
                },
              },
              {
                name: 'Gates Potts',
                age: 28,
                friend: {
                  name: 'Marsh Whitney',
                  age: 38,
                },
              },
              {
                name: 'Shannon Bean',
                age: 43,
                friend: {
                  name: 'Gabriela Heath',
                  age: 77,
                },
              },
              {
                name: 'Lorna Mcmahon',
                age: 21,
                friend: {
                  name: 'Leah Pearson',
                  age: 69,
                },
              },
            ],
          },
          {
            name: 'Randall Nieves',
            age: 22,
            friend: {
              name: 'Juliette Kline',
              age: 55,
            },

            subRows: [
              {
                name: 'Josefa Simmons',
                age: 66,
                friend: {
                  name: 'Madden Johnston',
                  age: 19,
                },
              },
              {
                name: 'Michael Contreras',
                age: 56,
                friend: {
                  name: 'Sonya Frost',
                  age: 34,
                },
              },
              {
                name: 'Hays Coleman',
                age: 64,
                friend: {
                  name: 'Leta Winters',
                  age: 54,
                },
              },
              {
                name: 'Sara Adams',
                age: 46,
                friend: {
                  name: 'Jocelyn Paul',
                  age: 83,
                },
              },
            ],
          },
          {
            name: 'Ivy Harvey',
            age: 78,
            friend: {
              name: 'Esperanza Morgan',
              age: 65,
            },

            subRows: [
              {
                name: 'Fitzpatrick Scott',
                age: 19,
                friend: {
                  name: 'Mitzi Alford',
                  age: 47,
                },
              },
              {
                name: 'Jamie Phillips',
                age: 79,
                friend: {
                  name: 'Ava Watkins',
                  age: 69,
                },
              },
              {
                name: 'Irene Perry',
                age: 62,
                friend: {
                  name: 'Crawford Whitfield',
                  age: 50,
                },
              },
              {
                name: 'Letha Peterson',
                age: 44,
                friend: {
                  name: 'Brianna Carver',
                  age: 51,
                },
              },
            ],
          },
          {
            name: 'Bessie Parrish',
            age: 34,
            friend: {
              name: 'Payne Mcdowell',
              age: 36,
            },

            subRows: [
              {
                name: 'Salazar Carson',
                age: 61,
                friend: {
                  name: 'Imelda Avery',
                  age: 72,
                },
              },
              {
                name: 'Janna Page',
                age: 41,
                friend: {
                  name: 'Vicky Webster',
                  age: 85,
                },
              },
              {
                name: 'Gretchen Maynard',
                age: 68,
                friend: {
                  name: 'Cora Powers',
                  age: 20,
                },
              },
              {
                name: 'Kelsey Wade',
                age: 18,
                friend: {
                  name: 'Mills Crosby',
                  age: 50,
                },
              },
            ],
          },
        ],
      },
      {
        name: 'Schmidt Mullins',
        age: 27,
        friend: {
          name: 'Erma Tucker',
          age: 52,
        },

        subRows: [
          {
            name: 'Kirk Morton',
            age: 21,
            friend: {
              name: 'Vaughn Chaney',
              age: 85,
            },

            subRows: [
              {
                name: 'Mccoy Monroe',
                age: 56,
                friend: {
                  name: 'Melody Cobb',
                  age: 50,
                },
              },
              {
                name: 'Robbins Strickland',
                age: 79,
                friend: {
                  name: 'Cleveland Stokes',
                  age: 49,
                },
              },
              {
                name: 'Patterson Bernard',
                age: 43,
                friend: {
                  name: 'Gamble Knox',
                  age: 53,
                },
              },
              {
                name: 'Rose Hammond',
                age: 48,
                friend: {
                  name: 'James Zamora',
                  age: 39,
                },
              },
            ],
          },
          {
            name: 'Deleon Edwards',
            age: 31,
            friend: {
              name: 'Petty Roach',
              age: 64,
            },

            subRows: [
              {
                name: 'Lester Tate',
                age: 70,
                friend: {
                  name: 'Miles Shaffer',
                  age: 25,
                },
              },
              {
                name: 'Autumn Wilkins',
                age: 84,
                friend: {
                  name: 'Yvette Savage',
                  age: 44,
                },
              },
              {
                name: 'Jillian Richard',
                age: 74,
                friend: {
                  name: 'Tabatha Morrison',
                  age: 32,
                },
              },
              {
                name: 'Evangeline Adkins',
                age: 63,
                friend: {
                  name: 'Eugenia Wright',
                  age: 79,
                },
              },
            ],
          },
          {
            name: 'Underwood Tyler',
            age: 44,
            friend: {
              name: 'Irwin Santos',
              age: 31,
            },

            subRows: [
              {
                name: 'Clara White',
                age: 81,
                friend: {
                  name: 'Glenn Hall',
                  age: 17,
                },
              },
              {
                name: 'Alana Charles',
                age: 41,
                friend: {
                  name: 'Heidi Greer',
                  age: 33,
                },
              },
              {
                name: 'Noreen Henderson',
                age: 81,
                friend: {
                  name: 'Marla Lane',
                  age: 23,
                },
              },
              {
                name: 'Rebecca Ashley',
                age: 79,
                friend: {
                  name: 'Cathy Gray',
                  age: 84,
                },
              },
            ],
          },
          {
            name: 'Chrystal Barron',
            age: 80,
            friend: {
              name: 'Potter Mack',
              age: 53,
            },

            subRows: [
              {
                name: 'Riggs Woodward',
                age: 81,
                friend: {
                  name: 'Giles Conner',
                  age: 64,
                },
              },
              {
                name: 'Randi Hester',
                age: 81,
                friend: {
                  name: 'Evangelina Hobbs',
                  age: 85,
                },
              },
              {
                name: 'Earlene Bell',
                age: 20,
                friend: {
                  name: 'Dorthy Franco',
                  age: 21,
                },
              },
              {
                name: 'Lila Smith',
                age: 51,
                friend: {
                  name: 'Stone Marsh',
                  age: 58,
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Katy Bradshaw',
    age: 74,
    friend: {
      name: 'Griffin Carpenter',
      age: 39,
    },

    subRows: [
      {
        name: 'Mae Dixon',
        age: 36,
        friend: {
          name: 'Esther Mendoza',
          age: 77,
        },

        subRows: [
          {
            name: 'Diann Alvarado',
            age: 47,
            friend: {
              name: 'Georgette Osborne',
              age: 74,
            },

            subRows: [
              {
                name: 'Wiggins Cotton',
                age: 35,
                friend: {
                  name: 'Ruth Pittman',
                  age: 25,
                },
              },
              {
                name: 'Herring Flores',
                age: 68,
                friend: {
                  name: 'Kirkland Suarez',
                  age: 76,
                },
              },
              {
                name: 'Allen Kidd',
                age: 82,
                friend: {
                  name: 'Mclaughlin Langley',
                  age: 78,
                },
              },
              {
                name: 'Selma Kaufman',
                age: 62,
                friend: {
                  name: 'Hughes Vang',
                  age: 80,
                },
              },
            ],
          },
          {
            name: 'Rios Moran',
            age: 16,
            friend: {
              name: 'Alexis Todd',
              age: 41,
            },

            subRows: [
              {
                name: 'Morrison Higgins',
                age: 18,
                friend: {
                  name: 'Medina Abbott',
                  age: 50,
                },
              },
              {
                name: 'Flores Ortiz',
                age: 24,
                friend: {
                  name: 'Latonya Lara',
                  age: 57,
                },
              },
              {
                name: 'Fanny Hernandez',
                age: 77,
                friend: {
                  name: 'Mays Kim',
                  age: 42,
                },
              },
              {
                name: 'Lillian Moore',
                age: 26,
                friend: {
                  name: 'Tania Rivas',
                  age: 18,
                },
              },
            ],
          },
          {
            name: 'Anderson Pena',
            age: 23,
            friend: {
              name: 'Ortega Rich',
              age: 62,
            },

            subRows: [
              {
                name: 'Burns Vaughan',
                age: 16,
                friend: {
                  name: 'Lottie Henson',
                  age: 85,
                },
              },
              {
                name: 'Margret Ferguson',
                age: 45,
                friend: {
                  name: 'Rosalie Anderson',
                  age: 83,
                },
              },
              {
                name: 'Hewitt Glass',
                age: 73,
                friend: {
                  name: 'Carlson French',
                  age: 39,
                },
              },
              {
                name: 'Alyson Rosa',
                age: 85,
                friend: {
                  name: 'Vincent Allison',
                  age: 83,
                },
              },
            ],
          },
          {
            name: 'Burnett Nichols',
            age: 74,
            friend: {
              name: 'Mckay Banks',
              age: 76,
            },

            subRows: [
              {
                name: 'Ella Travis',
                age: 59,
                friend: {
                  name: 'Johnnie Bishop',
                  age: 64,
                },
              },
              {
                name: 'Alicia Hicks',
                age: 46,
                friend: {
                  name: 'Clarice Palmer',
                  age: 75,
                },
              },
              {
                name: 'Fry Maldonado',
                age: 28,
                friend: {
                  name: 'Moran Acosta',
                  age: 78,
                },
              },
              {
                name: 'Rowena Webb',
                age: 79,
                friend: {
                  name: 'Gaines Poole',
                  age: 59,
                },
              },
            ],
          },
        ],
      },
      {
        name: 'Sanchez Duran',
        age: 19,
        friend: {
          name: 'Myers Brennan',
          age: 70,
        },

        subRows: [
          {
            name: 'Sheena Schwartz',
            age: 57,
            friend: {
              name: 'Lucile Chapman',
              age: 32,
            },

            subRows: [
              {
                name: 'Nunez Campos',
                age: 73,
                friend: {
                  name: 'Sharpe Dyer',
                  age: 33,
                },
              },
              {
                name: 'Ilene Hampton',
                age: 29,
                friend: {
                  name: 'Rogers Mckenzie',
                  age: 70,
                },
              },
              {
                name: 'Sally Walsh',
                age: 25,
                friend: {
                  name: 'Huber Jones',
                  age: 55,
                },
              },
              {
                name: 'Jami Solomon',
                age: 68,
                friend: {
                  name: 'Mara Haley',
                  age: 19,
                },
              },
            ],
          },
          {
            name: 'Randolph Casey',
            age: 54,
            friend: {
              name: 'Norman Olsen',
              age: 82,
            },

            subRows: [
              {
                name: 'Hopper Gay',
                age: 75,
                friend: {
                  name: 'Kari Holcomb',
                  age: 77,
                },
              },
              {
                name: 'Delores Hahn',
                age: 47,
                friend: {
                  name: 'Conley Hoover',
                  age: 84,
                },
              },
              {
                name: 'Bridgette Rowland',
                age: 32,
                friend: {
                  name: 'Wheeler Bates',
                  age: 63,
                },
              },
              {
                name: 'Harriet Orr',
                age: 82,
                friend: {
                  name: 'Carroll Navarro',
                  age: 34,
                },
              },
            ],
          },
          {
            name: 'Queen Cline',
            age: 55,
            friend: {
              name: 'Norma Fowler',
              age: 70,
            },

            subRows: [
              {
                name: 'Montoya Farmer',
                age: 62,
                friend: {
                  name: 'Adams Bradley',
                  age: 38,
                },
              },
              {
                name: 'Debra Moses',
                age: 79,
                friend: {
                  name: 'Rivas Maxwell',
                  age: 24,
                },
              },
              {
                name: 'Bradley Bauer',
                age: 29,
                friend: {
                  name: 'Ida Park',
                  age: 72,
                },
              },
              {
                name: 'Church Wilson',
                age: 24,
                friend: {
                  name: 'Krystal Harmon',
                  age: 81,
                },
              },
            ],
          },
          {
            name: 'Kathrine Greene',
            age: 81,
            friend: {
              name: 'Carey Cleveland',
              age: 43,
            },

            subRows: [
              {
                name: 'Rocha Lawrence',
                age: 33,
                friend: {
                  name: 'Polly Lucas',
                  age: 43,
                },
              },
              {
                name: 'Jan Austin',
                age: 57,
                friend: {
                  name: 'Angelina Jefferson',
                  age: 18,
                },
              },
              {
                name: 'Jayne Rojas',
                age: 78,
                friend: {
                  name: 'Rae Morales',
                  age: 50,
                },
              },
              {
                name: 'Coffey Hart',
                age: 19,
                friend: {
                  name: 'Joyce Jimenez',
                  age: 19,
                },
              },
            ],
          },
        ],
      },
      {
        name: 'Teresa Sheppard',
        age: 41,
        friend: {
          name: 'Crane Gordon',
          age: 22,
        },

        subRows: [
          {
            name: 'Marci Dawson',
            age: 59,
            friend: {
              name: 'Margaret Miranda',
              age: 36,
            },

            subRows: [
              {
                name: 'Janie England',
                age: 69,
                friend: {
                  name: 'Hart Franklin',
                  age: 46,
                },
              },
              {
                name: 'Molina Baird',
                age: 63,
                friend: {
                  name: 'Maryellen Hill',
                  age: 19,
                },
              },
              {
                name: 'Merrill Estes',
                age: 35,
                friend: {
                  name: 'Deanne Pace',
                  age: 65,
                },
              },
              {
                name: 'Martinez Elliott',
                age: 61,
                friend: {
                  name: 'Tia Alston',
                  age: 59,
                },
              },
            ],
          },
          {
            name: 'Janice Dale',
            age: 47,
            friend: {
              name: 'Glass Figueroa',
              age: 36,
            },

            subRows: [
              {
                name: 'Catherine Griffith',
                age: 38,
                friend: {
                  name: 'Lorena Holloway',
                  age: 69,
                },
              },
              {
                name: 'Lilly Sharp',
                age: 17,
                friend: {
                  name: 'Allison Kelley',
                  age: 81,
                },
              },
              {
                name: 'Amanda Irwin',
                age: 59,
                friend: {
                  name: 'Mandy Randall',
                  age: 28,
                },
              },
              {
                name: 'Lynch Stevens',
                age: 62,
                friend: {
                  name: 'Larson Oconnor',
                  age: 58,
                },
              },
            ],
          },
          {
            name: 'Wilda Gilliam',
            age: 41,
            friend: {
              name: 'Brady Williamson',
              age: 61,
            },

            subRows: [
              {
                name: 'Macias Underwood',
                age: 40,
                friend: {
                  name: 'Rachel Juarez',
                  age: 23,
                },
              },
              {
                name: 'Mullins Rodriquez',
                age: 19,
                friend: {
                  name: 'Estelle Kirby',
                  age: 59,
                },
              },
              {
                name: 'Maxwell Sampson',
                age: 42,
                friend: {
                  name: 'Estela Gallegos',
                  age: 47,
                },
              },
              {
                name: 'Vance Stewart',
                age: 77,
                friend: {
                  name: 'Higgins Rollins',
                  age: 41,
                },
              },
            ],
          },
          {
            name: 'French Trevino',
            age: 33,
            friend: {
              name: 'Rich Romero',
              age: 78,
            },

            subRows: [
              {
                name: 'Dionne Odonnell',
                age: 62,
                friend: {
                  name: 'Terrie Mccray',
                  age: 41,
                },
              },
              {
                name: 'Tanner Christensen',
                age: 63,
                friend: {
                  name: 'Garrett Blair',
                  age: 34,
                },
              },
              {
                name: 'Sasha Mitchell',
                age: 22,
                friend: {
                  name: 'Gale Stein',
                  age: 78,
                },
              },
              {
                name: 'Ann Blanchard',
                age: 66,
                friend: {
                  name: 'Aurelia Bonner',
                  age: 84,
                },
              },
            ],
          },
        ],
      },
      {
        name: 'Carol Perez',
        age: 66,
        friend: {
          name: 'Cheri Valenzuela',
          age: 80,
        },

        subRows: [
          {
            name: 'Linda Snider',
            age: 69,
            friend: {
              name: 'Amber Reynolds',
              age: 52,
            },

            subRows: [
              {
                name: 'Lakeisha Whitley',
                age: 18,
                friend: {
                  name: 'Dona Kinney',
                  age: 66,
                },
              },
              {
                name: 'Lawanda Nguyen',
                age: 27,
                friend: {
                  name: 'Karen Hancock',
                  age: 36,
                },
              },
              {
                name: 'Sherrie Serrano',
                age: 27,
                friend: {
                  name: 'Stacie Cardenas',
                  age: 43,
                },
              },
              {
                name: 'Chavez Holmes',
                age: 48,
                friend: {
                  name: 'Jeannette Hopkins',
                  age: 45,
                },
              },
            ],
          },
          {
            name: 'Jackie Chase',
            age: 34,
            friend: {
              name: 'Ollie Baker',
              age: 27,
            },

            subRows: [
              {
                name: 'Betsy Meyers',
                age: 74,
                friend: {
                  name: 'Katie Knight',
                  age: 59,
                },
              },
              {
                name: 'Gutierrez Mcintyre',
                age: 30,
                friend: {
                  name: 'Good Patterson',
                  age: 75,
                },
              },
              {
                name: 'Jody Mann',
                age: 48,
                friend: {
                  name: 'Ellis Jenkins',
                  age: 70,
                },
              },
              {
                name: 'Edith Hubbard',
                age: 38,
                friend: {
                  name: 'Webb Kent',
                  age: 72,
                },
              },
            ],
          },
          {
            name: 'Wendi Norris',
            age: 48,
            friend: {
              name: 'Whitfield House',
              age: 20,
            },

            subRows: [
              {
                name: 'Wagner Owen',
                age: 33,
                friend: {
                  name: 'Mclean Stevenson',
                  age: 65,
                },
              },
              {
                name: 'Maldonado Rose',
                age: 84,
                friend: {
                  name: 'Cooper Cash',
                  age: 64,
                },
              },
              {
                name: 'Osborne Graham',
                age: 18,
                friend: {
                  name: 'Peck Guthrie',
                  age: 76,
                },
              },
              {
                name: 'Drake Hartman',
                age: 41,
                friend: {
                  name: 'Stanton Durham',
                  age: 21,
                },
              },
            ],
          },
          {
            name: 'Ferrell Baldwin',
            age: 26,
            friend: {
              name: 'Mcgowan Waller',
              age: 57,
            },

            subRows: [
              {
                name: 'Mattie Lindsay',
                age: 55,
                friend: {
                  name: 'Meagan Mcintosh',
                  age: 44,
                },
              },
              {
                name: 'Hamilton Hooper',
                age: 40,
                friend: {
                  name: 'Welch Harris',
                  age: 29,
                },
              },
              {
                name: 'Schneider Dunlap',
                age: 53,
                friend: {
                  name: 'Darla Wallace',
                  age: 18,
                },
              },
              {
                name: 'Marian Hess',
                age: 69,
                friend: {
                  name: 'Fields Wilcox',
                  age: 22,
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

const allRelevantInputCompontentsForF2 = [
  {
    Header: 'Button',
    id: 'button',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<ButtonDomRef>(props);
      return <Button ref={callbackRef} />;
    },
    interactiveElementName: 'Button',
    tagName: 'ui5-button',
  },
  // {
  //   Header: 'Calendar',
  //   id: 'calendar',
  //   Cell: (props: AnalyticalTableCellInstance) => {
  //     const callbackRef = useF2CellEdit.useCallbackRef<CalendarDomRef>(props);
  //     return <Calendar ref={callbackRef} />;
  //   },
  //   interactiveElementName: 'Calendar',
  //   tagName: 'ui5-calendar',
  // },
  {
    Header: 'CheckBox',
    id: 'check-box',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<CheckBoxDomRef>(props);
      return <CheckBox ref={callbackRef} />;
    },
    interactiveElementName: 'CheckBox',
    tagName: 'ui5-checkbox',
  },
  // {
  //   Header: 'ColorPicker',
  //   id: 'color-picker',
  //   Cell: (props: AnalyticalTableCellInstance) => {
  //     const callbackRef = useF2CellEdit.useCallbackRef<ColorPickerDomRef>(props);
  //     return <ColorPicker ref={callbackRef} />;
  //   },
  //   interactiveElementName: 'ColorPicker',
  //   tagName: 'ui5-color-picker',
  // },
  {
    Header: 'ComboBox',
    id: 'combo-box',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<ComboBoxDomRef>(props);
      return <ComboBox ref={callbackRef} />;
    },
    interactiveElementName: 'ComboBox',
    tagName: 'ui5-combobox',
  },
  {
    Header: 'DatePicker',
    id: 'date-picker',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<DatePickerDomRef>(props);
      return <DatePicker ref={callbackRef} />;
    },
    interactiveElementName: 'DatePicker',
    tagName: 'ui5-date-picker',
  },
  {
    Header: 'DateRangePicker',
    id: 'date-range-picker',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<DateRangePickerDomRef>(props);
      return <DateRangePicker ref={callbackRef} />;
    },
    interactiveElementName: 'DateRangePicker',
    tagName: 'ui5-daterange-picker',
  },
  {
    Header: 'DateTimePicker',
    id: 'date-time-picker',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<DateTimePickerDomRef>(props);
      return <DateTimePicker ref={callbackRef} />;
    },
    interactiveElementName: 'DateTimePicker',
    tagName: 'ui5-datetime-picker',
  },
  {
    Header: 'DynamicDateRange',
    id: 'dynamic-date-range',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<DynamicDateRangeDomRef>(props);
      return <DynamicDateRange ref={callbackRef} />;
    },
    interactiveElementName: 'DynamicDateRange',
    tagName: 'ui5-dynamic-date-range',
  },
  {
    Header: 'FileUploader',
    id: 'file-uploader',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<FileUploaderDomRef>(props);
      return <FileUploader ref={callbackRef} />;
    },
    interactiveElementName: 'FileUploader',
    tagName: 'ui5-file-uploader',
  },
  {
    Header: 'Icon',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<IconDomRef>(props);
      return <Icon name="employee" mode="Interactive" ref={callbackRef} />;
    },
    interactiveElementName: 'Icon',
  },
  {
    Header: 'Input',
    id: 'input',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<InputDomRef>(props);
      return <Input ref={callbackRef} />;
    },
    interactiveElementName: 'Input',
    tagName: 'ui5-input',
  },
  {
    Header: 'MessageViewButton',
    id: 'message-view-button',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<MessageViewButtonDomRef>(props);
      return <MessageViewButton ref={callbackRef} />;
    },
    interactiveElementName: 'MessageViewButton',
    tagName: 'ui5-message-view-button',
  },
  {
    Header: 'MultiComboBox',
    id: 'multi-combo-box',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<MultiComboBoxDomRef>(props);
      return <MultiComboBox ref={callbackRef} />;
    },
    interactiveElementName: 'MultiComboBox',
    tagName: 'ui5-multi-combobox',
  },
  {
    Header: 'MultiInput',
    id: 'multi-input',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<MultiInputDomRef>(props);
      return <MultiInput ref={callbackRef} />;
    },
    interactiveElementName: 'MultiInput',
    tagName: 'ui5-multi-input',
  },
  {
    Header: 'RadioButton',
    id: 'radio-button',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<RadioButtonDomRef>(props);
      return <RadioButton ref={callbackRef} />;
    },
    interactiveElementName: 'RadioButton',
    tagName: 'ui5-radio-button',
  },
  // {
  //   Header: 'RangeSlider',
  //   id: 'range-slider',
  //   Cell: (props: AnalyticalTableCellInstance) => {
  //     const callbackRef = useF2CellEdit.useCallbackRef<RangeSliderDomRef>(props);
  //     return <RangeSlider ref={callbackRef} />;
  //   },
  //   interactiveElementName: 'RangeSlider',
  //   tagName: 'ui5-range-slider',
  // },
  {
    Header: 'RatingIndicator',
    id: 'rating-indicator',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<RatingIndicatorDomRef>(props);
      return <RatingIndicator ref={callbackRef} />;
    },
    interactiveElementName: 'RatingIndicator',
    tagName: 'ui5-rating-indicator',
  },
  {
    Header: 'Search',
    id: 'search',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<SearchDomRef>(props);
      return <Search ref={callbackRef} />;
    },
    interactiveElementName: 'Search',
    tagName: 'ui5-search-field',
  },
  {
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
    tagName: 'ui5-segmented-button',
  },
  {
    Header: 'Select',
    id: 'select',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<SelectDomRef>(props);
      return <Select ref={callbackRef} />;
    },
    interactiveElementName: 'Select',
    tagName: 'ui5-select',
  },
  {
    Header: 'Slider',
    id: 'slider',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<SliderDomRef>(props);
      return <Slider ref={callbackRef} />;
    },
    interactiveElementName: 'Slider',
    tagName: 'ui5-slider',
  },
  {
    Header: 'SplitButton',
    id: 'split-button',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<SplitButtonDomRef>(props);
      return <SplitButton ref={callbackRef} />;
    },
    interactiveElementName: 'SplitButton',
    tagName: 'ui5-split-button',
  },
  {
    Header: 'StepInput',
    id: 'step-input',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<StepInputDomRef>(props);
      return <StepInput ref={callbackRef} />;
    },
    interactiveElementName: 'StepInput',
    tagName: 'ui5-step-input',
  },
  {
    Header: 'Switch',
    id: 'switch',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<SwitchDomRef>(props);
      return <Switch ref={callbackRef} />;
    },
    interactiveElementName: 'Switch',
    tagName: 'ui5-switch',
  },
  {
    Header: 'TextArea',
    id: 'text-area',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<TextAreaDomRef>(props);
      return <TextArea ref={callbackRef} />;
    },
    interactiveElementName: 'TextArea',
    tagName: 'ui5-textarea',
  },
  {
    Header: 'TimePicker',
    id: 'time-picker',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<TimePickerDomRef>(props);
      return <TimePicker ref={callbackRef} />;
    },
    interactiveElementName: 'TimePicker',
    tagName: 'ui5-time-picker',
  },
  {
    Header: 'ToggleButton',
    id: 'toggle-button',
    Cell: (props: AnalyticalTableCellInstance) => {
      const callbackRef = useF2CellEdit.useCallbackRef<ToggleButtonDomRef>(props);
      return <ToggleButton ref={callbackRef} />;
    },
    interactiveElementName: 'ToggleButton',
    tagName: 'ui5-toggle-button',
  },
  // {
  //   Header: 'Tokenizer',
  //   id: 'tokenizer',
  //   Cell: (props: AnalyticalTableCellInstance) => {
  //     const callbackRef = useF2CellEdit.useCallbackRef<TokenizerDomRef>(props);
  //     return <Tokenizer ref={callbackRef} />;
  //   },
  //   interactiveElementName: 'Tokenizer',
  //   tagName: 'ui5-tokenizer',
  // },
  // {
  //   Header: 'UploadCollection',
  //   id: 'upload-collection',
  //   Cell: (props: AnalyticalTableCellInstance) => {
  //     const callbackRef = useF2CellEdit.useCallbackRef<UploadCollectionDomRef>(props);
  //     return <UploadCollection ref={callbackRef} />;
  //   },
  //   interactiveElementName: 'UploadCollection',
  //   tagName: 'ui5-upload-collection',
  // },
  // {
  //   Header: 'VariantManagement',
  //   id: 'variant-management',
  //   Cell: (props: AnalyticalTableCellInstance) => {
  //     const callbackRef = useF2CellEdit.useCallbackRef<VariantManagementDomRef>(props);
  //     return <VariantManagement ref={callbackRef} />;
  //   },
  //   interactiveElementName: 'VariantManagement',
  //   tagName: 'ui5-variant-management',
  // },
];
