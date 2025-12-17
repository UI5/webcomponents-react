import{j as e}from"./iframe-DwrbX4RV.js";import{useMDXComponents as n}from"./index-DEV0fT-3.js";import{I as r,F as s}from"./CommandsAndQueries-33-9TCX1.js";import{M as l,C as a}from"./blocks-D-Cz54eK.js";import"./Tag-CFiS-8RZ.js";import"./index-BQbTf7k-.js";import"./copy-ZcGBB0nX.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BPiexnty.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Zv7LwxZg.js";import"./index-DcjDkGfQ.js";import"./index-C2WUwRD4.js";import"./Link-CH3IA-s_.js";import"./index-DfMLBK8G.js";import"./index-4tQAJTUd.js";import"./index-DafPGyjY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BP_TNLDv.js";import"./addCustomCSSWithScoping-BNLxo1iY.js";import"./index-DLV46EWe.js";import"./information-Bbk3nBJv.js";import"./sys-enter-2-Dh-lxitt.js";import"./alert-DlEiJnhn.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BHDvawwA.js";import"./delete-DcD4HBZQ.js";import"./settings-BXd4XT-i.js";import"./NoData-ByibTLi_.js";import"./IllustratedMessage-BP4eByRs.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-CI_QlIDr.js";import"./NoFilterResults-pczX_0-g.js";import"./index-CiWbQ0SX.js";import"./index-CaEHNGDh.js";import"./slim-arrow-down-D3ZsDLwh.js";import"./Input-DKlTLujy.js";import"./ResponsivePopoverCommon.css-C8r5-0tw.js";import"./ValueStateMessage.css-CdZTGBs2.js";import"./Suggestions.css-BXr49NFJ.js";import"./ListBoxItemGroupTemplate-Dzl2p6m5.js";import"./ComboBoxItemGroup-BSFvIoMS.js";import"./ListItemBaseTemplate-D7oB3m3T.js";import"./Token-Bx9MLKqg.js";import"./ScrollEnablement-CYy8a9iX.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C7C_LUm1.js";import"./ToggleButton-BMmF2FMi.js";import"./SuggestionItem-DkdM06SJ.js";import"./index-BhGwaRmh.js";import"./Option-B-khv2Jb.js";import"./index-Bh6MarsA.js";import"./SegmentedButton-DJ9UBm4v.js";import"./index-DfbaGbYm.js";import"./Select-XgkwJ3ZO.js";import"./InvisibleMessage-bGcdvgGE.js";import"./slim-arrow-down-Bun6gyze.js";import"./index-CPtCfy3E.js";import"./index-KseHHLyP.js";import"./index-CooYNUmQ.js";import"./index-Djuxy3lm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DS1aWjfv.js";import"./group-2-CDQM5C56.js";import"./sort-descending-YAOaWHCt.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DINgmDQf.js";import"./utils-Df-GzOhH.js";import"./index-BaDEpd7H.js";import"./index-B93zIJEs.js";import"./index-B99IvkHX.js";import"./navigation-down-arrow-Bf5qo7Su.js";import"./navigation-right-arrow-CK6e15pE.js";import"./navigation-right-arrow-WgjRwqCg.js";import"./useCurrentTheme-D7Gurzqj.js";import"./index-CSxQ_278.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DBK1p3l_.js";import"./paper-plane-BgIVbC40.js";import"./index-DQlMDjQF.js";import"./less-DvuWw9NE.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
