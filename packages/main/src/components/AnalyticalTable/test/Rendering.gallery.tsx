import NoDataIllustration from '@ui5/webcomponents-fiori/dist/illustrations/NoData.js';
import NoFilterResults from '@ui5/webcomponents-fiori/dist/illustrations/NoFilterResults.js';
import type { ComponentClass, ComponentProps } from 'react';
import { useRef, useState } from 'react';
import { Button } from '../../../webComponents/Button/index.js';
import { IllustratedMessage } from '../../../webComponents/IllustratedMessage/index.js';
import { AnalyticalTable } from '../index.js';
import type { AnalyticalTableDomRef, AnalyticalTablePropTypes } from '../types/index.js';
import { columns, data } from './test-utils/data.js';

/**
 * Basic table mount used to verify the grid renders its header row and data rows.
 */
export const RenderingBasicTestComp = () => {
  return <AnalyticalTable data={data} columns={columns} />;
};

/**
 * Renders the table with the standard set of pass-through HTML props so the spec
 * can assert they land on the outermost element (data-testid, data-*, aria-*, id,
 * className, style.pointerEvents, title, custom attribute).
 */
export const RenderingPassThroughTestComp = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      data-testid="component-to-be-tested"
      data-special-test-prop="data-prop"
      aria-labelledby="aria-prop"
      id="element-id"
      className="thisClassIsUsedForTestingPurposesOnly"
      style={{ pointerEvents: 'none' }}
      title="Tooltip"
      customattribute="true"
    />
  );
};

/**
 * Renders the table with a custom className and inline style to verify both are
 * forwarded to the outermost element.
 */
export const RenderingClassNameStyleTestComp = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      data-testid="at-root"
      className="my-at-class"
      style={{ marginTop: '17px' }}
    />
  );
};

/**
 * Mounts the table with two buttons that invoke methods on the forwarded ref.
 * Used to verify that the ref is attached and that the imperative scroll
 * methods are exposed on the DOM node.
 */
export const RenderingRefForwardingTestComp = () => {
  const tableRef = useRef<AnalyticalTableDomRef>(null);
  return (
    <>
      <Button
        data-testid="scroll-btn"
        onClick={() => {
          tableRef.current?.scrollTo(50);
        }}
      >
        scroll
      </Button>
      <Button
        data-testid="report-btn"
        onClick={() => {
          const ref = tableRef.current;
          if (!ref) {
            return;
          }
          const report = document.getElementById('ref-report');
          if (!report) {
            return;
          }
          report.textContent = [
            typeof ref.scrollTo,
            typeof ref.scrollToItem,
            typeof ref.horizontalScrollTo,
            typeof ref.horizontalScrollToItem,
            ref.tagName,
          ].join('|');
        }}
      >
        report
      </Button>
      <span id="ref-report" data-testid="ref-report" />
      <AnalyticalTable
        data-testid="at"
        ref={tableRef}
        data={data}
        columns={columns}
        visibleRows={1}
        minRows={1}
        style={{ width: '170px' }}
      />
    </>
  );
};

type LoadingMode = 'empty-loading' | 'empty-loading-always-busy' | 'data-loading' | 'data-loading-long-delay';

/**
 * Stateful loading harness: a single mount that switches between the four
 * cypress `Loading & No Data` variants by clicking buttons. This avoids the
 * Playwright CT "already has a React root" limitation that disallows multiple
 * `mount()` calls in the same test.
 */
export const RenderingLoadingTestComp = () => {
  const [mode, setMode] = useState<LoadingMode>('empty-loading');

  const tableProps: Partial<AnalyticalTablePropTypes> = (() => {
    switch (mode) {
      case 'empty-loading':
        return { data: [], loading: true, loadingDelay: 0 };
      case 'empty-loading-always-busy':
        return { data: [], loading: true, loadingDelay: 0, alwaysShowBusyIndicator: true };
      case 'data-loading':
        return { data, loading: true };
      case 'data-loading-long-delay':
        return { data, loading: true, loadingDelay: 50000 };
    }
  })();

  return (
    <>
      <Button data-testid="mode-empty-loading" onClick={() => setMode('empty-loading')}>
        empty-loading
      </Button>
      <Button data-testid="mode-empty-loading-always-busy" onClick={() => setMode('empty-loading-always-busy')}>
        empty-loading-always-busy
      </Button>
      <Button data-testid="mode-data-loading" onClick={() => setMode('data-loading')}>
        data-loading
      </Button>
      <Button data-testid="mode-data-loading-long-delay" onClick={() => setMode('data-loading-long-delay')}>
        data-loading-long-delay
      </Button>
      {/* `key={mode}` remounts the table between modes so the loading-delay timer restarts from
          zero each time — equivalent to cypress's `cy.mount` between assertions. */}
      <AnalyticalTable key={mode} columns={columns} {...(tableProps as AnalyticalTablePropTypes)} />
    </>
  );
};

type NoDataMode = 'default-empty' | 'filtered-empty' | 'custom-no-data';

type NoDataComponentProps = ComponentProps<Exclude<AnalyticalTablePropTypes['NoDataComponent'], ComponentClass<any>>>;

const CustomNoDataComponent = (props: NoDataComponentProps) => {
  return props.noDataReason === 'Filtered' ? (
    <IllustratedMessage role={props.accessibleRole} name={NoFilterResults} />
  ) : (
    <IllustratedMessage role={props.accessibleRole} name={NoDataIllustration} />
  );
};

/**
 * Stateful empty-state harness covering the three no-data variants: default
 * empty copy, filter-no-results copy, and a custom `NoDataComponent`.
 */
export const RenderingNoDataTestComp = () => {
  const [mode, setMode] = useState<NoDataMode>('default-empty');

  return (
    <>
      <Button data-testid="mode-default-empty" onClick={() => setMode('default-empty')}>
        default-empty
      </Button>
      <Button data-testid="mode-filtered-empty" onClick={() => setMode('filtered-empty')}>
        filtered-empty
      </Button>
      <Button data-testid="mode-custom-no-data" onClick={() => setMode('custom-no-data')}>
        custom-no-data
      </Button>
      {mode === 'default-empty' && <AnalyticalTable data={[]} columns={columns} />}
      {mode === 'filtered-empty' && (
        <AnalyticalTable data={data} columns={columns} filterable globalFilterValue="zzz_no_match" />
      )}
      {mode === 'custom-no-data' && (
        <AnalyticalTable data={[]} columns={columns} NoDataComponent={CustomNoDataComponent} />
      )}
    </>
  );
};
