import{j as e}from"./iframe-e2ulr1yw.js";import{useMDXComponents as i}from"./index-PtYZPZtM.js";import{I as a,F as m}from"./CommandsAndQueries-Do207XX8.js";import{M as s,C as p}from"./blocks-Cdk7qnv2.js";import"./Tag-CbLqF2IE.js";import"./index-Eon1qDJA.js";import{C as l}from"./ControlsWithNote-C1zRYBYO.js";import"./copy-CcaF1jLX.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B5IJLmV9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-svxMDckn.js";import"./index-DgxvJH02.js";import"./index-Cqf-Pfp_.js";import"./Link-CLFq5zdq.js";import"./index-DYD2ksj7.js";import"./index-CEhzVLt4.js";import"./index-BfxPgEEU.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ri6qBofk.js";import"./addCustomCSSWithScoping-I9DyZrRa.js";import"./index-BSw3xQau.js";import"./information-BWwLhz3O.js";import"./sys-enter-2-gpB0Ga9p.js";import"./alert-DlKAiOO0.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-3jDDYMp1.js";import"./delete-gpEUb-9D.js";import"./settings-6a9Tcwi4.js";import"./NoData-Bc7e_DmL.js";import"./IllustratedMessage-wF_b0eFg.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-BnS8M7QN.js";import"./index-COvdbf1_.js";import"./index-C4o8tm0a.js";import"./slim-arrow-down-87FbM80e.js";import"./Input-BV-MxHCg.js";import"./ResponsivePopoverCommon.css-Bd-J_F0o.js";import"./ValueStateMessage.css-DtD4vioP.js";import"./Suggestions.css-CgOY0hpB.js";import"./ListBoxItemGroupTemplate-DF9OoaBX.js";import"./ComboBoxItemGroup-DyFNSY0u.js";import"./ListItemBaseTemplate-DnwALruD.js";import"./Token-Mt_jrKze.js";import"./ScrollEnablement-DRdFoZEe.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Zbea8WPI.js";import"./ToggleButton-Cdb7GkdR.js";import"./SuggestionItem-D97oFBk5.js";import"./index-DHKaLTeQ.js";import"./Option-iPEJaQYF.js";import"./index-BN3IxYuD.js";import"./SegmentedButton-Bp3L8kza.js";import"./index-3C9SeEbV.js";import"./Select-C17UaO3k.js";import"./InvisibleMessage-C7K7N7yp.js";import"./slim-arrow-down-BTy2_7_G.js";import"./index-C4YzeeGG.js";import"./index-C-0YmZNW.js";import"./index-DRgjkRpO.js";import"./index-QUiaryyk.js";import"./IconDesign-DXd8PPVF.js";import"./filter-dc6_3EFU.js";import"./group-2-Bdgfi4eM.js";import"./sort-descending-C3r-uppm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UzExfabf.js";import"./utils-93MrREGq.js";import"./index-DX7sH2kB.js";import"./index-BEEBpZeh.js";import"./index-BYqC9MtK.js";import"./navigation-down-arrow-CmGlfloc.js";import"./navigation-right-arrow-Dwj_O4Hl.js";import"./navigation-right-arrow-BzujGep6.js";import"./useCurrentTheme-Bu36broM.js";import"./index-BplRAEow.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cmkb72EN.js";import"./paper-plane-DnlmvP9j.js";import"./index-Bz4A25sA.js";import"./less-WXggIQVd.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(a,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(p,{sourceState:"none",of:o}),`
`,e.jsx(t.h3,{id:"current-parameter",children:"Current Parameter"}),`
`,e.jsx(l,{of:o,hideHTMLPropsNote:!0,include:["orderedIds"]}),`
`,e.jsx(t.h3,{id:"code",children:"Code"}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-jsx",children:`const columns = [
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
`,e.jsx(m,{})]})}function Ke(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Ke as default};
