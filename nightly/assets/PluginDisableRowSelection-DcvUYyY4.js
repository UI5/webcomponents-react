import{j as e}from"./iframe-CHtLWowq.js";import{useMDXComponents as n}from"./index-feVj8Ixc.js";import{I as r,F as s}from"./CommandsAndQueries-DR5czvWY.js";import{M as l,C as a}from"./blocks-nN5rw7aP.js";import"./Tag-C6iX9S_m.js";import"./index-ByEvImQf.js";import"./copy-DQeKak9d.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BAd-a0ov.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDqXh-7y.js";import"./index-CuuHGpOq.js";import"./index-BgmENQvG.js";import"./Link-No0hza1O.js";import"./index-CMG_lNnl.js";import"./index-XFju5FGb.js";import"./index-D94_Q-PW.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DZJl74Y9.js";import"./addCustomCSSWithScoping-CagFc4YE.js";import"./index-Bf7Ep3_S.js";import"./information-CgT5QDDH.js";import"./sys-enter-2-X-uLXTXK.js";import"./alert-BD_DwGQA.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-B8YBAHqp.js";import"./delete-Did7L4hm.js";import"./settings-Hqz6CNrz.js";import"./NoData-BthMFeeR.js";import"./IllustratedMessage-CNpK_c-9.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-DU5KpDvq.js";import"./index-CHh9zawM.js";import"./index-Ds9oFx6S.js";import"./slim-arrow-down-Bl9kmMTg.js";import"./Input-_Chin8aU.js";import"./ResponsivePopoverCommon.css-BmG1be8B.js";import"./ValueStateMessage.css-D-dMhYxp.js";import"./Suggestions.css-zGIh6gRS.js";import"./ListBoxItemGroupTemplate-BpLHc9An.js";import"./ComboBoxItemGroup-rF-e9FZE.js";import"./ListItemBaseTemplate-CL0KxrsV.js";import"./Token-1bdP-qy8.js";import"./ScrollEnablement-ye8Tkvh6.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CHXDAL6s.js";import"./ToggleButton-CUCNDDOO.js";import"./SuggestionItem-dlFolDmP.js";import"./index-BhWIeZ_z.js";import"./Option-CfmrmqxB.js";import"./index-BcVuoJlI.js";import"./SegmentedButton-BgNgsNQ9.js";import"./index-C7EtYMlg.js";import"./Select-DoEMEyE5.js";import"./InvisibleMessage-BrUgcFEx.js";import"./slim-arrow-down-BGN2WRYG.js";import"./index-Dw80LcOq.js";import"./index-Bm0U64at.js";import"./index-WMmfi-ne.js";import"./IconDesign-DXd8PPVF.js";import"./filter-nvGUijt2.js";import"./group-2-Bydnd2Pu.js";import"./sort-descending-DADrrbzv.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C6597P5h.js";import"./utils-0fopir6W.js";import"./index-DIe0rbb4.js";import"./index-BgLFYw54.js";import"./index-CHBYKSN4.js";import"./navigation-down-arrow-qwkJsIFx.js";import"./navigation-right-arrow-CE9lGglE.js";import"./navigation-right-arrow-DwKK_E_o.js";import"./useCurrentTheme-XYPwDYan.js";import"./IndicationColor-DVw-fSM_.js";import"./index-B0cKueXn.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-Cjk4hS4a.js";import"./paper-plane-CLZXIdYp.js";import"./index-DSdDmFJ0.js";import"./less-1S2LblnP.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
