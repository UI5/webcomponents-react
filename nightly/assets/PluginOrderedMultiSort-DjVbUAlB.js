import{j as e}from"./iframe-D8-BDgf_.js";import{useMDXComponents as i}from"./index-C9C5bcry.js";import{I as a,F as m}from"./CommandsAndQueries-DdekYtZs.js";import{M as s,C as p}from"./blocks-BAPiaHIf.js";import"./Tag-94uJ1S6F.js";import"./index-Bpoq7VNX.js";import{C as l}from"./ControlsWithNote-BA4C71aa.js";import"./copy-D8ENGf86.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-B7FBwI18.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DthRrO7G.js";import"./index-BIskJ-u2.js";import"./index-BR0aC9ux.js";import"./Link-DupRePRp.js";import"./index-Ijyq8fzP.js";import"./index-BC6ra2tn.js";import"./index-BGDf_fSf.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bayg2vL_.js";import"./addCustomCSSWithScoping-BMV9S5Iy.js";import"./index-CkF5m5P2.js";import"./information-P4PYqJF7.js";import"./sys-enter-2-COYZiEQ0.js";import"./alert-NgB5MfvZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BozETG9q.js";import"./delete-CGuxUIRO.js";import"./settings-CuToJbU1.js";import"./NoData-D5TRA1yr.js";import"./IllustratedMessage-EI-iyKnx.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DmaA6uVZ.js";import"./index-AvdY3uSx.js";import"./index-9ZsF7KxK.js";import"./slim-arrow-down-p7BE2Hmw.js";import"./Input-D_T5qhyo.js";import"./ResponsivePopoverCommon.css-B0FOPOjZ.js";import"./ValueStateMessage.css-tSbLyNmJ.js";import"./Suggestions.css-CCFYMh7W.js";import"./ListBoxItemGroupTemplate-BrwhGVvC.js";import"./ComboBoxItemGroup-CjkRFxCX.js";import"./ListItemBaseTemplate-AGmUOsl7.js";import"./Token-Dz00xiyc.js";import"./ScrollEnablement-C7ow4jI1.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CWDqgljt.js";import"./ToggleButton-DzetVeI0.js";import"./SuggestionItem-rfQMdI2X.js";import"./index-Ce8fTDv-.js";import"./Option-CpzuJS-B.js";import"./index-B8VDamox.js";import"./SegmentedButton-D6lmAoRT.js";import"./index-D7R2LnC5.js";import"./Select-_Bmu2vih.js";import"./InvisibleMessage-T6cHYe91.js";import"./slim-arrow-down-BhY_0Ri7.js";import"./index-BSkcr-Mn.js";import"./index-KuLG5MtP.js";import"./index-BCja9vcE.js";import"./index-D-3bVUSA.js";import"./IconDesign-DXd8PPVF.js";import"./filter-ebwsLBYv.js";import"./group-2-u3I6G4vD.js";import"./sort-descending-23WgyaPw.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-QOahos4e.js";import"./utils-BQuRkdbJ.js";import"./index-zsRPmIQK.js";import"./index-DmXBAxhG.js";import"./index-CCDJeSeX.js";import"./navigation-down-arrow-sKnsIYlJ.js";import"./navigation-right-arrow-dBgLFMal.js";import"./navigation-right-arrow-CxjBdfVG.js";import"./useCurrentTheme-BSsb-VWY.js";import"./index-DfDYC92c.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C0KpyHf-.js";import"./paper-plane-DJ7-IFy3.js";import"./index-BvqiMI89.js";import"./less-0nIOA2m3.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
