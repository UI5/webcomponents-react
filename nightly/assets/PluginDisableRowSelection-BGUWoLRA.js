import{j as e}from"./iframe-CDzsgyAV.js";import{useMDXComponents as n}from"./index-DP2UBTat.js";import{I as r,F as s}from"./CommandsAndQueries-CpE7A47V.js";import{M as l,C as a}from"./blocks-CJQxsMoI.js";import"./Tag-CH-8xgRY.js";import"./index-B8A9WhwY.js";import"./copy-DpKoQtQP.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Kp7F4hlK.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CLSChxqE.js";import"./index-C2LW5088.js";import"./index-2og1ClCO.js";import"./Link-Dp8FrNqY.js";import"./index-Df65psIj.js";import"./index-CiXhxUFY.js";import"./index-BToOU55N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C_XXs48A.js";import"./addCustomCSSWithScoping-B27SJBwy.js";import"./index-spzGnsRF.js";import"./information-DHwZAzkU.js";import"./sys-enter-2-DVWP7zgo.js";import"./alert-Fp8ziM7f.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BqJHcQPH.js";import"./delete-B-gvuqdd.js";import"./settings-Cbcjyv0Y.js";import"./NoData-BVNfqJsM.js";import"./IllustratedMessage-BN1Iq_3M.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-1Ys1t75g.js";import"./index-CocUjDH_.js";import"./index-BfKLxC4E.js";import"./slim-arrow-down-DLRwTtbe.js";import"./Input-8H7TX9aj.js";import"./ResponsivePopoverCommon.css-C3wd2k-W.js";import"./ValueStateMessage.css-By_XiJ9I.js";import"./Suggestions.css-DDpMPLES.js";import"./ListBoxItemGroupTemplate-C8MMY61P.js";import"./ComboBoxItemGroup-PpcOoMvo.js";import"./ListItemBaseTemplate-CpMpzE59.js";import"./Token-jxrfpM-J.js";import"./ScrollEnablement-BI3MOl7l.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ByK6mU7F.js";import"./ToggleButton-B4Zc3HFl.js";import"./SuggestionItem-DkSNk8yh.js";import"./index-B4Od3Z_Y.js";import"./Option-NU9oW0-i.js";import"./index-BCP42iFG.js";import"./SegmentedButton-BqnPadO7.js";import"./index-BEm3lM4_.js";import"./Select-DJG9BRVU.js";import"./InvisibleMessage-D6G5X2tZ.js";import"./slim-arrow-down-DSlsBY-p.js";import"./index-CuyuI2Pj.js";import"./index-C1m5zeZ5.js";import"./index-DnHq6C4h.js";import"./IconDesign-DXd8PPVF.js";import"./filter-YSMvOGtw.js";import"./group-2-BwQpX0hB.js";import"./sort-descending-Blt3aqTU.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BiSHSe0e.js";import"./utils-Cd-ANK3A.js";import"./index-DenP7o8A.js";import"./index-BE-YPQF4.js";import"./index-8HAhpbda.js";import"./navigation-down-arrow-DYP-nqAT.js";import"./navigation-right-arrow-CKdG0KzH.js";import"./navigation-right-arrow-Cx1TVxnH.js";import"./useCurrentTheme-LfUWuXTs.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Y04S_ZXo.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Do2kY7uP.js";import"./paper-plane-TdqVc7nZ.js";import"./index-CZeAmPhe.js";import"./less-Xdu5yIez.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
