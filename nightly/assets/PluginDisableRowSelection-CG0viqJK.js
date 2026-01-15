import{j as e}from"./iframe-DzsY3-MS.js";import{useMDXComponents as n}from"./index-DFSYB4hO.js";import{I as r,F as s}from"./CommandsAndQueries-DBuYeihv.js";import{M as l,C as a}from"./blocks-DS0Y1BZg.js";import"./Tag-L2pUIWpP.js";import"./index-DdAKftEE.js";import"./copy-BminF4Iy.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-hG0Mq3Eh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DKfHbnjd.js";import"./index-DkJZCu2R.js";import"./index-BfsMxbQ9.js";import"./Link-3hYic3jw.js";import"./index-BndW4ILr.js";import"./index-DQ0Bmg4X.js";import"./index-DTlY8Kzq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C7IVEmPi.js";import"./addCustomCSSWithScoping-0WSQwudS.js";import"./index-C5c1rTpg.js";import"./information-a2aTFncM.js";import"./sys-enter-2-7qDJkwn8.js";import"./alert-BRYQ7SuA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-l5aoi9KM.js";import"./delete-B3ryUQBB.js";import"./settings-C00RCGye.js";import"./NoData-yJgd8XnX.js";import"./IllustratedMessage-DNQ-CWR9.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-CRpMHBpW.js";import"./index-DwW6N8AQ.js";import"./index-i1IFNKnh.js";import"./slim-arrow-down-CkH4Whvo.js";import"./Input-Dq6-REg9.js";import"./ResponsivePopoverCommon.css-CLPuLjYm.js";import"./ValueStateMessage.css-Di8Y_FaV.js";import"./Suggestions.css-B9qKiT0u.js";import"./ListBoxItemGroupTemplate-DDMKAAAG.js";import"./ComboBoxItemGroup-0Q9ga48v.js";import"./ListItemBaseTemplate-C_vIHZba.js";import"./Token-EUneMihA.js";import"./ScrollEnablement-CkDB7Jzl.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bem0jaOu.js";import"./ToggleButton-DX5JCL6_.js";import"./SuggestionItem-BarzL3HZ.js";import"./index-v5BZERv9.js";import"./Option-B5iYKL3-.js";import"./index-Cdxm6Zw8.js";import"./SegmentedButton-jOnxCPv8.js";import"./index-BdSOKqSc.js";import"./Select-BGW-2fE4.js";import"./InvisibleMessage-Cb7HEOO2.js";import"./slim-arrow-down-DMe2ZC5d.js";import"./index-DOhw8rBk.js";import"./index-B-owJPr5.js";import"./index-BetNagWU.js";import"./index-lb1RbLlp.js";import"./IconDesign-DXd8PPVF.js";import"./filter-2pnkmk3s.js";import"./group-2-D2bVnNyU.js";import"./sort-descending-xEWSnLJM.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DlOYjGGn.js";import"./utils-CyyFPTY5.js";import"./index-BL0l7ykh.js";import"./index-fQZNWHJl.js";import"./index-CSRjycPW.js";import"./navigation-down-arrow-DFDWFqht.js";import"./navigation-right-arrow-D6uPQJor.js";import"./navigation-right-arrow-DNx7PXWq.js";import"./useCurrentTheme-CDEziUwa.js";import"./index-B_BoFXOZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DGi63fh0.js";import"./paper-plane-D_Zbwyw2.js";import"./index-E_1UjDh5.js";import"./less-RjX5NJTD.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
