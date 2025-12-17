import{j as e}from"./iframe-BHL3KP3B.js";import{useMDXComponents as i}from"./index-CV9KcB1M.js";import{I as a,F as m}from"./CommandsAndQueries-D7saeET0.js";import{M as s,C as p}from"./blocks-CBYdh6wr.js";import"./Tag-RhCig6AF.js";import"./index-JS1GcHzF.js";import{C as l}from"./ControlsWithNote-DAxpK-CA.js";import"./copy-Cx_IXaYw.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BrfvRfms.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BgzyxERN.js";import"./index-Dx-FLQII.js";import"./index-Dsg6DYtH.js";import"./Link-ea-shbEJ.js";import"./index-lfVzLD84.js";import"./index-Dbs5lixu.js";import"./index-DToQg2Hs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Co81iMbm.js";import"./addCustomCSSWithScoping-DQk-eQ1n.js";import"./index-JDEJOPjW.js";import"./information-DJM95Ys0.js";import"./sys-enter-2-XSR4RGqi.js";import"./alert-D5dcqe2K.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CojRdeJq.js";import"./delete-DQMuq08Z.js";import"./settings-DrCR5OyI.js";import"./NoData-AhmlI4en.js";import"./IllustratedMessage-DSSeRQPL.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-gLj6jJ_l.js";import"./index-CEQhLUHx.js";import"./index-Ccc7p32P.js";import"./slim-arrow-down-DJurD9QK.js";import"./Input-BbifX6GM.js";import"./ResponsivePopoverCommon.css-qV0tN2P6.js";import"./ValueStateMessage.css-BeeYtMkq.js";import"./Suggestions.css-DRhiS2Sl.js";import"./ListBoxItemGroupTemplate-Csghie_Z.js";import"./ComboBoxItemGroup-CNXniF9s.js";import"./ListItemBaseTemplate-CXls01q_.js";import"./Token-Bt8xyw-t.js";import"./ScrollEnablement-CuhBmX-D.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CWGtaCZo.js";import"./ToggleButton-G063PX5t.js";import"./SuggestionItem-BdZmVO4W.js";import"./index-DvuvrS2e.js";import"./Option-Bj-jZedt.js";import"./index-BDmA0N-r.js";import"./SegmentedButton-tZwV5m8H.js";import"./index-DFD0Bxod.js";import"./Select-B47H5g2r.js";import"./InvisibleMessage-C_y6XL_X.js";import"./slim-arrow-down-6hMlGarM.js";import"./index-CnHmjf1H.js";import"./index-BxtwwsD_.js";import"./index-BF8LBvPs.js";import"./index-Dvhp9tec.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DLs9MXxX.js";import"./group-2-C9nYhH-K.js";import"./sort-descending-B_h7sVML.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cf8R0xRs.js";import"./utils-DvyWIthn.js";import"./index-BvVS_2DG.js";import"./index-Bnk6-Kur.js";import"./index-BGVW-O6b.js";import"./navigation-down-arrow-B5ni_-5b.js";import"./navigation-right-arrow-D9N8Vo-q.js";import"./navigation-right-arrow-fl9ibqyt.js";import"./useCurrentTheme-B4bYUvCO.js";import"./index-DD7xwy8l.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CbHzpQG_.js";import"./paper-plane-C9J4P2OV.js";import"./index-D6_mBUAF.js";import"./less-BlsOk5YZ.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
