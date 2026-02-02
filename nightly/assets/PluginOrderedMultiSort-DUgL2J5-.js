import{j as e}from"./iframe-DW8uOQp0.js";import{useMDXComponents as i}from"./index-DjfSR8mu.js";import{I as a,F as m}from"./CommandsAndQueries-CfxeF-Et.js";import{M as s,C as p}from"./blocks-B-FDorPY.js";import"./Tag-DZD94rKb.js";import"./index-B6OSuhq3.js";import{C as l}from"./ControlsWithNote-TxyFHGCU.js";import"./copy-BPjUZJw9.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-Cjfv9lZ_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-wMLjz3fG.js";import"./index-BIXJrD8M.js";import"./index-DHspvyEH.js";import"./Link-DBMfTmkv.js";import"./index-DCmHXknG.js";import"./index-B1HFxIWl.js";import"./index-BlVT_NLP.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BqxCMWvb.js";import"./addCustomCSSWithScoping-InFg9UZ2.js";import"./index-BettgKsC.js";import"./information-Dh4y9R_M.js";import"./sys-enter-2-DblypcwG.js";import"./alert-CwT2Bhtr.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Ccy1h0ZZ.js";import"./delete-CAh52cIa.js";import"./settings-Bq4r6lp7.js";import"./NoData-Wb2Eh2l8.js";import"./IllustratedMessage-59yIC32s.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-BanPL-9P.js";import"./index-BM97U_Id.js";import"./index-95RptXAb.js";import"./slim-arrow-down-DUDQ1G7d.js";import"./Input-BtplTNuz.js";import"./ResponsivePopoverCommon.css-BwZTAXmn.js";import"./ValueStateMessage.css-2teNoYXT.js";import"./Suggestions.css-GVLxyP7E.js";import"./ListBoxItemGroupTemplate-xi9Dai9-.js";import"./ComboBoxItemGroup-CYvZfMur.js";import"./ListItemBaseTemplate-jJed8ANY.js";import"./Token-CXlJ8X_s.js";import"./ScrollEnablement-BuIEarCH.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BakyJ71F.js";import"./ToggleButton-Dmg-mtR4.js";import"./SuggestionItem-JYWpCC6O.js";import"./index-O4brpd7h.js";import"./Option-lTsEHPaz.js";import"./index-DM3wbu2J.js";import"./SegmentedButton-dnl0_LO7.js";import"./index-BW8wCqLg.js";import"./Select-B-GQjth7.js";import"./InvisibleMessage-BCjehSQX.js";import"./slim-arrow-down-Nj2WlNU_.js";import"./index-DA7mVkNb.js";import"./index-CUWHnjz1.js";import"./index-2WqQUSOe.js";import"./index-7R16Plue.js";import"./IconDesign-DXd8PPVF.js";import"./filter-xApDoQhv.js";import"./group-2-D9KCRiYo.js";import"./sort-descending-sPt6c51s.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BS_N9hv6.js";import"./utils-DCPEwa5n.js";import"./index-CX98XYz1.js";import"./index-Ci1baq6U.js";import"./index-BKui1p5j.js";import"./navigation-down-arrow-kptVdaed.js";import"./navigation-right-arrow-CDK-kpp0.js";import"./navigation-right-arrow-BRtJ_VL9.js";import"./useCurrentTheme-CXTKA9u6.js";import"./index-D4VjyumX.js";import"./debounce-D7W5PopO.js";import"./useIsRTL--X6IcLkp.js";import"./paper-plane-a-F37SE4.js";import"./index-CSdQr0-4.js";import"./less-C3jyfe8r.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
