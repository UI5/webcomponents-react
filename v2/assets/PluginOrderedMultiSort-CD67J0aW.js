import{j as e}from"./iframe-eDai9lNh.js";import{useMDXComponents as i}from"./index-DWaT93aF.js";import{I as a,F as m}from"./CommandsAndQueries-DdbJ0tNe.js";import{M as s,C as p}from"./blocks-D3QMf_Nj.js";import"./Tag-BEY0r0J2.js";import"./index-CzhxwyLf.js";import{C as l}from"./ControlsWithNote-PgUKowHt.js";import"./copy-D01F59bh.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CWUcTBnU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cch7pNGQ.js";import"./index-lMWu8Jr6.js";import"./index-6ZlW-CM4.js";import"./Link-ZNB4Pnda.js";import"./index-DjL8CZ6c.js";import"./index--RcUy8xr.js";import"./index-asMoAFqv.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BbjGEabH.js";import"./addCustomCSSWithScoping-Cxdlbo61.js";import"./index-CfUZ5M--.js";import"./information-DqhxapEK.js";import"./sys-enter-2-Cyu-GNYt.js";import"./alert-p2WK74VT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C8v7FfP_.js";import"./delete-CY-VLVEq.js";import"./settings-C0rZHhe-.js";import"./NoData-UN9eJyec.js";import"./IllustratedMessage-DYcYHt7h.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-CD-7g8gm.js";import"./index-BTzKR5qJ.js";import"./index-go4C0tgo.js";import"./slim-arrow-down-kG6DCveM.js";import"./Input-Bqwo-D_6.js";import"./ResponsivePopoverCommon.css-Cub4Z5jf.js";import"./ValueStateMessage.css-DUX2b4_-.js";import"./Suggestions.css-CJbHgiSk.js";import"./ListBoxItemGroupTemplate-DNewmAce.js";import"./ComboBoxItemGroup-6nYAGsza.js";import"./ListItemBaseTemplate-CGHSadDi.js";import"./Token-BFth0cqr.js";import"./ScrollEnablement-CQYct29a.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D8y3n4Wp.js";import"./ToggleButton-TbU_TYbJ.js";import"./SuggestionItem-Zqcf61Si.js";import"./index-CAHo1qxD.js";import"./Option-s7hK9Co0.js";import"./index-CSrE-u2R.js";import"./SegmentedButton-CP9Hx__l.js";import"./index-Cfn4eBpH.js";import"./Select-Cggb-coC.js";import"./InvisibleMessage-CerZda4F.js";import"./slim-arrow-down-DXROzh0h.js";import"./index-IBifB5M4.js";import"./index-CCqTjS-e.js";import"./index-CUAqmRcs.js";import"./IconDesign-DXd8PPVF.js";import"./filter-StgZWZHS.js";import"./group-2-ClC4Gayj.js";import"./sort-descending-BaJ0iwyz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BMeGntJ3.js";import"./utils-BjMUIUWP.js";import"./index-B8-6hSHC.js";import"./index-D2aXwz5o.js";import"./index-Q2bGr-fD.js";import"./navigation-down-arrow-Bsq7vo40.js";import"./navigation-right-arrow-AG7Z0JW-.js";import"./navigation-right-arrow-DCN3UIyQ.js";import"./useCurrentTheme-Bev_7rJ0.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D8QR7ZaE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BKoibY1H.js";import"./paper-plane-CUDWlEvw.js";import"./index-DbIiH5o6.js";import"./less-DMq8Sa1p.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
