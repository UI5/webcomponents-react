import{j as e}from"./iframe-rmPOfAEk.js";import{useMDXComponents as n}from"./index-OsAdl3Cq.js";import{I as r}from"./CommandsAndQueries-DjjDgYFy.js";import{M as s,C as l}from"./blocks-v63_T-Iu.js";import"./Tag-OMAKRCyN.js";import"./index-D5lEazYO.js";import"./copy-DYpkXBzp.js";import{F as a}from"./Footer-CYSIA4uy.js";import"./PageNotFound-DRbJUQ3U.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CV_0_ohV.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CL9BwqUh.js";import"./index-g6c80OWk.js";import"./index-DUTk5K7T.js";import"./index-DTuZFVSS.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BJhSo9M3.js";import"./addCustomCSSWithScoping-CZ8_VPk_.js";import"./index-B-iV9gR7.js";import"./index-CE8iCloJ.js";import"./index-NT5PBuFY.js";import"./information-Cw3g4evs.js";import"./sys-enter-2-DOLwXwFm.js";import"./alert-Bcs9t0my.js";import"./index-Xi7qAWgh.js";import"./Illustrations-DRh478fB.js";import"./i18n-defaults-C7ICj5-E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D8uG6UN_.js";import"./delete-7T4T292I.js";import"./settings-66ZgnR0a.js";import"./NoData-DQcDBndZ.js";import"./NoFilterResults-CC9q__py.js";import"./index-Yh-O7GlE.js";import"./IllustratedMessage-CCm8S1Gx.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./index-D2uxoQam.js";import"./slim-arrow-down-Bl1bEFWF.js";import"./Input-glL1F1kj.js";import"./ResponsivePopoverCommon.css-GT00HLHH.js";import"./ValueStateMessage.css-RtBMBlvI.js";import"./Suggestions.css-CgnqqM6E.js";import"./ListBoxItemGroupTemplate-WYDqvByC.js";import"./ComboBoxItemGroup-BSWGugft.js";import"./ListItemBaseTemplate-p1mZhZvu.js";import"./Token-DWH544iL.js";import"./ScrollEnablement-B-kTKigp.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CRLY1leJ.js";import"./ToggleButton-BEcKdnv0.js";import"./SuggestionItem-CQNiXwiQ.js";import"./index-B3jy6IAX.js";import"./Option-Bad0_Io9.js";import"./index-DxhHy3Gd.js";import"./SegmentedButton-DUqSOsPX.js";import"./index-AMKqxIVn.js";import"./Select-DdViIcLL.js";import"./InvisibleMessage-ETmXadbm.js";import"./slim-arrow-down-oHn4D4RL.js";import"./index-BYovFlgd.js";import"./index-bMWebckg.js";import"./index-CQHyU4zR.js";import"./index-CudHcNn6.js";import"./IconDesign-DXd8PPVF.js";import"./filter-BbLmvUxf.js";import"./group-2-CyBkSFkc.js";import"./sort-descending-INYw-64n.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-C8BPSLJ0.js";import"./utils-fGvGoAbl.js";import"./index-xuLONss2.js";import"./index-BTYtJa8z.js";import"./index-Ciy6r5Cs.js";import"./navigation-down-arrow-Bdse7Bz_.js";import"./navigation-right-arrow-BJGNqj7n.js";import"./navigation-right-arrow-CccUgewr.js";import"./useCurrentTheme-DNPFYXmT.js";import"./index-CbGpOrAc.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-C7JC_Aca.js";import"./paper-plane-eTKmtRbK.js";import"./index-CttNC8Pp.js";import"./less-CW7kPXDQ.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(l,{sourceState:"none",of:m}),`
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
`,e.jsx(a,{})]})}function Ue(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ue as default};
