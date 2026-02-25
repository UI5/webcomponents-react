import{j as e}from"./iframe-CtC7gYmF.js";import{useMDXComponents as i}from"./index-Di_URU-1.js";import{I as a,F as m}from"./CommandsAndQueries-DJ8rBoed.js";import{M as s,C as p}from"./blocks-mn43RK2l.js";import"./Tag-DL1jc8MZ.js";import"./index-BQgIK84O.js";import{C as l}from"./ControlsWithNote-VDJmcR8g.js";import"./copy-qYhvVcV8.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CSxm7AZR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bc0i7q2T.js";import"./index-BjvlOMJE.js";import"./index-C6r9Z_qm.js";import"./Link-DC3Ks00x.js";import"./index-D2-G6hnA.js";import"./index-DbYbEtFi.js";import"./index-BCFTf5Mq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVmORIKm.js";import"./addCustomCSSWithScoping-u1_Fcso4.js";import"./index-B89psySH.js";import"./information-CFH6-U84.js";import"./sys-enter-2-DcKU3U88.js";import"./alert-BgZS6-Ve.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DM5Bmgcy.js";import"./delete-D28JJrjV.js";import"./settings-B_eYDXqs.js";import"./NoData-BEFoMZwu.js";import"./IllustratedMessage-Bm09ehOx.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-zixt0yJO.js";import"./index-BkEdfFg4.js";import"./index-CXyI2saw.js";import"./slim-arrow-down-Dl0Mj9NF.js";import"./Input-BzurqpwY.js";import"./ResponsivePopoverCommon.css-CWluabdp.js";import"./ValueStateMessage.css-DobtBfbj.js";import"./Suggestions.css-C-jhG9YF.js";import"./ListBoxItemGroupTemplate-l7Ysqerl.js";import"./ComboBoxItemGroup-Catkrecl.js";import"./ListItemBaseTemplate-Pa0nc5BR.js";import"./Token-Do6RzTo7.js";import"./ScrollEnablement-2beWlGZ4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-x5B2lMAL.js";import"./ToggleButton-5L56EMme.js";import"./SuggestionItem-OrSC-_5m.js";import"./index-B7-D_cvI.js";import"./Option-BKqKQXEH.js";import"./index-foRMWjrc.js";import"./SegmentedButton-BiIuRVw0.js";import"./index-BHX6355d.js";import"./Select-o8dTzY27.js";import"./InvisibleMessage-DuKRASmz.js";import"./slim-arrow-down-DfNNSKUn.js";import"./index-C-ofIC86.js";import"./index-D6W6u5Ex.js";import"./index-CDXZI8f7.js";import"./index-kkBKNTX1.js";import"./IconDesign-DXd8PPVF.js";import"./filter-N08RslCJ.js";import"./group-2-D9UucbkH.js";import"./sort-descending-mxiKFDhG.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CCsq8n3w.js";import"./utils-CVe0TikA.js";import"./index-FXFh3j7m.js";import"./index-avy9GSV1.js";import"./index-DuYS0cYr.js";import"./navigation-down-arrow-BA6MTBoF.js";import"./navigation-right-arrow-D8GdMajc.js";import"./navigation-right-arrow-0LEru9_G.js";import"./useCurrentTheme-BD4ipeqR.js";import"./index-CuyOYIq5.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-oSnS9KDP.js";import"./paper-plane-BYNNQr-L.js";import"./index-4w0RIoWt.js";import"./less-DxqQgulo.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
