import { useMemo, useState } from 'react';
import { Panel } from '../../../webComponents/Panel/index.js';
import { Tab } from '../../../webComponents/Tab/index.js';
import { TabContainer } from '../../../webComponents/TabContainer/index.js';
import type { AnalyticalTableColumnDefinition } from '../index.js';
import { AnalyticalTable } from '../index.js';

const ROW_COUNT = 155;
const COLUMN_COUNT = 16;

// Reproduces the drifted `scrollOffset` bug: virtual-core drifts it on re-measure and a scroll element that can't
// scroll never reconciles it. The body can't scroll (`visibleRows={data.length}`); the collapsed Panel forces the
// re-measure on reveal.
export const EmptyBlockHideRevealTestComp = () => {
  const [collapsed, setCollapsed] = useState(true);
  const data = useMemo(
    () => Array.from({ length: ROW_COUNT }, (_, index) => ({ name: `Name ${index}`, age: 20 + (index % 40) })),
    [],
  );
  const columns = useMemo<AnalyticalTableColumnDefinition[]>(
    () => [
      { Header: 'Name', accessor: 'name' },
      { Header: 'Age', accessor: 'age' },
    ],
    [],
  );
  return (
    <div style={{ height: '510px', overflow: 'auto', border: '1px solid var(--sapList_BorderColor)' }}>
      <Panel
        headerText="Collapsible Section"
        collapsed={collapsed}
        onToggle={() => setCollapsed((prev) => !prev)}
        noAnimation
      >
        <AnalyticalTable data={data} columns={columns} visibleRows={data.length} minRows={1} />
      </Panel>
    </div>
  );
};

// Same bug on the horizontal axis: the root can't scroll because the columns fit its width; the initially-unselected
// tab forces the re-measure on the tab switch.
export const ColumnsFitWidthHideRevealTestComp = () => {
  const data = useMemo(
    () =>
      Array.from({ length: 20 }, (_, rowIndex) => {
        const row: Record<string, string> = {};
        for (let colIndex = 0; colIndex < COLUMN_COUNT; colIndex++) {
          row[`col${colIndex}`] = `R${rowIndex}C${colIndex}`;
        }
        return row;
      }),
    [],
  );
  const columns = useMemo<AnalyticalTableColumnDefinition[]>(
    () =>
      // No explicit `width` → columns fill the width, so the root can't scroll horizontally.
      Array.from({ length: COLUMN_COUNT }, (_, colIndex) => ({
        Header: `Col ${colIndex}`,
        accessor: `col${colIndex}`,
      })),
    [],
  );
  return (
    // Sized so the columns fill the width at ~60px each (no horizontal scroll).
    <div style={{ width: '1080px' }}>
      <TabContainer>
        <Tab text="Other" selected>
          <div style={{ padding: '1rem' }}>Placeholder tab.</div>
        </Tab>
        <Tab text="Table">
          <AnalyticalTable data={data} columns={columns} />
        </Tab>
      </TabContainer>
    </div>
  );
};
