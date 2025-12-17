import{j as e}from"./iframe-bzWujj58.js";import{useMDXComponents as n}from"./index-BCWfYBG3.js";import{I as r,F as s}from"./CommandsAndQueries-CSnnb9h_.js";import{M as l,C as a}from"./blocks-X5VJ78n5.js";import"./Tag-CVKVqceK.js";import"./index-CSD4D-IO.js";import"./copy-GDuXt_K5.js";import{PluginDisableRowSelection as m}from"./AnalyticalTableHooks.stories-BfTucdcR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-1tcJfS2t.js";import"./index-DVLKNd8I.js";import"./index-CBomhFI_.js";import"./Link-DZnymjml.js";import"./index-BfOrv2Q6.js";import"./index-CCshg6zD.js";import"./index-DD0jDMax.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BiRbi5N7.js";import"./addCustomCSSWithScoping-CWEhHtD-.js";import"./index-CUs-JjpA.js";import"./information-C9FM1h13.js";import"./sys-enter-2-BEIn8VDt.js";import"./alert-3fLrr5gT.js";import"./Friends500-CRbR9XAn.js";import"./AnalyticalTable.stories-DAnRP-h9.js";import"./delete-BQOkFj_7.js";import"./settings-xB4h6gy4.js";import"./NoData-DhYFwryF.js";import"./IllustratedMessage-Bj3RsISn.js";import"./i18n-defaults-uALom2Bu.js";import"./parameters-bundle.css-BFVVmCmN.js";import"./NoFilterResults-GOhmEK2P.js";import"./index-Bn16gfaT.js";import"./index-M_9IBZFV.js";import"./slim-arrow-down-DOFohywN.js";import"./Input-DsykwZcZ.js";import"./ResponsivePopoverCommon.css-Byd21R2h.js";import"./ValueStateMessage.css-BiINGXZV.js";import"./Suggestions.css-CWqYjdPw.js";import"./ListBoxItemGroupTemplate-_-jQCq9E.js";import"./ComboBoxItemGroup-Bl3kAabF.js";import"./ListItemBaseTemplate-DgszZIVa.js";import"./Token-Bo9P9XfT.js";import"./ScrollEnablement-DfIaDKp3.js";import"./animate-JylhYHXj.js";import"./ListItemStandard-BUi3BAXQ.js";import"./ToggleButton-aItTBqg8.js";import"./SuggestionItem-BLHyZke7.js";import"./index-ocf09ezY.js";import"./Option-DIIl0zvY.js";import"./index-BltXzpxB.js";import"./SegmentedButton-CWgqCnl8.js";import"./index-BzH7jua9.js";import"./Select-DNFr47Ml.js";import"./InvisibleMessage-iKbGUbcD.js";import"./slim-arrow-down-D8yDs4Me.js";import"./index-BuV7Z7c1.js";import"./index-F3CZ5PU2.js";import"./index-BZhgR-Dt.js";import"./index-CF7Db4CN.js";import"./IconDesign-DXd8PPVF.js";import"./filter-DlaD8IIA.js";import"./group-2-CpHThkVo.js";import"./sort-descending-oyA5Y4oF.js";import"./ThemingParameters-pyhX3s39.js";import"./stopPropagation-CsBxLuUS.js";import"./index-hoVIfdZR.js";import"./utils-C_PlS108.js";import"./index-CYeZBUNC.js";import"./index-CQ8mgB0i.js";import"./index-DOuzQIbm.js";import"./navigation-down-arrow-3ULw9zrh.js";import"./navigation-right-arrow-CWBx1_6S.js";import"./navigation-right-arrow-C1871DiJ.js";import"./useCurrentTheme-BP7bNUlF.js";import"./index-Bp-G7IVz.js";import"./debounce-D7W5PopO.js";import"./useIsRTL-BsMnXzoo.js";import"./paper-plane-DWH-h_Xo.js";import"./index-ILVay_S5.js";import"./less-BhqQM8jv.js";function i(t){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Data Display / AnalyticalTable / Plugin Hooks / useRowDisableSelection"}),`
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
