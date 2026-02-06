import{j as e}from"./iframe-D_72XrxV.js";import{useMDXComponents as n}from"./index-66RF5jzG.js";import{I as r,F as s}from"./CommandsAndQueries-B5MqblA3.js";import{M as l,C as a}from"./blocks-Cdh_AmAk.js";import"./Tag-FVV8VuJS.js";import"./index-CeLdj5R8.js";import"./copy-jn1S9mhy.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CDy71CRU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CtHwk6MR.js";import"./index-B5YLKK6V.js";import"./index-DC83-RSZ.js";import"./Link-BEWshBTo.js";import"./index-DhXDNTqP.js";import"./index-CawoDp7x.js";import"./index-DXJ6eoJD.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-jUCNgYAQ.js";import"./addCustomCSSWithScoping-CVFgCYWk.js";import"./index-DkMaspDs.js";import"./information-C_2BZUqW.js";import"./sys-enter-2-C5Wnyt7l.js";import"./alert-CbokyiOI.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Csj2HO8L.js";import"./delete-CeOcUIER.js";import"./settings-Cn5wwyPF.js";import"./NoData-PopUoBYo.js";import"./IllustratedMessage-DZ41JI5v.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-CTXQ89WT.js";import"./index-Bu9F4FMc.js";import"./index-BXLU2QyI.js";import"./slim-arrow-down-4pwOw1KN.js";import"./Input-ctWP6EpA.js";import"./ResponsivePopoverCommon.css-CXO0egQQ.js";import"./ValueStateMessage.css-BtHvb9Z3.js";import"./Suggestions.css-Dcnh6jB1.js";import"./ListBoxItemGroupTemplate-DHFu76gC.js";import"./ComboBoxItemGroup-CZO-aXf1.js";import"./ListItemBaseTemplate-DCTXILqJ.js";import"./Token-CAt0kzvm.js";import"./ScrollEnablement-yQTiHpLV.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DNgCtY9E.js";import"./ToggleButton-BNhJm5oM.js";import"./SuggestionItem-B4SVsFoO.js";import"./index-BXyhN-98.js";import"./Option-BNEZgQiG.js";import"./index-CQ46V3BB.js";import"./SegmentedButton-BDhAyQvz.js";import"./index-Cz4hAL11.js";import"./Select-CdrF46G-.js";import"./InvisibleMessage-DtML4eYo.js";import"./slim-arrow-down-CwKrWZlT.js";import"./index-CGCbfSVl.js";import"./index-rD0q-lzh.js";import"./index-CeS7n61h.js";import"./index-DGCvl-Xm.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BH8RStDa.js";import"./group-2-ep49yjAi.js";import"./sort-descending-DxUdn13J.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CZ2gbzTy.js";import"./utils-BWLKg-TT.js";import"./index-BHGBSUlQ.js";import"./index-GvIpKsjG.js";import"./index-5Qz0hHSk.js";import"./navigation-down-arrow-B9jvvqZn.js";import"./navigation-right-arrow-BfmQEaOh.js";import"./navigation-right-arrow-IOAC3A0T.js";import"./useCurrentTheme-B97NpVFX.js";import"./index-BUtpH4Q1.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DwZ1F38u.js";import"./paper-plane-Dv362znJ.js";import"./index-DPiIKAxE.js";import"./less-C7rJWOWo.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
