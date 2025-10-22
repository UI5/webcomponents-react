import{j as e}from"./iframe-BgUChC8z.js";import{useMDXComponents as n}from"./index-Bt3QSaL1.js";import{I as r,F as s}from"./CommandsAndQueries-BiCzXToa.js";import{M as l,C as a}from"./blocks-xGQg2Vw5.js";import"./Tag-C_OAQHPO.js";import"./index-Wo45_tYZ.js";import"./copy-BTfIxGSH.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CeX0Kyfe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BQfpsC01.js";import"./index-BNFZf5J7.js";import"./index-D4lpRvQf.js";import"./Link-BaaJYg0_.js";import"./index-EZPmIbpG.js";import"./index-I7ioAdFJ.js";import"./index-C5F4agy_.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNw7RwQP.js";import"./addCustomCSSWithScoping-CSlMgmu5.js";import"./index-DUpxdMFd.js";import"./information-B5F-s1Wz.js";import"./sys-enter-2-pPHl1vwI.js";import"./alert-C-NbCkDs.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CD6CHA-o.js";import"./delete-y5lJrBeW.js";import"./settings-Bcfleeh9.js";import"./NoData-D4-LWY5W.js";import"./IllustratedMessage-D98osn7I.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DSUueqrj.js";import"./index-BF4U7j9u.js";import"./index-CWO0kD1j.js";import"./slim-arrow-down-BZSodC91.js";import"./Input-BqX4tKYi.js";import"./ResponsivePopoverCommon.css-DQy2mY97.js";import"./ValueStateMessage.css-BQqInwWq.js";import"./Suggestions.css-CgWQiOZG.js";import"./ListBoxItemGroupTemplate-Bh0XK8An.js";import"./ComboBoxItemGroup-DBigtGMN.js";import"./ListItemBaseTemplate-Di7slU74.js";import"./Token-WW_TgQeI.js";import"./ScrollEnablement-4uXBpXRT.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-J4gk5GHC.js";import"./ToggleButton-BNEU09Z3.js";import"./SuggestionItem-DWN4Mbly.js";import"./index-DUntWQ4O.js";import"./Option-Bz2fFbd9.js";import"./index-KkNhBHx0.js";import"./SegmentedButton-D_JrRdRj.js";import"./index-Db0tKTu3.js";import"./Select-DKO0kXu8.js";import"./InvisibleMessage-DzjrKdqv.js";import"./slim-arrow-down-CAVMB9Lc.js";import"./index-DUG4DuXd.js";import"./index-DybCOYZe.js";import"./index-DxWPnaPh.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Cf4OiQb-.js";import"./group-2-fkT5HhJb.js";import"./sort-descending-6nhlriZW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BdXyFq69.js";import"./utils-aeblRDt6.js";import"./index-BpehBtsx.js";import"./index-CWGNCP4i.js";import"./index-BnZoUZkk.js";import"./navigation-down-arrow-szs85QnW.js";import"./navigation-right-arrow-Du_yn3gH.js";import"./navigation-right-arrow-B69KAuHS.js";import"./useCurrentTheme-B2EMPJa_.js";import"./IndicationColor-DVw-fSM_.js";import"./index-D7MIdb0-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BuukhyP7.js";import"./paper-plane-ChG2uJSU.js";import"./index-DMT0rPiM.js";import"./less-DhsR2zRd.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
`,e.jsx(o.h1,{id:"analyticaltable-plugin-userowdisableselection",children:"AnalyticalTable Plugin: useRowDisableSelection"}),`
`,e.jsx(r,{moduleName:"useRowDisableSelection",packageName:"@ui5/webcomponents-react/AnalyticalTableHooks"}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Deprecated!"})," It is not recommended to disable table rows, mainly because of the following reasons:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:"Users are not informed why items cannot be selected."}),`
`,e.jsx(o.li,{children:"ARIA lacks built-in support for selective item selection, complicating accessibility."}),`
`,e.jsx(o.li,{children:"Consistency to other applications which do not offer disabled items."}),`
`]}),`
`,e.jsx("hr",{}),`
`,e.jsxs(o.p,{children:["With the ",e.jsx(o.code,{children:"useRowDisableSelection"})," it's possible to disable the selection of specific rows. It can receive two types of parameters:"]}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"string"}),": Defines the key in the dataset for disabling rows. If the value of the key is ",e.jsx(o.code,{children:"true"}),", then the row will not be selectable."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"Function(row) => boolean"}),": Programmatically disable rows for selection. The function receives the current row as parameter."]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"}),' The "Select All" checkbox is not available with this hook.']}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note:"})," Using this hook in combination with the ",e.jsx(o.code,{children:"useIndeterminateRowSelection"})," hook is not supported!"]}),`
`,e.jsx(a,{sourceState:"none",of:m}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const disableRowFunc = (row) => row.original.age < 40;
const tableHooks = [useRowDisableSelection(disableRowFunc)]; // this array should be memoized

const WithFunctionParameter = () => {

  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};

`})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`const data = [
  {
    name: "Peter Franco",
    age: 22,
    //...
    disableSelection: Math.random() < 0.5,
  },
  //...
];
const tableHooks = [useRowDisableSelection("disableSelection")]; // this array should be memoized

const WithStringParameter = () => {
  return (
    <AnalyticalTable
      data={data}
      columns={columns}
      selectionMode={AnalyticalTableSelectionMode.Multiple}
      tableHooks={tableHooks}
    />
  );
};
`})}),`
`,e.jsx(s,{})]})}function Xe(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Xe as default};
