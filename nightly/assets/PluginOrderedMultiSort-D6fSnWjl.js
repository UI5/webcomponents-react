import{j as e}from"./iframe-DFBm-DSq.js";import{useMDXComponents as i}from"./index-DN1lWEds.js";import{I as m,F as a}from"./CommandsAndQueries-Dwesrog0.js";import{M as s,C as p}from"./blocks-B7zGvzyh.js";import"./Tag-CMC3yhYK.js";import"./index-i9Tuo-S4.js";import{C as l}from"./ControlsWithNote-BG5NIfsF.js";import"./copy-BOgwG0pC.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CUJGcFCn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDCsv2ep.js";import"./index-DRIF-U0p.js";import"./index-CEGh04ma.js";import"./Link-BlxVb8ea.js";import"./index-s9mPNrYF.js";import"./index-B0ajYEze.js";import"./index-D-vZdY3z.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CqvN-tZt.js";import"./addCustomCSSWithScoping-DzzI1i6g.js";import"./index-BYzkCeld.js";import"./information-z2AwmlNQ.js";import"./sys-enter-2-DSpMbDS0.js";import"./alert-BRFe_Sc9.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bl9mqRZp.js";import"./delete-DxCiKEE4.js";import"./settings-DzhyxtkM.js";import"./NoData-DgE1Sh_E.js";import"./IllustratedMessage-BVbLtyE0.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-JnTxKdea.js";import"./index-jn-3vf8a.js";import"./slim-arrow-down-DRJmqDnV.js";import"./Input-DSVZUACP.js";import"./ResponsivePopoverCommon.css-CnMcrjsQ.js";import"./ValueStateMessage.css-BbtbR7Of.js";import"./Suggestions.css-DijJF9RT.js";import"./ListBoxItemGroupTemplate-uBeRRDby.js";import"./ComboBoxItemGroup-By5YcNLI.js";import"./ListItemBaseTemplate-DA8m0mUv.js";import"./Token-CNQzMPAi.js";import"./ScrollEnablement-BdJYzqT4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DGWJdbo7.js";import"./ToggleButton-VEbquAnE.js";import"./SuggestionItem-CfA6oYQG.js";import"./index-BTI_jG21.js";import"./Option-CzTdab4u.js";import"./index-ggGTc7ky.js";import"./SegmentedButton-Ddd1pMGI.js";import"./index-z1KVOKvO.js";import"./Select-9KEamWxt.js";import"./InvisibleMessage-CWFUnfEF.js";import"./slim-arrow-down-B6t_l0xN.js";import"./index-Cz-izgT1.js";import"./index-CjzbCvai.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4iI4qOF.js";import"./group-2-C_4wDfjC.js";import"./sort-descending-s1eyoV1T.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DEepbVcE.js";import"./utils-B1rOOgKS.js";import"./index-BvAYHJB3.js";import"./index-Bw_MCDBq.js";import"./index-BdL1x6lY.js";import"./navigation-down-arrow-CIjk2tcP.js";import"./navigation-right-arrow-q3_6ucGP.js";import"./navigation-right-arrow-kSqlvs_O.js";import"./useCurrentTheme-C2XPwL-I.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C1Lxv1Jm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-UMzUL51_.js";import"./paper-plane-Douct2lq.js";import"./index-Z3ts_iK1.js";import"./less-BMO93kr6.js";import"./index-BTeNJtiF.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(m,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
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
`,e.jsx(a,{})]})}function Le(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Le as default};
