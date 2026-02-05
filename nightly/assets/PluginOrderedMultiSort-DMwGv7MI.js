import{j as e}from"./iframe-DCGZQC_C.js";import{useMDXComponents as i}from"./index-B27pjG1H.js";import{I as a,F as m}from"./CommandsAndQueries-uRcRdUvd.js";import{M as s,C as p}from"./blocks-ByOpH4Vo.js";import"./Tag-DHXPjUHZ.js";import"./index-CslrJvFJ.js";import{C as l}from"./ControlsWithNote-DgUbCW8q.js";import"./copy-Dgi6mZSs.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-bNwjwoKI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LnQjqAbL.js";import"./index-CRLztu5A.js";import"./index-BSyI90IW.js";import"./Link-C5I3pPvS.js";import"./index-C7wZhEOz.js";import"./index-DsknM379.js";import"./index-BrLag0KZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ClYCQmx8.js";import"./addCustomCSSWithScoping-BW6FwlJC.js";import"./index-CEF4Eds-.js";import"./information-C8TQYWMC.js";import"./sys-enter-2-CUVdfxRu.js";import"./alert-Crt2Z2f-.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BJGP320l.js";import"./delete-D-YXkhYz.js";import"./settings-EzBVvhXz.js";import"./NoData-d8zem7tn.js";import"./IllustratedMessage-CnKX9Tk1.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BW9Ke9jf.js";import"./index-CDOC7J2z.js";import"./index-D9AJchIM.js";import"./slim-arrow-down-_wzxHbkz.js";import"./Input-CapffHTa.js";import"./ResponsivePopoverCommon.css-BzrCML3m.js";import"./ValueStateMessage.css-6-sNBRhm.js";import"./Suggestions.css-D-dnhNOf.js";import"./ListBoxItemGroupTemplate-D5dJg0Md.js";import"./ComboBoxItemGroup-DE6F-qf6.js";import"./ListItemBaseTemplate-YV074207.js";import"./Token-DFZIaINO.js";import"./ScrollEnablement-CyCwp6Jo.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C870crTF.js";import"./ToggleButton-KP9Vp9HZ.js";import"./SuggestionItem-Cg4fIDOL.js";import"./index-DGZcKhxL.js";import"./Option-DRy9pd0C.js";import"./index-CZPGpqu0.js";import"./SegmentedButton-C6NTSQG1.js";import"./index-D-t5rWMX.js";import"./Select-CUh8OEwf.js";import"./InvisibleMessage-DhB_OnV_.js";import"./slim-arrow-down-CU9tdlgh.js";import"./index-BF-MYKhN.js";import"./index-BAw1abYZ.js";import"./index-AZB0cmnA.js";import"./index-DxcbSsdx.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BhdveqUE.js";import"./group-2-Bp8JlR3f.js";import"./sort-descending-dnuNk35a.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DY9Skaqg.js";import"./utils-DSLZDD_H.js";import"./index-oHN5vii2.js";import"./index-BAnN4Y-3.js";import"./index-BIvqPmoD.js";import"./navigation-down-arrow-CV-2l1CK.js";import"./navigation-right-arrow-ZUNaJnHK.js";import"./navigation-right-arrow-CnOc_T30.js";import"./useCurrentTheme-GWaqzv3s.js";import"./index-BVvo881U.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-8FzRNE_C.js";import"./paper-plane-BS26Bbh6.js";import"./index-CIEm01bw.js";import"./less-b5IeAnHp.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
