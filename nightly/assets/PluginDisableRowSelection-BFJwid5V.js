import{j as e}from"./iframe-DJeYw3_T.js";import{useMDXComponents as n}from"./index-CAoJF-Ee.js";import{I as r,F as s}from"./CommandsAndQueries-BpKCXtjf.js";import{M as l,C as a}from"./blocks-CX606tiu.js";import"./Tag-CCm379UD.js";import"./index-D_iy8XUE.js";import"./copy-DmlYE796.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B4PZ95my.js";import"./preload-helper-PPVm8Dsz.js";import"./index-tnzxKSW0.js";import"./index-US2STizv.js";import"./index-ZZUuVpkh.js";import"./Link-D6M-iLai.js";import"./index-xs7bXSrN.js";import"./index-BldmH6cg.js";import"./index-BfDuZshB.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bv4hvB9u.js";import"./addCustomCSSWithScoping-DdjgQkne.js";import"./index-ChAuXbDX.js";import"./information-CWuwvd7P.js";import"./sys-enter-2-CLYEOYwG.js";import"./alert-CTnjMkAD.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Q-Qu9aPK.js";import"./delete-GyZuHggU.js";import"./settings-CSNf6lLD.js";import"./NoData-GWb7D9P8.js";import"./IllustratedMessage-CqKcL014.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-zZOIcPI-.js";import"./index-CfSZL8D6.js";import"./index-CrX_lNBL.js";import"./slim-arrow-down-Qo8He1bF.js";import"./Input-aC5IARbR.js";import"./ResponsivePopoverCommon.css-CZVnt3kp.js";import"./ValueStateMessage.css-CB2SJNwM.js";import"./Suggestions.css-CcYLfhHI.js";import"./ListBoxItemGroupTemplate-DzwM921Z.js";import"./ComboBoxItemGroup-DqY3uMDf.js";import"./ListItemBaseTemplate-BLUw0RML.js";import"./Token-hIQX68Hd.js";import"./ScrollEnablement-Dx-9KAkj.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Cn9vQdt7.js";import"./ToggleButton-WHvzyU1L.js";import"./SuggestionItem-CMelAZK6.js";import"./index-Ba8SHafQ.js";import"./Option-CVovyKZE.js";import"./index-zW6HzqIh.js";import"./SegmentedButton-DSaVLZ2J.js";import"./index-DP_3EnA2.js";import"./Select-BP2hTvkS.js";import"./InvisibleMessage-deXIs-B1.js";import"./slim-arrow-down-CrqglWHm.js";import"./index-vK1nVN_c.js";import"./index-DNDxQV0p.js";import"./index-B8XaOmg3.js";import"./index-DgbNo39p.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CcBdfap_.js";import"./group-2-M9iAyJ2B.js";import"./sort-descending-DvSTXRI3.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CtFadE48.js";import"./utils-B8eWjpJ0.js";import"./index-DYmw3Rfl.js";import"./index-kUdamL05.js";import"./index-DCI2wHY-.js";import"./navigation-down-arrow-CoZWd3Be.js";import"./navigation-right-arrow-DQBdB4vT.js";import"./navigation-right-arrow-CLYge1Io.js";import"./useCurrentTheme-ByIUAEMi.js";import"./index-CWW0jJXt.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-wyLkWFxP.js";import"./paper-plane-CIyPt1UE.js";import"./index-Dm0jkMUI.js";import"./less-q2GCtAl4.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
