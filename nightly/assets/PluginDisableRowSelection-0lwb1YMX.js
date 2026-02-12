import{j as e}from"./iframe-CeYK60h5.js";import{useMDXComponents as n}from"./index-CyuETzTv.js";import{I as r,F as s}from"./CommandsAndQueries-CFbtJHwM.js";import{M as l,C as a}from"./blocks-BIKTnw0B.js";import"./Tag-C54M4ldZ.js";import"./index-CT0V1rC-.js";import"./copy-CiRkqTCy.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-e4dPoyh1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CHuebsjW.js";import"./index-DCNRybmK.js";import"./index-BQVvVbng.js";import"./Link-B2AcL4ks.js";import"./index-C-Yn0AU-.js";import"./index-CaQyDWQ7.js";import"./index-DBl_V_lR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CkPy33bc.js";import"./addCustomCSSWithScoping-BSnYfvCe.js";import"./index-C9AaKYqF.js";import"./information-BkZW1INs.js";import"./sys-enter-2-Bag4B31-.js";import"./alert-q5zKag_b.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Brue9bZM.js";import"./delete-BcvtETcy.js";import"./settings-5BacSR94.js";import"./NoData-DxohvE4z.js";import"./IllustratedMessage-C5nGizD-.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DCAxNV9P.js";import"./index-BQ2ppCag.js";import"./index-DvXTSSIA.js";import"./slim-arrow-down-CVGDx6dI.js";import"./Input-Cpc3WDAD.js";import"./ResponsivePopoverCommon.css-D2Os4vPx.js";import"./ValueStateMessage.css-DygseWPv.js";import"./Suggestions.css-uPHlQ0zI.js";import"./ListBoxItemGroupTemplate-CUULFd46.js";import"./ComboBoxItemGroup-3qNTHREe.js";import"./ListItemBaseTemplate-IHDN_xws.js";import"./Token-DIiTPAFv.js";import"./ScrollEnablement-BzX8rTSh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DChf4TnK.js";import"./ToggleButton-HnifA80u.js";import"./SuggestionItem-D3x38-wF.js";import"./index-1UGQ1AHt.js";import"./Option-DheRIPLY.js";import"./index-BoIm-xs6.js";import"./SegmentedButton-C-FghxIk.js";import"./index-eQnZgMgj.js";import"./Select-EZ5UJa2T.js";import"./InvisibleMessage-BjsU8t7h.js";import"./slim-arrow-down-B3EB9Tld.js";import"./index-DGapjW98.js";import"./index-ZeQWpjUk.js";import"./index-BGapk1v_.js";import"./index-Bo5Q1SBc.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DABH-sQq.js";import"./group-2-DEn7mrnO.js";import"./sort-descending-aDuCK_fE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CxmDL6TA.js";import"./utils-Dlyy7SNs.js";import"./index-BO4Or_uB.js";import"./index-rmJF3f6R.js";import"./index-DsmxMPC1.js";import"./navigation-down-arrow-DKptDBWM.js";import"./navigation-right-arrow-CSc3hBqU.js";import"./navigation-right-arrow-CXkdEEUV.js";import"./useCurrentTheme-Bfgyh39P.js";import"./index-C9a6OsiH.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-1HgTxzEu.js";import"./paper-plane-B0eqfuay.js";import"./index-Dg2lsmGL.js";import"./less-BaBvLqfW.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
