import{j as e}from"./iframe-vPuL6nrR.js";import{useMDXComponents as n}from"./index-SqnB7SsH.js";import{I as r,F as s}from"./CommandsAndQueries-BhV0DcZ1.js";import{M as l,C as a}from"./blocks-CGVrLY5L.js";import"./Tag-Bv6LdF2m.js";import"./index-CrDwtJBU.js";import"./copy-DGJagZ4x.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CEd-U3Y9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-MOLGybyv.js";import"./index-D8Laxk3p.js";import"./index-BrWx5AOh.js";import"./Link-eKxzOHxo.js";import"./index-C6iociGO.js";import"./index-DeGdMjr2.js";import"./index-D5bO2WHW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DQtnDDkb.js";import"./addCustomCSSWithScoping-Ddp0ymp7.js";import"./index-CfldzWz8.js";import"./information-D9zj9sOE.js";import"./sys-enter-2-D6w_QQfA.js";import"./alert-C_Ss2xwM.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DDEYRsk7.js";import"./delete-CqW8NqGe.js";import"./settings-Cj4F-sn-.js";import"./NoData-B6dEymhk.js";import"./IllustratedMessage-fNVt6nDT.js";import"./i18n-defaults-BoKY-OR9.js";import"./parameters-bundle.css-B37gDvcF.js";import"./NoFilterResults-C4Fi4xib.js";import"./index-DXIxpdsF.js";import"./index-Bdmog3xs.js";import"./slim-arrow-down-B1T99V5w.js";import"./Input-CChiahoF.js";import"./ResponsivePopoverCommon.css-C2d2sUac.js";import"./ValueStateMessage.css-BuG0YrNm.js";import"./Suggestions.css-J9EImHe6.js";import"./ListBoxItemGroupTemplate-CJsm3Ul2.js";import"./ComboBoxItemGroup-BjhHmu1_.js";import"./ListItemBaseTemplate-DzoOxgIE.js";import"./Token-B6W6V4bM.js";import"./ScrollEnablement-DWmM35W4.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CImLKtWb.js";import"./ToggleButton-DzxCPDPZ.js";import"./SuggestionItem-BEJvr8r8.js";import"./index-Bl3X3auW.js";import"./Option-BzrTRgaF.js";import"./index-ZVMZGAva.js";import"./SegmentedButton-Cbml1Wlq.js";import"./index-BHx5eP0s.js";import"./Select-CLf6VczP.js";import"./InvisibleMessage-CuC6Puks.js";import"./slim-arrow-down-C84_eyIp.js";import"./index-D6hE3GQN.js";import"./index-CbspbvB6.js";import"./index-Ct0Aq-bZ.js";import"./index-DcvU_XKJ.js";import"./IconDesign-DXd8PPVF.js";import"./filter-Dk9irKV0.js";import"./group-2-CzEO-tAI.js";import"./sort-descending-qZUVN4UZ.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-UEPJgIKA.js";import"./utils-C6_g_wtf.js";import"./index-DkBbhQP-.js";import"./index-B9ZqcJIb.js";import"./index-C6AbtUGW.js";import"./navigation-down-arrow-zIYYcACt.js";import"./navigation-right-arrow-DIDO5vFl.js";import"./navigation-right-arrow-BR8wObxR.js";import"./useCurrentTheme-DG8GYF18.js";import"./index-pO-94DCY.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BSPpJGW2.js";import"./paper-plane-B4zBBoau.js";import"./index-DXkaAWnQ.js";import"./less-CsKXQq_W.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
