import{j as e}from"./iframe-Cx-m_Nf0.js";import{useMDXComponents as i}from"./index-Danm_hzB.js";import{I as a,F as m}from"./CommandsAndQueries-wiGvioaD.js";import{M as s,C as p}from"./blocks-BeOH24VU.js";import"./Tag-CULcfvQz.js";import"./index-JZ9249rN.js";import{C as l}from"./ControlsWithNote-CHlEonAj.js";import"./copy-saj_hA78.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CQ1Q9bJG.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BkCtcCNV.js";import"./index-BRPuZYCF.js";import"./index-D-dAoXo8.js";import"./Link-CR1SnY-5.js";import"./index-D0XJTq9Q.js";import"./index-B10MFmnl.js";import"./index-bcKxXY3o.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Hev4WvRm.js";import"./addCustomCSSWithScoping-CdsdDkDi.js";import"./index-DROJnCko.js";import"./information-CEQNZlPN.js";import"./sys-enter-2-AhkD0MnF.js";import"./alert-Bji-b9H2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D1-JQb3f.js";import"./delete-Bl2x4rU1.js";import"./settings-Bv6hFb-P.js";import"./NoData-CSJ_na3c.js";import"./IllustratedMessage-CPrK3i7_.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-bu6kmgxW.js";import"./index-BSHVbo6V.js";import"./index-eSExnXlh.js";import"./slim-arrow-down-DKAHurNq.js";import"./Input-BGkNvg04.js";import"./ResponsivePopoverCommon.css-BuTMFQw1.js";import"./ValueStateMessage.css-DkCm038q.js";import"./Suggestions.css-C3EK_z35.js";import"./ListBoxItemGroupTemplate-BFkq-NXI.js";import"./ComboBoxItemGroup-BKPCcMXX.js";import"./ListItemBaseTemplate-2sNFKkfz.js";import"./Token-BqrAbKWZ.js";import"./ScrollEnablement-BylCXS9j.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bo_f_yy9.js";import"./ToggleButton-9pjROLTu.js";import"./SuggestionItem-6D6ujuPl.js";import"./index-CKUsXBNu.js";import"./Option-DzMmQowO.js";import"./index-BWv5ujwm.js";import"./SegmentedButton-Cj4yij2C.js";import"./index-BLOeq_DJ.js";import"./Select-FmZbtvvG.js";import"./InvisibleMessage-D-MV8Msz.js";import"./slim-arrow-down-DMPgem2M.js";import"./index-BKf9Irue.js";import"./index-D3zHQWzc.js";import"./index-Cp-3_oQg.js";import"./IconDesign-DXd8PPVF.js";import"./filter-3mU9MEPJ.js";import"./group-2-Bro4NNr1.js";import"./sort-descending-DjJ8E8sw.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DF9ssoyr.js";import"./utils-BNoG9b0S.js";import"./index-dmgo9yxd.js";import"./index-CLBMOU_H.js";import"./index-TIjwWRgv.js";import"./navigation-down-arrow-BGKJSbuE.js";import"./navigation-right-arrow-DxbKKfUO.js";import"./navigation-right-arrow-BTVVtZ0b.js";import"./useCurrentTheme-Dm6R4j9A.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CF38bavx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BF52L7PE.js";import"./paper-plane-CbELQrqU.js";import"./index-B-qCzqdY.js";import"./less-DMl7Bxfb.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
