import{j as e}from"./iframe-DoasxszC.js";import{u as i,M as a,C as m}from"./blocks-DBX_G92C.js";import{I as s}from"./CommandsAndQueries-Bg5oLjv_.js";import"./Tag-DCvAsOsB.js";import"./index-Bkq6_nAR.js";import{C as p}from"./ControlsWithNote-B6cTbFDY.js";import"./copy-Bp1X0rrX.js";import{F as l}from"./Footer-BMRkHXkr.js";import"./PageNotFound-DlCPYtCu.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CwBfsyPl.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CvHgBQZc.js";import"./index-Dl7LQ4u1.js";import"./index-BxFkVED5.js";import"./index-UQi-W-Cc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CwB0h3WK.js";import"./addCustomCSSWithScoping-D15HIh5y.js";import"./index-CY9OUOeY.js";import"./index-C3bV2_l1.js";import"./index-DUsiHM8W.js";import"./information-C1mBwnJc.js";import"./sys-enter-2-D2TESZyh.js";import"./alert-CWEkUWZv.js";import"./index-BuSM4uik.js";import"./Illustrations-B4E_SvFf.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-FUb71t84.js";import"./delete-BNsJIylK.js";import"./settings-DIZQIGHO.js";import"./NoData-CPifF9dk.js";import"./NoFilterResults-pjvoSbdT.js";import"./index-CS1yMP3E.js";import"./IllustratedMessage-D0QVBew0.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-B7aSEDJ1.js";import"./Input-xqXXZk7V.js";import"./ResponsivePopoverCommon.css-ClOyFMHE.js";import"./ValueStateMessage.css-CQfpuydp.js";import"./Suggestions.css-DgSzBLOP.js";import"./ListBoxItemGroupTemplate-CnyFVUQh.js";import"./ComboBoxItemGroup-C6J1oEbB.js";import"./ListItemBaseTemplate-56RYrvsT.js";import"./Token-Cy2nK-8H.js";import"./ScrollEnablement-Ct30bxH4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-f5cQaHwh.js";import"./ToggleButton-4lEDIg8i.js";import"./multiselect-all-CrwvgfDL.js";import"./SuggestionItem-BUm69vbz.js";import"./index-DujjVqPC.js";import"./Option-qr-0CuEo.js";import"./index-DKO_VCMs.js";import"./SegmentedButton-C_BxO-nh.js";import"./index-Bfc0n9xu.js";import"./Select-DyTpHhQN.js";import"./InvisibleMessage-CpFdH-Af.js";import"./index-Dodkzra4.js";import"./index-B5xDE1PM.js";import"./index-B3gSZvjn.js";import"./index-DXinWdIe.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CXOaaD8X.js";import"./group-2-DOt9casX.js";import"./sort-descending-CSa9QeUi.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BLz5gwPO.js";import"./utils-CI2Ukgk8.js";import"./index-CpTTgPof.js";import"./index-C7-ObCq_.js";import"./index-DfjuUSBw.js";import"./navigation-down-arrow-BAtAokVf.js";import"./navigation-right-arrow-BiRIP0c6.js";import"./navigation-right-arrow-CIOXuOhx.js";import"./useCurrentTheme-CsrucE5U.js";import"./index-D8ci1hZC.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BFJsr9kq.js";import"./paper-plane-CktOgF6u.js";import"./index-KS5Bmaht.js";import"./less-CflKdUlr.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
