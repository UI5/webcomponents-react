import{j as e}from"./iframe-DD3khz8t.js";import{useMDXComponents as n}from"./index-CHFjnrWX.js";import{I as r,F as s}from"./CommandsAndQueries-DsVeZAZ7.js";import{M as l,C as a}from"./blocks-ibeWpSZJ.js";import"./Tag-Ngk_8fKi.js";import"./index-BQH8_ZBk.js";import"./copy-BSvcS0vC.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-5_I1cyxV.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DvVzwHKX.js";import"./index-BVYBIT27.js";import"./index-BHPH6hXB.js";import"./Link-p7O4byri.js";import"./index-DddTN1yz.js";import"./index-INxWrkzg.js";import"./index-BddI7Cdl.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DgRC_ctT.js";import"./addCustomCSSWithScoping-BX6ct4xq.js";import"./index-w-lQea0z.js";import"./information-DqXpZV5n.js";import"./sys-enter-2-BQ568DSo.js";import"./alert-CH5Zr4v2.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories--alj2jOK.js";import"./delete-Ct8xiXlx.js";import"./settings-B1teuJ2R.js";import"./NoData-DvZhvA8J.js";import"./IllustratedMessage-CShEbWRz.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-6kBWV_FC.js";import"./index-Cj2HP5zh.js";import"./index-BRxYB2Dw.js";import"./slim-arrow-down-5-78CQg2.js";import"./Input-CzY57eje.js";import"./ResponsivePopoverCommon.css-DtiXOolb.js";import"./ValueStateMessage.css-BAlZcm0o.js";import"./Suggestions.css-wNpJO5EP.js";import"./ListBoxItemGroupTemplate-CQk5fTJS.js";import"./ComboBoxItemGroup-TwWewYqC.js";import"./ListItemBaseTemplate-Dy5bCQYp.js";import"./Token-a3MWAMbv.js";import"./ScrollEnablement-B0G1MDOV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CcQmaiD_.js";import"./ToggleButton-CSRLBrRn.js";import"./SuggestionItem-CBBezjnP.js";import"./index-D3LDGHoT.js";import"./Option-i4_4pLmE.js";import"./index-D02z_BNZ.js";import"./SegmentedButton-BGocngUd.js";import"./index-DNXbXPty.js";import"./Select-NIA1LFcO.js";import"./InvisibleMessage-DD1Ev_vZ.js";import"./slim-arrow-down-D0mEITot.js";import"./index-BITmfB0x.js";import"./index-myUsI4jx.js";import"./index-DquhQeMg.js";import"./index-CM02EC77.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D3GrU4Ss.js";import"./group-2-1rPdh5F3.js";import"./sort-descending-DgjPPaFB.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CbBNQQRY.js";import"./utils-DdRAkXpa.js";import"./index-B_XYOqNE.js";import"./index-BIIPEOn-.js";import"./index-CDwMQpv5.js";import"./navigation-down-arrow-YqNslUL9.js";import"./navigation-right-arrow-CxeAemfg.js";import"./navigation-right-arrow-Bq-pkXdO.js";import"./useCurrentTheme-C2JP9KVd.js";import"./index-CT5LP0kS.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CAOBRXTB.js";import"./paper-plane-CrMU2hg6.js";import"./index-C3tzgyPK.js";import"./less-CSsjRXW_.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
