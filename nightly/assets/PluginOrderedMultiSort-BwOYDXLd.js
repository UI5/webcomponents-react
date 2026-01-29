import{j as e}from"./iframe-COKmt9GX.js";import{useMDXComponents as i}from"./index-CzY2e8So.js";import{I as a,F as m}from"./CommandsAndQueries-DSaWGMGq.js";import{M as s,C as p}from"./blocks-BC1CQ7iN.js";import"./Tag-DloN_KbF.js";import"./index-C27X2XUm.js";import{C as l}from"./ControlsWithNote-GGi7HBIW.js";import"./copy-CyMKHNyy.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Jogl8FYp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQHeIIHf.js";import"./index-C6DL1JMC.js";import"./index-DjGJsOok.js";import"./Link-BA2-5m1C.js";import"./index-BVPy0Kvc.js";import"./index-CfIzOoJC.js";import"./index-D5ATbVNg.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CXoeJUKj.js";import"./addCustomCSSWithScoping-CbQo03JJ.js";import"./index-WnbZc56M.js";import"./information-CfFvhrkY.js";import"./sys-enter-2-BMhsQaT7.js";import"./alert-Cbc0R2SK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D6_PiP7Z.js";import"./delete-CoicSmVL.js";import"./settings-C_m_IFT1.js";import"./NoData-DTXeTJ5s.js";import"./IllustratedMessage-fTHXJSJn.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Dd1xDcBR.js";import"./index-DF25Qnlr.js";import"./index-BhMCzWcn.js";import"./slim-arrow-down-B87n6-mS.js";import"./Input-BceWkqxg.js";import"./ResponsivePopoverCommon.css-CcjK_Jcr.js";import"./ValueStateMessage.css-DaEL7h-V.js";import"./Suggestions.css-9PKvquaD.js";import"./ListBoxItemGroupTemplate-DW5Ywa3P.js";import"./ComboBoxItemGroup-D-NsDMkE.js";import"./ListItemBaseTemplate-CgxVQe7-.js";import"./Token-CKythk2p.js";import"./ScrollEnablement-D7MLciOS.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BPKpO2-G.js";import"./ToggleButton-9gCC_TTJ.js";import"./SuggestionItem-DR-cU1_Q.js";import"./index-FkMp5OCm.js";import"./Option-Ch8TBZkA.js";import"./index-Dn9GktW2.js";import"./SegmentedButton-_N8TVKLb.js";import"./index-5p0Gpf8D.js";import"./Select-BFd8ury_.js";import"./InvisibleMessage-DmmsUdM7.js";import"./slim-arrow-down-5YiILlYo.js";import"./index-2YlEmuXv.js";import"./index-qF8GZWDg.js";import"./index-DwH7fqA2.js";import"./index-DhVmRSsQ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BHypl9jb.js";import"./group-2-DEGE6ykx.js";import"./sort-descending-CT2T5JwK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C2iRiHRU.js";import"./utils-Dy6UBNOH.js";import"./index-qVJXdvv_.js";import"./index-DGpRIpiu.js";import"./index-DBlqkpsO.js";import"./navigation-down-arrow-RRwxkr-f.js";import"./navigation-right-arrow-BoUWLgXr.js";import"./navigation-right-arrow-CZWnArrm.js";import"./useCurrentTheme-Bp534Rms.js";import"./index-ByNYUvQ0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL--2n9yHX1.js";import"./paper-plane-MxlRUPJs.js";import"./index-DP2Iyis7.js";import"./less-DrZK_gXX.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
