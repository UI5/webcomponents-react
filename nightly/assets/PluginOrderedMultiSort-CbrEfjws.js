import{j as e}from"./iframe-Dpln3x91.js";import{useMDXComponents as i}from"./index-BwM4zX9M.js";import{I as a,F as m}from"./CommandsAndQueries-D8ZM_J5V.js";import{M as s,C as p}from"./blocks-BU-hwsss.js";import"./Tag-CuuYxwWF.js";import"./index-gZoyk-EE.js";import{C as l}from"./ControlsWithNote-DJvO6dls.js";import"./copy-BmZL0gFG.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CDrhhElJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_G040s9.js";import"./index-R5iFeOqc.js";import"./index-B-tiWui7.js";import"./Link-B2EfPk0H.js";import"./index-BnwzWoqt.js";import"./index-BC7bHNAY.js";import"./index-C7xVtjbt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Dl1L_0sw.js";import"./addCustomCSSWithScoping-BEgX107E.js";import"./index-C9IWhIjk.js";import"./information-BNg_xE8V.js";import"./sys-enter-2-CRey8tmC.js";import"./alert-DebHUSqO.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-dWrrqn7O.js";import"./delete-DKtOEY5u.js";import"./settings-DUogldWd.js";import"./NoData-B7KP2bRY.js";import"./IllustratedMessage-cTE9BIDm.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CQHrGMje.js";import"./index-0uDK0Vdr.js";import"./index-wbSF3N_Y.js";import"./slim-arrow-down-BxpwhQs1.js";import"./Input-B7euzJoo.js";import"./ResponsivePopoverCommon.css--1dLLGms.js";import"./ValueStateMessage.css-DTWUtWcx.js";import"./Suggestions.css-InLHnYp-.js";import"./ListBoxItemGroupTemplate-DbOWOTtN.js";import"./ComboBoxItemGroup-DTREEyXz.js";import"./ListItemBaseTemplate-DfSRrZFo.js";import"./Token-DR7cqsJm.js";import"./ScrollEnablement-DSS0lIGV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHCpwb9_.js";import"./ToggleButton-Dyi4d8KV.js";import"./SuggestionItem-C9K1LEXa.js";import"./index-D4J4Dqol.js";import"./Option-CiInW1SY.js";import"./index-CKt8E8QC.js";import"./SegmentedButton-FfaROJ8w.js";import"./index-BIF6S8BW.js";import"./Select-D4hMiJvv.js";import"./InvisibleMessage-kDq0cqsN.js";import"./slim-arrow-down-DotGOMkD.js";import"./index-DNSCkbXG.js";import"./index-ORaq6zeN.js";import"./index-DZSYYhge.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BYVdaO0E.js";import"./group-2-CKHkgp4p.js";import"./sort-descending-NRuJXw_U.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CEvmHykI.js";import"./utils-DqbrCZoJ.js";import"./index-CzSiOjHq.js";import"./index-CIHgB-fO.js";import"./index-vGs8Gvmn.js";import"./navigation-down-arrow-B-KwWelX.js";import"./navigation-right-arrow-BN6oWB-c.js";import"./navigation-right-arrow-auStrBJj.js";import"./useCurrentTheme-D2C-2146.js";import"./IndicationColor-DVw-fSM_.js";import"./index-eBQ2Ght0.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D7wro6Bb.js";import"./paper-plane-BxXqHCwQ.js";import"./index-Bxt6ZcXW.js";import"./less-DKNEmMSk.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
