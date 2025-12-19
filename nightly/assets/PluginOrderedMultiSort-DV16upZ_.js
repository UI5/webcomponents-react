import{j as e}from"./iframe-l0Gg6LLs.js";import{useMDXComponents as i}from"./index-Cae9Voso.js";import{I as a,F as m}from"./CommandsAndQueries-Clw2dQJN.js";import{M as s,C as p}from"./blocks-C2P3yVo4.js";import"./Tag-CjLUfCmJ.js";import"./index-DCqXNXQw.js";import{C as l}from"./ControlsWithNote-BPBkFbxc.js";import"./copy-B13EJS-v.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-ls20Jl9_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-FAekmb_7.js";import"./index-I7Wz355y.js";import"./index-C2QpZOLo.js";import"./Link-BXQMs19K.js";import"./index-CihYjerb.js";import"./index-lxp-HdMJ.js";import"./index-hvU57qSB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DhC4Vn3X.js";import"./addCustomCSSWithScoping-DDpmsdIj.js";import"./index-Bwbvp4Wo.js";import"./information-BcS3rXju.js";import"./sys-enter-2-BSmamrdx.js";import"./alert-B368tBUy.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dc7jR-KD.js";import"./delete-CYGBhC6b.js";import"./settings-BfR_EbIn.js";import"./NoData-BJEIeC_Z.js";import"./IllustratedMessage-UAYFerO5.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-I-0GEqqm.js";import"./index-DjiXt-x0.js";import"./index-55nh7KaD.js";import"./slim-arrow-down-ZtlK-zaq.js";import"./Input-0cqUaW6-.js";import"./ResponsivePopoverCommon.css-DGJU_sLh.js";import"./ValueStateMessage.css-DCpV9L59.js";import"./Suggestions.css-BIrO0gc4.js";import"./ListBoxItemGroupTemplate-oKbzZNII.js";import"./ComboBoxItemGroup-Bci5GWY6.js";import"./ListItemBaseTemplate-BzqS2Fl5.js";import"./Token-DbjQuNPp.js";import"./ScrollEnablement-CuGe7Q3J.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-1yh_JDGs.js";import"./ToggleButton-BvTjNdfc.js";import"./SuggestionItem-gIvgc1mY.js";import"./index-CBicJKGb.js";import"./Option-MqiGXaOA.js";import"./index-CLXzz8MM.js";import"./SegmentedButton-BnAh5N-e.js";import"./index-B9BehsdP.js";import"./Select-D1jaw_ad.js";import"./InvisibleMessage-DkkMM-lY.js";import"./slim-arrow-down-mLEC8bQM.js";import"./index-wmdfvP4Q.js";import"./index-Cfof4SU3.js";import"./index-CXYWUxgw.js";import"./index-Cad5KvVd.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DwZ3A5h1.js";import"./group-2-j3759jZ3.js";import"./sort-descending-BxAlrwUx.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CHHNw0uv.js";import"./utils-egnNt3B-.js";import"./index-DPc2cZ4_.js";import"./index-CzPfd54r.js";import"./index-fo8z4Qvq.js";import"./navigation-down-arrow-Bp3L9AX_.js";import"./navigation-right-arrow-DgSJmfeF.js";import"./navigation-right-arrow-DHp8bcl8.js";import"./useCurrentTheme-B_bh5PZa.js";import"./index-DrAUXulF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CdRMpk74.js";import"./paper-plane-Db0yyKlT.js";import"./index-crTpvm9q.js";import"./less-_a0dbQtg.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
