import{n as e}from"./chunk-zsgVPwQN.js";import{Jm as t}from"./iframe-CYHA5bK3.js";import{r as n}from"./react-Dkna-1WJ.js";import{_ as r,l as i,o as a,p as o,t as s,u as c}from"./components-cGRmDsHx.js";import{_ as l,d as u,r as d}from"./blocks-CwKyPBt0.js";import{PluginOrderedMultiSort as f,t as p}from"./AnalyticalTableHooks.stories-DHB1yNij.js";function m(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{title:`Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort`}),`
`,(0,g.jsx)(t.h1,{id:`analyticaltable-plugin-useorderedmultisort`,children:`AnalyticalTable Plugin: useOrderedMultiSort`}),`
`,(0,g.jsx)(i,{moduleName:`useOrderedMultiSort`,packageName:`@ui5/webcomponents-react/AnalyticalTableHooks`}),`
`,(0,g.jsxs)(t.p,{children:[`With the `,(0,g.jsx)(t.code,{children:`useOrderedMultiSort`}),` it's possible to define the sorting priority if multi-sort is enabled for the respective columns (`,(0,g.jsx)(t.code,{children:`enableMultiSort: true`}),`).`]}),`
`,(0,g.jsx)(t.p,{children:`It receives one parameter that defines the sorting priority by the column id.`}),`
`,(0,g.jsxs)(t.ul,{children:[`
`,(0,g.jsxs)(t.li,{children:[(0,g.jsx)(t.code,{children:`orderedIds: string[]`}),`: Defines the sort priority when sorting by multiple columns, starting with the first column ID.`]}),`
`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Note:`}),` Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column.`]}),`
`,(0,g.jsx)(t.h2,{id:`example`,children:`Example`}),`
`,(0,g.jsx)(d,{sourceState:`none`,of:f}),`
`,(0,g.jsx)(t.h3,{id:`current-parameter`,children:`Current Parameter`}),`
`,(0,g.jsx)(o,{of:f,hideHTMLPropsNote:!0,include:[`orderedIds`]}),`
`,(0,g.jsx)(t.h3,{id:`code`,children:`Code`}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-jsx`,children:`const columns = [
  {
    Header: 'Name',
    accessor: 'name',
    enableMultiSort: true
  },
  {
    Header: 'Age',
    accessor: 'age',
    enableMultiSort: true
  },
  {
    Header: 'Name 2',
    accessor: 'name2',
    enableMultiSort: true
  },
  {
    Header: 'Age 2',
    accessor: 'age2',
    enableMultiSort: true
  }
];
const data = [
  { name: 'Peter', age: 40, name2: 'Alissa', age2: 18 },
  { name: 'Kristen', age: 40, name2: 'Randolph', age2: 21 },
  { name: 'Peter', age: 30, name2: 'Rose', age2: 90 },
  { name: 'Peter', age: 70, name2: 'Rose', age2: 22 },
  { name: 'Kristen', age: 60, name2: 'Willis', age2: 80 },
  { name: 'Kristen', age: 20, name2: 'Alissa', age2: 80 },
  { name: 'Graham', age: 40, name2: 'Alissa', age2: 80 },
  { name: 'Peter', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Rose', age2: 26 },
  { name: 'Graham', age: 65, name2: 'Willis', age2: 26 },
  { name: 'Graham', age: 62, name2: 'Willis', age2: 26 }
];
const orderedIds = ['name', 'name2', 'age', 'age2'];
const tableHooks = [useOrderedMultiSort(orderedIds)]; // should be memoized
const TableComponent = () => {
  return (
    <AnalyticalTable
      columns={columns}
      data={data}
      sortable
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,(0,g.jsx)(a,{})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=t(),r(),c(),l(),s(),p()}))();export{h as default};