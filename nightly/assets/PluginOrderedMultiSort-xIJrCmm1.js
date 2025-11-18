import{j as e}from"./iframe-CDzsgyAV.js";import{useMDXComponents as i}from"./index-DP2UBTat.js";import{I as a,F as m}from"./CommandsAndQueries-CpE7A47V.js";import{M as s,C as p}from"./blocks-CJQxsMoI.js";import"./Tag-CH-8xgRY.js";import"./index-B8A9WhwY.js";import{C as l}from"./ControlsWithNote-DlQOn3kv.js";import"./copy-DpKoQtQP.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Kp7F4hlK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CLSChxqE.js";import"./index-C2LW5088.js";import"./index-2og1ClCO.js";import"./Link-Dp8FrNqY.js";import"./index-Df65psIj.js";import"./index-CiXhxUFY.js";import"./index-BToOU55N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_XXs48A.js";import"./addCustomCSSWithScoping-B27SJBwy.js";import"./index-spzGnsRF.js";import"./information-DHwZAzkU.js";import"./sys-enter-2-DVWP7zgo.js";import"./alert-Fp8ziM7f.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqJHcQPH.js";import"./delete-B-gvuqdd.js";import"./settings-Cbcjyv0Y.js";import"./NoData-BVNfqJsM.js";import"./IllustratedMessage-BN1Iq_3M.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-1Ys1t75g.js";import"./index-CocUjDH_.js";import"./index-BfKLxC4E.js";import"./slim-arrow-down-DLRwTtbe.js";import"./Input-8H7TX9aj.js";import"./ResponsivePopoverCommon.css-C3wd2k-W.js";import"./ValueStateMessage.css-By_XiJ9I.js";import"./Suggestions.css-DDpMPLES.js";import"./ListBoxItemGroupTemplate-C8MMY61P.js";import"./ComboBoxItemGroup-PpcOoMvo.js";import"./ListItemBaseTemplate-CpMpzE59.js";import"./Token-jxrfpM-J.js";import"./ScrollEnablement-BI3MOl7l.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ByK6mU7F.js";import"./ToggleButton-B4Zc3HFl.js";import"./SuggestionItem-DkSNk8yh.js";import"./index-B4Od3Z_Y.js";import"./Option-NU9oW0-i.js";import"./index-BCP42iFG.js";import"./SegmentedButton-BqnPadO7.js";import"./index-BEm3lM4_.js";import"./Select-DJG9BRVU.js";import"./InvisibleMessage-D6G5X2tZ.js";import"./slim-arrow-down-DSlsBY-p.js";import"./index-CuyuI2Pj.js";import"./index-C1m5zeZ5.js";import"./index-DnHq6C4h.js";import"./IconDesign-DXd8PPVF.js";import"./filter-YSMvOGtw.js";import"./group-2-BwQpX0hB.js";import"./sort-descending-Blt3aqTU.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BiSHSe0e.js";import"./utils-Cd-ANK3A.js";import"./index-DenP7o8A.js";import"./index-BE-YPQF4.js";import"./index-8HAhpbda.js";import"./navigation-down-arrow-DYP-nqAT.js";import"./navigation-right-arrow-CKdG0KzH.js";import"./navigation-right-arrow-Cx1TVxnH.js";import"./useCurrentTheme-LfUWuXTs.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Y04S_ZXo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Do2kY7uP.js";import"./paper-plane-TdqVc7nZ.js";import"./index-CZeAmPhe.js";import"./less-Xdu5yIez.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
