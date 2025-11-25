import{j as e}from"./iframe-LwV4ThFO.js";import{useMDXComponents as i}from"./index-q5DcgXr2.js";import{I as a,F as m}from"./CommandsAndQueries-DPfuXfqc.js";import{M as s,C as p}from"./blocks-Dip3aHJy.js";import"./Tag-By0Vj2CL.js";import"./index-DWh2FbsL.js";import{C as l}from"./ControlsWithNote-ShB3rN3m.js";import"./copy-DMZz3mt-.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-OE4IQayz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dg0Ul4LB.js";import"./index-DO4DjFA6.js";import"./index-SgnU4gKB.js";import"./Link-BYRJUWj7.js";import"./index-D33G3UXY.js";import"./index-wHmvTXkA.js";import"./index-BYce_ve5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4bciS0g0.js";import"./addCustomCSSWithScoping-d025F1t1.js";import"./index-CtGk4fFi.js";import"./information-CKI5p7Rd.js";import"./sys-enter-2-DqN3aKF8.js";import"./alert-D7vNrBhD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-UAK6cQzZ.js";import"./delete-CauzNY6s.js";import"./settings-Cbp-krdL.js";import"./NoData-CGOdrUN8.js";import"./IllustratedMessage-CFJfKJEr.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BsCD8QkQ.js";import"./index-CoSHPRLg.js";import"./index-CDMB05HS.js";import"./slim-arrow-down-WoqU4jL-.js";import"./Input-DOTZG0nG.js";import"./ResponsivePopoverCommon.css-tY7w10PH.js";import"./ValueStateMessage.css-DJKlg9Od.js";import"./Suggestions.css-DRakvl3F.js";import"./ListBoxItemGroupTemplate-milAspIm.js";import"./ComboBoxItemGroup-CrXR4k4L.js";import"./ListItemBaseTemplate-DuvtnBwJ.js";import"./Token-y8RIX3ya.js";import"./ScrollEnablement-D9Zcstlh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BtDMm1v7.js";import"./ToggleButton-RIWtYPbc.js";import"./SuggestionItem-DyYlmNjM.js";import"./index-DIRV_TxT.js";import"./Option-Dkc0uo7W.js";import"./index-DGmo98C5.js";import"./SegmentedButton-CZr2foPu.js";import"./index-C2nkR5h8.js";import"./Select-CBP2iwxK.js";import"./InvisibleMessage-BYSN34jq.js";import"./slim-arrow-down-lmv38PwW.js";import"./index-Bft62lZ1.js";import"./index-DoFC_5Xy.js";import"./index-DHEWQlqP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-_Rj7gOsX.js";import"./group-2-C4kBukdN.js";import"./sort-descending-DIujgPym.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BaXB6j-X.js";import"./utils-DK9ffFkD.js";import"./index-R07kLpjv.js";import"./index-CxDk8r6E.js";import"./index-Bi58trhw.js";import"./navigation-down-arrow-BMjcgPuL.js";import"./navigation-right-arrow-troHvNPU.js";import"./navigation-right-arrow-csDoLCuz.js";import"./useCurrentTheme-baH4C2qI.js";import"./IndicationColor-DVw-fSM_.js";import"./index-gurjTWBv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BC_dUgj5.js";import"./paper-plane-B-mGCJfh.js";import"./index-z3X-Jjgi.js";import"./less-D7iDBJTJ.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
