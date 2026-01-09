import{j as e}from"./iframe-Cofg3NYG.js";import{useMDXComponents as i}from"./index-IvWpiXeJ.js";import{I as a,F as m}from"./CommandsAndQueries-84NNvrTK.js";import{M as s,C as p}from"./blocks-2ghgTj-P.js";import"./Tag-BxZYpQJm.js";import"./index-DSsCdZng.js";import{C as l}from"./ControlsWithNote-CBnXwzaw.js";import"./copy-CvrT2nje.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CkrLKY20.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CzRl8rAY.js";import"./index-CuRMS7av.js";import"./index-CBua_waR.js";import"./Link-CQPXWWzt.js";import"./index-DF1YQmtO.js";import"./index-BRqSe85k.js";import"./index-BLGq_g5y.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BCAV-AOe.js";import"./addCustomCSSWithScoping-BkkC1l0R.js";import"./index-DsO0qxxT.js";import"./information-BJciHBvQ.js";import"./sys-enter-2-BCByF-gd.js";import"./alert-bPEScLdE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DMD_db3q.js";import"./delete-TL4LRMCi.js";import"./settings-C1P4No8J.js";import"./NoData-CgchvHoE.js";import"./IllustratedMessage-CMCdUK9z.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-a2MoTWEq.js";import"./index-BonMBjS3.js";import"./index--6KC0JCG.js";import"./slim-arrow-down-Df9CY41D.js";import"./Input-B-vnnKWa.js";import"./ResponsivePopoverCommon.css-9aKfGdr3.js";import"./ValueStateMessage.css-BoHhoqcx.js";import"./Suggestions.css-D5uqg1qj.js";import"./ListBoxItemGroupTemplate-CJbarH5R.js";import"./ComboBoxItemGroup-CgHhWkM2.js";import"./ListItemBaseTemplate-C6tlxy6i.js";import"./Token-D4V_lrT9.js";import"./ScrollEnablement-Bd2IYKOt.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DMSXl_i-.js";import"./ToggleButton-DGX7LzLH.js";import"./SuggestionItem-BxKCWjfv.js";import"./index-ByINFavX.js";import"./Option-BcJSYqub.js";import"./index-97091ejm.js";import"./SegmentedButton-B2GitR0l.js";import"./index-B-yS9GRZ.js";import"./Select-Dl-KXknk.js";import"./InvisibleMessage-DjTJM9Zt.js";import"./slim-arrow-down-B4mJ9D12.js";import"./index-DeuDVa4c.js";import"./index-CqFtG3xH.js";import"./index-B8BWpeh3.js";import"./index-eAFdqwk5.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CnPweenN.js";import"./group-2-ByJcrAU6.js";import"./sort-descending-CEF1xmWI.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CW-WMzJS.js";import"./utils-wxGQZEOP.js";import"./index-ChbRKq5D.js";import"./index-nmwZf_ft.js";import"./index-NtXsw5yB.js";import"./navigation-down-arrow-z6IAtkEY.js";import"./navigation-right-arrow-jTHlmXwB.js";import"./navigation-right-arrow-E61PVxSn.js";import"./useCurrentTheme-Bn9zud42.js";import"./index-BdF0tCbe.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DBrJUf6F.js";import"./paper-plane-y9qmaI4M.js";import"./index-DmRfqt3l.js";import"./less-D1DlvNUe.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
