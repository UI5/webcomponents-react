import{j as e}from"./iframe-DDwr9UO6.js";import{useMDXComponents as n}from"./index-CQ-nOjPT.js";import{I as r}from"./CommandsAndQueries-CW-He0gJ.js";import{M as s,C as l}from"./blocks-4n5he8k4.js";import"./Tag-85Xc8Sa5.js";import"./index-Vbr96S-1.js";import"./copy-DiJyffUH.js";import{F as a}from"./Footer-DJ4mPzj6.js";import"./PageNotFound-4kcWV7p6.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-D-XOdvyW.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-ioSKjh9y.js";import"./index-BlO2ebQP.js";import"./index-DBFNlRvR.js";import"./index-DlsPhuqx.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-B4AOINVU.js";import"./addCustomCSSWithScoping-BY1iD3uW.js";import"./index-BmgPGln0.js";import"./index-BubbpkEs.js";import"./index-CwOzyR0V.js";import"./information-B0DjFwsh.js";import"./sys-enter-2-CHn1eYD9.js";import"./alert-t6gJkZ57.js";import"./index-DJm0resn.js";import"./Illustrations-CKFjYZ6M.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DvrM5NOP.js";import"./delete-CnbCzWbj.js";import"./settings-Ch08yiWE.js";import"./NoData-4GIocKhd.js";import"./NoFilterResults-B4DPdeet.js";import"./index-D5xRes8S.js";import"./IllustratedMessage-DtlzznLL.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BXJwcQQG.js";import"./Input-DInMIBTe.js";import"./ResponsivePopoverCommon.css-DVrY-Ohc.js";import"./ValueStateMessage.css-CQmBeT7b.js";import"./Suggestions.css-BmvaYmek.js";import"./ListBoxItemGroupTemplate-B-K43gLI.js";import"./ComboBoxItemGroup-BqI4sbwM.js";import"./ListItemBaseTemplate-DYSR2mJj.js";import"./Token-DCciEgLN.js";import"./ScrollEnablement-BO8X0bLa.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BWTSAHcw.js";import"./ToggleButton-BHUbnu3Z.js";import"./multiselect-all-CImnb8qK.js";import"./SuggestionItem-D3aPEE1q.js";import"./index-DeIhhhj4.js";import"./Option-jQcbOOHD.js";import"./index-BVaMi0i5.js";import"./SegmentedButton-C5-qziHY.js";import"./index-BzOkRawL.js";import"./Select--m8ZPefa.js";import"./InvisibleMessage-DCXJk4rP.js";import"./index-BN3GamvY.js";import"./index-DcZRAYxL.js";import"./index-XVwKOOTJ.js";import"./index-CgeWzUMI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-lC1PAHmf.js";import"./group-2-Bthb7zJo.js";import"./sort-descending-C-K6Ysjt.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CnRGw2Cu.js";import"./utils-DxckeIWg.js";import"./index-BD_Jst0w.js";import"./index-JNC6BieY.js";import"./index-Cx1xQlOJ.js";import"./navigation-down-arrow-CJcOr1ZL.js";import"./navigation-right-arrow-CQs_7-hB.js";import"./navigation-right-arrow-DzRJQC_-.js";import"./useCurrentTheme-6r6M5Xd5.js";import"./index-CJWNtEi-.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CL5Aty9r.js";import"./paper-plane-CQwjrpMY.js";import"./index-BO23DQR-.js";import"./less-DL-_Ursx.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
