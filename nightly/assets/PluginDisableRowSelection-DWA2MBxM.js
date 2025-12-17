import{j as e}from"./iframe-T7Wqg8UQ.js";import{useMDXComponents as n}from"./index-B1_Kr1qi.js";import{I as r,F as s}from"./CommandsAndQueries-BErUSC1w.js";import{M as l,C as a}from"./blocks-AtAGVbf3.js";import"./Tag-gMzT9-kJ.js";import"./index-1-SdBrMb.js";import"./copy-D9NRoizO.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DAAke3ZA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Do-8N8-4.js";import"./index-CSyU4Rfq.js";import"./index-B0vEPx1d.js";import"./Link-CS0U2zW0.js";import"./index-CuClVFCS.js";import"./index-Cpwr9m7H.js";import"./index-C36GduEZ.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Ctd-T3Yg.js";import"./addCustomCSSWithScoping-SxSnbZxk.js";import"./index-OjQEK6Sv.js";import"./information-fYaYVBJG.js";import"./sys-enter-2-CqaPP6tK.js";import"./alert-DdeG0Okn.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-CSqDBAEy.js";import"./delete-CqiXpIEJ.js";import"./settings--cZn65wn.js";import"./NoData-BE6qeMCb.js";import"./IllustratedMessage-BQ0ZIUUp.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-CYDsbuj_.js";import"./index-TWAke1eS.js";import"./index-BpBMXpkU.js";import"./slim-arrow-down-D7zmqhuW.js";import"./Input-D7QMmGXc.js";import"./ResponsivePopoverCommon.css-BRMWd7_E.js";import"./ValueStateMessage.css-Cfl8bS23.js";import"./Suggestions.css-U--NnjnQ.js";import"./ListBoxItemGroupTemplate-Bh39jP1s.js";import"./ComboBoxItemGroup-DV-WPBD_.js";import"./ListItemBaseTemplate-BPb_roTh.js";import"./Token-Cc25iGzp.js";import"./ScrollEnablement-CeUSVHqn.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-4LZiCxap.js";import"./ToggleButton-CytToCRZ.js";import"./SuggestionItem-d8PXQFzf.js";import"./index-5f7D5wvz.js";import"./Option-CJ57-p9L.js";import"./index-Cu0y023n.js";import"./SegmentedButton-Dsv1B1Jn.js";import"./index-BvUZdQGi.js";import"./Select-CF3mjJ0q.js";import"./InvisibleMessage-DMA9x9s-.js";import"./slim-arrow-down-CByenjbS.js";import"./index-DFMQojpQ.js";import"./index-BBdOPVh7.js";import"./index-4aM9WHD0.js";import"./index-SY1E5rmV.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CD2P2e-A.js";import"./group-2-BPnOfmzi.js";import"./sort-descending-BMHrXFRh.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BXctqxI6.js";import"./utils-hMIBeM6k.js";import"./index-DVHuLLp4.js";import"./index-Drzpx-Ob.js";import"./index-Dz4XgqVg.js";import"./navigation-down-arrow-B_G4Lrxi.js";import"./navigation-right-arrow-BbB8iX7b.js";import"./navigation-right-arrow-DaBucJny.js";import"./useCurrentTheme-DpT-DVZV.js";import"./index-DD5DI72I.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-JoNKXFI1.js";import"./paper-plane-9aEL_IQq.js";import"./index-htvP9kxx.js";import"./less-4qpViz2I.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
