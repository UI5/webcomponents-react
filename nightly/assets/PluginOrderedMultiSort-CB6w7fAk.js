import{j as e}from"./iframe-B2H5__qL.js";import{useMDXComponents as i}from"./index-Bc3WoLXB.js";import{I as a,F as m}from"./CommandsAndQueries-CP6cnX5g.js";import{M as s,C as p}from"./blocks-CV5yz-FR.js";import"./Tag-7r6nRPOe.js";import"./index-Cm-x3hEF.js";import{C as l}from"./ControlsWithNote-4ZbwV_xc.js";import"./copy-BwEcpAyC.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DjHk6yl6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPEAIHq6.js";import"./index-8OksVI4W.js";import"./index-BLSBFNnV.js";import"./Link-CBNkHCq_.js";import"./index-BNOYEhs3.js";import"./index-CwqZMpwP.js";import"./index-BCbtyila.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVsneHI1.js";import"./addCustomCSSWithScoping-cFAolBzW.js";import"./index-CF6OSC7N.js";import"./information-C3uad2Xw.js";import"./sys-enter-2-cAFQMIU-.js";import"./alert-D25r9vgu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D-2mPXoG.js";import"./delete-De_7uTjk.js";import"./settings-Bw4IgaRx.js";import"./NoData-DumJbK86.js";import"./IllustratedMessage-DaQeD-aa.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DIsiVO76.js";import"./index-LI-LrhIu.js";import"./index-BcRV51-d.js";import"./slim-arrow-down-IfyUaL9Z.js";import"./Input-DAvWZvrZ.js";import"./ResponsivePopoverCommon.css-BADeKMEp.js";import"./ValueStateMessage.css-n2E6R8Y4.js";import"./Suggestions.css-gsdRtnKE.js";import"./ListBoxItemGroupTemplate--DokvtV2.js";import"./ComboBoxItemGroup-OyZUTZdu.js";import"./ListItemBaseTemplate-BQF5AI-D.js";import"./Token-BIK1iWVF.js";import"./ScrollEnablement-qavzlcVF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ABAA2Grv.js";import"./ToggleButton-CR6zJT8D.js";import"./SuggestionItem-Cabfvqu8.js";import"./index-DP9HR8Xc.js";import"./Option--4jXDoVV.js";import"./index-Bej9GB_4.js";import"./SegmentedButton-yzX-JxKB.js";import"./index-DbJBqtMY.js";import"./Select-B37FBEMS.js";import"./InvisibleMessage-a_Ql2uCy.js";import"./slim-arrow-down-BhGE8VlH.js";import"./index-DE7j7mOL.js";import"./index-B4JgLaLf.js";import"./index-CuufOZMl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C5wXzB-i.js";import"./group-2-BYr0dgAY.js";import"./sort-descending-CeBdv557.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BAVao4iy.js";import"./utils-CrH2aT5K.js";import"./index-CeDoMS3B.js";import"./index-BbSCYA_B.js";import"./index-GREBbb7h.js";import"./navigation-down-arrow-Dfde4Yh7.js";import"./navigation-right-arrow-CLwAoq3r.js";import"./navigation-right-arrow-riNFmSLh.js";import"./useCurrentTheme-B81VpdIo.js";import"./IndicationColor-DVw-fSM_.js";import"./index--GkGXre7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DhOh-sF-.js";import"./paper-plane-BBEUTVjc.js";import"./index-CV7kc1h1.js";import"./less-D0Q8ENaH.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
