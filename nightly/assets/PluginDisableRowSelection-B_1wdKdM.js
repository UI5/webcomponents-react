import{j as e}from"./iframe-C9GC-4U4.js";import{useMDXComponents as n}from"./index-vmj4hVH3.js";import{I as r,F as s}from"./CommandsAndQueries-DYyMzrOI.js";import{M as l,C as a}from"./blocks-B1Qu1Zwa.js";import"./Tag-C_vOYGvY.js";import"./index-NAfB8FFO.js";import"./copy-Bj7tGZK9.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BFRaUJ-8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-f0Iqf0o1.js";import"./index-B091rt76.js";import"./index-BNt_KmI_.js";import"./Link-DZICkDEv.js";import"./index--mOIC-D9.js";import"./index-BpGBt1Ec.js";import"./index-CN9xEViq.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CrDmJKcm.js";import"./addCustomCSSWithScoping-C3bBYzrj.js";import"./index-Bas8y3YG.js";import"./information-Cj8yu0bT.js";import"./sys-enter-2-pae_51W8.js";import"./alert-CNeVkGHK.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D2Q3Fifo.js";import"./delete-BtWYKuqo.js";import"./settings-BMmA6bGr.js";import"./NoData-0YPuDwhD.js";import"./IllustratedMessage-BX3YdpaS.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-C8eC6z5w.js";import"./index-CfnKIWov.js";import"./index-Dh3txNQs.js";import"./slim-arrow-down-lDJf72_X.js";import"./Input-D8yfvMY_.js";import"./ResponsivePopoverCommon.css-Dfo8GNgL.js";import"./ValueStateMessage.css-C33VG2yg.js";import"./Suggestions.css-BQ5GC3G8.js";import"./ListBoxItemGroupTemplate-DwAE5T9p.js";import"./ComboBoxItemGroup-DduYzuSR.js";import"./ListItemBaseTemplate-D4wB-rZo.js";import"./Token-B4FtR09e.js";import"./ScrollEnablement-CG9VZkld.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CKJzwN5g.js";import"./ToggleButton-B_tIJ_u-.js";import"./SuggestionItem-C1B0Vane.js";import"./index-hQifrLpO.js";import"./Option-BPgvlydB.js";import"./index-Bx7ENpLR.js";import"./SegmentedButton-CqVIbvx0.js";import"./index-DKxkLGS8.js";import"./Select-DROm6u1u.js";import"./InvisibleMessage-CG4h93_f.js";import"./slim-arrow-down-DD_-Xh7t.js";import"./index-Bufl7lej.js";import"./index-YItZhVTD.js";import"./index-B7IwVEg9.js";import"./index-C5oysK-n.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DRCt1h-O.js";import"./group-2-CYhDRlV5.js";import"./sort-descending-ChjOUn4q.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-7V7-Zld3.js";import"./utils-D9L5FVMx.js";import"./index-BoVydk-k.js";import"./index-D8vh07VJ.js";import"./index-J-1cALVN.js";import"./navigation-down-arrow-D_GfAsPD.js";import"./navigation-right-arrow-BfuvVGTR.js";import"./navigation-right-arrow-CqPwNeVv.js";import"./useCurrentTheme-Cmr-ISoS.js";import"./index-D1bI7l9v.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BPtpEu5k.js";import"./paper-plane-B3y_l42l.js";import"./index-z94YdhbG.js";import"./less-B3BSxVTt.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
