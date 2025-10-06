import{j as e}from"./iframe-CIFZFrG2.js";import{useMDXComponents as n}from"./index-CzlgAQtr.js";import{I as r,F as s}from"./CommandsAndQueries-BlZNZtUo.js";import{M as l,C as a}from"./blocks-ClculhSc.js";import"./Tag-C9R72Ii-.js";import"./index-B9QNJxWD.js";import"./copy-CVO7dQ0j.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CgEPUpLL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D2ynVlET.js";import"./index-Raa53yj5.js";import"./index-BRYLHUCr.js";import"./Link-C5_8cjV3.js";import"./index-CyeOYd2G.js";import"./index-CysqO__p.js";import"./index--ZLvsvkR.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CxDbWVSp.js";import"./addCustomCSSWithScoping-Bq-MB79n.js";import"./index-Ddm49m6x.js";import"./information-C9kryg9s.js";import"./sys-enter-2-Dnan1hPQ.js";import"./alert-OVbD1hF6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CYyXPrOv.js";import"./delete-BA6UzrB5.js";import"./settings-DIaelliX.js";import"./NoData-B1FuXvEI.js";import"./IllustratedMessage-21oYVbbQ.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DPJreZ8p.js";import"./index-cGU9T9rn.js";import"./index-DkhbK58W.js";import"./slim-arrow-down-2FoyFrsV.js";import"./Input-DlFlJtjB.js";import"./ResponsivePopoverCommon.css-cwzG2gc0.js";import"./ValueStateMessage.css-ikIAfSqI.js";import"./Suggestions.css-Cmt6_gCv.js";import"./ListBoxItemGroupTemplate-c0BR_adj.js";import"./ComboBoxItemGroup-jwje7hSK.js";import"./ListItemBaseTemplate-WTKsn73S.js";import"./Token-BaR6rmNc.js";import"./ScrollEnablement-BkzfVfom.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-zd36OJtU.js";import"./ToggleButton-CKdRk_TU.js";import"./SuggestionItem-i1kLLZMq.js";import"./index-DiirMTfI.js";import"./Option-DiunOkpg.js";import"./index-C1tXGYmS.js";import"./SegmentedButton-DnLPeF-z.js";import"./index-BU8EJGfi.js";import"./Select-Il0Dpto4.js";import"./InvisibleMessage-SsPOIlta.js";import"./slim-arrow-down-CuXz1j7I.js";import"./index-DsLGmJL5.js";import"./index-Cp4nBRod.js";import"./index-DlBqic0j.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CzaibK8v.js";import"./group-2-BvqITDwo.js";import"./sort-descending-DNmo5GvA.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-W-uq8jIV.js";import"./utils-7Audpv7t.js";import"./index-dUb3oqow.js";import"./index-DkmXSgWz.js";import"./index-DtGC_2bD.js";import"./navigation-down-arrow-DNMDmuFC.js";import"./navigation-right-arrow-D_akLMwW.js";import"./navigation-right-arrow-n0EeNTkG.js";import"./useCurrentTheme-C9k3MOJ-.js";import"./IndicationColor-DVw-fSM_.js";import"./index-HSQA-4PI.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BCLO5KRo.js";import"./paper-plane-Df4G7ZiX.js";import"./index-B3X4PJbz.js";import"./less-PsQqjzYZ.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
