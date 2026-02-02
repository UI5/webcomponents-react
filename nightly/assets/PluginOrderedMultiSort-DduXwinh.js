import{j as e}from"./iframe-D6FNTQkK.js";import{useMDXComponents as i}from"./index-B6bRqhkI.js";import{I as a,F as m}from"./CommandsAndQueries-BXb9AdOB.js";import{M as s,C as p}from"./blocks-CncoMbCj.js";import"./Tag-BgsP26gD.js";import"./index-TUX9UWDf.js";import{C as l}from"./ControlsWithNote-CNMsE99D.js";import"./copy-CV5IiNGP.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BOeh4XmQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTSo6gsw.js";import"./index-Cn0-2HTO.js";import"./index-C01hHOib.js";import"./Link-ECkeIbxq.js";import"./index-i5JoI6q6.js";import"./index-CEtC1hdv.js";import"./index-_w6613cy.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-COKdY-da.js";import"./addCustomCSSWithScoping-BKP4itiy.js";import"./index-C8Bzh-c-.js";import"./information-DX0Ia3Tr.js";import"./sys-enter-2-BXq7hn_D.js";import"./alert-Dc1BRwci.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-yi9kxnte.js";import"./delete-CFOKUYe0.js";import"./settings-CfB4e9cX.js";import"./NoData-Dq3tbyi3.js";import"./IllustratedMessage-cjkHzwDQ.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DW0YuRZ7.js";import"./index-CTZpCD3C.js";import"./index-DZv_VOFr.js";import"./slim-arrow-down-CHkc3XG4.js";import"./Input-CWaYFEE0.js";import"./ResponsivePopoverCommon.css-DwSQpbCL.js";import"./ValueStateMessage.css-B-79kasT.js";import"./Suggestions.css-BX_6fSbp.js";import"./ListBoxItemGroupTemplate-D5A0k_8G.js";import"./ComboBoxItemGroup-DgqGaLwi.js";import"./ListItemBaseTemplate-BwKCfdZC.js";import"./Token-CdK57w2s.js";import"./ScrollEnablement-BnyFUzOB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-khyxx9eu.js";import"./ToggleButton-UgNXHRCa.js";import"./SuggestionItem-DmIAT0hW.js";import"./index-Bvo9r74r.js";import"./Option-Bp3m08uY.js";import"./index-B-qqk9Qh.js";import"./SegmentedButton-WJja0alW.js";import"./index-DFLZWraU.js";import"./Select-BsOhyv3Y.js";import"./InvisibleMessage-CuNZ9Vpq.js";import"./slim-arrow-down-BcGJUmQm.js";import"./index-BgVQgXtA.js";import"./index-A1xbEiXK.js";import"./index-5wdnnntn.js";import"./index-CvdFD22I.js";import"./IconDesign-DXd8PPVF.js";import"./filter-8F6Zx2fh.js";import"./group-2-bMLqGL0E.js";import"./sort-descending-c2BT37ev.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-XmEHG45R.js";import"./utils-DbT12vyG.js";import"./index-Lif6Dilg.js";import"./index-1e28FYLT.js";import"./index-D27T-mws.js";import"./navigation-down-arrow-BN5WPv52.js";import"./navigation-right-arrow-DtQeW2Tc.js";import"./navigation-right-arrow-CLKqeinu.js";import"./useCurrentTheme-DXL7KtWf.js";import"./index-CeT2M4uq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BISPhePp.js";import"./paper-plane-CZun4wFx.js";import"./index-CtNicNZp.js";import"./less-By2gp0Gl.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
