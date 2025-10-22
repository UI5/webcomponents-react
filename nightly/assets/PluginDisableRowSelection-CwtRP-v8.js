import{j as e}from"./iframe-N-CkNuQp.js";import{useMDXComponents as n}from"./index-vMZrjKLN.js";import{I as r,F as s}from"./CommandsAndQueries-C649emYA.js";import{M as l,C as a}from"./blocks-BlmowjXe.js";import"./Tag-BjR1DXbQ.js";import"./index-C6U4q-s3.js";import"./copy-a5vlqc1O.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-JPuB_a5X.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dctc1ZtL.js";import"./index-Cfq8WB4R.js";import"./index-DbFvQ9Ev.js";import"./Link-DUQLkHF0.js";import"./index-Bw-Px9rd.js";import"./index-nkckj2JT.js";import"./index-CNxEFs14.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIbW1rrN.js";import"./addCustomCSSWithScoping-h_aYe486.js";import"./index-CnaiImML.js";import"./information-DXCMx7jp.js";import"./sys-enter-2-DJK47xX9.js";import"./alert-DxAb-ai_.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-fT9LTQ0j.js";import"./delete-B8Z5j_Do.js";import"./settings-TA31uUIw.js";import"./NoData-D4-SB34s.js";import"./IllustratedMessage-SdxM8pyY.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-Y4WFScsy.js";import"./index-CiBKxPDw.js";import"./index--O_h7dFN.js";import"./slim-arrow-down-rr5X3KXq.js";import"./Input-WfBh0KTF.js";import"./ResponsivePopoverCommon.css-KDgvHQ0W.js";import"./ValueStateMessage.css-DO6JAQcc.js";import"./Suggestions.css-DUyKQFzw.js";import"./ListBoxItemGroupTemplate-q6J-Hxt2.js";import"./ComboBoxItemGroup-i8_TMTd2.js";import"./ListItemBaseTemplate-GLU57VL5.js";import"./Token-CiZ98YBe.js";import"./ScrollEnablement--YCWq2yu.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Dp0_Lu_Z.js";import"./ToggleButton-BS9H1EYC.js";import"./SuggestionItem-BrHIYRQT.js";import"./index-Srybk_Pk.js";import"./Option-BjRW5Ygk.js";import"./index-BsRx0YZP.js";import"./SegmentedButton-BH20oEyd.js";import"./index-DUUfYCBb.js";import"./Select-CELxD9-A.js";import"./InvisibleMessage-ChBJZhpz.js";import"./slim-arrow-down-_epklyRU.js";import"./index-29v9kZgV.js";import"./index-C7vkinT_.js";import"./index-BvTJX50d.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CpzbLxIe.js";import"./group-2-CxA-FYRT.js";import"./sort-descending-Cw2XxVBU.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BJhTa_8n.js";import"./utils-DB3VCJuH.js";import"./index-fBWenx7K.js";import"./index-va9Teg1t.js";import"./index-DBkmiyLK.js";import"./navigation-down-arrow-D-R4T3i-.js";import"./navigation-right-arrow-DaI_vWHK.js";import"./navigation-right-arrow-nPCtKYnF.js";import"./useCurrentTheme-fVl0Jypc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CG0eM5fE.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DSfev3_E.js";import"./paper-plane-Dc2C46qc.js";import"./index-pfabamDa.js";import"./less-rZNKIwFM.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
