import{j as e}from"./iframe-DVaoJynC.js";import{useMDXComponents as n}from"./index-D8trWAUj.js";import{I as r,F as s}from"./CommandsAndQueries-DmxPE0MZ.js";import{M as l,C as a}from"./blocks-CrqJ-Z31.js";import"./Tag--1vn2ouf.js";import"./index-CpBbNRGM.js";import"./copy-DE_2j5FQ.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DOBjcAeS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CrdrDGzw.js";import"./index-xNxGNywP.js";import"./index-1ngZk4Q4.js";import"./Link-Q_Ld2CqF.js";import"./index-qrdXuh6V.js";import"./index-DDgoCywP.js";import"./index-dYIL-oMO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-V3cCpaGB.js";import"./addCustomCSSWithScoping-CedcLW5T.js";import"./index-DW_Y2aM_.js";import"./information-BslaWIIc.js";import"./sys-enter-2-iJEMuBvO.js";import"./alert-DlPbm_nn.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-ByjmV8TX.js";import"./delete-C5YMqpOL.js";import"./settings-d6RTuHxS.js";import"./NoData-BrDVqhYl.js";import"./IllustratedMessage-DSeDOabw.js";import"./i18n-defaults-Begitp65.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-B1sGl9VQ.js";import"./index-DIUkg0Bi.js";import"./index-DlYrVi7e.js";import"./slim-arrow-down-DblcDTH-.js";import"./Input-DJnlitcX.js";import"./ResponsivePopoverCommon.css-a0LTy8oR.js";import"./ValueStateMessage.css-CxQEDxip.js";import"./Suggestions.css-gCSTg-U6.js";import"./ListBoxItemGroupTemplate-DjbBkz5B.js";import"./ComboBoxItemGroup-BgJNW9a2.js";import"./ListItemBaseTemplate-COydBmQa.js";import"./Token-BSwTugba.js";import"./ScrollEnablement-D-0-sBKz.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-dJtbJvai.js";import"./ToggleButton-DtAyHkvM.js";import"./SuggestionItem-VJ7PiMQr.js";import"./index-Dv6upnSV.js";import"./Option-CxhLxOlt.js";import"./index-DXNRk6WZ.js";import"./SegmentedButton-CwKnK_Zk.js";import"./index-DUJ3en-c.js";import"./Select-DWMoFafZ.js";import"./InvisibleMessage-6n9UFl41.js";import"./slim-arrow-down-Bug18Bzw.js";import"./index-CF3T_Rux.js";import"./index-BO8JvDII.js";import"./index-A1tOTDKa.js";import"./index-D0XhROSl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-v-o7NIgL.js";import"./group-2-DFNtb2FF.js";import"./sort-descending-D8RrH-Tr.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-Dyt-PFJH.js";import"./utils-Bi-_D6jF.js";import"./index-flUwuEIb.js";import"./index-BPU2VOiy.js";import"./index-CeHR8ypK.js";import"./navigation-down-arrow-CwSnvoD7.js";import"./navigation-right-arrow-DqGIwB48.js";import"./navigation-right-arrow-DGKZ_ZhO.js";import"./useCurrentTheme-DsBFWJ7L.js";import"./index-B3rGDK-q.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BYo7ps0s.js";import"./paper-plane-Dn8GiRfM.js";import"./index-DpV1kB7w.js";import"./less-J5QHLwwU.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
