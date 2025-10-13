import{j as e}from"./iframe-BwzExPTt.js";import{useMDXComponents as n}from"./index-Bhb-E2jz.js";import{I as r,F as s}from"./CommandsAndQueries-BAktAF7I.js";import{M as l,C as a}from"./blocks-DoJWfB08.js";import"./Tag-6zLQrCPp.js";import"./index-DtZ9fejJ.js";import"./copy-BSdgsQYS.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CNoYL_k6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ct12qQup.js";import"./index-CbkAtpsv.js";import"./index-C5BRum1i.js";import"./Link-Bms7m456.js";import"./index-A3mNxkAq.js";import"./index-Bt-scq3R.js";import"./index-DpOmhYSX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CoHCzslt.js";import"./addCustomCSSWithScoping-pwpobhcn.js";import"./index-BFn1YmVY.js";import"./information-YiJ0QHVh.js";import"./sys-enter-2-C0SOTOu7.js";import"./alert-D_Giis5d.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-JJh4zq-5.js";import"./delete-C0cYgL9I.js";import"./settings-CyzpmugS.js";import"./NoData-DgJB_CHa.js";import"./IllustratedMessage-B5trxCfL.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-BZ1W57SZ.js";import"./index-CAiu64de.js";import"./index-BOEpNyZs.js";import"./slim-arrow-down-DysSLoES.js";import"./Input-Qp-HcNuB.js";import"./ResponsivePopoverCommon.css-A57mGlsL.js";import"./ValueStateMessage.css-CiBCBwyO.js";import"./Suggestions.css-DKYLp8FI.js";import"./ListBoxItemGroupTemplate-sljqB-qK.js";import"./ComboBoxItemGroup-Ep4_5ktS.js";import"./ListItemBaseTemplate-CsUm0LDT.js";import"./Token-BQ2iduXK.js";import"./ScrollEnablement-BQF6zwAp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-V06wSgST.js";import"./ToggleButton-Du2bAjsE.js";import"./SuggestionItem-D95WBhS3.js";import"./index-CJWkXXZq.js";import"./Option-BXuJbsWz.js";import"./index-B-taCA7b.js";import"./SegmentedButton-B7q5n6R4.js";import"./index-TQ0Hstv3.js";import"./Select-C06y2ImJ.js";import"./InvisibleMessage-CamRw0G3.js";import"./slim-arrow-down-C3RqiYpT.js";import"./index-C-sGBMBZ.js";import"./index-Cxa6Ze2m.js";import"./index-BkGTzC-k.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DTisBMQj.js";import"./group-2-C_Q8y0lD.js";import"./sort-descending-Cp_N7RKl.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CUrOtoUU.js";import"./utils-JlsHVx9B.js";import"./index-DaUOo_TH.js";import"./index--tYPN7vt.js";import"./index-DdqklSGR.js";import"./navigation-down-arrow-onKK0zHb.js";import"./navigation-right-arrow-FBRqKbF9.js";import"./navigation-right-arrow-Btyw370g.js";import"./useCurrentTheme-CCajTlHT.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CCEuXQno.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BKwAHn4d.js";import"./paper-plane-5_BxOmac.js";import"./index-Cl2icRhE.js";import"./less-CAN1Kt99.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
