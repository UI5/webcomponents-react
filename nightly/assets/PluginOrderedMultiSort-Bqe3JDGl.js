import{j as e}from"./iframe-CA3Ho9Q5.js";import{useMDXComponents as i}from"./index-BSP_ypsD.js";import{I as a,F as m}from"./CommandsAndQueries-CpnGQ0tY.js";import{M as s,C as p}from"./blocks-duj_cvae.js";import"./Tag-C7EDP0wF.js";import"./index-B2KbXcP2.js";import{C as l}from"./ControlsWithNote-DvkiAanr.js";import"./copy-Cirx0xPf.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-CX2YmmH7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CS7zB70b.js";import"./index-B1DuQcex.js";import"./index-Cj36scYa.js";import"./Link-B9lvI_mX.js";import"./index-Vj9BxWeO.js";import"./index-DJDcB98R.js";import"./index-CnX6lHZc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CziqpW1M.js";import"./addCustomCSSWithScoping-CmwUGghA.js";import"./index-QQ_2tXfB.js";import"./information-D0PKU0zc.js";import"./sys-enter-2-BzmXGgFI.js";import"./alert-DOfQq82s.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-pSB3nE8O.js";import"./delete-xPoZJBZg.js";import"./settings-sBnL1p2q.js";import"./NoData-Bjn-uhcG.js";import"./IllustratedMessage-C1nIamAf.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CBaUn8xf.js";import"./index-0bZDwJmd.js";import"./index-CM7WhKj6.js";import"./slim-arrow-down-C3eZfZh-.js";import"./Input-CVKYZVtQ.js";import"./ResponsivePopoverCommon.css-HLQwWCxH.js";import"./ValueStateMessage.css-DfbuXwvj.js";import"./Suggestions.css-iNzzcrss.js";import"./ListBoxItemGroupTemplate-D0iaKul1.js";import"./ComboBoxItemGroup-DZa5aCxI.js";import"./ListItemBaseTemplate-VtML0_fs.js";import"./Token-BPQsJP1e.js";import"./ScrollEnablement-Dip40C-m.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DKlWXx6n.js";import"./ToggleButton-B5e8_eSy.js";import"./SuggestionItem-ii4KscYX.js";import"./index-CNQ8GyV9.js";import"./Option-0FkMbiJ5.js";import"./index-BLzjPo3w.js";import"./SegmentedButton-B-4keN_u.js";import"./index-CRVjoIym.js";import"./Select-BslhBdoh.js";import"./InvisibleMessage-BF5OzUJ0.js";import"./slim-arrow-down-CLco8maH.js";import"./index-DFRTyKxs.js";import"./index-BHNHxsyD.js";import"./index-BtK-IhRn.js";import"./index-BLZkVtTr.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BTIOOdab.js";import"./group-2-DeuvYpMF.js";import"./sort-descending-Dfh9oR0a.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-U8bJ6mPR.js";import"./utils-mN_QxSrv.js";import"./index-DWY9VANS.js";import"./index-NiE7rD6V.js";import"./index-CnEeNT_m.js";import"./navigation-down-arrow-CEMVxfUW.js";import"./navigation-right-arrow-pdf4AWX0.js";import"./navigation-right-arrow-C4WsPtKq.js";import"./useCurrentTheme-B-RCzITw.js";import"./index-Cjnz1VnT.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D8Jpu7PP.js";import"./paper-plane-GfWk7Nnh.js";import"./index-Bgs4bEEy.js";import"./less-tNpUXr9m.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
