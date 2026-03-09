import{j as e}from"./iframe-CzTCZe7v.js";import{useMDXComponents as n}from"./index-CDGFt6A1.js";import{I as r}from"./CommandsAndQueries-DvEFwabB.js";import{M as s,C as l}from"./blocks-DeBlAQEU.js";import"./Tag-Czdm_FZb.js";import"./index-C0tHrsgM.js";import"./copy-BOjVvS6l.js";import{F as a}from"./Footer-DxyUJb9o.js";import"./PageNotFound-BAD2GAcl.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-pODzDmXr.js";import"./preload-helper-PPVm8Dsz.js";import"./Link-CZjSyYly.js";import"./index-DKruw7SF.js";import"./index-DzASyxpH.js";import"./index-C8dlP9nE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DPTQrRIc.js";import"./addCustomCSSWithScoping-Cq2MgCDz.js";import"./index-DIk2IhoZ.js";import"./index-wip9afZ2.js";import"./index-CXe4MOnZ.js";import"./information-Bqvi10T6.js";import"./sys-enter-2-DyCO0gh_.js";import"./alert-9P0VyDJW.js";import"./index-B7_ymrud.js";import"./Illustrations-D7TiwfCu.js";import"./i18n-defaults-CFWtSmu6.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-XYq-h-xr.js";import"./delete-CJZ8jZ6-.js";import"./settings-CnlAmuLP.js";import"./NoData-Dn8JPKdK.js";import"./NoFilterResults-Ch4fK2Wx.js";import"./index-EZ4lrPcS.js";import"./IllustratedMessage-D3dYBaOA.js";import"./parameters-bundle.css-DMPIvP1N.js";import"./index-BcDsDQKs.js";import"./Input-uQUrQiez.js";import"./ResponsivePopoverCommon.css-DFzVVW-E.js";import"./ValueStateMessage.css-Dmls9BNj.js";import"./Suggestions.css-C-LfaUWA.js";import"./ListBoxItemGroupTemplate-CjbpLuh1.js";import"./ComboBoxItemGroup-DC7I2Gnu.js";import"./ListItemBaseTemplate-CtxRxA0S.js";import"./Token-DyMWmvtx.js";import"./ScrollEnablement-CI2_tTC7.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CirnuoCn.js";import"./ToggleButton-AwQV3-nU.js";import"./multiselect-all-DRIYr1gF.js";import"./SuggestionItem-DTt93yVG.js";import"./index-Dt1pNi0E.js";import"./Option-Dyof31Hh.js";import"./index-uzkhG3jh.js";import"./SegmentedButton-CKBTvj6y.js";import"./index-hEwlQYEv.js";import"./Select-i2pvVUiG.js";import"./InvisibleMessage-hOloPGzW.js";import"./index-Ct09JLpa.js";import"./index-CD5oLMvj.js";import"./index-D9t0fsRq.js";import"./index-CnvUSw0N.js";import"./IconDesign-DXd8PPVF.js";import"./filter-vyg3niqB.js";import"./group-2-Cnon157i.js";import"./sort-descending-BcIk7rDN.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-DkbCRIZN.js";import"./utils-BAjUyFPH.js";import"./index-Dbih7k0J.js";import"./index-C8pH3MqW.js";import"./index-PnqtoMqU.js";import"./navigation-down-arrow-DGwNBNUU.js";import"./navigation-right-arrow-Dz1uqIkQ.js";import"./navigation-right-arrow-Bkjp4EVA.js";import"./useCurrentTheme-QlTE88eU.js";import"./index-BsOmmnd6.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-DxJ1Nm0H.js";import"./paper-plane-C3ZNhKsM.js";import"./index-FT_Ukt9o.js";import"./less-Bbajs4eq.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
`,e.jsx(a,{})]})}function Ee(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(i,{...t})}):i(t)}export{Ee as default};
