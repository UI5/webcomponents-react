import{j as e}from"./iframe-Biw_3dDT.js";import{useMDXComponents as i}from"./index-BMMnaqrc.js";import{I as a,F as m}from"./CommandsAndQueries-D0Z7WxPl.js";import{M as s,C as p}from"./blocks-CG1UjEbO.js";import"./Tag-CRWtagqn.js";import"./index-Cn2rXDmw.js";import{C as l}from"./ControlsWithNote-D6JbSpo_.js";import"./copy-DH1R2EGq.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-C2Xb6pBm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqgdtVzi.js";import"./index-CFI750DE.js";import"./index-BN4lukMo.js";import"./Link-DWk7vFCs.js";import"./index-BoXMWtRz.js";import"./index-Cs0jPH4S.js";import"./index-N2M8yHQs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeslUd9A.js";import"./addCustomCSSWithScoping-DYYTTL4w.js";import"./index-BJYjY6km.js";import"./information-DBapFp0Y.js";import"./sys-enter-2-CEmGCFWp.js";import"./alert-DjZ7TPZE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CeUXtSMt.js";import"./delete-BCgK7hyI.js";import"./settings-DzTZGwhB.js";import"./NoData-DKz1kKuV.js";import"./IllustratedMessage-DXuv23_m.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CEF4y9VB.js";import"./index-C32xzwv9.js";import"./index-DLpedh-q.js";import"./slim-arrow-down-cCYJhXL4.js";import"./Input-Bw_MUO_q.js";import"./ResponsivePopoverCommon.css-C-V5noYQ.js";import"./ValueStateMessage.css-ByBg6XPZ.js";import"./Suggestions.css-bib_WhRC.js";import"./ListBoxItemGroupTemplate-CFztLzRm.js";import"./ComboBoxItemGroup-CDJ_c_MY.js";import"./ListItemBaseTemplate-CfwWbg0i.js";import"./Token-DiWIZ29Z.js";import"./ScrollEnablement-bgT4DI50.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DVrrwFh6.js";import"./ToggleButton-DHvaMwSS.js";import"./SuggestionItem-DULb_g75.js";import"./index-2OJQec-L.js";import"./Option-BcYuvlB6.js";import"./index-BpN_VVJi.js";import"./SegmentedButton-pFLbx0qK.js";import"./index-CZPmvqSA.js";import"./Select-DCBgibxv.js";import"./InvisibleMessage-C2StTKZh.js";import"./slim-arrow-down-DdZdWXqJ.js";import"./index-DxlfJkCF.js";import"./index-BO0ARibj.js";import"./index-DTPD7XSM.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CE52_svi.js";import"./group-2-BOK7IKie.js";import"./sort-descending-BabW8yOs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DXQkuKDh.js";import"./utils-DqOKa6xr.js";import"./index-aoNvrQgQ.js";import"./index-DrWwSftw.js";import"./index-CDWqnF0I.js";import"./navigation-down-arrow-CuzvgjyX.js";import"./navigation-right-arrow-C4bDXXx0.js";import"./navigation-right-arrow-D8ltxNFm.js";import"./useCurrentTheme-DLWoHXHT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DdJKFclu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BOO113xH.js";import"./paper-plane-D1iJTi1P.js";import"./index-iNA5KBB_.js";import"./less-BmfWAKtR.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
