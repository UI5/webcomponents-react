import{j as e}from"./iframe-DNwXmN6w.js";import{useMDXComponents as i}from"./index-Dbs3KJZC.js";import{I as a,F as m}from"./CommandsAndQueries-BAoKQ9N_.js";import{M as s,C as p}from"./blocks-ClaQShTE.js";import"./Tag-9F78ZQdp.js";import"./index-CYGT2EhP.js";import{C as l}from"./ControlsWithNote-BubmKZw0.js";import"./copy-EN-_ABXk.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BZM3hVda.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DuyT38UB.js";import"./index-aVApIanM.js";import"./index-B8OlZcJ4.js";import"./Link-C02NJVw1.js";import"./index-BLy7Rxlq.js";import"./index-nHmWKiTx.js";import"./index-rN24S36o.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNrVdT-5.js";import"./addCustomCSSWithScoping-os-Xpktn.js";import"./index-CBh039oE.js";import"./information-BcSrdT-8.js";import"./sys-enter-2-D4ODuMey.js";import"./alert-Dl0J_z1v.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BcYwBA_x.js";import"./delete-Dtc6qBdo.js";import"./settings-C20orWJs.js";import"./NoData-Byql5GFI.js";import"./IllustratedMessage-C9HIxcU1.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DTwOmFng.js";import"./index-BwEwheLw.js";import"./index-CxqQ6lo_.js";import"./slim-arrow-down-yZ0Tj4rx.js";import"./Input-D1jql1AB.js";import"./ResponsivePopoverCommon.css-CsNV6Vt5.js";import"./ValueStateMessage.css-BmoKZehd.js";import"./Suggestions.css-BLseB_qJ.js";import"./ListBoxItemGroupTemplate-GrRfxRtW.js";import"./ComboBoxItemGroup-DmaBTCoh.js";import"./ListItemBaseTemplate-D49sgBgx.js";import"./Token-ikM9Yg4E.js";import"./ScrollEnablement-COWapJBB.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-B8xPVlSO.js";import"./ToggleButton-DjAWyQjE.js";import"./SuggestionItem-CApmioZF.js";import"./index-D3KttqVU.js";import"./Option-8CI-W5Cq.js";import"./index-DaNCv0Ie.js";import"./SegmentedButton-DqUwoUgZ.js";import"./index-Dk7WoR1Z.js";import"./Select-1NfyOvLt.js";import"./InvisibleMessage-R_WRhHfZ.js";import"./slim-arrow-down-DIzrL0Ja.js";import"./index-D3Y3n4MX.js";import"./index-DH1Xng6k.js";import"./index-DJpZsV5v.js";import"./IconDesign-DXd8PPVF.js";import"./filter-B4pAXERK.js";import"./group-2-FR_0GSEN.js";import"./sort-descending-DgjdOMTK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dr-gnZgG.js";import"./utils-DWArTzFQ.js";import"./index-C9vTuVR-.js";import"./index-neKxXX_y.js";import"./index-COFqXK4G.js";import"./navigation-down-arrow-D7lpxDjD.js";import"./navigation-right-arrow-BSI1uudB.js";import"./navigation-right-arrow-BqhiEzIr.js";import"./useCurrentTheme-Wc2uAQz5.js";import"./IndicationColor-DVw-fSM_.js";import"./index-BA4HNUEX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ClLbQDrb.js";import"./paper-plane-BeRQVn6H.js";import"./index-CdrtxYXr.js";import"./less-_akB46eN.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
