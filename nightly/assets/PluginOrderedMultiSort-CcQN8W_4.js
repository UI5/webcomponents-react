import{j as e}from"./iframe-D2WvPMQO.js";import{u as i,M as a,C as m}from"./blocks-Cy8tSwuN.js";import{I as s}from"./CommandsAndQueries-GHyhdZ5z.js";import"./Tag-77Zcvr-C.js";import"./index-iukRSAfG.js";import{C as p}from"./ControlsWithNote-W2MnsLWm.js";import"./copy-DEDrq7eG.js";import{F as l}from"./Footer-CcjLnWXZ.js";import"./PageNotFound--xUWQamC.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-ClQlOOfP.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B9O6M9m0.js";import"./index-D85ZyHtS.js";import"./index-BHdhu-GL.js";import"./index-PtvYek1_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BEnkyBc2.js";import"./addCustomCSSWithScoping-qrEX4tTM.js";import"./index-itXLTY8o.js";import"./index-CNWb7VVG.js";import"./index-35M5Bral.js";import"./information-C8cZAxRB.js";import"./sys-enter-2-dY36Ay86.js";import"./alert-C9lTQ0KQ.js";import"./index-CEhSDieG.js";import"./Illustrations-T5lVOB-y.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C9QnqX38.js";import"./delete-DCtSeERs.js";import"./settings-BKHPv5fF.js";import"./NoData-BnVRCHK1.js";import"./NoFilterResults-BkYdKGgw.js";import"./index-DlP9PgZ4.js";import"./IllustratedMessage-D3KRi5hR.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-D_rtv69N.js";import"./Input-I49paX0T.js";import"./ResponsivePopoverCommon.css-CjUTP20I.js";import"./ValueStateMessage.css-CmhOpOlf.js";import"./Suggestions.css-rpucalpY.js";import"./ListBoxItemGroupTemplate-ULzBGJs1.js";import"./ComboBoxItemGroup-3MLa-49H.js";import"./ListItemBaseTemplate-CRHkGA3i.js";import"./Token-BzwGSfjy.js";import"./ScrollEnablement-D_-WU9eX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D9P5PrOT.js";import"./ToggleButton-BDLqiRP1.js";import"./multiselect-all-VBbz0rEV.js";import"./SuggestionItem-CyF605C0.js";import"./index-BUVTpYli.js";import"./Option-95rllHQV.js";import"./index-CK2Bjm1A.js";import"./SegmentedButton-YfV1HQzn.js";import"./index-GHa3vc93.js";import"./Select-mzrKDd_j.js";import"./InvisibleMessage-D8P6qZ5N.js";import"./index-B2szwQMK.js";import"./index-CgYPHGay.js";import"./index-rfVADYOX.js";import"./index-CHoH1lJm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DcEBagHM.js";import"./group-2-DgBHJvEx.js";import"./sort-descending-Ba8w6yM6.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-D5IIiW0k.js";import"./utils-8oLh6ciF.js";import"./index-BCj0VUVv.js";import"./index-BePByOQw.js";import"./index-D6RCLh_r.js";import"./navigation-down-arrow-Cxwn0PTJ.js";import"./navigation-right-arrow-Di_8TZdY.js";import"./navigation-right-arrow-28YF9v8S.js";import"./useCurrentTheme-nTOLBBZF.js";import"./index-DVsa72aS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DYwGEDjw.js";import"./paper-plane-BZZHS2AL.js";import"./index-C3vgjiRI.js";import"./less-INLBlfmn.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
`,e.jsx(t.h1,{id:"analyticaltable-plugin-useorderedmultisort",children:"AnalyticalTable Plugin: useOrderedMultiSort"}),`
`,e.jsx(s,{moduleName:"useOrderedMultiSort",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"useOrderedMultiSort"})," it's possible to define the sorting priority if multi-sort is enabled for the respective columns (",e.jsx(t.code,{children:"enableMultiSort: true"}),")."]}),`
`,e.jsx(t.p,{children:"It receives one parameter that defines the sorting priority by the column id."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.code,{children:"orderedIds: string[]"}),": Defines the sort priority when sorting by multiple columns, starting with the first column ID."]}),`
`]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," Column IDs that are not found in the array use the default priority, so the first sorted column has a higher priority than the next sorted column."]}),`
`,e.jsx(t.h2,{id:"example",children:"Example"}),`
`,e.jsx(m,{sourceState:"none",of:o}),`
`,e.jsx(t.h3,{id:"current-parameter",children:"Current Parameter"}),`
`,e.jsx(p,{of:o,hideHTMLPropsNote:!0,include:["orderedIds"]}),`
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
`,e.jsx(l,{})]})}function Xe(r={}){const{wrapper:t}={...i(),...r.components};return t?e.jsx(t,{...r,children:e.jsx(n,{...r})}):n(r)}export{Xe as default};
