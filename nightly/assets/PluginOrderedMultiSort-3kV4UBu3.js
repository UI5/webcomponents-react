import{j as e}from"./iframe-Bg2SD6vy.js";import{useMDXComponents as i}from"./index-CdwjPgWO.js";import{I as a,F as m}from"./CommandsAndQueries-D_Y2u3wJ.js";import{M as s,C as p}from"./blocks-CZL3kIpQ.js";import"./Tag-BBAYHNzq.js";import"./index-HB0ucYrA.js";import{C as l}from"./ControlsWithNote-CrYrlml8.js";import"./copy-UVBI9dME.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-jSjXb3wB.js";import"./preload-helper-PPVm8Dsz.js";import"./index-fylc8d1K.js";import"./index-BsOYAUed.js";import"./index-BpAxqFMX.js";import"./Link-B-zNx8Rm.js";import"./index-8T9qtuSw.js";import"./index-DO_6IPbq.js";import"./index-TtYx2H_8.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B9V3uoCq.js";import"./addCustomCSSWithScoping-CTL1rjLn.js";import"./index-DdlSV3iY.js";import"./information-CRabbQHz.js";import"./sys-enter-2-DqOp1oIr.js";import"./alert-BvLfxsiS.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DSAA7awN.js";import"./delete-5BOOHJBE.js";import"./settings-BsXo_RiZ.js";import"./NoData-Ccv5U2JJ.js";import"./IllustratedMessage-tmpUoTAd.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-2H4gT1-P.js";import"./index-Qd7vHrhH.js";import"./index-CuBcyOJk.js";import"./slim-arrow-down-D3U0-f5W.js";import"./Input-jdphY6CV.js";import"./ResponsivePopoverCommon.css-WFY0APq-.js";import"./ValueStateMessage.css-Bon94RZK.js";import"./Suggestions.css-Df10iCrd.js";import"./ListBoxItemGroupTemplate-B8fvrHHn.js";import"./ComboBoxItemGroup-BW3MSzp1.js";import"./ListItemBaseTemplate-B30GmwKn.js";import"./Token-CM436cdJ.js";import"./ScrollEnablement-BBWkbu9Y.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKzutTm5.js";import"./ToggleButton-99np1ddV.js";import"./SuggestionItem-DBO_3dkt.js";import"./index-w9ePVu2W.js";import"./Option-CWoqDgXU.js";import"./index-BViSevlR.js";import"./SegmentedButton-p_kUBRZN.js";import"./index-C2j6bZw5.js";import"./Select-DnJ2csMF.js";import"./InvisibleMessage-BOxQIJTv.js";import"./slim-arrow-down-DOg4xt37.js";import"./index-BFPm5TCJ.js";import"./index-BRp05jHt.js";import"./index-CFjFYMef.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CMZNlytO.js";import"./group-2-BPq3_pcZ.js";import"./sort-descending-BpqNLAMP.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B81Z82mq.js";import"./utils-D_EwR5ck.js";import"./index-DXKVxLaR.js";import"./index-B6a3zIdV.js";import"./index-BavWNaoH.js";import"./navigation-down-arrow-rBxK9kWS.js";import"./navigation-right-arrow--3JwYmng.js";import"./navigation-right-arrow-dYZMq4UC.js";import"./useCurrentTheme-BVGk2TTJ.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BgbPH2TB.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BPCZHmr9.js";import"./paper-plane-D-4FvCuR.js";import"./index-CFcdP4pc.js";import"./less-BU56_0XV.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
