import{j as e}from"./iframe-DVF3HgbA.js";import{useMDXComponents as n}from"./index-BJ4ye1FV.js";import{I as r,F as s}from"./CommandsAndQueries-CjmWYk4A.js";import{M as l,C as a}from"./blocks-Clg7-MX4.js";import"./Tag-BOlrR2xo.js";import"./index-CZ6TSDWm.js";import"./copy-CUrqt0F6.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-B6VyKVO1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B68cSDRH.js";import"./index-C50SsvCT.js";import"./index-DNsjAdVj.js";import"./Link-Cu0t9g59.js";import"./index-C1QuQKuw.js";import"./index-RU5NPQiF.js";import"./index-Dpj0MxBe.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BNtJiI2A.js";import"./addCustomCSSWithScoping-YxO5kK4q.js";import"./index-BBb33Sco.js";import"./information-DRqH7HSA.js";import"./sys-enter-2-DpmhEpBm.js";import"./alert-C-z3K1uA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CNuNpwJw.js";import"./delete-FIqmbs-F.js";import"./settings-ChaYvwof.js";import"./NoData-DAbRUSvi.js";import"./IllustratedMessage-Pj2qYyM1.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-DWUQ4SCR.js";import"./index-C12QIudN.js";import"./index-BsuGpbOi.js";import"./slim-arrow-down-1px9VTz1.js";import"./Input-DhcX8gKW.js";import"./ResponsivePopoverCommon.css-B2o2246I.js";import"./ValueStateMessage.css-BcHvujGU.js";import"./Suggestions.css-Cp2lTwMm.js";import"./ListBoxItemGroupTemplate-Clh9M37l.js";import"./ComboBoxItemGroup-b_H895ft.js";import"./ListItemBaseTemplate-C8LHvDfc.js";import"./Token-xZkgnrp8.js";import"./ScrollEnablement-DSkvTOUi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-O-Eog0hj.js";import"./ToggleButton-GSuBcNaj.js";import"./SuggestionItem-DxCxM0yk.js";import"./index-tdNrQRr2.js";import"./Option-BMHvFChu.js";import"./index-BRpwxpNh.js";import"./SegmentedButton-BjPYlasD.js";import"./index-CMza5W0F.js";import"./Select-CiwMWeFC.js";import"./InvisibleMessage-CLNRDajy.js";import"./slim-arrow-down-BOcb4gKN.js";import"./index-U13CnHGN.js";import"./index-D_i0LdjL.js";import"./index-CB7VLmJD.js";import"./index-DXl3BA50.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DPVFS_rG.js";import"./group-2-Ds-80Bay.js";import"./sort-descending-DvN65zAq.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DFpTQubC.js";import"./utils-Dx_qzbNR.js";import"./index-CCv-VfNm.js";import"./index-BUFZhFxd.js";import"./index-BtJIcsH4.js";import"./navigation-down-arrow-CjSaxrf5.js";import"./navigation-right-arrow-BKG1O43Q.js";import"./navigation-right-arrow-Bh3wYE_f.js";import"./useCurrentTheme-V16yvvqz.js";import"./index-BM9_mjKd.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Bjbd4LnE.js";import"./paper-plane-OMmS-SvW.js";import"./index-D0P4-p7Y.js";import"./less-BIkfAwBi.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
