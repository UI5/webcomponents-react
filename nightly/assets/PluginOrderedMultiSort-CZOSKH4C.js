import{j as e}from"./iframe-CdfVheEM.js";import{useMDXComponents as i}from"./index-Bn3z_2-D.js";import{I as a,F as m}from"./CommandsAndQueries-DnpuXHMh.js";import{M as s,C as p}from"./blocks-B64qhbcn.js";import"./Tag-BOnQq-w3.js";import"./index-Xx3LO7hZ.js";import{C as l}from"./ControlsWithNote-ymOcXJzc.js";import"./copy-CQYljM5l.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CdHvl2gt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bh5HGBh3.js";import"./index-BBHuJoK3.js";import"./index-D71kNSph.js";import"./Link-CAF8tfZ3.js";import"./index-BnJ9pgT-.js";import"./index-D1Nbk9KW.js";import"./index-BdSIKWOt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DUCJFgFK.js";import"./addCustomCSSWithScoping-csKwFrn6.js";import"./index-BkqNBKqG.js";import"./information-CDNUd2FJ.js";import"./sys-enter-2-m6urcdRb.js";import"./alert-DAUraGPR.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-MEyy_OdE.js";import"./delete-DQmyWOyY.js";import"./settings-COcXG8h3.js";import"./NoData-DcxAeqV1.js";import"./IllustratedMessage-B3a6NIT2.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BgUA9kLe.js";import"./index-Bh2r_4yQ.js";import"./index-CzcQkJTF.js";import"./slim-arrow-down-D4oCbCnX.js";import"./Input-Bdhewrt9.js";import"./ResponsivePopoverCommon.css-DcZbPFvu.js";import"./ValueStateMessage.css-CfDs1rEd.js";import"./Suggestions.css-BdX9EgDU.js";import"./ListBoxItemGroupTemplate-8UCIFoUO.js";import"./ComboBoxItemGroup-x2TGee-B.js";import"./ListItemBaseTemplate-oDeWAQcb.js";import"./Token-BXxrasGo.js";import"./ScrollEnablement-C6CUE2hY.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-x_g1yDzG.js";import"./ToggleButton-COVKMN5A.js";import"./SuggestionItem-MWxUSQN7.js";import"./index-PYawlrtB.js";import"./Option-BUhhlAsc.js";import"./index-BJLAYe_t.js";import"./SegmentedButton-BOjI_yef.js";import"./index-CmKIPpc4.js";import"./Select-CY0l6TMc.js";import"./InvisibleMessage-COMllSIK.js";import"./slim-arrow-down-C79oKx1O.js";import"./index-DBS5gnra.js";import"./index-KQBqeoLi.js";import"./index-BI6OpvzA.js";import"./index-DC3a-gmy.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nZrai-M2.js";import"./group-2-CNZ0ZgLY.js";import"./sort-descending-CEKP_D9I.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-d7HncG-i.js";import"./utils-Cd8HpNBh.js";import"./index-DNPX4N-_.js";import"./index-DmA_99Px.js";import"./index-CDWK5O7C.js";import"./navigation-down-arrow-DpnQsS0V.js";import"./navigation-right-arrow-Dxz9thKC.js";import"./navigation-right-arrow-DZkMVdUz.js";import"./useCurrentTheme-Cdk1W9u5.js";import"./index-BpQg-76X.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CPpwcO6G.js";import"./paper-plane-C7_1OrVj.js";import"./index-CUP3o2CN.js";import"./less-BzMFUFzl.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
