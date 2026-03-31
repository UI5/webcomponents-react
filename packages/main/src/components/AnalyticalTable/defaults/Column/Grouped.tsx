import iconNavDownArrow from '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import iconNavRightArrow from '@ui5/webcomponents-icons/dist/navigation-right-arrow.js';
import { clsx } from 'clsx';
import { Icon } from '../../../../webComponents/Icon/index.js';
import type { CellInstance } from '../../types/index.js';
import { RenderColumnTypes } from '../../types/index.js';

export const Grouped = (props: CellInstance) => {
  const { cell, row, webComponentsReactProperties } = props;
  const { translatableTexts, classes } = webComponentsReactProperties;

  const { column: _0, ...attr } = row.getToggleRowExpandedProps({ column: cell.column });

  return (
    <>
      <button
        {...attr}
        className={clsx(attr.className, classes.expandGroupButton)}
        title={row.isExpanded ? translatableTexts.collapseNodeA11yText : translatableTexts.expandNodeA11yText}
        aria-label={row.isExpanded ? translatableTexts.collapseNodeA11yText : translatableTexts.expandNodeA11yText}
        tabIndex={-1}
      >
        <Icon name={row.isExpanded ? iconNavDownArrow : iconNavRightArrow} className={classes.expandGroupIcon} />
      </button>
      {cell.render(RenderColumnTypes.Cell)}
    </>
  );
};

Grouped.displayName = 'GroupedCellContent';
