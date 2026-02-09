import{j as e}from"./iframe-Btp5V8Z0.js";import{useMDXComponents as i}from"./index-BiuvjkCM.js";import{I as a,F as m}from"./CommandsAndQueries-ytOuH94-.js";import{M as s,C as p}from"./blocks-3iq6MjE7.js";import"./Tag-BV9BFAPZ.js";import"./index-CP5vX4Iw.js";import{C as l}from"./ControlsWithNote-SxhoP9GN.js";import"./copy-BjvlOXfT.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BnbIzEo_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-MTTfL1A6.js";import"./index-DfXM2ykx.js";import"./index-dzmgvIYj.js";import"./Link-DrqLISlX.js";import"./index-jYjWydQt.js";import"./index-4wRER8Ea.js";import"./index-cFxIHlDH.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BOasFR1W.js";import"./addCustomCSSWithScoping-BYe08cUl.js";import"./index-Byqgf8K2.js";import"./information-D6meyH0P.js";import"./sys-enter-2-DFu1S1AE.js";import"./alert-Ble7Zr5g.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDRO25a3.js";import"./delete-DkVxgj5N.js";import"./settings-B8j3pPLA.js";import"./NoData-Du8GcV6i.js";import"./IllustratedMessage-BCiJ057a.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-D6qm1nzI.js";import"./index-BujEWK6T.js";import"./index-DYG2Vdb4.js";import"./slim-arrow-down-j9pUzMGy.js";import"./Input-aWxLYUOH.js";import"./ResponsivePopoverCommon.css-BQy8rUfs.js";import"./ValueStateMessage.css-LOPut24L.js";import"./Suggestions.css-CYbXagSM.js";import"./ListBoxItemGroupTemplate-CAvECdcE.js";import"./ComboBoxItemGroup-BqcdpAL3.js";import"./ListItemBaseTemplate--uvy-kc0.js";import"./Token-sB_rM26o.js";import"./ScrollEnablement-B1RfGkn3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DKFwa_4E.js";import"./ToggleButton-DKEo7U1V.js";import"./SuggestionItem-zI-P11G7.js";import"./index-ogcyTCWN.js";import"./Option-DXRWtWSV.js";import"./index-C9V8CTKB.js";import"./SegmentedButton-DYA5jfhl.js";import"./index-evKF2db_.js";import"./Select-CxUvCZuJ.js";import"./InvisibleMessage-BApXsmDb.js";import"./slim-arrow-down-DVukQiW-.js";import"./index-CmIpi4Rb.js";import"./index-Bp86dvN4.js";import"./index-Pmf_BpVu.js";import"./index-B5ZwNjp_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-l9YCafK6.js";import"./group-2-znhZwlOC.js";import"./sort-descending-BcNVNZRA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DZS5vz4t.js";import"./utils-KxVQ4L7v.js";import"./index-DDKkq_Id.js";import"./index-DR-CaoyZ.js";import"./index-BOghOFF-.js";import"./navigation-down-arrow-BVesL-Rd.js";import"./navigation-right-arrow-CoaCyhr_.js";import"./navigation-right-arrow-CG1gauat.js";import"./useCurrentTheme-B6Ee2Jvq.js";import"./index-Do2i3zOr.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-H0EZaAzq.js";import"./paper-plane-DuZ0ORth.js";import"./index-XGPworLT.js";import"./less-Cbt4luUN.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
