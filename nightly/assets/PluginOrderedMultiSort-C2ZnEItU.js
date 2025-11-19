import{j as e}from"./iframe-DEt5SpxN.js";import{useMDXComponents as i}from"./index-D4hcUogq.js";import{I as a,F as m}from"./CommandsAndQueries-BPAKOD0B.js";import{M as s,C as p}from"./blocks-CbBrNn_2.js";import"./Tag-Btd7K0TJ.js";import"./index-Bn-DAxDV.js";import{C as l}from"./ControlsWithNote-D28njq7s.js";import"./copy-DO8SZxEM.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BVHpRQOq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C60Z0fiQ.js";import"./index-BBkT8flo.js";import"./index-DQCvCv0f.js";import"./Link-QmS19gJn.js";import"./index-Ct7FOHD-.js";import"./index-aE62-2rm.js";import"./index-BgkB1LC-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-L-EUKjf-.js";import"./addCustomCSSWithScoping-DWFhiVTm.js";import"./index-Cgb532fA.js";import"./information-W2yufBl5.js";import"./sys-enter-2-QAd8vpRe.js";import"./alert-Bh8lKzJU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DcjM0_PX.js";import"./delete-COMiZuoG.js";import"./settings-Dr7Dz5uy.js";import"./NoData-BTrfsGm2.js";import"./IllustratedMessage-CVkgZe_S.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DdPCGDkQ.js";import"./index-DegFbmY9.js";import"./index-DRGeR7Cs.js";import"./slim-arrow-down-CgwBPz7g.js";import"./Input-CkfVEmR9.js";import"./ResponsivePopoverCommon.css-4fjWBy7h.js";import"./ValueStateMessage.css-BuVzQMo_.js";import"./Suggestions.css-CTEqZ7Jq.js";import"./ListBoxItemGroupTemplate-DSP_W8aI.js";import"./ComboBoxItemGroup-BT8bK6Wu.js";import"./ListItemBaseTemplate-cjvzi6zR.js";import"./Token-wBbWayB1.js";import"./ScrollEnablement-B6pFrG42.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BTQunUKa.js";import"./ToggleButton-D2MXehba.js";import"./SuggestionItem-Dj_zg9IL.js";import"./index-KKknYiyd.js";import"./Option-Cuq8HYx9.js";import"./index-dFGKlIjF.js";import"./SegmentedButton-f9AnvEva.js";import"./index-DScPGxep.js";import"./Select-DsO-cvnD.js";import"./InvisibleMessage-_ZcUiZFQ.js";import"./slim-arrow-down-Da8Aw9RY.js";import"./index-CvJI_k_L.js";import"./index-DCTt2WWj.js";import"./index-F4cfNB22.js";import"./IconDesign-DXd8PPVF.js";import"./filter-NSZF4DBT.js";import"./group-2-BG7X54j2.js";import"./sort-descending-DPBE9T3s.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dk4rB77W.js";import"./utils-BLvTxsGy.js";import"./index-D-r2RDzW.js";import"./index-DmcsvV0M.js";import"./index-C1JwcYBj.js";import"./navigation-down-arrow-CWO8eaa_.js";import"./navigation-right-arrow-BJ1HFNO9.js";import"./navigation-right-arrow-DPSwNoIQ.js";import"./useCurrentTheme-BOBJiUUr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-w3A3CH3e.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D6kqfXmQ.js";import"./paper-plane-YrBXnPrz.js";import"./index-DkV1yrrg.js";import"./less-DrAkGCkV.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
