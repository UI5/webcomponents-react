import{j as e}from"./iframe-gC-jGD3g.js";import{useMDXComponents as n}from"./index-CnyMSsHR.js";import{I as r,F as s}from"./CommandsAndQueries-ChGbNwju.js";import{M as l,C as a}from"./blocks-BnpMKK8i.js";import"./Tag-DMQgfedw.js";import"./index-vAW-FU28.js";import"./copy-BSllcJzf.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-jS1llAg6.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Cgw7_UVl.js";import"./index-Dyh78V3l.js";import"./index-ttP0_XR3.js";import"./Link-Cdfcmbjx.js";import"./index-DlQFiyPN.js";import"./index-BDDT0PTl.js";import"./index-DsCn_0k2.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DP7KFobN.js";import"./addCustomCSSWithScoping-Cg-GrC5q.js";import"./index-CHNkjAWB.js";import"./information-DRo1yGzG.js";import"./sys-enter-2-DufMiZ6b.js";import"./alert-U-kxkHRC.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-LQmtlLK5.js";import"./delete--nh-W3-Q.js";import"./settings-DUXq2pKC.js";import"./NoData-vVbLZZUt.js";import"./IllustratedMessage-aNBcoDsa.js";import"./i18n-defaults-k5o3Svb4.js";import"./parameters-bundle.css-7Zy0dxyD.js";import"./NoFilterResults-DRKx1zXM.js";import"./index-BHTZ4yDe.js";import"./index-AqAkx8om.js";import"./slim-arrow-down-DRMPXoxM.js";import"./Input-DCJKAbRS.js";import"./ResponsivePopoverCommon.css-B7TyWprV.js";import"./ValueStateMessage.css-CydKnI3y.js";import"./Suggestions.css-BrVVPmcm.js";import"./ListBoxItemGroupTemplate-CwzjGxkH.js";import"./ComboBoxItemGroup-DIhxkCFs.js";import"./ListItemBaseTemplate-Cvto1n-r.js";import"./Token-BrbWFJrM.js";import"./ScrollEnablement-FtAWAuH9.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BcVnTGUz.js";import"./ToggleButton-c15t9qo5.js";import"./SuggestionItem-Beu4eLam.js";import"./index-3g9KQFfJ.js";import"./Option-DZ1cZDPf.js";import"./index-DeaTVqXq.js";import"./SegmentedButton-BhdBmLvs.js";import"./index-Dfq-eLt0.js";import"./Select-hKzPoZWj.js";import"./InvisibleMessage-BJlc9Zmk.js";import"./slim-arrow-down-C9Z_Q9pC.js";import"./index-Dqb5plgn.js";import"./index-NBV4rwkS.js";import"./index-DoCANgze.js";import"./IconDesign-DXd8PPVF.js";import"./filter-f649f9Rh.js";import"./group-2-D7Gn0lkQ.js";import"./sort-descending-yfv3Cg_R.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-CWZ9V4Ak.js";import"./utils-BMIaq7YY.js";import"./index-CQx6TRPA.js";import"./index-DVa76Ufg.js";import"./index-mydUACZk.js";import"./navigation-down-arrow-BYIZcEhQ.js";import"./navigation-right-arrow-D6ZdUzP9.js";import"./navigation-right-arrow-B-FehG3J.js";import"./useCurrentTheme-Bf3voSYI.js";import"./IndicationColor-DVw-fSM_.js";import"./index-DYmzfp3l.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-CPypzMSE.js";import"./paper-plane-CI4mRr-x.js";import"./index-KUzNPbfU.js";import"./less-Do7ux1rK.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
