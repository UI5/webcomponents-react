import{j as e}from"./iframe-T7Wqg8UQ.js";import{useMDXComponents as i}from"./index-B1_Kr1qi.js";import{I as a,F as m}from"./CommandsAndQueries-BErUSC1w.js";import{M as s,C as p}from"./blocks-AtAGVbf3.js";import"./Tag-gMzT9-kJ.js";import"./index-1-SdBrMb.js";import{C as l}from"./ControlsWithNote-BqBu_Mq2.js";import"./copy-D9NRoizO.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DAAke3ZA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Do-8N8-4.js";import"./index-CSyU4Rfq.js";import"./index-B0vEPx1d.js";import"./Link-CS0U2zW0.js";import"./index-CuClVFCS.js";import"./index-Cpwr9m7H.js";import"./index-C36GduEZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ctd-T3Yg.js";import"./addCustomCSSWithScoping-SxSnbZxk.js";import"./index-OjQEK6Sv.js";import"./information-fYaYVBJG.js";import"./sys-enter-2-CqaPP6tK.js";import"./alert-DdeG0Okn.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CSqDBAEy.js";import"./delete-CqiXpIEJ.js";import"./settings--cZn65wn.js";import"./NoData-BE6qeMCb.js";import"./IllustratedMessage-BQ0ZIUUp.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CYDsbuj_.js";import"./index-TWAke1eS.js";import"./index-BpBMXpkU.js";import"./slim-arrow-down-D7zmqhuW.js";import"./Input-D7QMmGXc.js";import"./ResponsivePopoverCommon.css-BRMWd7_E.js";import"./ValueStateMessage.css-Cfl8bS23.js";import"./Suggestions.css-U--NnjnQ.js";import"./ListBoxItemGroupTemplate-Bh39jP1s.js";import"./ComboBoxItemGroup-DV-WPBD_.js";import"./ListItemBaseTemplate-BPb_roTh.js";import"./Token-Cc25iGzp.js";import"./ScrollEnablement-CeUSVHqn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-4LZiCxap.js";import"./ToggleButton-CytToCRZ.js";import"./SuggestionItem-d8PXQFzf.js";import"./index-5f7D5wvz.js";import"./Option-CJ57-p9L.js";import"./index-Cu0y023n.js";import"./SegmentedButton-Dsv1B1Jn.js";import"./index-BvUZdQGi.js";import"./Select-CF3mjJ0q.js";import"./InvisibleMessage-DMA9x9s-.js";import"./slim-arrow-down-CByenjbS.js";import"./index-DFMQojpQ.js";import"./index-BBdOPVh7.js";import"./index-4aM9WHD0.js";import"./index-SY1E5rmV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CD2P2e-A.js";import"./group-2-BPnOfmzi.js";import"./sort-descending-BMHrXFRh.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BXctqxI6.js";import"./utils-hMIBeM6k.js";import"./index-DVHuLLp4.js";import"./index-Drzpx-Ob.js";import"./index-Dz4XgqVg.js";import"./navigation-down-arrow-B_G4Lrxi.js";import"./navigation-right-arrow-BbB8iX7b.js";import"./navigation-right-arrow-DaBucJny.js";import"./useCurrentTheme-DpT-DVZV.js";import"./index-DD5DI72I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-JoNKXFI1.js";import"./paper-plane-9aEL_IQq.js";import"./index-htvP9kxx.js";import"./less-4qpViz2I.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
