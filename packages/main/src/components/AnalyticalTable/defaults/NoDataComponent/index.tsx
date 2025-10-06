import type { AnalyticalTablePropTypes } from '../../types/index.js';

export const DefaultNoDataComponent: AnalyticalTablePropTypes['NoDataComponent'] = (props) => {
  const { noDataText, className, accessibleRole } = props;
  return (
    <div className={className} data-component-name="AnalyticalTableNoData" role={accessibleRole}>
      {noDataText}
    </div>
  );
};

DefaultNoDataComponent.displayName = 'DefaultNoDataComponent';
