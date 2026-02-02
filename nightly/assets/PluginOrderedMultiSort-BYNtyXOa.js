import{j as e}from"./iframe-Cv4sgl-6.js";import{useMDXComponents as i}from"./index-CBIpMKi2.js";import{I as a,F as m}from"./CommandsAndQueries-DF8E8wiu.js";import{M as s,C as p}from"./blocks-DPiPd9tl.js";import"./Tag-BCHKI4FR.js";import"./index-DcbEzSTS.js";import{C as l}from"./ControlsWithNote-BDU2GaF-.js";import"./copy-Bby_UTo9.js";import{PluginOrderedMultiSort as o}from"./AnalyticalTableHooks.stories-INQp-hT_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BbeCayQT.js";import"./index-CtOMiTIA.js";import"./index-CeG26Jn9.js";import"./Link-BXe55YD0.js";import"./index-AkExkdLb.js";import"./index-CP4yHlqi.js";import"./index-C5UblPZZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CEw8P-vI.js";import"./addCustomCSSWithScoping-ChLo0vcI.js";import"./index-BdK0aYpg.js";import"./information-D12ZJp7Z.js";import"./sys-enter-2-B0uzD6GZ.js";import"./alert-BQ9eRDhW.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-C2ITYkkp.js";import"./delete-DQtRiTSG.js";import"./settings-Dk0A1K4B.js";import"./NoData-BOAn2TmF.js";import"./IllustratedMessage-BAzjlPuO.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DADu6Yhz.js";import"./index-CAs4bF1N.js";import"./index-rA2Tcjvx.js";import"./slim-arrow-down-Bf6Fui7_.js";import"./Input-xGZQJYeP.js";import"./ResponsivePopoverCommon.css-Cw4xn9Xp.js";import"./ValueStateMessage.css-DE-funzq.js";import"./Suggestions.css-C80GUOWK.js";import"./ListBoxItemGroupTemplate-CQWOTPZ7.js";import"./ComboBoxItemGroup-BLdB-iSO.js";import"./ListItemBaseTemplate--vPa8nag.js";import"./Token-CwYpSxuy.js";import"./ScrollEnablement-v-_rsCFF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CTpk5hQL.js";import"./ToggleButton-B-VaW9fv.js";import"./SuggestionItem-C0Y5SJOc.js";import"./index-C5Q4zcFL.js";import"./Option-CSv6aS-H.js";import"./index-mZlz45Id.js";import"./SegmentedButton-pcsF7Uy5.js";import"./index-Drcf0CjP.js";import"./Select-ChvSMp55.js";import"./InvisibleMessage-BiO2cmNz.js";import"./slim-arrow-down-DDixet6I.js";import"./index-fR1ydeI4.js";import"./index-t4ibtP2x.js";import"./index-Frn2CwUI.js";import"./index-C00ZbNBs.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CMHUA17f.js";import"./group-2-DKFJVXPV.js";import"./sort-descending-BZ_eceG8.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CONmEwPQ.js";import"./utils-ClsJZxE7.js";import"./index-CKCMkb7R.js";import"./index-DF3mQroB.js";import"./index-rBbRsWS-.js";import"./navigation-down-arrow-rnyvA5q9.js";import"./navigation-right-arrow-Cg2lGj65.js";import"./navigation-right-arrow-DfDNI7Vj.js";import"./useCurrentTheme-Dq6DmLkr.js";import"./index-D6CCWCEn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-mQ6_8rLF.js";import"./paper-plane-Dda63Mdm.js";import"./index-DYNvOxul.js";import"./less-mQVhCLsg.js";function n(r){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useOrderedMultiSort"}),`
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
