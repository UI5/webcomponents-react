export interface IChartDimension {
  /**
   * A string containing the path to the dataset key this line should display.
   * Supports object structures by using `'parent.child'`. Can also be a getter.
   *
   * __Note:__ Function accessors are not fully supported by all chart features (e.g. tooltips, event handlers, secondary axis, stack aggregate totals). For full feature support, use string accessors.
   */
  accessor: string | ((dataset: Record<string, unknown>) => string | number);
  /**
   * function will be called for each data label and allows you to format it according to your needs
   */
  formatter?: (value: any, payload?: any) => string | number;
}
