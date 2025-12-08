import{j as e}from"./iframe-C7GsLKpM.js";import{useMDXComponents as i}from"./index-fgJud-zp.js";import{I as a,F as m}from"./CommandsAndQueries-zRxhXSXv.js";import{M as s,C as p}from"./blocks-D2ryVNuM.js";import"./Tag-CvCDhGeJ.js";import"./index-CDhisaU5.js";import{C as l}from"./ControlsWithNote-DGuGAwo2.js";import"./copy-DEZSjQMA.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B2fKbP8E.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CW2WjDDi.js";import"./index-B72Of-bP.js";import"./index-hUX7abRI.js";import"./Link-Bb3LeyVe.js";import"./index-Dyv0UGKb.js";import"./index-m_3CNkhb.js";import"./index-DoyP2rLL.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-M6aw6fal.js";import"./addCustomCSSWithScoping-DxMrCFWH.js";import"./index-Bitbggm1.js";import"./information-CeT29ukt.js";import"./sys-enter-2-DX9sWARu.js";import"./alert-CEtziYy3.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CAgadqAL.js";import"./delete-bz-6EPJB.js";import"./settings-DBygnMxF.js";import"./NoData-CTrYoSgm.js";import"./IllustratedMessage-BGIM0Nd-.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-DaD8OOim.js";import"./index-CKlIVxrI.js";import"./index-ijI2PEj_.js";import"./slim-arrow-down-C4n298oD.js";import"./Input-9fOmwmcP.js";import"./ResponsivePopoverCommon.css-BAvtZMMP.js";import"./ValueStateMessage.css-DNVmRxxJ.js";import"./Suggestions.css-UxMCDVF9.js";import"./ListBoxItemGroupTemplate-JmLdb2e2.js";import"./ComboBoxItemGroup-jcs7SEnT.js";import"./ListItemBaseTemplate-Zu8EKxdQ.js";import"./Token-CetmLQwP.js";import"./ScrollEnablement-CT_L3ouW.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BvfqPVMA.js";import"./ToggleButton-Sfk0hOkH.js";import"./SuggestionItem-DS4QbjGm.js";import"./index-MQHeIURy.js";import"./Option-BRgoDucR.js";import"./index-Df1cP14l.js";import"./SegmentedButton-CX6DYaOW.js";import"./index-Dkt3Rj2j.js";import"./Select-CacmHiKo.js";import"./InvisibleMessage-pKkBY45z.js";import"./slim-arrow-down-D1IgipIY.js";import"./index-BIzmAJhJ.js";import"./index-DAFFpok7.js";import"./index-Carv-kxu.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DbLf7ryM.js";import"./group-2-Cahp2hEa.js";import"./sort-descending-DDu_wB3P.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-eDA8HHQT.js";import"./utils-5pKaz8Dq.js";import"./index-C_uQe8JR.js";import"./index-C3OJ4ssE.js";import"./index-L3JtXj-B.js";import"./navigation-down-arrow-B4J5Ds5O.js";import"./navigation-right-arrow-Cqg0RIxe.js";import"./navigation-right-arrow-C0UEuokw.js";import"./useCurrentTheme-yYLHFo3n.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BiZwHfQ9.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-xGcqCfh3.js";import"./paper-plane-DVE1JtVi.js";import"./index-uv_n3kbk.js";import"./less-BSXzHnZn.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
