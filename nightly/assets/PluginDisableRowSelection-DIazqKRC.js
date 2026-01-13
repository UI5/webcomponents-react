import{j as e}from"./iframe-DfTuu2Qs.js";import{useMDXComponents as n}from"./index-tu9Knfll.js";import{I as r,F as s}from"./CommandsAndQueries-CbObYkDi.js";import{M as l,C as a}from"./blocks-DwvFSYgT.js";import"./Tag-a-ykqmZl.js";import"./index-D59W5J0R.js";import"./copy-CAppfZ8d.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-CB5kiAXk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CEqB_Mrf.js";import"./index-4cmdIwXv.js";import"./index-upgMd0Ps.js";import"./Link-DQEzecZX.js";import"./index-DV0Q9niH.js";import"./index-CHJ4eeD3.js";import"./index-B1cc6DOE.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BlYlCK6x.js";import"./addCustomCSSWithScoping-l0p7E_oS.js";import"./index-D-5EknuX.js";import"./information-DFuUDpiC.js";import"./sys-enter-2-B3GhyP7w.js";import"./alert-CmUExS0E.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DoKMtFET.js";import"./delete-DYVw-TY0.js";import"./settings-D9nwGkWC.js";import"./NoData-DdHsrTKm.js";import"./IllustratedMessage-D0_ymalv.js";import"./i18n-defaults-i0ThFMss.js";import"./parameters-bundle.css-BZkrnAIc.js";import"./NoFilterResults-Be1vXVQP.js";import"./index-Cw8YfcTi.js";import"./index-CV7e3qnP.js";import"./slim-arrow-down-Bhl2nWte.js";import"./Input-B76lxtdv.js";import"./ResponsivePopoverCommon.css-BP9K7x6e.js";import"./ValueStateMessage.css-TCHVXLEw.js";import"./Suggestions.css-Pfvf1GJg.js";import"./ListBoxItemGroupTemplate-CDN4ALTG.js";import"./ComboBoxItemGroup-BH5B9cpG.js";import"./ListItemBaseTemplate-D1uFrlaA.js";import"./Token-D4TeWFku.js";import"./ScrollEnablement-CRIFALzU.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-CshbuJzo.js";import"./ToggleButton-CwHG-y71.js";import"./SuggestionItem-DGN5b14S.js";import"./index-RBLRU_sl.js";import"./Option-BbQCz44h.js";import"./index-BOCJCl5X.js";import"./SegmentedButton-oliJxwDI.js";import"./index-ECWd-FKG.js";import"./Select-BLczAWPe.js";import"./InvisibleMessage-CNnUIwgG.js";import"./slim-arrow-down-yzUP4cof.js";import"./index-CAlOL0VM.js";import"./index-CQE4zKbm.js";import"./index-CZ2dIko2.js";import"./index-DzevBiS7.js";import"./IconDesign-DXd8PPVF.js";import"./filter-JkMKr1H-.js";import"./group-2-CaiuqVlS.js";import"./sort-descending-BRpdcvqz.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-BSnTmES7.js";import"./utils-ZLpPM_1a.js";import"./index-DQM6KvvS.js";import"./index-CRmrR_Od.js";import"./index-CTOZYk49.js";import"./navigation-down-arrow-BTOOMHmS.js";import"./navigation-right-arrow-DEKgAHUd.js";import"./navigation-right-arrow-DZaHUhdt.js";import"./useCurrentTheme-DGG68oxl.js";import"./index-gcgg4h2j.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BXblpA9j.js";import"./paper-plane-DDMey8sA.js";import"./index-D8AaX0Z0.js";import"./less-D2q1q7Ef.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
