import{j as e}from"./iframe-BN0GWVQe.js";import{useMDXComponents as n}from"./index-BLbTpX55.js";import{I as r,F as s}from"./CommandsAndQueries-C4w7BIRn.js";import{M as l,C as a}from"./blocks-D3wn40tr.js";import"./Tag-CZAeCV6F.js";import"./index-Bxb5YZWP.js";import"./copy-B0NSZ-1k.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-7de-hSrh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BEhXLrZk.js";import"./index-Dt-X_HjL.js";import"./index-BtPW2b7B.js";import"./Link-Br_XV4sE.js";import"./index-BqPBCR84.js";import"./index-BQ2VPUfC.js";import"./index-CGlofGT5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Du_vcu6e.js";import"./addCustomCSSWithScoping-D2hXBZmk.js";import"./index-BaX--um2.js";import"./information-b87QwzTv.js";import"./sys-enter-2-C5oyesud.js";import"./alert-DOWzv_2H.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-D-BtNJyH.js";import"./delete-B-dRIfah.js";import"./settings-O_gAmrE7.js";import"./NoData-B6r5wtfr.js";import"./IllustratedMessage-CHylU20L.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-BaExaGb0.js";import"./NoFilterResults-BD6ty48g.js";import"./index-D6WGsm7x.js";import"./index-CS6KO8cx.js";import"./slim-arrow-down-xoHclsMi.js";import"./Input-BT1uTnSo.js";import"./ResponsivePopoverCommon.css-DtFcvyzi.js";import"./ValueStateMessage.css-DGbWuuCH.js";import"./Suggestions.css-BeDi0pBK.js";import"./ListBoxItemGroupTemplate-Dzhkqyak.js";import"./ComboBoxItemGroup-KbV6i136.js";import"./ListItemBaseTemplate-BfCP6G70.js";import"./Token-C1ZTtDz_.js";import"./ScrollEnablement-iDo916Z3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-D6-433jt.js";import"./ToggleButton-ybF8gCpz.js";import"./SuggestionItem-Bgm-HNu4.js";import"./index-DW2XUEdT.js";import"./Option-B9k-7Ahv.js";import"./index-D8K4Qq5D.js";import"./SegmentedButton-C7VWunBd.js";import"./index-DNhI0FWS.js";import"./Select-CJ0wONEr.js";import"./InvisibleMessage-CRMlkkCP.js";import"./slim-arrow-down-B5np2n8S.js";import"./index-C4H-ZzEe.js";import"./index-92cS-QUv.js";import"./index-D6tqan70.js";import"./IconDesign-DXd8PPVF.js";import"./filter-CEM9HxMz.js";import"./group-2-BMZwrYYd.js";import"./sort-descending-BlHz6r-B.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CsK0f-Ik.js";import"./utils-ChyEe21I.js";import"./index-Lp9IxDFm.js";import"./index-CojJHUo4.js";import"./index-DUZ2D5ri.js";import"./navigation-down-arrow-2gSQh0oE.js";import"./navigation-right-arrow-BLvXVY5g.js";import"./navigation-right-arrow-X8mU-9lc.js";import"./useCurrentTheme-BB3WFm2v.js";import"./IndicationColor-DVw-fSM_.js";import"./index-As2m_wDV.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CgYFYmB4.js";import"./paper-plane-vPmlwkwT.js";import"./index-B4Hn3DKa.js";import"./less-rqU1UIrN.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
