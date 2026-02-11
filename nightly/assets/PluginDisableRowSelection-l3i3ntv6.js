import{j as e}from"./iframe-kJfrPaD1.js";import{useMDXComponents as n}from"./index-BKWPRaiV.js";import{I as r,F as s}from"./CommandsAndQueries-D7WkRU72.js";import{M as l,C as a}from"./blocks-5RdvzEbY.js";import"./Tag-Cq_rR_bf.js";import"./index-ZnQNPJfl.js";import"./copy-yyYbNeMi.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DxPZYTqE.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CRo0yro_.js";import"./index-C-a_iLSi.js";import"./index-CDtmBsTj.js";import"./Link-DLuGgAei.js";import"./index-Ccpr0pFg.js";import"./index-DxXcjV97.js";import"./index-CdjQ1wSl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVMILbqZ.js";import"./addCustomCSSWithScoping-7vdeOKdl.js";import"./index-CmBVI-17.js";import"./information-CMkzOfg7.js";import"./sys-enter-2-0CjTM9eF.js";import"./alert-T81DFfqo.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CjEWHoPI.js";import"./delete-B8AkKUGe.js";import"./settings-DFQp6TpX.js";import"./NoData-D0Y_eZMR.js";import"./IllustratedMessage-C-bbdW0n.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-DNobnLuo.js";import"./index-D4931-O4.js";import"./index-RE4LKkGr.js";import"./slim-arrow-down-CPVGY8Iq.js";import"./Input-BgSomOX4.js";import"./ResponsivePopoverCommon.css-BjX77BWF.js";import"./ValueStateMessage.css-ClrIRLgY.js";import"./Suggestions.css-DMwhx4yY.js";import"./ListBoxItemGroupTemplate-BKa_M5Lx.js";import"./ComboBoxItemGroup-UT2r-Dd2.js";import"./ListItemBaseTemplate-DW1MLGCC.js";import"./Token-DKZ6n4xd.js";import"./ScrollEnablement-DxFtCIlG.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CmvDkQUO.js";import"./ToggleButton-CNQqAKOh.js";import"./SuggestionItem-4Vshqset.js";import"./index-B8IotaSE.js";import"./Option-DE3CbLxG.js";import"./index-hpLgy0UK.js";import"./SegmentedButton-DQjk1YVY.js";import"./index-BuQpOWSs.js";import"./Select-Dd1CrZ-1.js";import"./InvisibleMessage-CIztzzyo.js";import"./slim-arrow-down-6heX8X2x.js";import"./index-C9yFq3ow.js";import"./index-ZOfLRVnY.js";import"./index-BihC8B6K.js";import"./index-CewkkqmN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DMlWiKR7.js";import"./group-2-D5N4yOqU.js";import"./sort-descending-BKM4goFg.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Cq09Xc-r.js";import"./utils-hSvJEbvk.js";import"./index-DI_BJW84.js";import"./index-DbuJnxWY.js";import"./index-DuEmXK1Q.js";import"./navigation-down-arrow-Td4O0pAQ.js";import"./navigation-right-arrow-DconCGaA.js";import"./navigation-right-arrow-DnMrHUAK.js";import"./useCurrentTheme-B07ClayR.js";import"./index-D2aYauVx.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-ClW0lnYp.js";import"./paper-plane-fozhEJ_Q.js";import"./index-B96fduB-.js";import"./less-BdeGY2H5.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
