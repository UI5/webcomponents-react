import{j as e}from"./iframe-D3k-2Qmx.js";import{useMDXComponents as n}from"./index-BSBCExsS.js";import{I as r,F as s}from"./CommandsAndQueries-DsxWaHqI.js";import{M as l,C as a}from"./blocks-bv8Dsnai.js";import"./Tag-9PM7-eum.js";import"./index-By3VOOwb.js";import"./copy-Ba7LzWJS.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DoVxZ5W5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B4561E-8.js";import"./index-7likbAae.js";import"./index-CU7B0Jzs.js";import"./Link-CTDi8zx_.js";import"./index-CcT0HfRf.js";import"./index-ne93MLaG.js";import"./index-DsyKOjMu.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CVKdFd1t.js";import"./addCustomCSSWithScoping-BuaXJWbP.js";import"./index-aLtq1xU9.js";import"./information-Bs4ke0_q.js";import"./sys-enter-2-C1RuQ14F.js";import"./alert-CgXiLrEU.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-BC6U5u3W.js";import"./delete-DI_qDlFN.js";import"./settings-BvcEZPoD.js";import"./NoData-Xwr-RknH.js";import"./IllustratedMessage-z_u2-Wjs.js";import"./i18n-defaults-BS8OTJAB.js";import"./parameters-bundle.css-MDhRcvbE.js";import"./sapIllus-Dialog-NoData-FSL26r8i.js";import"./sapIllus-Scene-NoData-aisCUu4O.js";import"./sapIllus-Spot-NoData-eoL49zJv.js";import"./sapIllus-Dot-NoData-DBRN6YSI.js";import"./index-AWIJ1fgK.js";import"./index-BB7_GtGd.js";import"./slim-arrow-down-DdlDKMGS.js";import"./Input-D_MVNcCW.js";import"./ResponsivePopoverCommon.css-BeJmjNzs.js";import"./ValueStateMessage.css-C-m_QvzY.js";import"./Suggestions.css-B6Gqc3Wb.js";import"./ListBoxItemGroupTemplate-XWF1A1vE.js";import"./ComboBoxItemGroup-DAQ1yURi.js";import"./ListItemBaseTemplate-DTj5CQF7.js";import"./Token-BVZhclFZ.js";import"./ScrollEnablement-BHiM0fB_.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CIk7Var7.js";import"./ToggleButton-DRVTplqo.js";import"./SuggestionItem-C3X18_wI.js";import"./index-D_jUBjPN.js";import"./Option-5IxyV4uz.js";import"./index-Cn9shEoP.js";import"./SegmentedButton-hBWk1uUq.js";import"./index-Dk_2UEN6.js";import"./Select-CqXEAITh.js";import"./InvisibleMessage-DVDXe7QT.js";import"./slim-arrow-down-BNqq3rWg.js";import"./index-D-6NCyp_.js";import"./IconDesign-DXd8PPVF.js";import"./filter-D2gwwH7C.js";import"./group-2-Bzk8mn-l.js";import"./sort-descending-Cy8CjEGu.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BVgvonRF.js";import"./utils-BL7e06bc.js";import"./index-CKPOSyqX.js";import"./index-CSijjXyi.js";import"./index-szqBFdUN.js";import"./navigation-down-arrow-CqNaGyR0.js";import"./navigation-right-arrow-xbKna6K1.js";import"./navigation-right-arrow-CjkeGwpU.js";import"./useCurrentTheme-DFJPgjga.js";import"./IndicationColor-DVw-fSM_.js";import"./index-Dc1w_8Z2.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BCYIk2li.js";import"./paper-plane-DWYsfwqu.js";import"./index-nr0VQw8N.js";import"./less-Cql1i3bl.js";import"./index-Cddzo8hT.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(s,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
