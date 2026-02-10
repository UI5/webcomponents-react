import{j as e}from"./iframe-D3h_j2y4.js";import{useMDXComponents as n}from"./index-a9MBNRjP.js";import{I as r,F as s}from"./CommandsAndQueries-DkEtb3C9.js";import{M as l,C as a}from"./blocks-Cp97O8Me.js";import"./Tag-Be6y1yqM.js";import"./index-B9e5YBdN.js";import"./copy-Dke-3UUt.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-DwoXh-sx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BY-U4HhI.js";import"./index-BOt5HncK.js";import"./index-BhBE3smf.js";import"./Link-Dali4gAe.js";import"./index-BQ-14eq3.js";import"./index-DX_7kgjZ.js";import"./index-DnWdQH32.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-llHj0RCs.js";import"./addCustomCSSWithScoping-uA_fHk2N.js";import"./index-CH7UrjOG.js";import"./information-Du_n-m1U.js";import"./sys-enter-2-_5l1H-Gx.js";import"./alert-DiqJ6xxp.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-Cl8Bhysk.js";import"./delete-HNCzad-u.js";import"./settings-BAYqfNVW.js";import"./NoData-euyCiP2B.js";import"./IllustratedMessage--KlXndt0.js";import"./i18n-defaults-Ca0KLLzw.js";import"./parameters-bundle.css-Ck1Ftt8r.js";import"./NoFilterResults-Bknwbe5l.js";import"./index-D4sEhlKj.js";import"./index-B9iDppuB.js";import"./slim-arrow-down-nHCgXcCK.js";import"./Input-DReaCICF.js";import"./ResponsivePopoverCommon.css-Cv5gi_PV.js";import"./ValueStateMessage.css-BPAV6ZTf.js";import"./Suggestions.css-B7qb-M6b.js";import"./ListBoxItemGroupTemplate-Dnd6fR5C.js";import"./ComboBoxItemGroup-Cd0GNI7w.js";import"./ListItemBaseTemplate-Cxkubtyi.js";import"./Token-D9U4_t6g.js";import"./ScrollEnablement-CU1q9bqi.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CgJ8GSRa.js";import"./ToggleButton-D0O29cmD.js";import"./SuggestionItem-DTIfwwxe.js";import"./index-CiafHV3I.js";import"./Option-BfbVIOYk.js";import"./index-DbRYhxJV.js";import"./SegmentedButton-C2ivOZMg.js";import"./index-4F0E7fXh.js";import"./Select-BG5_UDji.js";import"./InvisibleMessage-B2sYPvR_.js";import"./slim-arrow-down-CcAkiAX3.js";import"./index-BQpjBriN.js";import"./index-cW5UaVoZ.js";import"./index-CRuUVbuT.js";import"./index-DTeZzsS7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-C9uiLsB2.js";import"./group-2-CeS8Iw99.js";import"./sort-descending-NTGJh4hK.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BOa2Jfi4.js";import"./utils-DA7J-iEW.js";import"./index-D1EkbpQL.js";import"./index-B4iDf5hz.js";import"./index-BAQUkvhC.js";import"./navigation-down-arrow-BgTxiuzp.js";import"./navigation-right-arrow-BFKs6dr_.js";import"./navigation-right-arrow-DBTblMcB.js";import"./useCurrentTheme-DdzLTwyU.js";import"./index-Bg_WlAKN.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BlLZYc2i.js";import"./paper-plane-M1DAtAiw.js";import"./index-BPIXiNj1.js";import"./less-BeWtcPfG.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
