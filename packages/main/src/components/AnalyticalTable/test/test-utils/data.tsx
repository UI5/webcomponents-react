import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import type { AnalyticalTableColumnDefinition } from '../../types/index.js';

/**
 * Generates a synthetic dataset of `count` rows with `name`, `age`, and a nested `friend` object.
 * Mirrors the `generateMoreData` helper from `AnalyticalTable.cy.tsx`.
 */
export const generateMoreData = (count: number) => {
  return new Array(count).fill('').map((_item, index) => ({
    name: `Name-${index}`,
    age: index,
    friend: {
      name: `FriendName-${index}`,
      age: index + 10,
    },
  }));
};

/**
 * Default columns used across most AnalyticalTable tests. Includes:
 * - A simple accessor (`name`) with `headerTooltip`
 * - A simple accessor (`age`)
 * - A nested accessor (`friend.name`)
 * - A custom Header component with `headerLabel`
 */
export const columns: AnalyticalTableColumnDefinition[] = [
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
    accessor: 'friend.name',
  },
  {
    Header: () => <span>Friend Age</span>,
    accessor: 'friend.age',
    headerLabel: 'Custom Label',
  },
];

/**
 * Default dataset (4 rows) used across most AnalyticalTable tests. Includes one row with
 * `status` and `navigation` fields set to ValueState for highlight-row testing.
 */
export const data = [
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
