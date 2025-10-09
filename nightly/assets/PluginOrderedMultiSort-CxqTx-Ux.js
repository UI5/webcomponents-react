import{j as e}from"./iframe-D7FikSiu.js";import{useMDXComponents as i}from"./index-BenG4a-h.js";import{I as a,F as m}from"./CommandsAndQueries-DD_YKX8j.js";import{M as s,C as p}from"./blocks-Yxlvk0d_.js";import"./Tag-CPn9c9wp.js";import"./index-C7R8Sd2K.js";import{C as l}from"./ControlsWithNote-BVRLUUJy.js";import"./copy-BeTo-Yk5.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Uzzik8A7.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C3kgqoQY.js";import"./index-BmpVzGJg.js";import"./index-DD0ZDplT.js";import"./Link-VxMUEtoN.js";import"./index-BlrcmYdd.js";import"./index-BWKg7Ny9.js";import"./index-sclNFwhc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DXj9DeaS.js";import"./addCustomCSSWithScoping-qQ8FRtdZ.js";import"./index--O96gYhw.js";import"./information-uIClPmp3.js";import"./sys-enter-2-CoINRXQ6.js";import"./alert-C1AwfvUs.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cjeu2iUC.js";import"./delete-BXFFeGva.js";import"./settings-Bhg9hIqQ.js";import"./NoData-8lo0EfIA.js";import"./IllustratedMessage-B5ILd7Ma.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-D2FL1NIC.js";import"./index-D5KmdhfP.js";import"./index-BHdGppro.js";import"./slim-arrow-down-BjtIk1Vi.js";import"./Input-C3GQwp16.js";import"./ResponsivePopoverCommon.css-B-7xEFrO.js";import"./ValueStateMessage.css-Bp6Kzpn5.js";import"./Suggestions.css-C4deLYKC.js";import"./ListBoxItemGroupTemplate-CulA1MXP.js";import"./ComboBoxItemGroup-Ybx5jZca.js";import"./ListItemBaseTemplate-CbRHzmQ9.js";import"./Token-lKzfIqgl.js";import"./ScrollEnablement-Bra0pK8m.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CSDUnyyJ.js";import"./ToggleButton-Kp4VbK29.js";import"./SuggestionItem-CDgnoOkn.js";import"./index-BAC7wPZF.js";import"./Option-DjNP2NBe.js";import"./index-g5ankLTt.js";import"./SegmentedButton-DsD65c1s.js";import"./index-BLAF6B_L.js";import"./Select-DFH78pAA.js";import"./InvisibleMessage-CE6DvnfR.js";import"./slim-arrow-down-Cck_1u4G.js";import"./index-DPXWYJb-.js";import"./index-BS9hfto9.js";import"./index-BzlJw7GH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DJs2hvRJ.js";import"./group-2-B__7xwg1.js";import"./sort-descending-Bt7-iKHQ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C5trjv0F.js";import"./utils-D4gyi2F6.js";import"./index-DUVjrMwJ.js";import"./index-Bp47sPZA.js";import"./index-C0B2CC00.js";import"./navigation-down-arrow-CBaTncM0.js";import"./navigation-right-arrow-r_WuPSCR.js";import"./navigation-right-arrow-BiAQ_euc.js";import"./useCurrentTheme-gi6l8GiI.js";import"./IndicationColor-DVw-fSM_.js";import"./index-C_vb2NYJ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C49MPlLC.js";import"./paper-plane-DDXSGztm.js";import"./index-7ywSorqo.js";import"./less-Bg7OXZ8n.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
