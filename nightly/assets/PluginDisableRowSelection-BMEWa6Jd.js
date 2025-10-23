import{j as e}from"./iframe-Biw_3dDT.js";import{useMDXComponents as n}from"./index-BMMnaqrc.js";import{I as r,F as s}from"./CommandsAndQueries-D0Z7WxPl.js";import{M as l,C as a}from"./blocks-CG1UjEbO.js";import"./Tag-CRWtagqn.js";import"./index-Cn2rXDmw.js";import"./copy-DH1R2EGq.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-C2Xb6pBm.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BqgdtVzi.js";import"./index-CFI750DE.js";import"./index-BN4lukMo.js";import"./Link-DWk7vFCs.js";import"./index-BoXMWtRz.js";import"./index-Cs0jPH4S.js";import"./index-N2M8yHQs.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CeslUd9A.js";import"./addCustomCSSWithScoping-DYYTTL4w.js";import"./index-BJYjY6km.js";import"./information-DBapFp0Y.js";import"./sys-enter-2-CEmGCFWp.js";import"./alert-DjZ7TPZE.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CeUXtSMt.js";import"./delete-BCgK7hyI.js";import"./settings-DzTZGwhB.js";import"./NoData-DKz1kKuV.js";import"./IllustratedMessage-DXuv23_m.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-C9hTgWv9.js";import"./NoFilterResults-CEF4y9VB.js";import"./index-C32xzwv9.js";import"./index-DLpedh-q.js";import"./slim-arrow-down-cCYJhXL4.js";import"./Input-Bw_MUO_q.js";import"./ResponsivePopoverCommon.css-C-V5noYQ.js";import"./ValueStateMessage.css-ByBg6XPZ.js";import"./Suggestions.css-bib_WhRC.js";import"./ListBoxItemGroupTemplate-CFztLzRm.js";import"./ComboBoxItemGroup-CDJ_c_MY.js";import"./ListItemBaseTemplate-CfwWbg0i.js";import"./Token-DiWIZ29Z.js";import"./ScrollEnablement-bgT4DI50.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DVrrwFh6.js";import"./ToggleButton-DHvaMwSS.js";import"./SuggestionItem-DULb_g75.js";import"./index-2OJQec-L.js";import"./Option-BcYuvlB6.js";import"./index-BpN_VVJi.js";import"./SegmentedButton-pFLbx0qK.js";import"./index-CZPmvqSA.js";import"./Select-DCBgibxv.js";import"./InvisibleMessage-C2StTKZh.js";import"./slim-arrow-down-DdZdWXqJ.js";import"./index-DxlfJkCF.js";import"./index-BO0ARibj.js";import"./index-DTPD7XSM.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CE52_svi.js";import"./group-2-BOK7IKie.js";import"./sort-descending-BabW8yOs.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DXQkuKDh.js";import"./utils-DqOKa6xr.js";import"./index-aoNvrQgQ.js";import"./index-DrWwSftw.js";import"./index-CDWqnF0I.js";import"./navigation-down-arrow-CuzvgjyX.js";import"./navigation-right-arrow-C4bDXXx0.js";import"./navigation-right-arrow-D8ltxNFm.js";import"./useCurrentTheme-DLWoHXHT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DdJKFclu.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BOO113xH.js";import"./paper-plane-D1iJTi1P.js";import"./index-iNA5KBB_.js";import"./less-BmfWAKtR.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
