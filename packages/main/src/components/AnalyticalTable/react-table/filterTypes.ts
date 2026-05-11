import type { RowType, FilterFn } from '../types/index.js';

export const text: FilterFn = (rows: RowType[], ids: string[], filterValue: any): RowType[] => {
  return rows.filter((row) => {
    return ids.some((id) => {
      const rowValue = row.values[id];
      return String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase());
    });
  });
};
text.autoRemove = (val: any) => !val;

export const exactText: FilterFn = (rows: RowType[], ids: string[], filterValue: any): RowType[] => {
  return rows.filter((row) => {
    return ids.some((id) => {
      const rowValue = row.values[id];
      return rowValue !== undefined ? String(rowValue).toLowerCase() === String(filterValue).toLowerCase() : true;
    });
  });
};
exactText.autoRemove = (val: any) => !val;

export const exactTextCase: FilterFn = (rows: RowType[], ids: string[], filterValue: any): RowType[] => {
  return rows.filter((row) => {
    return ids.some((id) => {
      const rowValue = row.values[id];
      return rowValue !== undefined ? String(rowValue) === String(filterValue) : true;
    });
  });
};
exactTextCase.autoRemove = (val: any) => !val;

export const includes: FilterFn = (rows: RowType[], ids: string[], filterValue: any): RowType[] => {
  return rows.filter((row) => {
    return ids.some((id) => {
      const rowValue = row.values[id];
      return rowValue.includes(filterValue);
    });
  });
};
includes.autoRemove = (val: any) => !val || !val.length;

export const includesAll: FilterFn = (rows: RowType[], ids: string[], filterValue: any): RowType[] => {
  return rows.filter((row) => {
    return ids.some((id) => {
      const rowValue = row.values[id];
      return rowValue && rowValue.length && filterValue.every((val: any) => rowValue.includes(val));
    });
  });
};
includesAll.autoRemove = (val: any) => !val || !val.length;

export const includesSome: FilterFn = (rows: RowType[], ids: string[], filterValue: any): RowType[] => {
  return rows.filter((row) => {
    return ids.some((id) => {
      const rowValue = row.values[id];
      return rowValue && rowValue.length && filterValue.some((val: any) => rowValue.includes(val));
    });
  });
};
includesSome.autoRemove = (val: any) => !val || !val.length;

export const includesValue: FilterFn = (rows: RowType[], ids: string[], filterValue: any): RowType[] => {
  return rows.filter((row) => {
    return ids.some((id) => {
      const rowValue = row.values[id];
      return filterValue.includes(rowValue);
    });
  });
};
includesValue.autoRemove = (val: any) => !val || !val.length;

export const exact: FilterFn = (rows: RowType[], ids: string[], filterValue: any): RowType[] => {
  return rows.filter((row) => {
    return ids.some((id) => {
      const rowValue = row.values[id];
      return rowValue === filterValue;
    });
  });
};
exact.autoRemove = (val: any) => typeof val === 'undefined';

export const equals: FilterFn = (rows: RowType[], ids: string[], filterValue: any): RowType[] => {
  return rows.filter((row) => {
    return ids.some((id) => {
      const rowValue = row.values[id];

      return rowValue == filterValue;
    });
  });
};
equals.autoRemove = (val: any) => val == null;

export const between: FilterFn = (rows: RowType[], ids: string[], filterValue: any): RowType[] => {
  let [min, max] = filterValue || [];

  min = typeof min === 'number' ? min : -Infinity;
  max = typeof max === 'number' ? max : Infinity;

  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  return rows.filter((row) => {
    return ids.some((id) => {
      const rowValue = row.values[id];
      return rowValue >= min && rowValue <= max;
    });
  });
};
between.autoRemove = (val: any) => !val || (typeof val[0] !== 'number' && typeof val[1] !== 'number');
