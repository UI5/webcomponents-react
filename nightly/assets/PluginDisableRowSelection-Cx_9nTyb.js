import{j as e}from"./iframe-pGkg1yhx.js";import{useMDXComponents as n}from"./index-zZGraQiW.js";import{I as r,F as s}from"./CommandsAndQueries-0d0cMNfY.js";import{M as l,C as a}from"./blocks-h-E2EZ8G.js";import"./Tag-au1p2NGj.js";import"./index-Dhkbob0y.js";import"./copy-DnSu0Tnk.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Oube-80K.js";import"./preload-helper-PPVm8Dsz.js";import"./index-2g5O9IIc.js";import"./index-CfRPSEYz.js";import"./index-DdsduAWA.js";import"./Link-D-i4oyZF.js";import"./index-BwnLifZ4.js";import"./index-Wi1PYVS4.js";import"./index-D6ltds-N.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Do_htNQl.js";import"./addCustomCSSWithScoping-BX6PI_rc.js";import"./index-Bw9Ab4ZS.js";import"./information-cXVVKah4.js";import"./sys-enter-2-hj8-ImHG.js";import"./alert-B1o_Hsr7.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BWlEWsVg.js";import"./delete-BJZVN444.js";import"./settings-RddDjvC_.js";import"./NoData-Bvkk8sHR.js";import"./IllustratedMessage-88xSDsjF.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CmeVb1jc.js";import"./index-CWA3Y_l5.js";import"./index-CNQndJGS.js";import"./slim-arrow-down-BJgntAOe.js";import"./Input-CyCFJ6Vu.js";import"./ResponsivePopoverCommon.css-B50dxgEH.js";import"./ValueStateMessage.css-DMDkPBvl.js";import"./Suggestions.css-CtaaBT2N.js";import"./ListBoxItemGroupTemplate-CJy-Y4BI.js";import"./ComboBoxItemGroup-Qn1YbaR3.js";import"./ListItemBaseTemplate-CH22A-Ku.js";import"./Token-rXecMhab.js";import"./ScrollEnablement-Bs7uevyz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BdpPPBzO.js";import"./ToggleButton-ClU9taqo.js";import"./SuggestionItem-By4CvLXk.js";import"./index-C2E1bJm1.js";import"./Option-BLkO3chh.js";import"./index-D5tpw6HZ.js";import"./SegmentedButton-CkL5eMMe.js";import"./index-DHTghqxe.js";import"./Select-C2Bt6674.js";import"./InvisibleMessage-C46p7Cuq.js";import"./slim-arrow-down-vuddRe6v.js";import"./index-FG2xjpzy.js";import"./index-DsBDhpqc.js";import"./index-Byr0e0RY.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BzemDtcW.js";import"./group-2-C3xp8NlG.js";import"./sort-descending-D_cNFQo4.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BOGeczJA.js";import"./utils-5Au9oy8N.js";import"./index-Dy6BbuYA.js";import"./index-hUJ8i6CB.js";import"./index-D6kseXdp.js";import"./navigation-down-arrow-B7e8SP0b.js";import"./navigation-right-arrow-DdUm1UUs.js";import"./navigation-right-arrow-B7-X8v5o.js";import"./useCurrentTheme-CY0w9NPc.js";import"./IndicationColor-DVw-fSM_.js";import"./index-iIn9LAKY.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CMMVd0W8.js";import"./paper-plane-Dh94bFtb.js";import"./index-DBNCJ5jk.js";import"./less-oxl3lbVo.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
