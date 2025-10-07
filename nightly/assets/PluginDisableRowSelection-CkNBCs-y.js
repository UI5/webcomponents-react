import{j as e}from"./iframe-sSOxzerW.js";import{useMDXComponents as n}from"./index-C4N772Ec.js";import{I as r,F as s}from"./CommandsAndQueries-DN1a2yy9.js";import{M as l,C as a}from"./blocks-DZ5JcJjQ.js";import"./Tag-Bf5UwcWO.js";import"./index-DoYi49fY.js";import"./copy-VA4auTr6.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CSavsqtu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-PB68rHIj.js";import"./index-BcOGuNSc.js";import"./index-CbHc7dVQ.js";import"./Link-DXd90h-X.js";import"./index-pczPksUh.js";import"./index-DhmKmBvV.js";import"./index-AsGnG6fc.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-k9gqQhIN.js";import"./addCustomCSSWithScoping-8kQXqHvm.js";import"./index-KAoDxHkF.js";import"./information-D7Jek_j9.js";import"./sys-enter-2-CJf9FrQN.js";import"./alert-BmkkzoHl.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CUlM0idS.js";import"./delete-YKZAYgfq.js";import"./settings-DfMZh29Y.js";import"./NoData-DhoGmJUV.js";import"./IllustratedMessage-C8ByZfCk.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Dmrub52O.js";import"./index-CWucdukJ.js";import"./index-Cp8EfoGt.js";import"./slim-arrow-down-D_dl0lVn.js";import"./Input-CWyqJw20.js";import"./ResponsivePopoverCommon.css-ujCiRX3T.js";import"./ValueStateMessage.css-Bf_f1VXt.js";import"./Suggestions.css-CsTtHaeM.js";import"./ListBoxItemGroupTemplate-tmSOvkkU.js";import"./ComboBoxItemGroup-as0GmnEu.js";import"./ListItemBaseTemplate-CyPqs4mv.js";import"./Token-BninTSpu.js";import"./ScrollEnablement-CK3trYvC.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CGX3xged.js";import"./ToggleButton-BAuFiK85.js";import"./SuggestionItem-DZ-ZtbNH.js";import"./index-DJO1nKvm.js";import"./Option-BL1oRM-m.js";import"./index-BaNQZPFZ.js";import"./SegmentedButton-rLQS_Rwl.js";import"./index-DS5md5gp.js";import"./Select-r6zN4deI.js";import"./InvisibleMessage-DEsSOQlO.js";import"./slim-arrow-down-UfGNSj6J.js";import"./index-BFDbo67H.js";import"./index-CWrxZq5Q.js";import"./index-BsaHFzm2.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DkoNqmaM.js";import"./group-2-78TljRjA.js";import"./sort-descending-BOmTXKtu.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-By0nFfgd.js";import"./utils-FXZnoG2v.js";import"./index-lQVojLXN.js";import"./index-Ck2xITAb.js";import"./index-7jNUNffH.js";import"./navigation-down-arrow-B_wbscXY.js";import"./navigation-right-arrow-BxVQWDb7.js";import"./navigation-right-arrow-BMvhxWkw.js";import"./useCurrentTheme-DLF3uFVh.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DVIm7mZc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BVd8EzLl.js";import"./paper-plane-DAN7XnSr.js";import"./index-DjeZ_rHZ.js";import"./less-CpyHKjX7.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
