import{j as e}from"./iframe-B8dw45Pm.js";import{useMDXComponents as n}from"./index-CDTgJgbW.js";import{I as r}from"./CommandsAndQueries-Bl0bAz-u.js";import{M as s,C as l}from"./blocks-CPHZ0sq-.js";import"./Tag-WXORlQvy.js";import"./index-D7N30NY8.js";import"./copy-KGIzxzBV.js";import{F as a}from"./Footer-DGDb1ilk.js";import"./PageNotFound-DfoC1Yw_.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-RgBDOPDd.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-BB11RQL1.js";import"./index-C46a650J.js";import"./index-BGlbQvkZ.js";import"./index-QyvR-n2-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B1CIx6RM.js";import"./addCustomCSSWithScoping-CsB8TxAm.js";import"./index-DOUsK0Sd.js";import"./index-6NVZEy4N.js";import"./index-DMbxZG4m.js";import"./information-SmgVOr7y.js";import"./sys-enter-2-CP5yuJAd.js";import"./alert-8CVWRnEr.js";import"./index-S966bfr_.js";import"./Illustrations-Df2_smGK.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BidkkRmv.js";import"./delete-BZJ6IUvv.js";import"./settings-B6wZytM7.js";import"./NoData-BUS2UBU9.js";import"./NoFilterResults-jB3EY9FE.js";import"./index-CsGQVrVS.js";import"./IllustratedMessage-Db95xz8S.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-zKJrkqf2.js";import"./Input-DbCtg-3t.js";import"./ResponsivePopoverCommon.css-C-gN5NTO.js";import"./ValueStateMessage.css-D9UCc8Z-.js";import"./Suggestions.css-CdKXXl_R.js";import"./ListBoxItemGroupTemplate-C-8z5r-p.js";import"./ComboBoxItemGroup-BVTa3qQ4.js";import"./ListItemBaseTemplate-F5Kzrq16.js";import"./Token-BmxSoTRq.js";import"./ScrollEnablement-D1x-dzeA.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-C2eamaf3.js";import"./ToggleButton-D20aF6qv.js";import"./multiselect-all-DqnfVi1W.js";import"./SuggestionItem-DjkrwIhA.js";import"./index-BDSWlRed.js";import"./Option-B6Dpr6jo.js";import"./index-DCu3NKJW.js";import"./SegmentedButton-B9mtat3Y.js";import"./index-C-oOO5rJ.js";import"./Select-BCQ8hRSI.js";import"./InvisibleMessage-DbReB1VG.js";import"./index-BrzIBMwv.js";import"./index-BibcwOaq.js";import"./index-CMSw6EyH.js";import"./index-B_Jr5JgK.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BUM7m7qO.js";import"./group-2-CSZUjswS.js";import"./sort-descending-CjviAhWU.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DmjBGCYy.js";import"./utils-DNuiF_K5.js";import"./index-DHfnvRLb.js";import"./index-DKSRGGEL.js";import"./index-Bjh-kMUz.js";import"./navigation-down-arrow-SQxN7jii.js";import"./navigation-right-arrow-DLo6eUJB.js";import"./navigation-right-arrow-BdBKLkX8.js";import"./useCurrentTheme-Ler3vnfg.js";import"./index-0xKDvNxf.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DwcAc9uO.js";import"./paper-plane-CkYIVFEz.js";import"./index-CO9JJlg2.js";import"./less-B347_aem.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
