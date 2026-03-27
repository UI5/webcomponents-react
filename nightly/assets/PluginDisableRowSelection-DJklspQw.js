import{j as e}from"./iframe-18_5pfj2.js";import{useMDXComponents as n}from"./index-CIhtdkHx.js";import{I as r}from"./CommandsAndQueries-BGW2wCD6.js";import{M as s,C as l}from"./blocks-Cj6CgQUG.js";import"./Tag-s2oCmO6-.js";import"./index-BIj2K6s5.js";import"./copy-BQYJB7Nu.js";import{F as a}from"./Footer-BvGdDwIL.js";import"./PageNotFound-BO4FGO9U.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-13knD1MZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-C9Gq01-B.js";import"./index-DflRRV76.js";import"./index-Dhqddszu.js";import"./index-DiTpBrDm.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DVbD4jAU.js";import"./addCustomCSSWithScoping-CAI73UoR.js";import"./index-BlCfzNdo.js";import"./index-Bj-OwMs_.js";import"./index-B3MOIvF5.js";import"./information-CdIjwcxP.js";import"./sys-enter-2-LNLtosyG.js";import"./alert-DegEg84v.js";import"./index-CRBj8Lig.js";import"./Illustrations-CxofZbv6.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-AL_T-9Jx.js";import"./delete-Bs3qPfJg.js";import"./settings-Dy572ER6.js";import"./NoData-Da_ngFS4.js";import"./NoFilterResults-D6pNWcsG.js";import"./index-C5CQTREQ.js";import"./IllustratedMessage-DGu9bJLh.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-0cqwT-HV.js";import"./Input-iydFvRMw.js";import"./ResponsivePopoverCommon.css-C2FEozzV.js";import"./ValueStateMessage.css-DqvCGStP.js";import"./Suggestions.css-BCNDEbh8.js";import"./ListBoxItemGroupTemplate-CJLn_QnH.js";import"./ComboBoxItemGroup-DcIVw2VD.js";import"./ListItemBaseTemplate-Bc2aw1zo.js";import"./Token-D4pS284n.js";import"./ScrollEnablement-8Hjnke1V.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dz4U-Eop.js";import"./ToggleButton-CppSls7u.js";import"./multiselect-all-Du7KiLcj.js";import"./SuggestionItem-DP0MGt_F.js";import"./index-Bvyi48KZ.js";import"./Option-rrI2u16T.js";import"./index-hlJZ1pXP.js";import"./SegmentedButton-oHmo4bip.js";import"./index-Y1siXodl.js";import"./Select-DwCkA_oD.js";import"./InvisibleMessage-BnIgIl6z.js";import"./index-8eHl-jDQ.js";import"./index-Ck6F_hwE.js";import"./index-NNG8HlfA.js";import"./index-CqOxtweB.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DT28aUfx.js";import"./group-2-CK5cKbxI.js";import"./sort-descending-_jf8LjRo.js";import"./ThemingParameters-BvhwmbYD.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CzFFDiC-.js";import"./utils-DWriPAw1.js";import"./index-QSwlxrZg.js";import"./index-c_3gbR4D.js";import"./index-BLCqTCik.js";import"./navigation-down-arrow-DZ15PY4K.js";import"./navigation-right-arrow-BeHel0Cu.js";import"./navigation-right-arrow-DT0piTHd.js";import"./useCurrentTheme-BF_DuxSA.js";import"./index-CJSERHk8.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BN9cZPm6.js";import"./paper-plane-C5X0Yhvv.js";import"./index-C71GbrCh.js";import"./less-BR7E5rCD.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
