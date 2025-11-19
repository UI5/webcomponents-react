import{j as e}from"./iframe-DDMtxVo3.js";import{useMDXComponents as i}from"./index-DJVQNbCr.js";import{I as a,F as m}from"./CommandsAndQueries-GL7iyaCL.js";import{M as s,C as p}from"./blocks-CloLtOA5.js";import"./Tag-YMrSkp2O.js";import"./index-DsF6G_NH.js";import{C as l}from"./ControlsWithNote-BTWSyMXk.js";import"./copy-BTGdlJRd.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BN0Ao-_m.js";import"./preload-helper-PPVm8Dsz.js";import"./index-rp8XBFdR.js";import"./index-BHqqB-9b.js";import"./index-ayjT0mLt.js";import"./Link-D3MGth0a.js";import"./index-BbSpKNs2.js";import"./index-DIh6sAKH.js";import"./index-BeupWmR_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-IIlbXN7B.js";import"./addCustomCSSWithScoping-CwVVs2bm.js";import"./index-DtIsK-ZK.js";import"./information-CyNj2j11.js";import"./sys-enter-2-Go-dkBfP.js";import"./alert-jQ4OjDPb.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BF0Of00g.js";import"./delete-Is_zNJTb.js";import"./settings-DLZSygz9.js";import"./NoData-D2SWaRbW.js";import"./IllustratedMessage-Y2lySBW0.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-eecdh7SK.js";import"./index-n5WxUc-1.js";import"./index-CyCKI4kh.js";import"./slim-arrow-down-B9fX2pE_.js";import"./Input-DldSM5Dd.js";import"./ResponsivePopoverCommon.css-r6Yy0Fkp.js";import"./ValueStateMessage.css-CBQfZKeo.js";import"./Suggestions.css-Ce_nnZbO.js";import"./ListBoxItemGroupTemplate-jkoaDovc.js";import"./ComboBoxItemGroup-DEv9jHmD.js";import"./ListItemBaseTemplate-D5kLl8tB.js";import"./Token-CpnDDN9x.js";import"./ScrollEnablement-CHq8jwQp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CvaRS6qD.js";import"./ToggleButton-B8VJwrvR.js";import"./SuggestionItem-CkiJy6SK.js";import"./index-vS3KmlTg.js";import"./Option-Bmii2PEM.js";import"./index-cYHXc0IN.js";import"./SegmentedButton-Bch0JHMn.js";import"./index-Ce_ybWMS.js";import"./Select-nmxyrizQ.js";import"./InvisibleMessage-CxUh_0D_.js";import"./slim-arrow-down-C-tgvolj.js";import"./index-Dih0csuE.js";import"./index-C98BWsva.js";import"./index-DkqGVu91.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DDA1WG-X.js";import"./group-2-CrgQgZu8.js";import"./sort-descending-VzaHQEUN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Bk6vRLMI.js";import"./utils-cWgc0sgc.js";import"./index-D-dIkc7q.js";import"./index-WTvN1xUf.js";import"./index-Boa8xecP.js";import"./navigation-down-arrow-DhowEsmp.js";import"./navigation-right-arrow-rputrWNy.js";import"./navigation-right-arrow-BdCl3OJM.js";import"./useCurrentTheme-Cvsq9vBh.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CEfFIx_c.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DfGZzaea.js";import"./paper-plane-D2Eg3sKl.js";import"./index-DJj1SKu0.js";import"./less-DAJEncVK.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
