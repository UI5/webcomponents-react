import{j as e}from"./iframe-DEt5SpxN.js";import{useMDXComponents as n}from"./index-D4hcUogq.js";import{I as r,F as s}from"./CommandsAndQueries-BPAKOD0B.js";import{M as l,C as a}from"./blocks-CbBrNn_2.js";import"./Tag-Btd7K0TJ.js";import"./index-Bn-DAxDV.js";import"./copy-DO8SZxEM.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BVHpRQOq.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C60Z0fiQ.js";import"./index-BBkT8flo.js";import"./index-DQCvCv0f.js";import"./Link-QmS19gJn.js";import"./index-Ct7FOHD-.js";import"./index-aE62-2rm.js";import"./index-BgkB1LC-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-L-EUKjf-.js";import"./addCustomCSSWithScoping-DWFhiVTm.js";import"./index-Cgb532fA.js";import"./information-W2yufBl5.js";import"./sys-enter-2-QAd8vpRe.js";import"./alert-Bh8lKzJU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DcjM0_PX.js";import"./delete-COMiZuoG.js";import"./settings-Dr7Dz5uy.js";import"./NoData-BTrfsGm2.js";import"./IllustratedMessage-CVkgZe_S.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DdPCGDkQ.js";import"./index-DegFbmY9.js";import"./index-DRGeR7Cs.js";import"./slim-arrow-down-CgwBPz7g.js";import"./Input-CkfVEmR9.js";import"./ResponsivePopoverCommon.css-4fjWBy7h.js";import"./ValueStateMessage.css-BuVzQMo_.js";import"./Suggestions.css-CTEqZ7Jq.js";import"./ListBoxItemGroupTemplate-DSP_W8aI.js";import"./ComboBoxItemGroup-BT8bK6Wu.js";import"./ListItemBaseTemplate-cjvzi6zR.js";import"./Token-wBbWayB1.js";import"./ScrollEnablement-B6pFrG42.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BTQunUKa.js";import"./ToggleButton-D2MXehba.js";import"./SuggestionItem-Dj_zg9IL.js";import"./index-KKknYiyd.js";import"./Option-Cuq8HYx9.js";import"./index-dFGKlIjF.js";import"./SegmentedButton-f9AnvEva.js";import"./index-DScPGxep.js";import"./Select-DsO-cvnD.js";import"./InvisibleMessage-_ZcUiZFQ.js";import"./slim-arrow-down-Da8Aw9RY.js";import"./index-CvJI_k_L.js";import"./index-DCTt2WWj.js";import"./index-F4cfNB22.js";import"./IconDesign-DXd8PPVF.js";import"./filter-NSZF4DBT.js";import"./group-2-BG7X54j2.js";import"./sort-descending-DPBE9T3s.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dk4rB77W.js";import"./utils-BLvTxsGy.js";import"./index-D-r2RDzW.js";import"./index-DmcsvV0M.js";import"./index-C1JwcYBj.js";import"./navigation-down-arrow-CWO8eaa_.js";import"./navigation-right-arrow-BJ1HFNO9.js";import"./navigation-right-arrow-DPSwNoIQ.js";import"./useCurrentTheme-BOBJiUUr.js";import"./IndicationColor-DVw-fSM_.js";import"./index-w3A3CH3e.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-D6kqfXmQ.js";import"./paper-plane-YrBXnPrz.js";import"./index-DkV1yrrg.js";import"./less-DrAkGCkV.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
