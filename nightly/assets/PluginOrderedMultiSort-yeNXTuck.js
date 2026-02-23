import{j as e}from"./iframe-ERwSzs3g.js";import{useMDXComponents as i}from"./index-C_Wbk-9f.js";import{I as a,F as m}from"./CommandsAndQueries-Dd3ZB-Zm.js";import{M as s,C as p}from"./blocks-CPggC12N.js";import"./Tag-B-CdIpAx.js";import"./index-CaDxd8lJ.js";import{C as l}from"./ControlsWithNote-Bv8JsWe_.js";import"./copy-CudSiVH8.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Dzpuhj_j.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0Kgz2KY.js";import"./index-CL--3ayL.js";import"./index-I8Rn_Xtk.js";import"./Link-BEsTVss7.js";import"./index-RyYuggn2.js";import"./index--5AI5DCY.js";import"./index-CZ9mn71l.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BxRB-GRE.js";import"./addCustomCSSWithScoping-Clegv1AW.js";import"./index-BcvsAi-y.js";import"./information-CHdxYb5g.js";import"./sys-enter-2-CJZeFu0K.js";import"./alert-DqHHhUpv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dqn-jABc.js";import"./delete-Bu7VmTYp.js";import"./settings-CQ_5VNNI.js";import"./NoData-D2Tt32Od.js";import"./IllustratedMessage-B_rNMhob.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-7XsDJsR0.js";import"./index-CKj1ghFb.js";import"./index-VEHANs_d.js";import"./slim-arrow-down-2J31Ucf0.js";import"./Input-DSupStK3.js";import"./ResponsivePopoverCommon.css-DReQi8ZR.js";import"./ValueStateMessage.css-Lf_StamT.js";import"./Suggestions.css-BIz0Zv49.js";import"./ListBoxItemGroupTemplate-DUimE2BY.js";import"./ComboBoxItemGroup-B_cfzOqG.js";import"./ListItemBaseTemplate-BQH3JJKy.js";import"./Token-DX8SqOz4.js";import"./ScrollEnablement-BD4VIdDp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Ck-G_e39.js";import"./ToggleButton-6e7zC1X-.js";import"./SuggestionItem-BmiMZKr8.js";import"./index-BIALcVNb.js";import"./Option-Br2Csiuj.js";import"./index-BJrpf7k8.js";import"./SegmentedButton-BjzAZg81.js";import"./index-CqF2GYF8.js";import"./Select-Uz-gzee2.js";import"./InvisibleMessage-CtK1BuKZ.js";import"./slim-arrow-down-BdCansBN.js";import"./index-CA_zt6zs.js";import"./index-DvXXaKIh.js";import"./index-f2S0or9y.js";import"./index-HN2JJ6Qh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-wg2A7PH5.js";import"./group-2-t0uZVGoA.js";import"./sort-descending-DTK9LhKi.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-YnPiPISE.js";import"./utils-DWJXL1ej.js";import"./index-BrPS-6K1.js";import"./index-BYHL4ln3.js";import"./index-Dq6Fu5U-.js";import"./navigation-down-arrow-vpfptFd4.js";import"./navigation-right-arrow-DiQFcMBc.js";import"./navigation-right-arrow-CzKfQRKc.js";import"./useCurrentTheme-DRl35Uzu.js";import"./index-BDQR7c08.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BDBjPcau.js";import"./paper-plane-D1nv_q0M.js";import"./index-CaV8_vUx.js";import"./less-Dmpu7iye.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
