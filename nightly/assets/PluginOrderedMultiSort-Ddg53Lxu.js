import{j as e}from"./iframe-BTfUB26H.js";import{useMDXComponents as i}from"./index-D3NtTefK.js";import{I as a,F as m}from"./CommandsAndQueries-BWcq9mTF.js";import{M as s,C as p}from"./blocks-AWBgpAl3.js";import"./Tag-BGFP3IN9.js";import"./index-B9IZul2P.js";import{C as l}from"./ControlsWithNote-HbXGbTZ6.js";import"./copy-D6Vht5qr.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BDMm55id.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DlJoRRYt.js";import"./index-BBFhDjTC.js";import"./index-Cuze-7Fn.js";import"./Link-BMxWJfW1.js";import"./index-BzZqyp7s.js";import"./index-BgDIorry.js";import"./index-BtUK59WI.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-nj-G9WCr.js";import"./addCustomCSSWithScoping-BuL6JqQV.js";import"./index-F0g47Tza.js";import"./information-CLBM1nY5.js";import"./sys-enter-2-BbIZ6tOc.js";import"./alert-Dqm1dR2l.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DdxJ9ktW.js";import"./delete-CosJh4Wr.js";import"./settings-CrkRTssd.js";import"./NoData-CrPB3Etw.js";import"./IllustratedMessage-Dp_vq7kO.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DAE0PvWS.js";import"./index-G7JGBkSp.js";import"./index-Pc-tL94R.js";import"./slim-arrow-down-CkCy067l.js";import"./Input-CWdJBATj.js";import"./ResponsivePopoverCommon.css-C6uEz5Dl.js";import"./ValueStateMessage.css-Bm4czFd-.js";import"./Suggestions.css-jfF4NP-_.js";import"./ListBoxItemGroupTemplate-Cxw4j-yj.js";import"./ComboBoxItemGroup-DsBDLMFu.js";import"./ListItemBaseTemplate-rG4H0Nai.js";import"./Token-peOfkrul.js";import"./ScrollEnablement-BXX9C0K8.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BeqJjBCf.js";import"./ToggleButton-CSUeQtqf.js";import"./SuggestionItem-DzkIs1mi.js";import"./index-0LZOa3fr.js";import"./Option-BzMwM8BQ.js";import"./index-BhAUVSXr.js";import"./SegmentedButton-8xKdGXJZ.js";import"./index-B3gpN7Aw.js";import"./Select-wjPPEddq.js";import"./InvisibleMessage-D6rgIzPo.js";import"./slim-arrow-down-COQfF4eP.js";import"./index-C0hZMZOj.js";import"./index-DSWytDHX.js";import"./index-BV2bpcIG.js";import"./index-kc3KkV9f.js";import"./IconDesign-DXd8PPVF.js";import"./filter-r6JXO5z-.js";import"./group-2-Cie4H57f.js";import"./sort-descending-bkkz2k_R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-b_pilGpL.js";import"./utils-DHZMQwFC.js";import"./index-Bx4wP1U8.js";import"./index-Cy-22xtZ.js";import"./index-CcPafi79.js";import"./navigation-down-arrow-DMFBeJkE.js";import"./navigation-right-arrow-B_x4oAAg.js";import"./navigation-right-arrow-ycb02zKK.js";import"./useCurrentTheme-CD8arqKb.js";import"./index-CwyI01PI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-b3M525lM.js";import"./paper-plane-BssdKFPE.js";import"./index-CsvZqpSl.js";import"./less-CyWGcd4R.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
