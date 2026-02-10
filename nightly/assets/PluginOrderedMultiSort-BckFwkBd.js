import{j as e}from"./iframe-D3h_j2y4.js";import{useMDXComponents as i}from"./index-a9MBNRjP.js";import{I as a,F as m}from"./CommandsAndQueries-DkEtb3C9.js";import{M as s,C as p}from"./blocks-Cp97O8Me.js";import"./Tag-Be6y1yqM.js";import"./index-B9e5YBdN.js";import{C as l}from"./ControlsWithNote-C1Q49NgS.js";import"./copy-Dke-3UUt.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-DwoXh-sx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BY-U4HhI.js";import"./index-BOt5HncK.js";import"./index-BhBE3smf.js";import"./Link-Dali4gAe.js";import"./index-BQ-14eq3.js";import"./index-DX_7kgjZ.js";import"./index-DnWdQH32.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-llHj0RCs.js";import"./addCustomCSSWithScoping-uA_fHk2N.js";import"./index-CH7UrjOG.js";import"./information-Du_n-m1U.js";import"./sys-enter-2-_5l1H-Gx.js";import"./alert-DiqJ6xxp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cl8Bhysk.js";import"./delete-HNCzad-u.js";import"./settings-BAYqfNVW.js";import"./NoData-euyCiP2B.js";import"./IllustratedMessage--KlXndt0.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Bknwbe5l.js";import"./index-D4sEhlKj.js";import"./index-B9iDppuB.js";import"./slim-arrow-down-nHCgXcCK.js";import"./Input-DReaCICF.js";import"./ResponsivePopoverCommon.css-Cv5gi_PV.js";import"./ValueStateMessage.css-BPAV6ZTf.js";import"./Suggestions.css-B7qb-M6b.js";import"./ListBoxItemGroupTemplate-Dnd6fR5C.js";import"./ComboBoxItemGroup-Cd0GNI7w.js";import"./ListItemBaseTemplate-Cxkubtyi.js";import"./Token-D9U4_t6g.js";import"./ScrollEnablement-CU1q9bqi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CgJ8GSRa.js";import"./ToggleButton-D0O29cmD.js";import"./SuggestionItem-DTIfwwxe.js";import"./index-CiafHV3I.js";import"./Option-BfbVIOYk.js";import"./index-DbRYhxJV.js";import"./SegmentedButton-C2ivOZMg.js";import"./index-4F0E7fXh.js";import"./Select-BG5_UDji.js";import"./InvisibleMessage-B2sYPvR_.js";import"./slim-arrow-down-CcAkiAX3.js";import"./index-BQpjBriN.js";import"./index-cW5UaVoZ.js";import"./index-CRuUVbuT.js";import"./index-DTeZzsS7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C9uiLsB2.js";import"./group-2-CeS8Iw99.js";import"./sort-descending-NTGJh4hK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BOa2Jfi4.js";import"./utils-DA7J-iEW.js";import"./index-D1EkbpQL.js";import"./index-B4iDf5hz.js";import"./index-BAQUkvhC.js";import"./navigation-down-arrow-BgTxiuzp.js";import"./navigation-right-arrow-BFKs6dr_.js";import"./navigation-right-arrow-DBTblMcB.js";import"./useCurrentTheme-DdzLTwyU.js";import"./index-Bg_WlAKN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BlLZYc2i.js";import"./paper-plane-M1DAtAiw.js";import"./index-BPIXiNj1.js";import"./less-BeWtcPfG.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
