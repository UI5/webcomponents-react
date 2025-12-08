import{j as e}from"./iframe-BF6vIVo6.js";import{useMDXComponents as i}from"./index-LfmOxbs8.js";import{I as a,F as m}from"./CommandsAndQueries-BZWG0qBB.js";import{M as s,C as p}from"./blocks-BEVYxzM4.js";import"./Tag-Bbrw4Mg6.js";import"./index-COzDMtK9.js";import{C as l}from"./ControlsWithNote-CW6StnRt.js";import"./copy-BsYfEWuv.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CkQ2wSOg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DdhWaCX8.js";import"./index-CTIQkpgO.js";import"./index-DdICQhrF.js";import"./Link-C3nR6kZV.js";import"./index-DoBDF59y.js";import"./index-B5sOe_-e.js";import"./index-CKX87Paa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BsUQb2cX.js";import"./addCustomCSSWithScoping-B22aBF7H.js";import"./index-Do8jjW18.js";import"./information-v6F873AP.js";import"./sys-enter-2-WuXn7rus.js";import"./alert-C89y0cfE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BV9bdH-I.js";import"./delete-_0aprNE3.js";import"./settings-DzcaBuf0.js";import"./NoData-IEdNW4HF.js";import"./IllustratedMessage-mZZ5M3hY.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DLPo97KT.js";import"./index-Beg2KpGg.js";import"./index-uAJjS3qq.js";import"./slim-arrow-down-C9P7Hlpe.js";import"./Input-DRowSby-.js";import"./ResponsivePopoverCommon.css-B-2GlP7R.js";import"./ValueStateMessage.css-BEO0_Z3X.js";import"./Suggestions.css-C2b5Aeiw.js";import"./ListBoxItemGroupTemplate-CS3AT4TS.js";import"./ComboBoxItemGroup-WphZKhlt.js";import"./ListItemBaseTemplate-DAzagmTa.js";import"./Token-CNKrPbUL.js";import"./ScrollEnablement-Shykj-eY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-6d4If0Ew.js";import"./ToggleButton-boRRQzZL.js";import"./SuggestionItem-AUy5_5fB.js";import"./index-DfMJrLMR.js";import"./Option-DhB4mJA1.js";import"./index-BGv_PDyM.js";import"./SegmentedButton-B0umvJpk.js";import"./index-t-4IUksp.js";import"./Select-DeexmKC7.js";import"./InvisibleMessage-Dk7GG3Kc.js";import"./slim-arrow-down-Cl2du_e5.js";import"./index-BCkDkjBv.js";import"./index-De6ICbSu.js";import"./index-8i29fMry.js";import"./index-DStEZLfo.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BdpK6p98.js";import"./group-2-B-a5enHW.js";import"./sort-descending-CNTskMhX.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CeiuQBAD.js";import"./utils-BM8ogcFa.js";import"./index-CC1_JxWg.js";import"./index-Nex0FRzm.js";import"./index-ByLuJaAj.js";import"./navigation-down-arrow-BCi3JcgJ.js";import"./navigation-right-arrow-D4L2xcHa.js";import"./navigation-right-arrow-CbOrGt_U.js";import"./useCurrentTheme-D2xu2Mdc.js";import"./index-DqdEPxLj.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-MBIUA1Lt.js";import"./paper-plane-CRSL_yhr.js";import"./index-BpcWEnj0.js";import"./less-BOu5m1lW.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
