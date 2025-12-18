import{j as e}from"./iframe-C7iTiayp.js";import{useMDXComponents as i}from"./index-CMlBI8kK.js";import{I as a,F as m}from"./CommandsAndQueries-Cwf0qDUZ.js";import{M as s,C as p}from"./blocks-BjGmnX8N.js";import"./Tag-CFZhsv-K.js";import"./index-DWyaFLqZ.js";import{C as l}from"./ControlsWithNote-mHKNeEve.js";import"./copy-CkvBTa6Z.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BBNlf_1p.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bi4CD_jF.js";import"./index-CepcJiY6.js";import"./index-BmPAlSpi.js";import"./Link-D4JNNlPq.js";import"./index-fBsRTAa2.js";import"./index-3ZnD0cv6.js";import"./index-zxgrwg2w.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-khcOq4rr.js";import"./addCustomCSSWithScoping-DLqaogwL.js";import"./index-BXtbzqKT.js";import"./information-BMfuHNkn.js";import"./sys-enter-2-wp3WX8g7.js";import"./alert-D64S_sTf.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Bo89s8ys.js";import"./delete-CCDVjtvW.js";import"./settings-BKAeCR2Z.js";import"./NoData-Bf3fSXva.js";import"./IllustratedMessage-_2lGAz-J.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-1kBGmlid.js";import"./index-BgWBB9Nj.js";import"./index-D6FSQNaA.js";import"./slim-arrow-down-DQ4u4tcO.js";import"./Input-Dc29Rl46.js";import"./ResponsivePopoverCommon.css-BuOZvZm3.js";import"./ValueStateMessage.css-BylK2ZGd.js";import"./Suggestions.css-HeG5Oc_t.js";import"./ListBoxItemGroupTemplate-CzMwnapl.js";import"./ComboBoxItemGroup-BwGON5jx.js";import"./ListItemBaseTemplate-DmWIq4QF.js";import"./Token-Bw-ivO-m.js";import"./ScrollEnablement-m0sz45fi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dd95Np6p.js";import"./ToggleButton-C2EcXRa7.js";import"./SuggestionItem-B0EqOaoY.js";import"./index-BbRE-btA.js";import"./Option-CJLLlMWt.js";import"./index-CSbbIXmy.js";import"./SegmentedButton-B2udwM1j.js";import"./index-DDYhMlnk.js";import"./Select-Do7H2USn.js";import"./InvisibleMessage-D1U00Tgj.js";import"./slim-arrow-down-BjRxfcn_.js";import"./index-DQ8hKiqh.js";import"./index-DA0UiR-Z.js";import"./index-S0HdPZGc.js";import"./index-DkOK-tBR.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dc2A1PJb.js";import"./group-2-DDh7CKio.js";import"./sort-descending-tAdmCFu7.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DE_IcfY_.js";import"./utils-DjivXbSk.js";import"./index-D-JJzP2u.js";import"./index-jp7mGW-W.js";import"./index-D3yVkpzL.js";import"./navigation-down-arrow-DGq3-RIe.js";import"./navigation-right-arrow-EXPZKsWP.js";import"./navigation-right-arrow-DuxTVxJD.js";import"./useCurrentTheme-BSh8lxlr.js";import"./index-D1HtHk7r.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CUKUp41V.js";import"./paper-plane-D-TZChdH.js";import"./index-7U_-Ii5q.js";import"./less-DjUmBMvH.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
