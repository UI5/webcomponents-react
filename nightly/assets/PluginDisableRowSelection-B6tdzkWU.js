import{j as e}from"./iframe-CXDBwaXf.js";import{useMDXComponents as n}from"./index-Dq-vd5Ev.js";import{I as r,F as s}from"./CommandsAndQueries-EFbMjjAa.js";import{M as l,C as a}from"./blocks-BAIBAw_h.js";import"./Tag-BGtFiUzo.js";import"./index-CdM50YVo.js";import"./copy-tKRdoNaC.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D5wWkW-F.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CdFEqecu.js";import"./index-Dkyq4U7I.js";import"./index-CNRdJAzz.js";import"./Link-Cn9jKhUL.js";import"./index-Ekr32cnm.js";import"./index-BZ8xLssE.js";import"./index-C2VBEgX9.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BhiljY7Y.js";import"./addCustomCSSWithScoping-DOTw8Y7k.js";import"./index-74IMF4Fu.js";import"./information-BIroKfax.js";import"./sys-enter-2-a30AyDBZ.js";import"./alert-Bp9zzpf6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dr9tof3Q.js";import"./delete-BRjSytiH.js";import"./settings-DpX9wVto.js";import"./NoData-B9OjNVXe.js";import"./IllustratedMessage-C03S7hoW.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Dto9QmBi.js";import"./index-C1hX-h2_.js";import"./index-C-8V3qWU.js";import"./slim-arrow-down-ziHFyrxY.js";import"./Input-D9M-oH0b.js";import"./ResponsivePopoverCommon.css-DzYVdD7o.js";import"./ValueStateMessage.css-DY78SEwL.js";import"./Suggestions.css-D9onRGXn.js";import"./ListBoxItemGroupTemplate-BApvrnZW.js";import"./ComboBoxItemGroup-DZ-S5_KR.js";import"./ListItemBaseTemplate-Jxaz0vER.js";import"./Token-gCiCxmW0.js";import"./ScrollEnablement-CPJHMdd5.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BcjimPYv.js";import"./ToggleButton-CIC6sJxV.js";import"./SuggestionItem-A-OV44pz.js";import"./index-Bmc90nAd.js";import"./Option-ChH-SgHF.js";import"./index-BtgHHz7L.js";import"./SegmentedButton-pcYoHon6.js";import"./index-BTA6DMIo.js";import"./Select-Brcl3j_5.js";import"./InvisibleMessage-DHYzFVaN.js";import"./slim-arrow-down-B9i1iNEL.js";import"./index-B8i-bBM2.js";import"./index-B3Pl9APG.js";import"./index-CeSJC3hT.js";import"./index-sCYpguPS.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CGg0p1p3.js";import"./group-2-Dmm7arx2.js";import"./sort-descending-BdhD77Zt.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CB-rwWQs.js";import"./utils-BQINLptF.js";import"./index-XK9DUlZ3.js";import"./index-BJ0Euif2.js";import"./index-CHqwEflI.js";import"./navigation-down-arrow-sU3YCq6s.js";import"./navigation-right-arrow-DuC2PC04.js";import"./navigation-right-arrow-CglzNXCr.js";import"./useCurrentTheme-nPjRikBt.js";import"./index-FYzg_PtZ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-zoi03cJM.js";import"./paper-plane-DMagDmJq.js";import"./index-B5ACz2H-.js";import"./less-CUrM5DQy.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
