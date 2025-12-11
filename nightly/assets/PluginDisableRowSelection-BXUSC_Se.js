import{j as e}from"./iframe-DM9V3iUD.js";import{useMDXComponents as n}from"./index-BQ6e0XMP.js";import{I as r,F as s}from"./CommandsAndQueries-DLgIXMfv.js";import{M as l,C as a}from"./blocks-DPjpReUC.js";import"./Tag-CDZyEpMs.js";import"./index-BrIfMidb.js";import"./copy-QNTFDBhh.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-Dwu_Cdgk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C_fRRkTw.js";import"./index-CG9Hqh1R.js";import"./index-3ho0Fy_x.js";import"./Link-CqfS--3L.js";import"./index-D-UVDN6M.js";import"./index-DQbG0AXp.js";import"./index-Crs5q-DX.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CWqaDePq.js";import"./addCustomCSSWithScoping-UQbkgHWD.js";import"./index-HLIjrNCW.js";import"./information-CYZk7_Tc.js";import"./sys-enter-2-CIB1w1Kt.js";import"./alert-bTHWJErv.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-qcMscmV6.js";import"./delete-CXgeirW2.js";import"./settings-Do73Em_3.js";import"./NoData-CHhcck3e.js";import"./IllustratedMessage-BUUajOA1.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-Bj8Z5qjJ.js";import"./index-D1i2VFSP.js";import"./index-B__UNfpz.js";import"./slim-arrow-down-BPvPVi4x.js";import"./Input-Cf96M2D8.js";import"./ResponsivePopoverCommon.css-Ct9-fwKq.js";import"./ValueStateMessage.css-BZpk9Qij.js";import"./Suggestions.css-CJjXKwO3.js";import"./ListBoxItemGroupTemplate-avlDP7mZ.js";import"./ComboBoxItemGroup-Dvk8bGjT.js";import"./ListItemBaseTemplate-D0OkPuPM.js";import"./Token-DuTpzyoF.js";import"./ScrollEnablement-CIbJNOf2.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-DoSQq3Vg.js";import"./ToggleButton-CHbSZwvK.js";import"./SuggestionItem-C9Z5Raq-.js";import"./index-dQrxQK2M.js";import"./Option-C8TUPVJx.js";import"./index-DeLMEH5a.js";import"./SegmentedButton-CFuqDO7A.js";import"./index-lWxOWiyk.js";import"./Select-CVIIIwsb.js";import"./InvisibleMessage-CuXKyopF.js";import"./slim-arrow-down-Y2ooLraA.js";import"./index-CyGN2YVR.js";import"./index-BqNainkP.js";import"./index-DU8Mj3lG.js";import"./index-D-Nv2l8Z.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CY3BHzDB.js";import"./group-2-DSPzZeCA.js";import"./sort-descending-CKfKVtmi.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BURWi97k.js";import"./utils-YdOQYwv0.js";import"./index-DHSn19BG.js";import"./index-BpMJYg0Z.js";import"./index-BsNTCuPG.js";import"./navigation-down-arrow-i_-2Fr6I.js";import"./navigation-right-arrow-DSvn3PeJ.js";import"./navigation-right-arrow-DiiMP9RE.js";import"./useCurrentTheme-B5DxFcSp.js";import"./index-B8iQmJZm.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CElufDLj.js";import"./paper-plane-DbbOBc4o.js";import"./index-DcPBFTrG.js";import"./less-DI996Bpt.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
