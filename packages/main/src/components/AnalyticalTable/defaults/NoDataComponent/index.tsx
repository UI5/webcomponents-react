import type { AnalyticalTablePropTypes } from '../../types/index.js';

export const DefaultNoDataComponent: AnalyticalTablePropTypes['NoDataComponent'] = (props) => {
  const { noDataText, className, role } = props;
  return (
    <div className={className} data-component-name="AnalyticalTableNoData" role={role}>
      {noDataText}
    </div>
  );
};

DefaultNoDataComponent.displayName = 'DefaultNoDataComponent';
