import{j as e}from"./iframe-DMsBkhV6.js";import{useMDXComponents as n}from"./index-DRmP5vAG.js";import{I as r}from"./CommandsAndQueries-DpukJ1Hp.js";import{M as s,C as l}from"./blocks-DLa5hkYX.js";import"./Tag-BmcB_JoS.js";import"./index-DCIOC28Z.js";import"./copy-CD95AZM0.js";import{F as a}from"./Footer-BOw4Z5DY.js";import"./PageNotFound-DjLaegFZ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D2IcS3ZP.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CSEVwGcN.js";import"./index-Bz_iFKqi.js";import"./index-bqOHt3_F.js";import"./index-Ct0KsXWt.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CSKWwKcd.js";import"./addCustomCSSWithScoping-BbL9ROxJ.js";import"./index-DsnyfM-a.js";import"./index-D8IUoaKA.js";import"./index-CsdED7a8.js";import"./information-B9kPmlYt.js";import"./sys-enter-2-DFXWrXkU.js";import"./alert-BM02Ke2L.js";import"./index-BzYJTbyT.js";import"./Illustrations-BuKaE0Lu.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ueS9H92b.js";import"./delete-CHTfP-Kt.js";import"./settings-BLF4w1HS.js";import"./NoData-DlSNP7WF.js";import"./NoFilterResults-Cjyj15R0.js";import"./index-2yg_p-0e.js";import"./IllustratedMessage-etYmXr5W.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BJqBraCz.js";import"./Input-Uf7jhdsj.js";import"./ResponsivePopoverCommon.css-BkDEP9by.js";import"./ValueStateMessage.css-BOfdrSqA.js";import"./Suggestions.css-CGPwNADp.js";import"./ListBoxItemGroupTemplate-_0Dwsw5E.js";import"./ComboBoxItemGroup-DaTElG3f.js";import"./ListItemBaseTemplate-YIQ1K6S5.js";import"./Token-ZdRf4EiI.js";import"./ScrollEnablement-COba7ibi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DrpX4RCW.js";import"./ToggleButton-CrhejzgI.js";import"./multiselect-all-D_WUNEQL.js";import"./SuggestionItem-CAv3FUFe.js";import"./index-ohvCQnZa.js";import"./Option-CaNyZKGp.js";import"./index-C3f11o7B.js";import"./SegmentedButton-B1wjIz-p.js";import"./index-B5ufxdTz.js";import"./Select-CbPjmsG8.js";import"./InvisibleMessage-DRj0d5Uv.js";import"./index-9vqhJGXS.js";import"./index-DLUlNmzM.js";import"./index-BNhRrdmr.js";import"./index-BYW_tyTv.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CM4efI86.js";import"./group-2-BPP57I-Z.js";import"./sort-descending-DmVlxwNX.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BAZhX22Y.js";import"./utils-DLVR_ZqH.js";import"./index-BhKQSOJa.js";import"./index-DLPYNRsQ.js";import"./index-BVEb-vDJ.js";import"./navigation-down-arrow-B5mwPXMM.js";import"./navigation-right-arrow-DD2gNJ11.js";import"./navigation-right-arrow-X6oG7L7N.js";import"./useCurrentTheme-BVLXkGO3.js";import"./index-I52ieGsq.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D_v8Eyxn.js";import"./paper-plane-DZMdtTIa.js";import"./index-D8XrUqKf.js";import"./less-mQfVbBaX.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
