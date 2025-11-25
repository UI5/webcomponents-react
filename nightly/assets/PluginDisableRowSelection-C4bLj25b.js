import{j as e}from"./iframe-LwV4ThFO.js";import{useMDXComponents as n}from"./index-q5DcgXr2.js";import{I as r,F as s}from"./CommandsAndQueries-DPfuXfqc.js";import{M as l,C as a}from"./blocks-Dip3aHJy.js";import"./Tag-By0Vj2CL.js";import"./index-DWh2FbsL.js";import"./copy-DMZz3mt-.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-OE4IQayz.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dg0Ul4LB.js";import"./index-DO4DjFA6.js";import"./index-SgnU4gKB.js";import"./Link-BYRJUWj7.js";import"./index-D33G3UXY.js";import"./index-wHmvTXkA.js";import"./index-BYce_ve5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-4bciS0g0.js";import"./addCustomCSSWithScoping-d025F1t1.js";import"./index-CtGk4fFi.js";import"./information-CKI5p7Rd.js";import"./sys-enter-2-DqN3aKF8.js";import"./alert-D7vNrBhD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-UAK6cQzZ.js";import"./delete-CauzNY6s.js";import"./settings-Cbp-krdL.js";import"./NoData-CGOdrUN8.js";import"./IllustratedMessage-CFJfKJEr.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BsCD8QkQ.js";import"./index-CoSHPRLg.js";import"./index-CDMB05HS.js";import"./slim-arrow-down-WoqU4jL-.js";import"./Input-DOTZG0nG.js";import"./ResponsivePopoverCommon.css-tY7w10PH.js";import"./ValueStateMessage.css-DJKlg9Od.js";import"./Suggestions.css-DRakvl3F.js";import"./ListBoxItemGroupTemplate-milAspIm.js";import"./ComboBoxItemGroup-CrXR4k4L.js";import"./ListItemBaseTemplate-DuvtnBwJ.js";import"./Token-y8RIX3ya.js";import"./ScrollEnablement-D9Zcstlh.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BtDMm1v7.js";import"./ToggleButton-RIWtYPbc.js";import"./SuggestionItem-DyYlmNjM.js";import"./index-DIRV_TxT.js";import"./Option-Dkc0uo7W.js";import"./index-DGmo98C5.js";import"./SegmentedButton-CZr2foPu.js";import"./index-C2nkR5h8.js";import"./Select-CBP2iwxK.js";import"./InvisibleMessage-BYSN34jq.js";import"./slim-arrow-down-lmv38PwW.js";import"./index-Bft62lZ1.js";import"./index-DoFC_5Xy.js";import"./index-DHEWQlqP.js";import"./IconDesign-DXd8PPVF.js";import"./filter-_Rj7gOsX.js";import"./group-2-C4kBukdN.js";import"./sort-descending-DIujgPym.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BaXB6j-X.js";import"./utils-DK9ffFkD.js";import"./index-R07kLpjv.js";import"./index-CxDk8r6E.js";import"./index-Bi58trhw.js";import"./navigation-down-arrow-BMjcgPuL.js";import"./navigation-right-arrow-troHvNPU.js";import"./navigation-right-arrow-csDoLCuz.js";import"./useCurrentTheme-baH4C2qI.js";import"./IndicationColor-DVw-fSM_.js";import"./index-gurjTWBv.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BC_dUgj5.js";import"./paper-plane-B-mGCJfh.js";import"./index-z3X-Jjgi.js";import"./less-D7iDBJTJ.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
