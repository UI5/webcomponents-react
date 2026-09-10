import { useMemo } from 'react';
import type { AnalyticalTableColumnDefinition } from '../index.js';
import { AnalyticalTable } from '../index.js';

interface Row {
  targetLanguage: string;
  fileName: string;
  status: string;
  missingWork: number;
}

// "finished" pt-BR row comes first on purpose: exposes the first-leaf copy on the ancestor group row.
const data: Row[] = [
  { targetLanguage: 'pt-BR', fileName: 'text3', status: 'finished', missingWork: 3 },
  { targetLanguage: 'pt-BR', fileName: 'text1', status: 'in_progress', missingWork: 5 },
  { targetLanguage: 'pt-BR', fileName: 'text2', status: 'not_started', missingWork: 3 },
  { targetLanguage: 'pt-BR', fileName: 'text4', status: 'not_started', missingWork: 3 },
  { targetLanguage: 'en-US', fileName: 'text1', status: 'finished', missingWork: 3 },
  { targetLanguage: 'en-US', fileName: 'text2', status: 'finished', missingWork: 0 },
];

// `status` is grouped below `targetLanguage`, so its aggregated value is surfaced via the
// Missing-work `Aggregated` renderer (`data-agg-status`) — the status column's own ancestor cell is a placeholder.
export const GroupingAggregationHarness = () => {
  const columns = useMemo<AnalyticalTableColumnDefinition[]>(
    () => [
      { Header: 'Target Language', accessor: 'targetLanguage', width: 200 },
      { Header: 'File Name', accessor: 'fileName', width: 200 },
      {
        Header: 'Status',
        accessor: 'status',
        width: 200,
        aggregate: (_leafValues: string[], aggregatedValues: string[]) => {
          const uniqueValues = new Set(aggregatedValues);
          if (uniqueValues.has('not_started')) {
            return 'not_started';
          }
          if (uniqueValues.has('in_progress')) {
            return 'in_progress';
          }
          return 'finished';
        },
      },
      {
        Header: 'Missing work',
        accessor: 'missingWork',
        width: 200,
        aggregate: 'sum',
        Cell: (props: any) => {
          const isWorkflowFinished = props.cell.row.values.status === 'finished';
          return (
            <span data-testid={`mw-${props.cell.row.id}`} data-agg-status={String(props.cell.row.values.status)}>
              {isWorkflowFinished ? 'all finished' : props.value}
            </span>
          );
        },
        // `Aggregated` reads `row.values.status` — the aggregated grouped value under test.
        Aggregated: (props: any) => {
          const isWorkflowFinished = props.row.values.status === 'finished';
          return (
            <span data-testid={`mw-${props.row.id}`} data-agg-status={String(props.row.values.status)}>
              {isWorkflowFinished ? 'all finished' : props.value}
            </span>
          );
        },
      },
    ],
    [],
  );

  const reactTableOptions = useMemo(
    () => ({
      autoResetGroupBy: false,
      autoResetExpanded: false,
      initialState: { groupBy: ['targetLanguage', 'status'] },
    }),
    [],
  );

  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      groupable
      sortable={false}
      visibleRows={10}
      reactTableOptions={reactTableOptions}
    />
  );
};
