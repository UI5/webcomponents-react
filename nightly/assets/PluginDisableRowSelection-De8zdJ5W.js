import{j as e}from"./iframe-CajBfwIr.js";import{useMDXComponents as n}from"./index-C7bmLKAS.js";import{I as r,F as s}from"./CommandsAndQueries-BsF9_wDx.js";import{M as l,C as a}from"./blocks-DZo8LX6f.js";import"./Tag-BvqWkn4s.js";import"./index-EXDQ2t-0.js";import"./copy-n5aHnb96.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BX-Qb4Eb.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CBQApe_5.js";import"./index-els7k0UY.js";import"./index-sgQ15IT-.js";import"./Link-CQWL02fV.js";import"./index-Dqx8EP_w.js";import"./index-BAV33GIB.js";import"./index-BRmuq6Qh.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-vf8J9lvz.js";import"./addCustomCSSWithScoping-DTh894zV.js";import"./index-Bn2EsG13.js";import"./information-CcxBY03f.js";import"./sys-enter-2-tMwqxxGo.js";import"./alert-BiYc5KCB.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DYQNfvQa.js";import"./delete-CCuVV0JW.js";import"./settings-VA6JmB84.js";import"./NoData-iT2o0x8b.js";import"./IllustratedMessage-CiDyguLB.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-C5LtRG52.js";import"./index-DC_WMaBG.js";import"./index-BPddPJMw.js";import"./slim-arrow-down-BshNdOqW.js";import"./Input-dSa06VPG.js";import"./ResponsivePopoverCommon.css-C3cJZdrp.js";import"./ValueStateMessage.css-CGvtMuKA.js";import"./Suggestions.css-BFVZkioL.js";import"./ListBoxItemGroupTemplate-DTiKs43B.js";import"./ComboBoxItemGroup-yVlezM04.js";import"./ListItemBaseTemplate-CBK-GT0A.js";import"./Token-Bm3GR7k3.js";import"./ScrollEnablement-DdM6D9rL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-imw798Pk.js";import"./ToggleButton-CxavjS9K.js";import"./SuggestionItem-C7YoTGLy.js";import"./index-OCdqEgk9.js";import"./Option-DahgSlps.js";import"./index-rD753xq2.js";import"./SegmentedButton-BVRS-zKD.js";import"./index-B2fDwDbY.js";import"./Select-BZ8C6uzA.js";import"./InvisibleMessage-DpVgh8EW.js";import"./slim-arrow-down-mNMzuL2_.js";import"./index-D2eo9c2Y.js";import"./index-BZf8tZXo.js";import"./index-DJJlm084.js";import"./index-CAXhGnio.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DZU39gPI.js";import"./group-2-DjP3uRq3.js";import"./sort-descending-Blrb7yMn.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DL5AZoqB.js";import"./utils-ycTXtqIu.js";import"./index-Cp7syuca.js";import"./index-BQlFLyzK.js";import"./index-DJeNmhDh.js";import"./navigation-down-arrow-D2HQUBIe.js";import"./navigation-right-arrow-BCdzHFKq.js";import"./navigation-right-arrow-6Ga1AUU-.js";import"./useCurrentTheme-c1_0W5Iy.js";import"./index-C-m1BXWQ.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BJg_JlUg.js";import"./paper-plane-D3vk--cn.js";import"./index-Bgp5-0LC.js";import"./less-XlNrQzlF.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
