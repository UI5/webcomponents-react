import{j as e}from"./iframe-RbfDHgLf.js";import{useMDXComponents as i}from"./index-DqV7dpjg.js";import{I as a,F as m}from"./CommandsAndQueries-zsQY2vaX.js";import{M as s,C as p}from"./blocks-B3C8l8xN.js";import"./Tag-HesnxFVA.js";import"./index-COZ8g4Eg.js";import{C as l}from"./ControlsWithNote-CdwZagHS.js";import"./copy-DMiueq1X.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-dNx3iOmq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHnVbXcX.js";import"./index-BJgLq48U.js";import"./index-CDE_0yIR.js";import"./Link-CqIOijGY.js";import"./index-T-3zE_IB.js";import"./index-CfYa6cQq.js";import"./index-CCjAf9sJ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DGqdfIsV.js";import"./addCustomCSSWithScoping-BLrotaH2.js";import"./index-Krk892ln.js";import"./information-DD6Au7ei.js";import"./sys-enter-2-CTkUcSDp.js";import"./alert-CtWiOE8L.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CeOX064v.js";import"./delete-DcwaPxBU.js";import"./settings-D6tudNLA.js";import"./NoData-Cl4Qbgty.js";import"./IllustratedMessage-DexV73H4.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-C3FPWFSN.js";import"./index-Cof-wcXi.js";import"./index-DTmXjenP.js";import"./slim-arrow-down-C6-37eiK.js";import"./Input-C6IaGQuM.js";import"./ResponsivePopoverCommon.css-BazxGA3A.js";import"./ValueStateMessage.css-DlSYdh2h.js";import"./Suggestions.css-BiueOOBD.js";import"./ListBoxItemGroupTemplate-CTGhd4B4.js";import"./ComboBoxItemGroup-nRyFLP8z.js";import"./ListItemBaseTemplate-C5ft9Md7.js";import"./Token-CnNyhnHs.js";import"./ScrollEnablement-BhIRzZQ-.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-LHwr1u0j.js";import"./ToggleButton-Ck80PIY6.js";import"./SuggestionItem-ydkFeLIs.js";import"./index-C97MBkt1.js";import"./Option-Br7hY4me.js";import"./index-H6IWsr_r.js";import"./SegmentedButton-CZ-yOp_Q.js";import"./index-CWlsW_rN.js";import"./Select-Bvdl5zc6.js";import"./InvisibleMessage-DajdZnZt.js";import"./slim-arrow-down-DNyYURKC.js";import"./index-BHXvhFiH.js";import"./index-DzCgTQEv.js";import"./index-Bf3cZXmJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C8wkfIGx.js";import"./group-2-DF-sgjHz.js";import"./sort-descending-CZjeMqQF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-zFlUhoit.js";import"./utils-IhqywFcl.js";import"./index-CtCdIWLz.js";import"./index-C5SUxDyi.js";import"./index-nwkxsEd-.js";import"./navigation-down-arrow-BLAyWJF_.js";import"./navigation-right-arrow-DkJ4m7Up.js";import"./navigation-right-arrow-DkhAVYbD.js";import"./useCurrentTheme-Cl67aZzc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-qW62GUHL.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BkQwBtqx.js";import"./paper-plane-B3UbNLhn.js";import"./index-B5lPdsla.js";import"./less-lHgyge0z.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
