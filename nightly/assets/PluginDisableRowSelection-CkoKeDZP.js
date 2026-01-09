import{j as e}from"./iframe-Cr6oQmRd.js";import{useMDXComponents as n}from"./index-evhaF9WH.js";import{I as r,F as s}from"./CommandsAndQueries-DyaEp24s.js";import{M as l,C as a}from"./blocks-BuJgXu1r.js";import"./Tag-BQohtkMw.js";import"./index-C0N3ti0U.js";import"./copy-CZb07l2e.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CNSO2-Yr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-TJ6Pynu-.js";import"./index-ClHBD-hy.js";import"./index-D3MvNgPx.js";import"./Link-Zz-QOIrn.js";import"./index-DcIQ9jq2.js";import"./index-D6mcpJOs.js";import"./index-L71irp-N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN2SmbWo.js";import"./addCustomCSSWithScoping-zjLKSZUa.js";import"./index-1zaXUkR9.js";import"./information-ClN6WTRB.js";import"./sys-enter-2-Bqn_SCi3.js";import"./alert-D5OzLbEL.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BHLyNJm_.js";import"./delete-Pbj3X59-.js";import"./settings-DaBUhecZ.js";import"./NoData-8f9QU6Au.js";import"./IllustratedMessage-DEbMLr2Z.js";import"./i18n-defaults-BTYpTGpY.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-DPPo2QH7.js";import"./index-lGIOGYW2.js";import"./index-dhnNfvqN.js";import"./slim-arrow-down-DRXwOi-S.js";import"./Input-Cdi1ONYj.js";import"./ResponsivePopoverCommon.css-Cg9mOybv.js";import"./ValueStateMessage.css-D7Snw4FC.js";import"./Suggestions.css-BnQBqKbG.js";import"./ListBoxItemGroupTemplate-BTBetl9N.js";import"./ComboBoxItemGroup-CF3RQPEz.js";import"./ListItemBaseTemplate-FGeazb6H.js";import"./Token-D3W6Bsly.js";import"./ScrollEnablement-C96PrwAf.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BQbeSHYY.js";import"./ToggleButton-BFkiT8DZ.js";import"./SuggestionItem-D8JUaK4y.js";import"./index-CsZ3MJDk.js";import"./Option-BERpoTxk.js";import"./index-CPNpM3Gi.js";import"./SegmentedButton-DDXJEdiY.js";import"./index-D88oWc7K.js";import"./Select-CcNl591L.js";import"./InvisibleMessage-thzwE5Eq.js";import"./slim-arrow-down-ZsLuCJkq.js";import"./index-D70zfhH1.js";import"./index-DMCKlwNV.js";import"./index-BzN4d7ds.js";import"./index-DZthy7eH.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DJexQfFb.js";import"./group-2-D4WjFEWb.js";import"./sort-descending-BRWVpkHW.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CdzFZllT.js";import"./utils-CrX1fJt7.js";import"./index-BhnnBVTO.js";import"./index-dB9wQJYj.js";import"./index-BxkOh5-O.js";import"./navigation-down-arrow-LQ6wC2gk.js";import"./navigation-right-arrow-Bc2pAact.js";import"./navigation-right-arrow-BKMtPJeS.js";import"./useCurrentTheme-C8QQj4mW.js";import"./index-C8SRQwYw.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-V7dBuQmF.js";import"./paper-plane-B_bfz4Lw.js";import"./index-D-Sc7kHv.js";import"./less-oIZYDRMd.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
