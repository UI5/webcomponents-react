import{j as e}from"./iframe-CHtLWowq.js";import{useMDXComponents as i}from"./index-feVj8Ixc.js";import{I as a,F as m}from"./CommandsAndQueries-DR5czvWY.js";import{M as s,C as p}from"./blocks-nN5rw7aP.js";import"./Tag-C6iX9S_m.js";import"./index-ByEvImQf.js";import{C as l}from"./ControlsWithNote-CcP009dO.js";import"./copy-DQeKak9d.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BAd-a0ov.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDqXh-7y.js";import"./index-CuuHGpOq.js";import"./index-BgmENQvG.js";import"./Link-No0hza1O.js";import"./index-CMG_lNnl.js";import"./index-XFju5FGb.js";import"./index-D94_Q-PW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DZJl74Y9.js";import"./addCustomCSSWithScoping-CagFc4YE.js";import"./index-Bf7Ep3_S.js";import"./information-CgT5QDDH.js";import"./sys-enter-2-X-uLXTXK.js";import"./alert-BD_DwGQA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B8YBAHqp.js";import"./delete-Did7L4hm.js";import"./settings-Hqz6CNrz.js";import"./NoData-BthMFeeR.js";import"./IllustratedMessage-CNpK_c-9.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DU5KpDvq.js";import"./index-CHh9zawM.js";import"./index-Ds9oFx6S.js";import"./slim-arrow-down-Bl9kmMTg.js";import"./Input-_Chin8aU.js";import"./ResponsivePopoverCommon.css-BmG1be8B.js";import"./ValueStateMessage.css-D-dMhYxp.js";import"./Suggestions.css-zGIh6gRS.js";import"./ListBoxItemGroupTemplate-BpLHc9An.js";import"./ComboBoxItemGroup-rF-e9FZE.js";import"./ListItemBaseTemplate-CL0KxrsV.js";import"./Token-1bdP-qy8.js";import"./ScrollEnablement-ye8Tkvh6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHXDAL6s.js";import"./ToggleButton-CUCNDDOO.js";import"./SuggestionItem-dlFolDmP.js";import"./index-BhWIeZ_z.js";import"./Option-CfmrmqxB.js";import"./index-BcVuoJlI.js";import"./SegmentedButton-BgNgsNQ9.js";import"./index-C7EtYMlg.js";import"./Select-DoEMEyE5.js";import"./InvisibleMessage-BrUgcFEx.js";import"./slim-arrow-down-BGN2WRYG.js";import"./index-Dw80LcOq.js";import"./index-Bm0U64at.js";import"./index-WMmfi-ne.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nvGUijt2.js";import"./group-2-Bydnd2Pu.js";import"./sort-descending-DADrrbzv.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C6597P5h.js";import"./utils-0fopir6W.js";import"./index-DIe0rbb4.js";import"./index-BgLFYw54.js";import"./index-CHBYKSN4.js";import"./navigation-down-arrow-qwkJsIFx.js";import"./navigation-right-arrow-CE9lGglE.js";import"./navigation-right-arrow-DwKK_E_o.js";import"./useCurrentTheme-XYPwDYan.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B0cKueXn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cjk4hS4a.js";import"./paper-plane-CLZXIdYp.js";import"./index-DSdDmFJ0.js";import"./less-1S2LblnP.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
