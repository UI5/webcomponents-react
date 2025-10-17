import{j as e}from"./iframe-C2wpKNYo.js";import{useMDXComponents as n}from"./index-C3bwhSaM.js";import{I as r,F as s}from"./CommandsAndQueries-BUx2QFuH.js";import{M as l,C as a}from"./blocks-CsqgEIu9.js";import"./Tag-BJVPlcpU.js";import"./index-6FDQ4ka_.js";import"./copy-Mn7zeVlB.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DhRYLq5b.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BPkycJ7d.js";import"./index-CTKi5gtL.js";import"./index-DK30OokX.js";import"./Link-BDqeBkDX.js";import"./index-Dsgid9kS.js";import"./index-uvW3ZjCI.js";import"./index-Cg_u4Ogr.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DN7qutFD.js";import"./addCustomCSSWithScoping-BIscafeh.js";import"./index-Cg3QTQNO.js";import"./information-BdwahN0R.js";import"./sys-enter-2-DhtxU3CZ.js";import"./alert-DqDZXgnZ.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DU-GfZPG.js";import"./delete-CJr3s0ad.js";import"./settings-Bj5Fdd9w.js";import"./NoData-DuKAvQZu.js";import"./IllustratedMessage-CYId384S.js";import"./i18n-defaults-DGnw9SAb.js";import"./parameters-bundle.css-DHbieIhm.js";import"./NoFilterResults-CR0NaFlQ.js";import"./index-Djhs7oku.js";import"./index-2JhMnC8v.js";import"./slim-arrow-down-pc_gg9WS.js";import"./Input-Bm2Fv_Nn.js";import"./ResponsivePopoverCommon.css-DTvFG0Ht.js";import"./ValueStateMessage.css-BT11hGhW.js";import"./Suggestions.css-Ce7PGErr.js";import"./ListBoxItemGroupTemplate-Cv3EutgH.js";import"./ComboBoxItemGroup-DfSWs9AK.js";import"./ListItemBaseTemplate-rMtU7HPI.js";import"./Token-CzVmXjd4.js";import"./ScrollEnablement-C0IR7RhZ.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-Bw7MGSnH.js";import"./ToggleButton-Dzc9YnfK.js";import"./SuggestionItem-B1XccRHq.js";import"./index-IHtKMLsN.js";import"./Option-BIfQIQmg.js";import"./index-OLZkp24Z.js";import"./SegmentedButton-CTcZgze8.js";import"./index-BR5kr3iz.js";import"./Select-CEGqHj9u.js";import"./InvisibleMessage-CTodWVwF.js";import"./slim-arrow-down-Ay5kkJLT.js";import"./index-CHmVwapl.js";import"./index-CREgWYGw.js";import"./index-BUSyf8XI.js";import"./IconDesign-DXd8PPVF.js";import"./filter-NfY7u5GH.js";import"./group-2-CE7qb9Mt.js";import"./sort-descending-DivdGMhf.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-AKXoUFrm.js";import"./utils-8qtwE_MS.js";import"./index-2j3noFBG.js";import"./index-DJ6XZsCK.js";import"./index-CU-PdOlU.js";import"./navigation-down-arrow-BXxVj34O.js";import"./navigation-right-arrow-DlOFQv4h.js";import"./navigation-right-arrow-BnNhZIG8.js";import"./useCurrentTheme-Bs3WCC2j.js";import"./IndicationColor-DVw-fSM_.js";import"./index-CfjOYTOF.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-awnJ-YFR.js";import"./paper-plane-CfXYFuln.js";import"./index-Dg27D0NM.js";import"./less-BRwpA6_1.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
