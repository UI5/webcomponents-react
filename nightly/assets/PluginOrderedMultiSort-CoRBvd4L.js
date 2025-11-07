import{j as e}from"./iframe-DGnDchDQ.js";import{useMDXComponents as i}from"./index-gqhlbnnP.js";import{I as a,F as m}from"./CommandsAndQueries-nFfK_W-O.js";import{M as s,C as p}from"./blocks-CpnEbXW7.js";import"./Tag-Bqlxcgw6.js";import"./index-ab40gpM3.js";import{C as l}from"./ControlsWithNote-Bpt7dSeq.js";import"./copy-DiOqbFXx.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-BTvfSlOu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D8BbDNnv.js";import"./index-C1Lkwl5k.js";import"./index-DBMKQPCi.js";import"./Link-DlCRMPDC.js";import"./index--LdK-cim.js";import"./index-DwBLo3Dd.js";import"./index-CHVAkMFk.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DKYdG7d4.js";import"./addCustomCSSWithScoping-loT15OrI.js";import"./index-BpzOuhJc.js";import"./information-C_x76Wro.js";import"./sys-enter-2-C7D1DjDO.js";import"./alert-Bv5R7OxS.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DdqJa0mU.js";import"./delete-BE1PBYXz.js";import"./settings-BAjMM07B.js";import"./NoData-RpKJOQtT.js";import"./IllustratedMessage-BUXdJOQa.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-COZ-85wq.js";import"./index-DDW91UyV.js";import"./index-DU55bLzP.js";import"./slim-arrow-down-co0mwyOK.js";import"./Input-CaqdVj6e.js";import"./ResponsivePopoverCommon.css-Br3rrJZc.js";import"./ValueStateMessage.css-CHKpDORf.js";import"./Suggestions.css-DqURt6WR.js";import"./ListBoxItemGroupTemplate-B26xTI50.js";import"./ComboBoxItemGroup-CoPptm90.js";import"./ListItemBaseTemplate-BVD1phCE.js";import"./Token-BF1rX6rG.js";import"./ScrollEnablement-CKB2L65n.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-9i9lbvrA.js";import"./ToggleButton-CWVqj_J_.js";import"./SuggestionItem-DRXtzHoL.js";import"./index-BYs6kOFB.js";import"./Option-kCDR0Dm6.js";import"./index-DiHvbKWq.js";import"./SegmentedButton-7ThStUDC.js";import"./index-Bf5jvAmF.js";import"./Select-rYtMqXh7.js";import"./InvisibleMessage-BzbFhHWs.js";import"./slim-arrow-down-CnIeCsYc.js";import"./index-BWAWA91T.js";import"./index-C_6mlYi2.js";import"./index-Bk6kEH1k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DrOZNGpr.js";import"./group-2-BkKxU7TT.js";import"./sort-descending-BfKrVPDc.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CRICYRQq.js";import"./utils-C0I-T_5s.js";import"./index-Dr0nkd7d.js";import"./index-KV9RZy53.js";import"./index-D808ykgs.js";import"./navigation-down-arrow-BwWk1dVU.js";import"./navigation-right-arrow-BBaPKo9n.js";import"./navigation-right-arrow-DV_J89S_.js";import"./useCurrentTheme-LA5drGg4.js";import"./IndicationColor-DVw-fSM_.js";import"./index-AvaiyNj6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-KjkI_mtd.js";import"./paper-plane-jT_LadMY.js";import"./index-BiBB6OBn.js";import"./less-De-Tz2uD.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
