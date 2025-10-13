import{j as e}from"./iframe-B2H5__qL.js";import{useMDXComponents as n}from"./index-Bc3WoLXB.js";import{I as r,F as s}from"./CommandsAndQueries-CP6cnX5g.js";import{M as l,C as a}from"./blocks-CV5yz-FR.js";import"./Tag-7r6nRPOe.js";import"./index-Cm-x3hEF.js";import"./copy-BwEcpAyC.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DjHk6yl6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CPEAIHq6.js";import"./index-8OksVI4W.js";import"./index-BLSBFNnV.js";import"./Link-CBNkHCq_.js";import"./index-BNOYEhs3.js";import"./index-CwqZMpwP.js";import"./index-BCbtyila.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BVsneHI1.js";import"./addCustomCSSWithScoping-cFAolBzW.js";import"./index-CF6OSC7N.js";import"./information-C3uad2Xw.js";import"./sys-enter-2-cAFQMIU-.js";import"./alert-D25r9vgu.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D-2mPXoG.js";import"./delete-De_7uTjk.js";import"./settings-Bw4IgaRx.js";import"./NoData-DumJbK86.js";import"./IllustratedMessage-DaQeD-aa.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-DIsiVO76.js";import"./index-LI-LrhIu.js";import"./index-BcRV51-d.js";import"./slim-arrow-down-IfyUaL9Z.js";import"./Input-DAvWZvrZ.js";import"./ResponsivePopoverCommon.css-BADeKMEp.js";import"./ValueStateMessage.css-n2E6R8Y4.js";import"./Suggestions.css-gsdRtnKE.js";import"./ListBoxItemGroupTemplate--DokvtV2.js";import"./ComboBoxItemGroup-OyZUTZdu.js";import"./ListItemBaseTemplate-BQF5AI-D.js";import"./Token-BIK1iWVF.js";import"./ScrollEnablement-qavzlcVF.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-ABAA2Grv.js";import"./ToggleButton-CR6zJT8D.js";import"./SuggestionItem-Cabfvqu8.js";import"./index-DP9HR8Xc.js";import"./Option--4jXDoVV.js";import"./index-Bej9GB_4.js";import"./SegmentedButton-yzX-JxKB.js";import"./index-DbJBqtMY.js";import"./Select-B37FBEMS.js";import"./InvisibleMessage-a_Ql2uCy.js";import"./slim-arrow-down-BhGE8VlH.js";import"./index-DE7j7mOL.js";import"./index-B4JgLaLf.js";import"./index-CuufOZMl.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C5wXzB-i.js";import"./group-2-BYr0dgAY.js";import"./sort-descending-CeBdv557.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BAVao4iy.js";import"./utils-CrH2aT5K.js";import"./index-CeDoMS3B.js";import"./index-BbSCYA_B.js";import"./index-GREBbb7h.js";import"./navigation-down-arrow-Dfde4Yh7.js";import"./navigation-right-arrow-CLwAoq3r.js";import"./navigation-right-arrow-riNFmSLh.js";import"./useCurrentTheme-B81VpdIo.js";import"./IndicationColor-DVw-fSM_.js";import"./index--GkGXre7.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DhOh-sF-.js";import"./paper-plane-BBEUTVjc.js";import"./index-CV7kc1h1.js";import"./less-D0Q8ENaH.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
