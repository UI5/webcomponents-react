import{j as e}from"./iframe-BIP38Qmu.js";import{useMDXComponents as n}from"./index-CCzfQ4AK.js";import{I as r}from"./CommandsAndQueries-BAg-w2Ve.js";import{M as s,C as l}from"./blocks-69-jnurL.js";import"./Tag-D0zcjL-3.js";import"./index-C_7tcSj3.js";import"./copy-nvOf1vVL.js";import{F as a}from"./Footer-DAbghHc6.js";import"./PageNotFound-z2fC1f6d.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D-G1sdpB.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-B13MM4G6.js";import"./index-Du9D3QZW.js";import"./index-DXmoRv88.js";import"./index-ZEQXSIQn.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BrBZ3oM5.js";import"./addCustomCSSWithScoping-3IpFFLGa.js";import"./index-BlYNx0T3.js";import"./index-C0fOqYC4.js";import"./index-BEp_fWNn.js";import"./information-Cf_JR6Aw.js";import"./sys-enter-2-D5AeNUHf.js";import"./alert-CMm7pEpj.js";import"./index-pu7JlX44.js";import"./Illustrations-BEksg9v0.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Dz4xcjRe.js";import"./delete-Dur4E_xL.js";import"./settings-De85Y9Vl.js";import"./NoData-CvrvV3LA.js";import"./NoFilterResults-CDQjvK-k.js";import"./index-IvByI7by.js";import"./IllustratedMessage-DykZSGsY.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-DE6oriP5.js";import"./Input-Vh2SZ5wm.js";import"./ResponsivePopoverCommon.css-BkF_hMva.js";import"./ValueStateMessage.css-CUWnXMd3.js";import"./Suggestions.css-B5HWK93E.js";import"./ListBoxItemGroupTemplate-DSD3qJlV.js";import"./ComboBoxItemGroup-D5nL8mXK.js";import"./ListItemBaseTemplate-C-sRh5WR.js";import"./Token-DrBChGXT.js";import"./ScrollEnablement-CtvtwLeU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BzHjrys2.js";import"./ToggleButton-BNbivUIh.js";import"./multiselect-all-UIxR7RvH.js";import"./SuggestionItem-BKrlsw9a.js";import"./index-CvzhRPgo.js";import"./Option-CHiJn1LV.js";import"./index-BPqgJU8W.js";import"./SegmentedButton-C8xvUBR3.js";import"./index-DcOjdeVc.js";import"./Select-WWVP6knv.js";import"./InvisibleMessage-CSZZfWPC.js";import"./index-C-XA25zK.js";import"./index-Ci5YREF7.js";import"./index-DSZlMzTu.js";import"./index-Bt4sAh6G.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CzEBxE2M.js";import"./group-2-J7qnivyy.js";import"./sort-descending-D059dpAr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-B-FlYCK5.js";import"./utils-Cuf4pSoq.js";import"./index-CF1gGx4H.js";import"./index-Dk6p7GrR.js";import"./index-BIvl_-WU.js";import"./navigation-down-arrow-D-lJHCSC.js";import"./navigation-right-arrow-BBJGgKV7.js";import"./navigation-right-arrow-8O47gqPc.js";import"./useCurrentTheme-CMhG7RYX.js";import"./index-_Oe3u67s.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-yBtQpEip.js";import"./paper-plane-4-sb9eyj.js";import"./index-BfK4ShoC.js";import"./less-BSDtBstK.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(l,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
