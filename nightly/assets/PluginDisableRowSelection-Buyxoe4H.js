import{j as e}from"./iframe-BgKk_cUP.js";import{useMDXComponents as n}from"./index-DBhkOYZa.js";import{I as r,F as s}from"./CommandsAndQueries-DJU-Boml.js";import{M as l,C as a}from"./blocks-Cov5-UrV.js";import"./Tag-14MrIsbi.js";import"./index-DoylA-Ui.js";import"./copy-DsJBCyL-.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-V4gZ8sle.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CMckAL-E.js";import"./index-vrGX3w6P.js";import"./index-z-eYGt9k.js";import"./Link-CwQGN6kV.js";import"./index-DJcJ5x0R.js";import"./index-DtnoyOys.js";import"./index-DMwqR4Ak.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-D3WrIRKs.js";import"./addCustomCSSWithScoping-CEnWQwWy.js";import"./index-C-jp63Tn.js";import"./information-BIRyoqcd.js";import"./sys-enter-2--x49A3Er.js";import"./alert-ClVMPYjY.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DuxFNycy.js";import"./delete-BP-q6TjY.js";import"./settings-CeZ1opbS.js";import"./NoData-DLJjXucd.js";import"./IllustratedMessage-DdywEZQM.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Bi6pL2a9.js";import"./index-DojJqyn3.js";import"./index-BKqTR2vl.js";import"./slim-arrow-down-Dj1qt3me.js";import"./Input-iPtOW5TT.js";import"./ResponsivePopoverCommon.css-DfgdvEyA.js";import"./ValueStateMessage.css-DV3WCU4W.js";import"./Suggestions.css-BI-9sbpu.js";import"./ListBoxItemGroupTemplate-BHdhNjf-.js";import"./ComboBoxItemGroup-DH85X82N.js";import"./ListItemBaseTemplate-D1hxivPJ.js";import"./Token-DcRokTWN.js";import"./ScrollEnablement-DdsHIuJL.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CnthNkAX.js";import"./ToggleButton-UcqKBq2y.js";import"./SuggestionItem-C26y-fs0.js";import"./index-hzVrXnb0.js";import"./Option-DJMHyqaM.js";import"./index-Dhq0PQAW.js";import"./SegmentedButton-DdF3sP2l.js";import"./index-BbzooXyV.js";import"./Select-CsJgWia_.js";import"./InvisibleMessage-ped4udrK.js";import"./slim-arrow-down-DklNCilI.js";import"./index-DwVvMTsB.js";import"./index-RMLfsLiL.js";import"./index-bEFqPgvm.js";import"./index-DMnT_E-9.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CW2uVyW2.js";import"./group-2-AoEknzVg.js";import"./sort-descending-CCp7iCJm.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DRCX3BDW.js";import"./utils-BzD9qn-t.js";import"./index-GcGiJc-e.js";import"./index-DAx9tP-t.js";import"./index-HFoflSp7.js";import"./navigation-down-arrow-DW5vPyKC.js";import"./navigation-right-arrow-De8vjbS4.js";import"./navigation-right-arrow-DXKcG20K.js";import"./useCurrentTheme-BVrxJiy7.js";import"./index-C-S-N3mF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bcixplcr.js";import"./paper-plane-2-5UQC1A.js";import"./index-FZ4e72eA.js";import"./less-jXtBnPYa.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
