import{j as e}from"./iframe-cBdQNv77.js";import{useMDXComponents as n}from"./index-cOSrw8iI.js";import{I as r,F as s}from"./CommandsAndQueries-DjEzsLYR.js";import{M as l,C as a}from"./blocks-DJzZLxIJ.js";import"./Tag-C7wlfelX.js";import"./index-3Ka_JXyV.js";import"./copy-IvR5q6ZX.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B03Ac-Pt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BUV_LApg.js";import"./index-D8zOOSR2.js";import"./index-_yOX_kaH.js";import"./Link-CQDhsa8i.js";import"./index-DBSQPl1H.js";import"./index-BRmdbvU0.js";import"./index-JUan3IFj.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BpA8OOPe.js";import"./addCustomCSSWithScoping-DRPx1DdS.js";import"./index-A4dU9HLI.js";import"./information-DNcsXuRB.js";import"./sys-enter-2-Bl2cFkII.js";import"./alert-CmJVw_4E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CU_WQTkg.js";import"./delete-CMb-Nvkm.js";import"./settings-DWEgpEUz.js";import"./NoData-Qem4b_MW.js";import"./IllustratedMessage-Cyt9gDIc.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-BysguWIF.js";import"./index-CblII6GP.js";import"./index-DSUYipo-.js";import"./slim-arrow-down-BPt5DgGA.js";import"./Input-CcjXMm62.js";import"./ResponsivePopoverCommon.css-RgOMGv0T.js";import"./ValueStateMessage.css-CowmmmLr.js";import"./Suggestions.css-yUQ9aL_d.js";import"./ListBoxItemGroupTemplate-BvX5NWPm.js";import"./ComboBoxItemGroup-CDbozHq9.js";import"./ListItemBaseTemplate-DrlAet-U.js";import"./Token-KJpiYxq1.js";import"./ScrollEnablement-DK4N6mSn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bac0lpbe.js";import"./ToggleButton-DekIcBfY.js";import"./SuggestionItem-Dbu-VOoh.js";import"./index-CroY5feV.js";import"./Option-Di0zJemp.js";import"./index-BdZWaw9K.js";import"./SegmentedButton-BVkeOtZe.js";import"./index-CMPXrz_r.js";import"./Select-glz-euWX.js";import"./InvisibleMessage-BXAme1GY.js";import"./slim-arrow-down-D3dx3V9G.js";import"./index-PK4cuCqC.js";import"./index-nXXgIqFV.js";import"./index-BY097R_L.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CWqjbJR2.js";import"./group-2-CF-v31Zl.js";import"./sort-descending-CyayMEsE.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BHmbUZOq.js";import"./utils-CEIcbUd3.js";import"./index-BIFjpkti.js";import"./index-DO50Tpnb.js";import"./index-Ct7T3oxa.js";import"./navigation-down-arrow-_-kVQMhy.js";import"./navigation-right-arrow-D_4YqzP5.js";import"./navigation-right-arrow-BcXKj59E.js";import"./useCurrentTheme-DjP3JZ5R.js";import"./IndicationColor-DVw-fSM_.js";import"./index-TOh3uh25.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-B47DQxdv.js";import"./paper-plane-lzt2I4eu.js";import"./index-DqnLY2Ua.js";import"./less-D_OVhTJA.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
