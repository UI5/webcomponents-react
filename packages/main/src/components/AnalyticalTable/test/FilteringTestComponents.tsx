import { useEffect, useMemo, useRef } from 'react';
import { getUi5TagWithSuffix } from '../../../internal/utils.js';
import { Popover } from '../../../webComponents/Popover/index.js';
import type { PopoverDomRef } from '../../../webComponents/Popover/index.js';
import { AnalyticalTable } from '../index.js';
import type { AnalyticalTableColumnDefinition } from '../types/index.js';
import { data as defaultData } from './test-utils/data.js';

/**
 * Header-menu mechanics: without `sortable`/`filterable`/`groupable`, the column
 * header has no `aria-haspopup="menu"` and clicking it is a no-op. With
 * `sortable`, the Name column opens the menu; the Age column has
 * `disableSortBy`/`disableFilters`/`disableGroupBy` so it has no menu indicator
 * and clicking it closes any open menu.
 */
interface HeaderMenuMechanicsProps {
  withSortable?: boolean;
}

const headerMenuColumns: AnalyticalTableColumnDefinition[] = [
  { Header: 'Name', accessor: 'name' },
  {
    Header: 'Age',
    accessor: 'age',
    disableGroupBy: true,
    disableFilters: true,
    disableSortBy: true,
  },
];

export const FilteringHeaderMenuMechanicsTestComp = ({ withSortable = false }: HeaderMenuMechanicsProps) => {
  return <AnalyticalTable data={defaultData} columns={headerMenuColumns} sortable={withSortable} />;
};

/**
 * Default filter UI: with `filterable`, opening the Name column header opens
 * the menu containing the default filter input. Typing in that input filters
 * rows. Clearing the input restores them. Asserts the round-trip from menu
 * open → filter input → filtered body rows.
 */
export const FilteringDefaultFilterInputTestComp = () => {
  const data = useMemo(() => [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Carol' }, { name: 'Alex' }], []);
  const columns = useMemo<AnalyticalTableColumnDefinition[]>(() => [{ Header: 'Name', accessor: 'name' }], []);
  return <AnalyticalTable data={data} columns={columns} filterable />;
};

/**
 * Custom column-level `Popover`: when a column defines its own `Popover`, the
 * default header menu is bypassed and only the custom popover renders. Useful
 * for entirely custom filter UIs.
 */
const customPopoverColumns: AnalyticalTableColumnDefinition[] = [
  { Header: 'Name', accessor: 'name' },
  {
    Header: 'Custom Popover',
    accessor: 'age',
    Popover: (instance) => {
      const ref = useRef<PopoverDomRef>(null);
      const { popoverProps } = instance;
      const { setOpen, openerRef } = popoverProps;

      useEffect(() => {
        if (ref.current && openerRef.current) {
          void customElements.whenDefined(getUi5TagWithSuffix('ui5-popover')).then(() => {
            if (ref.current && openerRef.current) {
              ref.current.opener = openerRef.current;
              ref.current.open = true;
            }
          });
        }
      }, []);

      return (
        <Popover
          ref={ref}
          data-testid="popover"
          onClose={() => {
            setOpen(false);
          }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            Close Popover
          </button>
        </Popover>
      );
    },
  },
];

export const FilteringCustomPopoverTestComp = () => {
  return <AnalyticalTable data={defaultData} columns={customPopoverColumns} sortable />;
};
